import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cliente').primary()
      table.string('cpf').unique().notNullable()
      table.string('nome')
      table.string('telefone')
      table.string('endereco')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
