import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Venda from 'App/Models/Venda';

export default class VendasController {
    public async index({ params }: HttpContextContract) {

        const id_buscado = params.id;

        const vendas = await Venda
            .query()
            .where('id_venda', id_buscado);

        return vendas;
    }

    public async store({ request, response }: HttpContextContract) {
        try {
            const data = {
                id_cliente: request.input("id_cliente"),
                quantidade_total: request.input("quantidade_total"),
                preco_total: request.input("preco_total"),
            };

            const venda = await Venda.create({ ...data });
            const produtos = await request.input("produtos");

            for (var index = 0; index < produtos.length; index++) {
                await venda.related('produtos').attach([produtos[index].id_produto]);
            }

            return venda;
        } catch (error) {
            response.status(500).send("Erro ao salvar a nova venda!");
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const venda = await Venda.findOrFail(params.id);
            await venda.delete()
            return response.send("Deletado com sucesso!");
        } catch (error) {
            response.status(500).send("Erro ao excluir a venda!");
        }

    }

    public async update({ request, response, params }: HttpContextContract) {
        const venda = await Venda.findOrFail(params.id);
        try {
            if (venda) {
                await venda.related('produtos').detach();
                const produtos = await request.input("produtos");

                for (var index = 0; index < produtos.length; index++) {
                    await venda.related('produtos').attach([produtos[index].id_produto]);
                }

                venda.id_cliente = request.input('id_cliente')
                venda.quantidade_total = request.input('quantidade_total')
                venda.preco_total   = request.input('preco_total')
                await venda.save()
                return response.send("Foi alterado com sucesso!");
            } else {
                return response.send("Não foi encotrado a venda.");
            }
        } catch (error) {
            response.status(500).send("Erro ao alterar a venda!");
        }
        
    }
}
