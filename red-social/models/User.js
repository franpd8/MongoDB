const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Introduzca un usuario']},
    email:{
        type: String,
        required: [true,'Introduzca un email']
      },
    password:{
        type: String,
        required: [true,'Introduzca una contraseña']
    },
    role: String,
    confirmed: Boolean,
    tokens:[]  
    
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;