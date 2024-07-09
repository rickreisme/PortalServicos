
import './assets/styles/agendamento.scss'

function Agendamento() {

  return (
    <>

      <div className='container-agendamento'>
        <div className="title-agendamento">
          <h2>Agendamento de reunião com coordenador</h2>
        </div>

        <div className="info-agendamento">
          <p>
            Prezados(as) alunos(as) e docentes,
            Para solicitar reunião com um dos coordenadores de curso da unidade é necessário preencher
            este requerimento e aguardar o agendamento.
          </p>
        </div>

        <div className="dados-agendamento">
          <h2>Preencha os dados abaixo para prosseguir com a solicitação:</h2>

          <form className='formulario-agendamento'>
            <div className="curso-agendamento">
              <h3>Selecione o seu curso -
                Curso Superior de Tecnologia em:</h3>

              <input type="radio" name="opcao-curso" id="opcao-curso1" value="opcao-curso1" />
              <label htmlFor="opcao-curso1">Análise e Desenvolviemnto de Sistemas</label><br />

              <input type="radio" name="opcao-curso" id="opcao-curso2" value="opcao-curso2" />
              <label htmlFor="opcao-curso2">Gestão de Negócios</label><br />

              <input type="radio" name="opcao-curso" id="opcao-curso3" value="opcao-curso3" />
              <label htmlFor="opcao-curso3">Gestão de Recursos</label><br />

              <input type="radio" name="opcao-curso" id="opcao-curso4" value="opcao-curso4" />
              <label htmlFor="opcao-curso4">Gestão de Redes de Computadores</label>
            </div>

            <div className="assunto-agendamento">
              <h3>Descreva com o máximo de detlahes sua solicitação:</h3>
              <textarea rows={4} cols={50} name="" id="" className='input-textarea'>
              </textarea>
            </div>

            <div className="anexo-agendamento">
              <h3>Insira anexos que auxiliem na sua solicitação:</h3>
              <input type="file" />
            </div>

            <div className="turno-agendamento">
              <h3>Qual sua preferência de turno para o atendimento?</h3>

              <input type="radio" name="opcao-turno" id="opcao-turno1" value="opcao-turno1" />
              <label htmlFor="opcao-turno1">Manhã</label><br />

              <input type="radio" name="opcao-turno" id="opcao-turno2" value="opcao-turno2" />
              <label htmlFor="opcao-turno2">Tarde</label><br />

              <input type="radio" name="opcao-turno" id="opcao-turno3" value="opcao-turno3" />
              <label htmlFor="opcao-turno3">Noite</label><br />
            </div>

            <div className="preferencia-agendamento">
              <h3>Preferência de atendimento:</h3>

              <input type="radio" name="opcao_pref" id="opcao_pref1" value="opcao_pref1" />
              <label htmlFor="opcao_pref1">Presencial (na sala da coordenadoria de curso)</label><br />

              <input type="radio" name="opcao_pref" id="opcao_pref2" value="opcao_pref2" />
              <label htmlFor="opcao_pref2">Online (via Microsoft Teams)</label><br />
            </div>

            <button type="submit">Enviar</button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Agendamento;