import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
//import planetas from "../assets/json/sistema_solar.json";
import { planetas } from "../assets/json/Data"

export default function Detalle(props) {

    const [planeta, setPlaneta] = useState(undefined)

    useEffect(() => {
        function buscarPlaneta() {
            const planetaEncontrado = planetas.find(planeta => planeta.nombre === props.match.params.id)
            setPlaneta(planetaEncontrado)
        }
        buscarPlaneta()
    }, [])

    //Muestra los satelites ordenados
    function satelites(satelites) {
        if (satelites.length !== 0) {
            let satelite = [];
            for (let i = 0; i < satelites.length; i++) {
                satelite.push(` ${satelites[i]} ,`)
            }
            return satelite;
        } else {
            return "No tiene"
        }
    }

    return (
        <React.Fragment>
            {planeta !== undefined && (
                <Table variant="dark" className="TarjetaDetalle">
                    <thead>
                        <tr>
                            <td>
                                <img className="imagen" variant="top" src={require(`../assets/img/${planeta.img}`)} />
                                <td>
                                    <strong>Nombre:</strong> {planeta.nombre}
                                </td>
                            </td>
                            <td>
                                <strong>Diametro KM:  </strong> {planeta.diametro} km <br></br>
                                <strong>Rotacion:  </strong> {planeta.rotacionDias} Dias <br></br>
                                <strong>Temperatura:  </strong> {planeta.temperatura} Grados <br></br>
                                <strong>Satelites:  </strong> {satelites(planeta.satelites)}  <br></br>
                                <strong>Descripcion: </strong> {planeta.descripcion}
                            </td>

                        </tr>

                    </thead>
                    <Button className="btn btn-warning btn-block" href="/Home" >Volver</Button>

                </Table>
            )}
        </React.Fragment>
    )
}
