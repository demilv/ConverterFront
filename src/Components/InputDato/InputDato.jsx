import { useState } from "react";
import './InputDato.css'

const InputDato = ({onInputDatoChange, tipoA}) => {

    const [value, setValue] = useState("");
    const handlechange = (event) => {
        const updatedValue = event.target.value
        setValue(updatedValue)
        onInputDatoChange(updatedValue)
    }

    return (
        <div className="displayDato">
            <input className="inputDato" type="number" name="inputdato" id="inputdato" value={value} onChange={handlechange}></input>
            <h5 className="tipoDato">{tipoA}</h5>
        </div>
    )
}
export default InputDato;