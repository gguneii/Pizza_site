export function reducer(basket, action) {
    return (action.type === 'del') ? delFromBasket(basket, action.payload.i) :
           (action.type === 'add') ? addToBasket(basket, action.payload) : 
                                     updateBasket(basket, action.payload.i, action.payload.count)
}

function delFromBasket(basket, i) {
    return basket.filter((o, ind) => ind !== i )
}

function addToBasket(basket, order) {
    let i = basket.findIndex(o => o.id === order.id && o.size === order.size)
    return (i > -1) ? updateBasket(basket, i, order.quant) : [...basket, order]
}

function updateBasket(basket, i, count) {
    const newArr = [...basket]
    newArr[i].quant += count
    return (newArr[i].quant === 0) ? delFromBasket(basket, i) : newArr
}