import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id_venda: number

  @belongsTo(() => Cliente)
  public id_cliente: BelongsTo<typeof Cliente>

  @column()
  public quantidade_total: Number

  @column()
  public preco_total: Number
}
