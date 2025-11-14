import {Routes, Route} from 'react-router'

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { NotFound } from "../pages/NotFound"

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' index element={<Home/>} />
            <Route path='/products' element={<Products/>} />

            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}

/*  <Route path='*' element={ <NotFound /> } /> 

Sempre está por último, passou por todo mundo então vai para ela
*/