import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ItemPedido from 'App/Models/ItemPedido'

export default class ItensPedidosController {
    public async index({}: HttpContextContract) {
        const pedidos = await ItemPedido.query()
        return pedidos;
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            const data = {
                id_produto: request.input("id_produto"),
                id_venda: request.input("id_venda"),
                preco: request.input("preco"),
                quantidade_pedida: request.input("quantidade_pedida"),
            };

            const produto = await ItemPedido.create({ ...data });
            return produto;
        } catch (error) {
            response.status(500).send("Erro ao salvar novo produto!");
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            await ItemPedido.query().where('id_produto', params.idProd).where('id_venda', params.idVen).del();

            return response.send("Deletado com sucesso!");;
        } catch (error) {
            response.status(500).send("Erro ao excluir produto!");
        }
    }

    public async update({ request, response, params }: HttpContextContract) {
        try {
            await ItemPedido.query().where('id_produto', params.idProd).where('id_venda', params.idVen).update({preco: request.input("preco"), quantidade_pedida: request.input("quantidade_pedida")});
            
            return response.send("Foi alterado com sucesso!");
        } catch (error) {
            return response.send("Não foi encotrado o produto.");
        }
    }
}
