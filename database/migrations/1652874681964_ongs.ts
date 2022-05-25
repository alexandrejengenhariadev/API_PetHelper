import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ongs extends BaseSchema {
  protected tableName = 'ongs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_fantasia')
      table.string('responsavel')
      table.string('rua')
      table.integer('numero')
      table.string('cidade')
      table.string('estado')
      table.integer('telefone')
      table.string('email')
      table.string('documento')
      table.string('logotipo')

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
