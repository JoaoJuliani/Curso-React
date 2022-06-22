
import { useState } from 'react'

function FormEvento(){

    function Cadastrou(e){
        e.preventDefault()
        console.log(`O usuário ${name} cadastrou com a senha ${senha}`)
        console.log(`Cadastrou o nome`)
    }

    const [name, setName ] = useState()
    const [senha, setSenha] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={Cadastrou}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input 
                    type="text" 
                    placeholder="Digite seu nome"
                    id="name" name ="name"
                    onChange={(e) => setName(e.target.value)}> 

                    </input>
                </div>
                <div>
                    <label htmlFor="senha">Senha: </label>
                    <input 
                    type="password" 
                    id="senha" name ="senha"
                    onChange={(e) => setSenha(e.target.value)}> 
                    </input>
                </div>
                <div>
                    <input type ="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default FormEvento