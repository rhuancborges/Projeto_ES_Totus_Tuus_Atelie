import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente';

export default class ClientesController {
    public async index({}: HttpContextContract) {
        return Cliente.all()
    }
    
    public async store({ request, response }: HttpContextContract) {
        try {
            const data = {
                cpf: request.input("cpf"),
                nome: request.input("nome"),
                telefone: request.input("telefone"),
                endereco: request.input("endereco"),
            };

            const client = await Cliente.create({ ...data });
            return client;
        } catch (error) {
            response.status(500).send("Erro ao salvar novo cliente!");
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        try {
            const client = await Cliente.findOrFail(params.id);
            await client.delete()
            return response.send("Deletado com sucesso!");;
        } catch (error) {
            response.status(500).send("Erro ao excluir cliente!");
        }

    }

    public async update({ request, response, params }: HttpContextContract) {
        const client = await Cliente.findOrFail(params.id);
        if (client) {
            client.cpf = request.input('cpf')
            client.nome = request.input('nome')
            client.telefone = request.input('telefone')
            client.endereco = request.input('endereco')
            await client.save()
            return response.send("Foi alterado com sucesso!");
        } else {
            return response.send("Não foi encotrado o cliente.");
        }
    }
}
