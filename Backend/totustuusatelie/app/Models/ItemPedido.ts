import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id_produto: number

  @column()
  public quantidade: Number
  
  @column()
  public preco: Number
}
