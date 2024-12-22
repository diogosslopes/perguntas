import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NewQuestion from '../pages/NewQuestion'

function Rotas() {


    return (

        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/newquestion' element={<NewQuestion/>}/>
        </Routes>
    )
}

export default Rotas
