const User = require("../models/User");
const bcrypt = require ('bcryptjs');

const UserController ={
    async create(req,res){
        try {
        const password = await bcrypt.hash(req.body.password,10)
            const user = await User.create({...req.body,password:password})
            res.status(201).send({message:"Usuario añadido con éxito",user})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el usuario' })
        }
    },
async login(req,res){
    try {
        const user = await User.findOne({ email: req.body.email})
        if (!user) {
          res.status(400).send({
            message:"Usuario no encontrado: Usuario o contraseña incorrectos"
          })
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) {
          res.status(400).send({
            message:"Error de datos: Usuario o contraseña incorrectos"})
        }
        // token = jwt.sign({ id: user.id }, jwt_secret);
        // Token.create({ token, UserId: user.id });
        res.send({message: "¡Cuánto tiempo sin verte " + user.name,user})
      } catch (err) {
        console.log(err);
      }
    },
async getAll(req, res) {
            try {
               const users = await User.find()
               res.send(users)
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Ha habido un problema al cargar los usuarios' })
            }
        },
    async getById(req, res) {
            try {
                const user = await User.findById(req.params._id)
                res.send(user)
            } catch (error) {
                console.error(error);
    res.status(500).send({ message: `Ha habido un problema al buscar el usuario con id = ${req.params._id}`})
            }
         },
    // async getByName(req, res) {
    //     try {
    //       if (req.params.name.length >20){
    //         return res.status(400).send('Busqueda demasiado larga')
    //       }
    //       const name = new RegExp(req.params.name, "i");
    //       const user = await User.find({name:name});
    //       res.send(user);
    //     } catch (error) {
    //       console.log(error);
    // res.status(500).send({ message: `Ha habido un problema al buscar el usuario`})
    //     }
    //   },
    async delete(req, res) {
            try {
                const user = await User.findByIdAndDelete(req.params._id)
                res.send({ user, message: 'Usuario eliminado' })
            } catch (error) {
                console.error(error)
                res.status(500).send({ message: 'Ha habido un problema al eliminar el usuario' })
            }
        },
    async update(req, res) {
        try {
          const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
          res.send({ message: "usuario actualizado con éxito", user });
        } catch (error) {
          console.error(error);
    res.status(500).send({message: "Ha habido un problema al actualizar el usuario"})
        }
      },
    }
module.exports = UserController;