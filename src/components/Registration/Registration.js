import React, { useState } from 'react';

import './Registration.css';

export default function Registration() {
  const [gender, setGender] = useState('user');

  return (
    <div className="registration-container">
      <div className="gender-selection">
        <div>
          <input type="radio" value="man" name="gender" onChange={() => setGender('man')} />
          <input type="radio" value="woman" name="gender" onChange={() => setGender('woman')}/>
          <input type="radio" value="user" name="gender" onChange={() => setGender('user')}/>
        </div>
        <div className="user-icon-div">
          <img src="../../../public/user.png" alt=""/>
        </div>
      </div>

      <div className="form">
        <input placeholder="Name" type="text"/>
        <input placeholder="Data de Nascimento" type="date"/>
        <input placeholder="Data da Morte" type="date"/>
        
        <button>Adicionar Relação</button>
      </div>
    </div>
  );
}