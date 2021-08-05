import Registration from './components/Registration/Registration';
import Card from './components/Card/Card';

import "./app.css"

function App() {
  return (
    <div className="container">
      <div className="div-lateral">
          <span className="titulo">Arvore Genealógica</span>

          <Registration />
      </div>
      
      <div className="content">
          <Card />
      </div>
    </div>
  );
}

export default App;
