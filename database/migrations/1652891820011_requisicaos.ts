import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Requisicaos extends BaseSchema {
  protected tableName = 'requisicaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_fantasia')
      table.string('responsavel')
      table.string('endereco')
      table.string('email')
      table.string('telefone')
      table.string('descricao')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
