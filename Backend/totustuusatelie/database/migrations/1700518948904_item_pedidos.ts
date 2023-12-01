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
      table.integer('quantidade_pedida')
      table.integer('preco').notNullable()
      table
          .integer('id_venda')
          .unsigned()
          .notNullable()
          .references('id_venda')
          .inTable('vendas')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
