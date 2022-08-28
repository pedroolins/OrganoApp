import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";
import "./Formulario.css";

const Formulario = ({colaboradorCadastrado, timesLista}) => {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")


    // função que salva os dados que são enviados pelo formulario
    const aoSalvar = (event) => {
        event.preventDefault();
        colaboradorCadastrado({nome, cargo, imagem, time});
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }
    return (
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    	isRequired={true} 
                        Campo="Nome" 
                        PlaceHolder="Digite Seu Nome" 
                        value={nome} 
                        aoAlterado={value => setNome(value)}
                />
                <CampoTexto 
                    isRequired={true} 
                    Campo="Cargo" 
                    PlaceHolder="Digite Seu Cargo"
                    value={cargo} 
                    aoAlterado={value => setCargo(value)}
                />
                <CampoTexto 
                    isRequired={true} 
                    Campo="Imagem" 
                    PlaceHolder="Digite o endereço da imagem"
                    value={imagem} 
                    aoAlterado={value => setImagem(value)}
                />
                <ListaSuspensa 
                    label={"Time"} 
                    array={timesLista}
                    value={time}
                    aoAlterado={event => setTime(event)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Formulario