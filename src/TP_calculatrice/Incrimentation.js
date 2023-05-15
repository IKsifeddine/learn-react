import React from "react";
class Incriment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cp: 0
        };
    }
    render() {
        return (
            <div>
                {this.state.cp}
                <button onClick={this.sup} >ogmenter</button>
                <button onClick={this.dis}>diminier</button>
            </div>
        );

    };
    sup = () => {
        var a = this.state.cp + 1
        this.setState({ cp: a });
    }
    dis = () =>{
        var b = this.state.cp - 1
        this.setState({ cp: b });
    }
}
export default Incriment;