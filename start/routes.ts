/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.group(()=>{
  Route.get('/', async () => {
    return { hello: 'world' }
  })
  Route.resource("/administradors","AdministradorsController").apiOnly()
  Route.resource("/ongs","OngsController").apiOnly()
  Route.resource("/requisicaos","RequisicaosController").apiOnly()
  Route.resource("/banners","BannersController").apiOnly()
  Route.resource("/usuarios","UsuariosController").apiOnly()
  Route.resource("/estabelecimentos","EstabelecimentosController").apiOnly()
  Route.resource("/combos","CombosController").apiOnly()
  Route.resource("/doacaos","DoacaosController").apiOnly()
  


  
 
 
 
  
}).prefix('/api')