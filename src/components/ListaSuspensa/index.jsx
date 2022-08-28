import { SelectListaSuspensa, LabelListaSuspensa } from "./style";


const ListaSuspensa = ({label, array, defaultValue, aoAlterado}) => {
    return (
        <>
            <LabelListaSuspensa>{label}</LabelListaSuspensa>
            <SelectListaSuspensa value={defaultValue} onChange={evento => aoAlterado(evento.target.value)}>
                {array.map((item) => {return <option key={item}>{item}</option>})}
            </SelectListaSuspensa>
        </>
    )
}


export default ListaSuspensa;