import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="form-container">
      <h2>Login de ricardo</h2>
      <input type="text" placeholder="Usuario" />
      <input type="password" placeholder="Contraseña" />
      <button>Ingresar</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
