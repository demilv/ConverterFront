import './App.css';
import InputDato from './InputDato/InputDato';
import SelectorTipo from './SelectorTipo/SelectorTipo';
import ConversionDato from './ConversionDato/ConversionDato'
import SaveDato from './SaveDato/SaveDato'
import MostrarFavorito from './MostrarFavorito/MostrarFavorito'
import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [resultado1, setResultado1] = useState(0)
  const [resultadoOriginal, setResultadoOriginal] = useState(0)
  const [resultadoFinal, setResultadoFinal] = useState(0)
  const [tipoA, setTipoA] = useState([])
  const [tipoB, setTipoB] = useState([])
  const [datosBase, setDatosBase] = useState([])
  const [newConv, setNewConv] = useState([false])

  const getDataApi = async () => {
    const res = await fetch(
      `https://converter-back.vercel.app/converterObtain`
    );
    const resJson = await res.json();
    setDatosBase(resJson);
  }

  useEffect(() => {
    const obtenerDatos = async () => {
      await getDataApi();
    };  
    obtenerDatos();
  }, [newConv]);

  const handleInputDatoChange = (valor) =>{
    setResultado1(valor)
  }

  const handleValorFinal = (original, valorfinal, modo1, modo2) =>{
    setResultadoOriginal(original)
    setResultadoFinal(valorfinal)
    setTipoA(modo1)
    setTipoB(modo2)
  }

  const saveData = async (valorFinal, valorO, tipoPrimero, tipoSegundo) =>{
    try {
      
      console.log(valorFinal + valorO + tipoPrimero + tipoSegundo)

      if (valorFinal ===0 && valorO ===0)
      {      
        return;
      }

      const conversion = {
        valorOriginal: valorO,
        resultado: valorFinal,
        tipo1: tipoPrimero,
        tipo2: tipoSegundo
      }
      
      const res = await fetch(
          `https://converter-back.vercel.app/converterObtain/newConverter`,
          {
              method: 'POST',
              body: JSON.stringify(conversion),
              headers: {
                  'Content-Type': 'application/json'
              }
          }
        )        

        if (res.ok) {
          console.log(`La conversion se almaceno correctamente.`);
          setNewConv(!newConv)
        } else {
          console.error(`No se pudo almacenar los datos.`);
        }
    }catch (error) {
      console.error(`Ocurrió un problema al intentar añadir el registro.`, error);
    }    
  };

  const handleDelete = async (dato) => {

    try {
      const res = await fetch(
        `https://converter-back.vercel.app/converterObtain/delConverter/${dato._id}`, { method: 'DELETE' }
      );

      if (res.ok) {
        setNewConv(!newConv)
        console.log(`La entrada ${dato._id} ha sido eliminada correctamente.`);
      } else {
        console.error(`No se pudo eliminar la entrada ${dato._id}.`);
      }
    }catch (error) {
      console.error(`Ocurrió un problema al intentar eliminar la entrada ${dato._id}.`, error);
    }    
  }

  return (
    <div className="AppFull">
      <Top></Top>
      <div className='AppBacks'>      
        <div className='AppFirstBackground'>
          <h4 className="Titulo">convert</h4>
            <div className='AppComponents'>          
              <SelectorTipo input={resultado1} onResultadoChange={handleValorFinal}></SelectorTipo>            
              <InputDato onInputDatoChange={handleInputDatoChange} tipoA={tipoA}></InputDato> 
            </div> 
            <div className="SaveConversionPairing">          
              <SaveDato onSaveChange={saveData} datoFinal={resultadoFinal} datoOriginal={resultadoOriginal} tipoA={tipoA} tipoB={tipoB}></SaveDato>      
              <ConversionDato datoFinal={resultadoFinal} tipoB={tipoB}></ConversionDato>
            </div>            
        </div>
        <div className='AppFavorito'>
          <MostrarFavorito onDelete={handleDelete} datosBase={datosBase}></MostrarFavorito>
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
