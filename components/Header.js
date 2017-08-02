import React from 'react';

export default function Header({ cuandoAlguienTeHagaClick,
                                 dato,
                                 children,
                                 lista }){

  return <h1 onClick={cuandoAlguienTeHagaClick}>
    {children}
    Dato: {dato}
    <ul>
      {lista.map(item=><li> {item.name} </li>)}
    </ul>
  </h1>
}
