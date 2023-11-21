import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import ItemPedido from './ItemPedido'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Cliente)
  public id_cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => ItemPedido)
  public id_item_pedido: BelongsTo<typeof ItemPedido>

  @column()
  public quantidade: Number
}
