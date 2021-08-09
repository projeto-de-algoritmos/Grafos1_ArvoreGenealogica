import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

import Registration from './components/Registration/Registration';
import Card from './components/Card/Card';

import "./app.css";

function App() {

  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 350, y: 350 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 600, y: 600 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];

  return (
    <div className="container">
      <div className="div-lateral">
          <span className="titulo">Arvore Genealógica</span>
      </div>
      
      <div className="content">
      <CytoscapeComponent elements={elements} style={ { width: '100%', height: '100%' } } />
      </div>
    </div>
  );
}

export default App;
