import { useState, useEffect } from "react";
import './SelectorTipo.css'

function SelectorTipo ({input, onResultadoChange}) {
    const [tipo, setTipo] = useState("KMi")
    const [resultado, setResultado] = useState()
    const [dato1, setDato1] = useState("K")
    const [dato2, setDato2] = useState("Mi")
    
    useEffect(()=> {
        let newinput = 0;
        let medida1 = ""
        let medida2 = ""
        switch(tipo){
            case "KMi":  
            newinput = input * 0.621371
            medida1 = "K"
            medida2 = "Mi"
            break;
            case "MiK" : newinput = input / 0.621371
            medida1 = "Mi"
            medida2 = "K"
            break;
            case "FMe" : newinput = input / 3.28084
            medida1 = "F"
            medida2 = "Me"
            break;
            case "MeF" : newinput = input * 3.28084
            medida1 = "Me"
            medida2 = "F"
            break;
            case "CI" : newinput = input * 0.393701
            medida1 = "C"
            medida2 = "I"
            break;
            case "IC" : newinput = input / 0.393701
            medida1 = "I"
            medida2 = "C"
            break;
            default:
                break;
        }        
        let resultadoFinal = newinput.toFixed(2)
        setResultado(resultadoFinal)
        setDato1(medida1)
        setDato2(medida2)
        onResultadoChange(input, resultado, dato1, dato2)
    },[tipo, input, resultado])

    const Revertir = () => {
        switch (tipo) {
            case "KMi":
                setTipo("MiK");
                break;
            case "MiK":
                setTipo("KMi");
                break;
            case "FMe":
                setTipo("MeF");
                break;
            case "MeF":
                setTipo("FMe");
                break;
            case "CI":
                setTipo("IC");
                break;
            case "IC":
                setTipo("CI");
                break;
            default:
                break;
        }    
    };
    

        return (
            <div className="divSelector">
                <select className="Selector" name="" id="" onChange={(ev) => setTipo(ev.target.value)}>
                    <option value="KMi"> Km - Miles</option>
                    <option value="MiK"> Miles - Km</option>
                    <option value="FMe"> Feet - Meters</option>
                    <option value="MeF"> Meters - Feet</option>
                    <option value="CI"> Cm - Inches</option>
                    <option value="IC"> Inches - Cm</option>
                </select>

                <button className="Switcheroo" name="switcheroo" id="switcheroo" onClick={Revertir}></button>

            </div>
        );
    }

export default SelectorTipo;