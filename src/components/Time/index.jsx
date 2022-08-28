import {DivCards, H3Time, SectionTime} from "./style";
import Card from "../card"

const Time = ({nomeTime, corPrimaria, corSecundaria, colaboradores}) => {
    return(
        (colaboradores.length > 0) && 
        <SectionTime style={{backgroundColor: corSecundaria}}>
            <H3Time style={{borderColor: corPrimaria}}>{nomeTime}</H3Time>
            <DivCards>
                {colaboradores.map( (colaborador, index) => <Card key={index} corDeFundo={corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>) }
            </DivCards>
        </SectionTime>
    )
}

export default Time
