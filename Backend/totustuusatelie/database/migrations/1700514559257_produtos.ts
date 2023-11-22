import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_produto').primary()
      table.string('nome', 20).unique().notNullable()
      table.string('descricao', 140).notNullable()
      table.string('categoria', 20)
      table.integer('quantidade_estoque')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
