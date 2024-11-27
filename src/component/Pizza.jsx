import { Col, Form, Row } from "react-bootstrap"
import Item from "./Item"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "./App"

function Pizza() {
    const {pizzas} = useContext(DataContext)
    const [search, setSearch] = useState('')
    const [check, setCheck] = useState([])
    const [output, setOutput] = useState(pizzas)
    const filters = ['meat', 'chick', 'vegan', 'spicy']

    useEffect(()=>{
        setOutput( search === '' ? pizzas :
            output.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) ) )
    }, [search])

    useEffect(()=> {
        if( check.length > 0)
            setOutput( pizzas.filter(p => p.filter.some(e => check.includes(e))) )
        else setOutput(pizzas)
    }, [check])

    function onCheck(e) {
        setCheck ( check.includes(e.target.id) ? check.filter(c=> c !== e.target.id) :
                    [...check, e.target.id] )                    
    }
    
    return (
        <div>
            <h2>Pizza</h2>
            <Form className="my-4">
                <Form.Control onInput={(e)=> setSearch(e.target.value)} type="text" placeholder="Search" />
                {filters.map(f => <Form.Check key={f} id={f} onChange={onCheck} inline type="checkbox" name="filter" label={f} />)}
            </Form>
            <Row xs={1} sm={2} md={3} lg={4} className="g-3">
                {output.map( (p, i) => <Col key={i}><Item p={p} /></Col> )}
            </Row>
        </div>
    )
}

export default Pizza