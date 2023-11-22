import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cliente').primary()
      table.string('cpf', 11).unique().notNullable()
      table.string('nome', 50)
      table.string('telefone', 11)
      table.string('endereco', 50)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
