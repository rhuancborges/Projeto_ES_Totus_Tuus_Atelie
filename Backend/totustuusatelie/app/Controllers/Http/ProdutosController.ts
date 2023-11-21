import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";

export default class ProdutosController {
    public async index({params}:HttpContextContract){

        const {id_buscado} = params;
        
        const produtos = await Produto
            .query()
            .where('id_produto', id_buscado)

        return produtos;
    }

    public async store({request, response} : HttpContextContract){      
        try{
            const data = {
                nome: request.input("nome"),
                descricao: request.input("descricao"),
                categoria: request.input("categoria"),
                quantidade: request.input("quantidade"),
            };
            
            const produto = await Produto.create({...data});
            return produto;
        } catch(error){
            response.status(500).send("Erro ao salvar novo produto!");
        }
    }

    public async destroy({params, response} : HttpContextContract){
        try{
            const produto = await Produto.findOrFail(params.id);
            await produto.delete()
            return produto;
        } catch(error){
            response.status(500).send("Erro ao excluir produto!");
        }

    }
}
