import React from 'react';

export default function Header({ cuandoAlguienTeHagaClick,
                                 dato,
                                 children,
                                 lista }){

  return <h1 onClick={cuandoAlguienTeHagaClick}>
    {children}
    Dato: {dato}
    <ul>
      {lista.map(item=><li> {item * 2} </li>)}
    </ul>
  </h1>
}
