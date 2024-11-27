import { createContext, useReducer, useState } from "react"
import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import { data } from "../provider/data"
import { reducer } from "../provider/order"

export const DataContext = createContext({})
export const ModalContext = createContext({})
export const BasketContext = createContext({})

function App() {
  const [modal, setModal] = useState(false)
  const [basket, dispatch] = useReducer(reducer, [])

  return (
    <DataContext.Provider value={data}>
      <BasketContext.Provider value={{basket, dispatch}}>
        <ModalContext.Provider value={{modal, setModal}}>
          <Header />
          <main className="p-5">
            <Container>
              <Outlet />
            </Container>
          </main>
          <Footer />
        </ModalContext.Provider>
      </BasketContext.Provider>
    </DataContext.Provider>
  )
}

export default App;