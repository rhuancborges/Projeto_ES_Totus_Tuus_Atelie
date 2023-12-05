import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Venda from './Venda'

export default class ItemPedido extends BaseModel {
  @column()
  public id_produto: number

  @column()
  public quantidade_total: Number
  
  @column()
  public preco_total: Number

  @column()
  public id_venda: number

  @belongsTo(() => Produto,{
    localKey: 'id_produto'
  })
  public produto: BelongsTo<typeof Produto>

  @belongsTo(() => Venda,{
    localKey: 'id_venda'
  })
  public venda: BelongsTo<typeof Venda>
}
