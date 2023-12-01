import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

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
  
  @hasMany(() => Venda, {
    foreignKey: 'id_cliente'
  })
  public vendas: HasMany<typeof Venda>
}
