import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';  //O componente Link foi importado da biblioteca para permitir mudar de página sem recarregar o navegador

const PaginaInicial = () => (
  <div>
    <h1>Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes"> 
      <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
      <Link className="opcao-back-end" to='/back-end'>Back-end</Link>  
    </div>
    
  </div>
);

export default PaginaInicial;

/*
*A tag <a> foi substituída pelo componente <Link>
*A rota foi definida no atributo 'to'
*Escrevemos <Link> com L maiúsculo, porque ele é um componente
*/