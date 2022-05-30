# 1.1. Desarrollar el Proyecto
A continuación, creará su propia base de datos de red social con las siguientes colecciones:
* Users
* Posts
    * Comments
# 1.2. Ejecute las siguientes consulta

A continuación tendrás que realizar las siguientes consultas MongoDB:

## 1.2.1 INSERTAR DATOS
Insertar al menos 15 publicaciones nuevas con almenos 2 comentarios por publicación:
* Title
* Body
* Username
* Comments
    * Username
    * Body
```
db.post.insertOne({
    title: "Title One", body: "Here is the main description for the post One", username: "username 1",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
})
```
Y ahora añadimos los otros catorce:
```
db.post.insertMany(
    [{
    title: "Title Two", body: "Here is the main description for the post Two", username: "username 1",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Three", username: "username 3"}],date: Date()  
},
{
    title: "Title Three", body: "Here is the main description for the post Three", username: "username 2",comments: [{comment: "comment One", username: "username 1"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Four", body: "Here is the main description for the post Four", username: "username 2",comments: [{comment: "comment One", username: "username 2"}],date: Date() 
},
{
    title: "Title Five", body: "Here is the main description for the post Five", username: "username 3",comments: [{comment: "comment One", username: "username 2"}],date: Date() 
},
{
    title: "Title Six", body: "Here is the main description for the post Six", username: "username 4",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Seven", body: "Here is the main description for the post Seven", username: "username 4",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Eight", body: "Here is the main description for the post Eight", username: "username 5",comments: [{comment: "comment One", username: "username 2"}],date: Date() 
},
{
    title: "Title Nine", body: "Here is the main description for the post Nine", username: "username 2",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Ten", body: "Here is the main description for the post Ten", username: "username 1",comments: [{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Eleven", body: "Here is the main description for the post Eleven", username: "username 3",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Twelve", body: "Here is the main description for the post Twelve", username: "username 2",comments: [{comment: "comment One", username: "username 2"}],date: Date() 
},
{
    title: "Title Thirteen", body: "Here is the main description for the post Thirteen", username: "username 3",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
},
{
    title: "Title Fourteen", body: "Here is the main description for the post Fourteen", username: "username 4",comments: [{comment: "comment One", username: "username 2"}],date: Date() 
},
{
    title: "Title Fifteen", body: "Here is the main description for the post Fifteen", username: "username 5",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
}])
```

```
db.post.insertOne({
    title: "Title last", body: "Here is the main description for the last post", username: "username 1",comments: [{comment: "comment One", username: "username 2"},{comment: "comment Two", username: "username 2"}],date: Date() 
})
```


Insertar al menos 10 nuevos usuarios:
* Username
* Email
* Age

```
db.users.insertMany([
    { name: "User 1", email: "email1@gmail.com", age: 20},
  { name: "User 2", email: "email2@gmail.com", age: 21},
  { name: "User 3", email: "email3@gmail.com", age: 25},
  { name: "User 4", email: "email4@gmail.com", age: 30},
  { name: "User 5", email: "email5@gmail.com", age: 33},
  { name: "User 6", email: "email6@gmail.com", age: 35},
  { name: "User 7", email: "email7@gmail.com", age: 40},
  { name: "User 8", email: "email8@gmail.com", age: 41},
  { name: "User 9", email: "email9@gmail.com", age: 38},
  { name: "User 10", email: "email10@gmail.com", age: 18},
])
```

## 1.2.2 ACTUALIZAR DATOS
* Actualizar publicaciones:
    * Actualiza todos los campos de una publicación

```
db.post.updateOne({ title: 'Title One' }, 
{ $set:{
title: "Updated Title One", 
body: "Here is the updated description for the post One", 
username: "username updated",
comments: [
      { comment: 'comment updated 1', username: 'username updated 1' },
      { comment: 'comment updated 2', username: 'username updated 2' }
    ]}})
```
 * Cambiar el body de una publicación.
```
    db.post.updateOne({ title: 'Title Two' }, 
{ $set:{ body: "Here is the updated description for the post Two",}})
```
* Actualizar comentarios:
    * Cambiar el body de un comentario.

```
db.post.updateOne({ title: 'Title Three' }, 
{ $set:{
comments: [
      {comment: 'comment updated 1', username: 'username updated 1' },
      {comment: "comment 2", username: "username 2"}
    ]}})
```
* Actualizar usuarios:
    * Actualiza todos los campos de un usuario
```
db.users.updateOne(
    { name: "User 1" }, 
{ $set:{ name: "Updated User 1", email: "superemail@gmail.com", age: 22}})
```
* Cambiar el email de dos usuarios es decir hacer la query dos veces.
```
db.users.updateOne({ name: "User 3" }, 
{ $set:{ email: "newemailforuser3@gmail.com"}})
```
```
db.users.updateOne({ name: "User 5" }, 
{ $set:{ email: "bestfive@gmail.com"}})
```
* Aumenta en 5 años la edad de un usuario
```
db.users.updateOne({ name: "User 6" }, 
{  $inc: {age: 5  }})
```
* Aumenta en 5 años la edad de todos los usuarios
```
db.users.updateMany({}, 
{  $inc: {age: 5  }})
```

## 1.2.3 OBTENER DATOS

* Seleccionar todas las publicaciones

```
db.post.find()
```
* Selecciona las publicaciones que coincidan con el username indicado
```
db.post.find({username: "username 1"})
```
* Seleccione todos los usuarios con una edad mayor a 20
```
db.users.find({age:{$gt:20}})
```
* Seleccione todos los usuarios con una edad inferior a 23
```
db.users.find({age:{$lt:23}})
```
* Seleccione todos los usuarios que tengan una edad entre 25 y 30 años
```
db.users.find({ $and: [ { age: { $gt:25 } }, { age: { $lt:30 } } ] })
```
* Muestra los usuarios de edad menor a mayor y viceversa
```
db.users.find().sort({age:1}) 
```
```
db.users.find().sort({age:-1}) 
```
* Seleccione el número total de usuarios
```
db.users.find().count()
```
* Seleccione todas las publicaciones de la siguiente manera: Título de la publicación: "título de las publicaciones"

```
db.post.find().forEach((doc)=> {
  print("Título de la publicación: " + doc.title)
})
```
* Selecciona solo 2 usuarios
```
db.users.find().limit(2)
```
* Busca por title 2 publicaciones
```
db.post.createIndex({ title: "text" })
db.post.find({$text: {$search: "Title"}}).limit(2)
```

## 1.2.4 BORRAR DATOS
Elimina a todos los usuarios con una edad mayor a 30
```
db.users.find()
db.users.deleteMany({ age: { $gt:30 }})
db.users.find()
```
## 1.3 Extra

* Seleccione el número total de publicaciones que tienen más de un comentario
```
db.post.find( { comments: {$size: 2} } );
```
* Seleccione la última publicación creada
```
db.post.find({$text: {$search: "Title"}}).sort({date:-1}).limit(1)
```
* Selecciona 5 publicaciones y que sean las últimas creadas
```
db.post.find({$text: {$search: "Title"}}).sort({date:-1}).limit(5)
```
* Elimina todas las publicaciones que tengan más de un comentario
```
db.post.find()
db.post.deleteMany( { comments: {$size: 2} } );
db.post.find()
```

