import { useContext } from "react"
import { Button, InputGroup, Modal, Table } from "react-bootstrap"
import { MdDeleteForever } from "react-icons/md"
import { BasketContext, DataContext, ModalContext } from "./App"

function Basket() {
    const data = useContext(DataContext)
    const {modal, setModal} = useContext(ModalContext)
    const {basket, dispatch} = useContext(BasketContext)
    const path = "./assets/img/"
    const {pizzas} = data
    return (
        <Modal show={modal} onHide={()=>setModal(false)} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Səbət</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Sifariş</h4>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Şəkil</th>
                            <th>Adı</th>
                            <th>Ölçü</th>
                            <th>Qiymət</th>
                            <th>Ədəd</th>
                            <th>Məbləğ</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map((o, i) => {
                            const pizza = pizzas.find(p => p.id === o.id)
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><img src={path + pizza.img} alt={pizza.name} className="thumb" /></td>
                                    <td>{pizza.name}</td>
                                    <td>{o.size}</td>
                                    <td>{pizza.prices[o.size]}₼</td>
                                    <td>
                                    <InputGroup>
                                        <Button onClick={()=> dispatch({type: 'upd', payload: {i, count: -1}})} variant="outline-secondary" size="sm">-</Button>
                                        <span className="px-2">{o.quant}</span>
                                        <Button onClick={()=> dispatch({type: 'upd', payload: {i, count: 1}})} variant="outline-secondary" size="sm">+</Button>
                                    </InputGroup>
                                    </td>
                                    <td>{o.quant * pizza.prices[o.size]}₼</td>
                                    <td>
                                        <MdDeleteForever onClick={()=> dispatch({type: 'del', payload: {i}})} type="button" className="fs-4" />
                                    </td>
                                </tr>
                        ) })}
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setModal(false)}>Bağla</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Basket