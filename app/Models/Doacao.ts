import { DateTime } from 'luxon'
import { BaseModel, column} from '@ioc:Adonis/Lucid/Orm'


export default class Doacao extends BaseModel {

 
  @column({ isPrimary: true })
  public id: number

  @column()
  public controle:string

  @column()
  public comboId:number

  @column()
  public ongId:number

  @column()
  public estabelecimentoId:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
