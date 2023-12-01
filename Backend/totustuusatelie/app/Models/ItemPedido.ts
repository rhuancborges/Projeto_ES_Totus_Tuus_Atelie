import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'
import Produto from './Produto'

export default class ItemPedido extends BaseModel {
  @column({})
  public id_produto: number

  @column()
  public quantidade_pedida: Number
  
  @column()
  public preco: Number

  @column({})
  public id_venda: number

  @belongsTo(() => Venda,{
    localKey: 'id_venda'
  })
  public venda: BelongsTo<typeof Venda>

  @belongsTo(() => Produto,{
    localKey: 'id_produto'
  })
  public produto: BelongsTo<typeof Produto>

}
