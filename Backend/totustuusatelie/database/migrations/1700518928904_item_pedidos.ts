import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'item_pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
          .integer('id_produto')
          .unsigned()
          .notNullable()
          .references('id_produto')
          .inTable('produtos')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
          .primary()
      table.integer('quantidade')
      table.integer('preco').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
