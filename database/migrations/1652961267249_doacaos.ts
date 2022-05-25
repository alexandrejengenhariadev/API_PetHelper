import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Doacaos extends BaseSchema {
  protected tableName = 'doacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('controle')

      table.integer('combo_id').unsigned().references('combos.id')
      table.integer('ong_id').unsigned().references('ongs.id')
      table.integer('estabelecimento_id').unsigned().references('estabelecimentos.id')

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
