import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'

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
  public quantidade_estoque: Number

  @manyToMany(() => Venda, {
    relatedKey: 'id_venda',
    pivotTable: 'item_pedidos',
    pivotForeignKey: 'id_produto',
    pivotRelatedForeignKey: 'id_venda',
    pivotColumns: ['quantidade_pedida', 'preco'],
  })
  public vendas: ManyToMany<typeof Venda>
}
