import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ItemPedido from 'App/Models/ItemPedido';

export default class ItensPedidosController {
    public async store({ request, response }: HttpContextContract) {
        try {
            const data = {
                id_produto: request.input("id_produto"),
                quantidade_pedida: request.input("quantidade_pedida"),
                preco: request.input("preco"),
                id_venda: request.input("id_venda"),
            };

            const itemPed = await ItemPedido.create({ ...data });
            return itemPed;
        } catch (error) {
            response.status(500).send("Erro ao salvar novo item pedido!");
        }
    }
}
