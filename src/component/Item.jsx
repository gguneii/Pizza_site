import { useContext, useState } from "react"
import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { BasketContext, DataContext, ModalContext } from "./App"

function Item({p}) {
    const path = "./assets/img/"
    const {sizes} = useContext(DataContext)
    const {dispatch} = useContext(BasketContext)
    const {setModal} = useContext(ModalContext)
    const {id, name, prices, desc, img} = p
    const [size, setSize] = useState( Object.keys(prices)[0] )
    const [quant, setQuant] = useState(1)

    return (
        <Card>
            <Card.Img variant="top" src={path + img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{desc}</Card.Text>
                <Form.Select onChange={(e) => setSize( e.target.value ) }>
                    {Object.keys(prices).map(s => <option key={s} value={s}>{sizes[s]}</option>)}
                </Form.Select>
                <InputGroup className="my-3">
                    <Button onClick={()=> setQuant(quant > 1 ? quant - 1 : quant)} variant="outline-secondary">-</Button>
                    <span className="px-3 py-2">{quant}</span>
                    <Button onClick={()=> setQuant(quant + 1)} variant="outline-secondary">+</Button>
                </InputGroup>
                <h5>{quant * prices[size]}₼</h5>
                <Button onClick={()=> {
                        dispatch({type: 'add', payload: {id, size, quant}})
                        setModal(true)
                    }} variant="primary">Ye məni</Button>
            </Card.Body>
        </Card>
    )
}

export default Item