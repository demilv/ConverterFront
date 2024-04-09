import './MostrarFavorito.css'

function MostrarFavorito ({onDelete, datosBase}) {

    const MostrarDatos = () => {
            return datosBase.map((dato) =>             
            <article className="favoritosLinea" key= {dato._id}>
                <h3 className="favoritosData">{dato.valorOriginal}{dato.tipo1}{" -> "}{dato.resultado}{dato.tipo2}</h3>
                <span className="favoritosX" onClick={()=> onDelete(dato)}>x</span> 
            </article>
            )
        }

        return(
            <section>
            <h4>saved</h4>
            <div className='favoritosDivisor'>
                <MostrarDatos></MostrarDatos>
            </div>                
            </section>
        )
    }

export default MostrarFavorito;