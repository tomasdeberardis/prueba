const AuthService = {
    login: async (username, password) => {
      var data = { username, password };
      var request;
      var response;
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        request = response.request; // Set the request variable to the response request
        console.log('Request:', request); // Log the request variable
        if (response.ok) {
          const data = response.json();
          const token = data.token;
          return { success: true, token };
        } else {
          return { success: false, message: 'Credenciales incorrectas' };
        }
      } catch (error) {
        console.log('Error', 111111)
        console.log('request', response)
        return { success: false, message: 'Error al iniciar sesión' };
        
      }
    },

  };
  
  export default AuthService;
  