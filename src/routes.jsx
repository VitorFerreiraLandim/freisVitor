import { BrowserRouter, Routes,Route } from "react-router-dom";
import Sobre from "./pages/sobre";
import Inicial from "./pages/ini";
import Ex1 from "./pages/ex10";
import React from 'react';
import Ex2 from "./pages/ex02";
import Ex4 from "./pages/ex11";
import Ex5 from "./pages/ex05";
import Ex6 from "./pages/ex04";

export default function Nav() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicial />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path= '/inicial' element={<Inicial/>}/>
                
                <Route path ='/ex2' element= {<Ex2 />}/>
                <Route path ='/ex1' element= {<Ex1 />}/>
               
                <Route path = '/ex4' element= {<Ex4 />}/>
                <Route path = '/ex5' element= {<Ex5 />}/>
                <Route path = '/ex6' element= {<Ex6 />}/>
                
           
            </Routes>
        </BrowserRouter>
    );
}
