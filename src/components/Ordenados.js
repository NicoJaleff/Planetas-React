import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
//import planetas from '../assets/json/sistema_solar.json';
import { planetas } from "../assets/json/Data"


export default function Ordenados(props) {

    const [planetaOrdenados, setPlanetaOrdenados] = useState(ordenaPlanetas())

    function ordenaPlanetas() {
        let diametros = planetas;
        diametros.sort(function (a, b) {
            return (b.diametro - a.diametro);
        });
        return diametros;
    }

    return (
        <React.Fragment>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Planeta</th>
                        <th>Diametro</th>
                    </tr>
                </thead>
                <tbody>
                    {props.match.params.nombre === undefined ?
                        planetas.map((planeta, index) => (
                            <tr key={index}>
                                <td>{planeta.nombre}</td>
                                <td>{planeta.diametro}</td>
                            </tr>
                        )) :
                        <div>
                            NO HAY PLANETA
                        </div>
                    }
                </tbody>
            </Table>
        </React.Fragment>
    )
}
