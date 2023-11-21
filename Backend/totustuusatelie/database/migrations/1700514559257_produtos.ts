import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_produto').primary()
      table.string('nome').notNullable()
      table.string('descricao')
      table.string('categoria')
      table.integer('quantidade')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
