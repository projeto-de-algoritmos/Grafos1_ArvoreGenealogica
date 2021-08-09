import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import "./app.css";

import familiaReal from './assets/json/familiaReal.js';

function App() {
  const [selected, setSelected] = useState('');

  const layout = { name: "preset" };

  function handleChange(e) {
    e.preventDefault();
    setSelected(e.target.value);
  }

  return (
    <div className="container">
      <div className="div-lateral">
        <span className="titulo">Arvore Genealógica Família Real</span>
        <div className="select">
          <label for="tree">Escolha um integrante da família real para ver os parentescos que não formam um ciclo:</label>
          <select name="tree" id="tree" className="tree" onChange={(e) => handleChange(e)}>
              <option value="" selected>Selecione</option> 
              <option value="Victoria1">Victoria I 1819 - 1901</option> 
              <option value="Edward7">Edward VII 1841 - 1910</option>      
              <option value="Alice">Princesa Alice 1843 - 1878</option>       
              <option value="George5">George V 1865 - 1936</option>
              <option value="Victoria">Princesa Victoria 1863 - 1950</option>
              <option value="Alice2">Princesa Alice 1885 - 1969</option>
              <option value="Edward8">Edward VIII 1894 - 1972</option>
              <option value="George6">George VI 1895 - 1952</option>
              <option value="Henry">Henry 1900 - 1974</option>
              <option value="George">George 1902 - 1942</option>
              <option value="Margaret">Princesa Margaret 1930 - 2002</option>
              <option value="Elizabeth">Elizabeth 1926</option>
              <option value="Philip">Philip 1921</option>
              <option value="Andrew">Andrew 1960</option>
              <option value="Anne">Anne 1950</option>
              <option value="Edward">Edward 1964</option>
              <option value="Charles">Charles 1948</option>
              <option value="SarahFerguson">Sarah Ferguson 1959</option>
              <option value="DianaSpencer">Diana Spencer 1961 - 1997</option>
              <option value="Beatrice">Beatrice 1988</option>
              <option value="Eugenie">Eugenie 1990</option>
              <option value="William">William 1982</option>
              <option value="Harry">Harry 1984</option>
              <option value="Kate">Kate Middleton 1982</option>
              <option value="Meghan">Meghan 1981</option>
              <option value="GeorgeAlexander">George Alexander Louis 2013</option>
              <option value="Charlotte">Charlotte Elizabeth Diana 2015</option>
              <option value="Louis">Louis Arthur Charles 2018</option>
              <option value="Archie">Archie Harrison 2019</option>
          </select>
        </div>
      </div>

      <div className="content">
        <CytoscapeComponent
          elements={familiaReal}
          style={{ width: "100%", height: "100%" }}
          layout={layout}
          cy={(cy) => { var bfs = cy.elements().bfs({
              roots: `#${selected}`,
              directed: true,
            });
            var path = bfs.path;

            if(selected !== '') {
              cy.elements().unselect();
              path.select();
            } 
          }}
        />
      </div>
    </div>
  );
}

export default App;
