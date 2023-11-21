// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";

export default class ProdutosController {
    public async index(){
        return Produto.all()
    }
}
