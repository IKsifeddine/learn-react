
import React from "react";
class CalculeForm extends React.Component {
    constructor(props) {
        super(props)
        this.Aref = React.createRef()
        this.Bref = React.createRef()
        this.state = {
            vide: ''
        }


    }
    render() {
        return (
            <>
                {/*methode 1*/}
                <input type="text" /><br />
                <input type="text" ref={this.Bref} /><br />
                <input type="button" value='somme' onClick={this.calculer} /><br />
                {this.state.vide} <hr />

                {/*methode 2*/}
                NOM: <input type="text" onChange={this.afficherNom} />
                <input type="text" /><br />
                <input type="text"  /><br />
                <input type="button" value='somme' onClick={this.afficherNom} /><br />
            </>
        );
    }
    calculer = () => {

        this.setState({ vide: (eval(this.Aref.current.value) + eval(this.Bref.current.value)) })
    }
    afficherNom = (evnet) => {
        console.log(evnet.target.value)

    }
}
export default CalculeForm;