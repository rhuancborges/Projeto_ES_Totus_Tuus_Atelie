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

Route.get('/', 'HomeController.index')
Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')

Route.group(() => {
    Route.get('/produto/:id', 'ProdutosController.index')
    Route.get('/produto','ProdutosController.todos')
    Route.post('/produto', 'ProdutosController.store')
    Route.patch('/produto/:id', 'ProdutosController.update')
    Route.delete('/produto/:id', 'ProdutosController.destroy')

    Route.post('/cliente', 'ClientesController.store')
    Route.patch('/cliente/:id', 'ClientesController.update')
    Route.delete('/cliente/:id', 'ClientesController.destroy')

    Route.post('/itempedido', 'ItensPedidosController.store')

    Route.get('/venda/:id', 'VendasController.index')
    Route.post('/venda', 'VendasController.store')
    Route.patch('/venda/:id', 'VendasController.update')
    Route.delete('/venda/:id', 'VendasController.destroy')
}).middleware('auth')

