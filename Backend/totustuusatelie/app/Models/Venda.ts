import { BaseModel, BelongsTo, ManyToMany, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Produto from './Produto'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id_venda: number

  @column()
  public id_cliente: number

  @column()
  public quantidade_total: Number
  
  @column()
  public preco_total: Number

  @belongsTo(() => Cliente,{
    localKey: 'id_cliente'
  })
  public cliente: BelongsTo<typeof Cliente>

  @manyToMany(() => Produto, {
    relatedKey: 'id_produto',
    pivotTable: 'item_pedidos',
    pivotForeignKey: 'id_venda',
    pivotRelatedForeignKey: 'id_produto',
    pivotColumns: ['quantidade_pedida', 'preco'],
  })
  public produtos: ManyToMany<typeof Produto>
}
