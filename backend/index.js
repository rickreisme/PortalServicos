const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

// Rota para obter os serviços
app.get('/services', (req, res) => {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        const services = JSON.parse(data).services;
        res.json(services);
    } catch (err) {
        console.error('Erro ao ler o arquivo db.json:', err);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
});

// Rota para adicionar um novo serviço
app.post('/services', (req, res) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo db.json:', err);
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }

        let services = JSON.parse(data).services;

        const newId = services.length > 0 ? services[services.length - 1].id + 1 : 1;

        const newService = { id: newId, ...req.body };
        services.push(newService);

        fs.writeFile(dbPath, JSON.stringify({ services }, null, 2), err => {
            if (err) {
                console.error('Erro ao escrever no arquivo db.json:', err);
                return res.status(500).json({ error: 'Erro interno no servidor' });
            }
            res.json(newService);
            console.log('Novo serviço adicionado:', newService);
        });
    });
});

app.post('/install', (req, res) => {
    const { nmModuloIn } = req.body;

    if (!nmModuloIn) {
        return res.status(400).json({ error: 'Nome do módulo é obrigatório' });
    }

    const frontendDir = path.join(__dirname, '../frontend');
    const installCommand = `npm install ${nmModuloIn}`;

    exec(installCommand, { cwd: frontendDir }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao instalar o módulo: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.json({ message: `Pacote ${nmModuloIn} instalado com sucesso!` });
    });
});

app.post('/uninstall', (req,res) =>{
    const{nmModuloUn} = req.body;

    if (!nmModuloUn) {
        return res.status(400).json({ error: 'Nome do módulo é obrigatório' });
    }

    const frontendDir = path.join(__dirname, '../frontend');
    const uninstallCommand = `npm uninstall ${nmModuloUn}`;

    exec(uninstallCommand, { cwd: frontendDir }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao desinstalar o módulo: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.json({ message: `Pacote ${nmModuloUn} desinstalado com sucesso!` });
    });


})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});