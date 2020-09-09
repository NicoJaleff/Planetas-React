import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartPlanet({ planeta }) {
    return (
        < Card className="card col-4">
            <Card.Img src={require(`../assets/img/${planeta.img}`)} />
            <Card.Title>{planeta.nombre}</Card.Title>
            <Card.Text>
                <Link to={`/detallePlaneta/${planeta.nombre}`}>Ver detalle</Link>
            </Card.Text>
        </Card>
    )
}
