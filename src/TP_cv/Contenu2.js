import React from 'react';
import './Contenu.css'
class Contenu2 extends React.Component {
    render() {
        return (
            <div>
                <div className='diplome'>
                    <b>les diplome:</b>
                    <b><p className='date'>2020-2021:</p></b>
                    <p className='place'>Rabat abi baker sidiq</p>
                    <p className='opption'>bacclaureat svt option français</p>

                    <b><p className='date-1'>2021-2023:</p></b>
                    <p className='place-1'>Rabat hay riad ista ntic Rabat </p>
                    <p className='opption-1'>technicien spicialiser en developpment digital</p>

                </div>
                <hr className='sep'></hr>
                <div className='diplome-1'>
                    <b>les competence:</b>
                    <p>resolution des problems:</p>
                    <input className='resodre' type="range" min={0} max={5} value='4' />
                    <p>pithon</p>
                    <input className='pithon' type="range" min={0} max={5} value='3' />
                    <p>react</p>
                    <input className='react' type="range" min={0} max={5} value='5' />

                </div>


            </div>

        );
    }
}
export default Contenu2;

