import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Requisicao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome_fantasia:string

  @column()
  public responsavel:string

  @column()
  public endereco:string

  @column()
  public email:string

  @column()
  public telefone:string

  @column()
  public descricao:string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
