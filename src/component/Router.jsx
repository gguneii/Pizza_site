import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Main from './Main'
import Pizza from './Pizza'
import Contact from './Contact'
import Error from './Error'

export const router = createBrowserRouter([
  {path: '/', element: <App />, children: [
    {path: '/', element: <Pizza />},
    {path: 'main', element: <Main />},
    {path: 'pizza', element: <Pizza />},
    {path: 'contact', element: <Contact />},
    {path: '*', element: <Error />}
  ]}
])