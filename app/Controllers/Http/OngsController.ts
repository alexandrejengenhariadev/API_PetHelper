import  Application  from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ong from 'App/Models/Ong'
import {v4 as uuidv4} from 'uuid'

export default class OngsController {

    private validationOptions = {
        types: ["image"],
        size: "2mb",
    }
    public async store({request, response}: HttpContextContract){


        const body = request.body()

        const logotipo = request.file('logotipo',this.validationOptions)
        if (logotipo){
            const imageName = `${uuidv4()}.${logotipo.extname}`

            await logotipo.move(Application.tmpPath('uploads'),{
                name: imageName

            })
            body.logotipo = imageName
        }

        const ong = await Ong.create(body)
       response.status(201)
       return{
           message: 'Ong cadastrada com sucesso!',
           data: ong,
       }
    }
    public async index() {
        const ongs = await Ong.all()
        return{
            data: ongs,
        }
    }
    public async show({params}:HttpContextContract){
        const ongs = await Ong.findOrFail(params.id)
        return{
            data: ongs,
        }

    }
    public async destroy({params}:HttpContextContract){
        const ong = await Ong.findOrFail(params.id)
        await ong.delete()
        return{
            message: "Ong excluida com sucesso!",
            data: ong,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const ong = await Ong.findOrFail(params.id)
        ong.nome_fantasia  = body.nome_fantasia
        ong.responsavel = body.responsavel
        ong.rua = body.rua
        ong.cidade = body.cidade
        ong.estado = body.estado
        ong.telefone = body.telefone
        ong.email = body.email
        ong.documento = body.documento
        
        if (ong.logotipo != body.logotipo || !ong.logotipo){
            
            const logotipo = request.file('logotipo',this.validationOptions)
            
            if(logotipo){
                const imageName = `${uuidv4()}.${logotipo.extname}`
                await logotipo.move(Application.tmpPath('uploads'), {
                name: imageName,})
            ong.logotipo = imageName
         }
    }
    await ong.save()

    return{
        message: "Ong atualizada com sucesso!",
        data: ong,
    }
}
}
