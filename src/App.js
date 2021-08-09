import React from "react";
import ReactDOM from "react-dom";
import CytoscapeComponent from "react-cytoscapejs";
import Registration from "./components/Registration/Registration";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const elements = [
    {
      data: { id: "Victoria1", label: "Victoria I 1819 - 1901" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Edward7", label: "Edward VII 1841 - 1910" },
      position: { x: 600, y: 600 },
    },
    {
      data: { id: "Alice", label: "Princesa Alice 1843 - 1878" },
      position: { x: 600, y: 600 },
    },
    { data: { source: "Victoria1", target: "Edward7", label: "Irmao" } },
    { data: { source: "Victoria1", target: "Alice", label: "Irmao" } },

    {
      data: { id: "George5", label: "George V 1865 - 1936" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Edward7", target: "George5", label: "Pai" } },

    {
      data: { id: "Victoria", label: "Princesa Victoria 1863 - 1950" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Alice", target: "Victoria", label: "Pai" } },

    {
      data: { id: "Alice2", label: "Princesa Alice 1885 - 1969" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Victoria", target: "Alice2", label: "Pai" } },

    {
      data: { id: "Edward8", label: "Edward VIII 1894 - 1972" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George5", target: "Edward8", label: "Pai" } },

    {
      data: { id: "George6", label: "George VI 1895 - 1952" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George5", target: "George6", label: "Pai" } },

    {
      data: { id: "Henry", label: "Henry 1900 - 1974" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George5", target: "Henry", label: "Pai" } },

    {
      data: { id: "George", label: "George 1902 - 1942" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George5", target: "George", label: "Pai" } },

    {
      data: { id: "Margaret", label: "Princesa Margaret 1930 - 2002" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George6", target: "Margaret", label: "Pai" } },

    {
      data: { id: "Elizabeth", label: "Elizabeth 1926" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "George6", target: "Elizabeth", label: "Pai" } },

    {
      data: { id: "Philip", label: "Philip 1921" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Alice2", target: "Philip", label: "Pai" } },

    { data: { source: "Elizabeth", target: "Philip", label: "Marido" } },

    {
      data: { id: "Andrew", label: "Andrew 1960" },
      position: { x: 350, y: 350 },
    },
    { data: { id: "Anne", label: "Anne 1950" }, position: { x: 350, y: 350 } },
    {
      data: { id: "Edward", label: "Edward 1964" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Charles", label: "Charles 1948" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Elizabeth", target: "Andrew", label: "Pai" } },
    { data: { source: "Elizabeth", target: "Anne", label: "Pai" } },
    { data: { source: "Elizabeth", target: "Edward", label: "Pai" } },
    { data: { source: "Elizabeth", target: "Charles", label: "Pai" } },
    {
      data: { id: "SarahFerguson", label: "Sarah Ferguson 1959" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "SarahFerguson", target: "Andrew", label: "Marido" } },
    {
      data: { id: "DianaSpencer", label: "Diana Spencer 1961 - 1997" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Charles", target: "DianaSpencer", label: "Marido" } },

    {
      data: { id: "Beatrice", label: "Beatrice 1988" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Eugenie", label: "Eugenie 1990" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Andrew", target: "Beatrice", label: "Pai" } },
    { data: { source: "Andrew", target: "Eugenie", label: "Pai" } },

    {
      data: { id: "William", label: "William 1982" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Harry", label: "Harry 1984" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Charles", target: "Harry", label: "Pai" } },
    { data: { source: "Charles", target: "William", label: "Pai" } },

    {
      data: { id: "Kate", label: "Kate Middleton 1982" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Meghan", label: "Meghan 1981" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "William", target: "Kate", label: "Marido" } },
    { data: { source: "Harry", target: "Meghan", label: "Marido" } },

    {
      data: { id: "George", label: "George Alexander Louis 2013" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Charlotte", label: "Charlotte Elizabeth Diana 2015" },
      position: { x: 350, y: 350 },
    },
    {
      data: { id: "Louis", label: "Louis Arthur Charles 2018" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "William", target: "George", label: "Pai" } },
    { data: { source: "William", target: "Charlotte", label: "Pai" } },
    { data: { source: "William", target: "Louis", label: "Pai" } },

    {
      data: { id: "Archie", label: "Archie Harrison 2019" },
      position: { x: 350, y: 350 },
    },
    { data: { source: "Harry", target: "Archie", label: "Pai" } },
  ];

  const layout = { name: "breadthfirst" };

  return (
    <div className="container">
      <div className="div-lateral">
        <span className="titulo">Arvore Genealógica</span>
      </div>

      <div className="content">
        <CytoscapeComponent
          elements={elements}
          style={{ width: "100%", height: "100%" }}
          layout={layout}
        />
      </div>
    </div>
  );
}

export default App;
