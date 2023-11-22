import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id_produto: number

  @column()
  public quantidade_pedida: Number

  @column()
  public preco: Number

  @belongsTo(() => Venda)
  public id_venda: BelongsTo<typeof Venda>
}
