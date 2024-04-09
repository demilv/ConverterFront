import { useState, useEffect } from "react";
import './SaveDato.css'

function SaveDato ({onSaveChange, datoFinal, datoOriginal, tipoA, tipoB}) {
    const [confirmSave, setConfirmSave] = useState(false)

    useEffect(() =>{        
        onSaveChange(datoFinal, datoOriginal, tipoA, tipoB)
    }, [confirmSave])


    return (
        <button className="heartButton" name="heart" id="heart" onClick={(ev) => setConfirmSave(!confirmSave)}>
            <span>&#x2665;</span>
        </button>
    )
}

export default SaveDato;