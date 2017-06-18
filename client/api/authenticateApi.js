// src/api/sessionApi.js;

class AuthenticateApi {  
  static login(credentials) {
    const request = new Request('http://localhost:3000/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default AuthenticateApi;  
