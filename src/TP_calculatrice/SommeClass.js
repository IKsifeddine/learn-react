import React from "react";
class SommeClass extends React.Component{
    render(){
        return(
            <div>
                 {this.props.a}+{this.props.b}={parseFloat(this.props.a)+parseFloat(this.props.b)}
            </div>
        );
    }

}
export default SommeClass;