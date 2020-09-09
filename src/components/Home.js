import React, { useState, useEffect } from 'react'
import planetas from '../assets/json/sistema_solar.json';
import { Card, Button } from 'react-bootstrap';
import CartPlanet from './CartPlanet';



export default function Home(props) {

    const [planetas2, setPlanetas2] = useState([])

    useEffect(() => {
        function buscador() {
            const planetaEncontrado = props.match.params.nombre;
            const type = props.match.params.type;

            if (planetaEncontrado !== undefined) {
                if (type === "nombre") {
                    const planetaFiltrado = planetas.filter(planeta => {
                        if (planeta.nombre === planetaEncontrado) {
                            return planeta
                        }
                    })
                    setPlanetas2(planetaFiltrado)
                    console.log(planetaFiltrado)
                }
            }
        }

        buscador()
    }, [props.match.params.nombre, props.match.params.type])


    return (
        <div className="container">
            <div className="row">
                {props.match.params.nombre === undefined ?
                    planetas.map((planeta, index) => (
                        <CartPlanet key={index} planeta={planeta}></CartPlanet>
                    )) :
                    planetas2.length !== 0 ?
                        planetas2.map((planeta, index) => (
                            <CartPlanet key={index} planeta={planeta}></CartPlanet>
                        )) :
                        <div>
                            <strong> NO SE ENCONTRO EL PLANETA</strong>
                        </div>
                }
            </div>
        </div >
    )
}








