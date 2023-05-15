import React from "react";
class Test2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persone: []
        }
        this.nomR = React.createRef()
        this.cinR = React.createRef()
        this.villeR = React.createRef()
        this.marieR = React.createRef()


    }
    render() {
        return (
            <>
                <input type="text" placeholder="nom" ref={this.nomR} /><br /><br />
                <input type="text" placeholder="cin" ref={this.cinR} /><br /><br />
                <select ref={this.villeR}>
                    <option >RABAT</option>
                    <option >SALE</option>
                    <option >TAZA</option>

                </select> <br /><br />
                marié:<input type="checkbox" name="oui" ref={this.marieR} />
                <br /><br />
                <input type="button" value="afficher" onClick={this.ajouter} />
                <hr />
                <table border="1">
                    <thead>
                        <tr>
                            <td>NOM</td>
                            <td>CIN</td>
                            <td>VILLE</td>
                            <td >MARIé</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.persone.map((m) => {
                            return <tr key={m.cin}>
                                <td>{m.nom}</td><td>{m.cin}</td><td>{m.ville}</td><td>{(m.marie === true && 'oui') || (m.marie === false && 'non')}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
    ajouter = () => {
        const m={cin:this.cinR.current.value,nom:this.nomR.current.value,ville:this.villeR.current.value,marie:this.marieR.current.checked}
        const p=[...this.state.persone,m]
        this.setState({persone:p})
        
        



    }
}export default Test2;













