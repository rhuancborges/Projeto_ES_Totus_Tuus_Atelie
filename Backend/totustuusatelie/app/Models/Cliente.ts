import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id_cliente: number

  @column()
  public nome: String

  @column()
  public cpf: String

  @column()
  public telefone: String

  @column()
  public endereco: String
}
