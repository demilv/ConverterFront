import './ConversionDato.css'

const  ConversionDato = ({tipoB, datoFinal}) => {
    return (
        <div className="displayConversion">
            <input className="appResult" disabled value={datoFinal}></input>
            <h5 className="tipoConversion">{tipoB}</h5>
        </div>
    )
}

export default ConversionDato;