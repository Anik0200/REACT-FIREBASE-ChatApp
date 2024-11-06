import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import Home from './Pages/Home'
import LayOuteOne from './LayOuts/LayOuteOne'

function App() {

    const route = createBrowserRouter(createRoutesFromElements(
        <Route>

            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route path='/' element={<LayOuteOne />} >
                <Route index element={<Home />} />
            </Route>

        </Route>
    ))

    return (
        <>
            <RouterProvider router={route} />
            <ToastContainer />
        </>
    )
}

export default App
