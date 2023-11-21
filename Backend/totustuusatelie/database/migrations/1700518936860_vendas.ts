import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
          .integer('id_item_pedido')
          .unsigned()
          .notNullable()
          .references('id_produto')
          .inTable('item_pedidos')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table
          .integer('id_cliente')
          .unsigned()
          .notNullable()
          .references('id_cliente')
          .inTable('clientes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      table.integer('quantidade').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
