import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //Importa da biblioteca 'react-router-dom' os componentes que serão usados para criar as rotas

//Importa os componentes que representam as páginas da aplicação
import PaginaInicial from "../componentes/paginas/PaginaInicial";
import PaginaFrontEnd from "../componentes/paginas/PaginaFrontEnd";
import PaginaBackEnd from "../componentes/paginas/PaginaBackEnd";

const Rotas = () => ( //Utilizou arrow function para criar o componente
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element= {<PaginaInicial/>} />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas


/*
*<BrowserRouter/> Permite sincronizar a aplicação e a url. Ao navegar entre os componentes a url também será alterada.
*<Routes/> Seleciona uma única rota para exibir na tela
*<Route/> Associa uma url a um componente
*path = '/' Indica a url dessa rota
*element= {<PaginaInicial/>} Indica o componente dessa rota
*exact => Determina que o componente PaginaInicial será exibido apenas se a rota for exatamente '/'
*<Route path='/front-end' element={ <PaginaFrontEnd/> } /> => Não usou a palavra 'exact'. Entao toda url que começar com '/front-end/ está associado ao componente 'PaginaFrontEnd'.
*/