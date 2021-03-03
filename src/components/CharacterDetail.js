import "../stylesheets/App.scss";
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    return (
        <>
        <p>{props.char.name}</p>
        <Link to="/"><p>Volver</p></Link>
        </>
    )
    // if (props.char === undefined) {
    //     return (
    //       <div>
    //         <div>
    //           <div>
    //             <header>
                  
    //               <Link to="/">
    //                 <span>Volver</span>
    //               </Link>
    //             </header>
    //             <section>
    //               <p>Vas de liste o qué</p>
    //             </section>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   } else {
    //     return (
    //       <div>
    //         <div>
    //           <div>
    //             <header>
    //               <h2>{props.char.name}</h2>
    //               <Link to="/">
    //                 <span>Volver</span>
    //               </Link>
    //             </header>
    //             <section>
    //               <img src={props.char.image}  alt={props.char.name} />
    //               <ul>
    //                 <li>Nombre: {props.char.name}</li>
    //                 <li>Status: {props.char.status}</li>
    //                 <li>Especie:{props.char.species}</li>
    //               </ul>
    //             </section>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   }
    };

export default CharacterDetail;
