import {Cabecalho, CardDiv, RodaPe} from './style'

const Card = ({nome, cargo, imagem, corDeFundo}) => {
    return(
        <CardDiv>
            <Cabecalho style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </Cabecalho>
            <RodaPe>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </RodaPe>
        </CardDiv>
    )
}

export default Card;