import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Estabelecimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public nome_fantasia: string

  @column()
  public cnpj: number

  @column()
  public rua: string

  @column()
  public numero: number

  @column()
  public cidade: string

  @column()
  public estado: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public responsavel: string



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
