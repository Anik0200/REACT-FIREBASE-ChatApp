import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Route>
    ))

    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}

export default App
