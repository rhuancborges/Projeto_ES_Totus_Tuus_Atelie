import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_venda').primary()
      table
          .integer('id_cliente')
          .unsigned()
          .notNullable()
          .references('id_cliente')
          .inTable('clientes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.integer('quantidade_total').notNullable()
      table.integer('preco_total')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
