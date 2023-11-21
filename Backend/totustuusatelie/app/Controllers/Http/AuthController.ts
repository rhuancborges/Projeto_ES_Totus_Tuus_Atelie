import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
    public async login({ request, response, auth }: HttpContextContract) {
        const name = request.input('name')
        const password = request.input('password')
        try {
            const token = await auth.attempt(name, password)
            return token.toJSON()
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }

    public async register({ request, response }: HttpContextContract) {
        const validations = await schema.create({
            name: schema.string({}, []),
            password: schema.string({}, [
                rules.confirmed()
            ])
        })

        const info = await request.validate({schema:validations})

        const user = await User.create(info)
        return response.created(user)
    }
}
