import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Estabelecimentos extends BaseSchema {
  protected tableName = 'estabelecimentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome_fantasia')
      table.integer('cnpj')
      table.string('rua')
      table.integer('numero')
      table.string('cidade')
      table.string('estado')
      table.string('telefone')
      table.string('email')
      table.string('responsavel')
      

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
