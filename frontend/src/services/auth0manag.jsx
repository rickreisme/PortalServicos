import { ManagementClient } from 'auth0';
import axios from 'axios';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const clientSecret = import.meta.env.VITE_AUTH0_SECRET;
const audience = `https://${domain}/api/v2/`;

const getToken = async () => {
    try {
        const response = await axios.post(`https://${domain}/oauth/token`, {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            audience: audience
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const accessToken = response.data.access_token;
        console.log('Token de acesso:', accessToken);
        return accessToken;
    } catch (error) {
        console.error('Erro ao obter token de acesso:', error);
        throw error;
    }
};

// Declare a função fora do bloco async
async function registerUser(email, password, username, name, auth0) {
    try {
        const user = await auth0.createUser({
            email: email,
            password: password,
            username: username,
            name: name,
        });
        console.log('Usuário registrado com sucesso:', user);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
    }
}

(async () => {
    try {
        const token = await getToken();
        const auth0 = new ManagementClient({
            domain: domain,
            clientId: clientId,
            clientSecret: clientSecret,
            scope: 'read:users write:users',
            token: {
                access_token: token
            }
        });

        // Chamada da função para registrar um novo usuário
        await registerUser('example@example.com', 'senha', 'username', 'Nome do Usuário', auth0);
    } catch (error) {
        console.error('Erro:', error);
    }
})();
