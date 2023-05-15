import Incriment from "./Incrimentation";
import Puissance from "./Puissance";
import Racine from "./Racine";
import Somme from "./Somme";
import SommeClass from "./SommeClass"

function Calculatrice (){
    return(
        <>
            <Somme a={5} b={5}/>
            <Puissance a={5} b={5}/>
            <Racine a={5} />
            <hr/>
            <SommeClass  a={5} b={5}/>
            <Incriment/>
        </>

    );
}
export default Calculatrice;