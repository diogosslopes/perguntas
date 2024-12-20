import './NewQuestion.css'

function NewQuestion() {
    
  
    return (
      <div className="question-container">
        <form className="question-area">
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" />

            <label>Pergunta</label>
            <textarea name="" id="" placeholder="Digite sua pergunta"></textarea>
            <div className="question-buttons">
                <button>Enviar</button>
                <button>Cancelar</button>
            </div>
        </form>
      
  
      </div>
    )
  }
  
  export default NewQuestion
  