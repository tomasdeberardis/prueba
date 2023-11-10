import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const UsersAll = () => {
  const { token } = useContext(AuthContext); 

  const fetchUsers = async () => {
    console.log('Este es el token:', token);

    try {
      const response = await fetch('http://localhost:8080/users/all', {
        method: 'GET',
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
        referrerPolicy: 'no-referrer'
      })           
      .then(response => response.json())
      .then(data => {
        console.log(response);
        console.log(data);
      });
      

      if (response.ok) {
        const users = await response.json();
        console.log('Usuarios obtenidos:', users);

      } else {
        console.error('Error al obtener usuarios:', response.status);

      }
    } catch (error) {
      console.error('Error:', error);


    }
  };

  return (
    <div className="container">
      <h1>Página de Usuarios</h1>
      <button onClick={fetchUsers}>Obtener Usuarios</button>
    </div>
  );
};

export default UsersAll;
