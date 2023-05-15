import React, { useState } from 'react';

const Fetch_Test = () => {
Ω
    let [tab, setTab] = useState([])

    function afficher() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => { return response.json() })
            .then((resultat) => { setTab(resultat) })

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

export default Fetch_Test;

