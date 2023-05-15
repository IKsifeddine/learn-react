import axios from 'axios';
import React, { useState } from 'react';

const axios_Test = () => {

    let [tab, setTab] = useState([])

    function afficher() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => { console.log(response)})


    }
    return (
        <div>
            <input type={'button'} value='afficher' onClick={() => { afficher() }} />
            <table className="table table-bordered  table-hover ">
                <thead>
                    <tr>
                        <th>USER ID</th>
                        <th>ID</th>
                        <th>TITTLE</th>
                        <th>COMPLETED</th>
                    </tr>
                </thead>
                <tbody>
                    {tab.map((t) => { return <tr><td>{t.userId}</td><td>{t.id}</td><td>{t.title}</td><td>{'' + t.completed}</td></tr> })}
                </tbody>

            </table>
        </div>
    );
};

export default axios_Test;