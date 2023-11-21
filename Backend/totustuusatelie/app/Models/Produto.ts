import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id_produto: number

  @column()
  public nome: String

  @column()
  public descricao: String

  @column()
  public categoria: String

  @column()
  public quantidade: Number
}
