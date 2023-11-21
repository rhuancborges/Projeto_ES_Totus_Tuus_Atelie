import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto";

export default class ProdutosController {
    public async index({ params }: HttpContextContract) {

        const id_buscado = params.id;

        const produtos = await Produto
            .query()
            .where('id_produto', id_buscado);

        return produtos;
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            const data = {
                nome: request.input("nome"),
                descricao: request.input("descricao"),
                categoria: request.input("categoria"),
                quantidade: request.input("quantidade"),
            };

            const produto = await Produto.create({ ...data });
            return produto;
        } catch (error) {
            response.status(500).send("Erro ao salvar novo produto!");
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const produto = await Produto.findOrFail(params.id);
            await produto.delete()
            return response.send("Deletado com sucesso!");;
        } catch (error) {
            response.status(500).send("Erro ao excluir produto!");
        }

    }

    public async update({ request, response, params }: HttpContextContract) {
        const prod = await Produto.findOrFail(params.id);
        if (prod) {
            prod.nome = request.input('nome')
            prod.descricao = request.input('descricao')
            prod.categoria = request.input('categoria')
            prod.quantidade = request.input('quantidade')
            await prod.save()
            return response.send("Foi alterado com sucesso!");
        } else {
            return response.send("Não foi encotrado o produto.");
        }
    }
}
