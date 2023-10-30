const express = require('express');
const routes = express.Router();
const users = [{
    id: 1,
    name: 'John Doe',
    email: 'doe@email.com',
    password: '12345'
}]
routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Validacao
    const user = users.find(user => user.email === email && user.password === password)
    if(user){
        return res.status(200).json(user)
    }else{ 
        return res.status(401).json({message: 'Credenciais invalidas'})
    }

})
module.exports = routes;