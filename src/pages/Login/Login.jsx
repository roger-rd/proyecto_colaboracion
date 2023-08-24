import React, { useState } from 'react';
import Productos from '../Producto/Productos';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aquí verificarías las credenciales con tu backend o simulación
    // En este ejemplo, solo verificamos que se ingresen valores
    if (username && password) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <Productos />;
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
