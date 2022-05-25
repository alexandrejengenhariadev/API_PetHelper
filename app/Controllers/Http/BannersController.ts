import  Application  from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Banner from 'App/Models/Banner'

import {v4 as uuidv4} from 'uuid'

export default class BannersController {

    private validationOptions = {
        types: ["image"],
        size: "2mb",
    }
    public async store({request, response}: HttpContextContract){


        const body = request.body()

        const imagem = request.file('imagem',this.validationOptions)
        if (imagem){
            const imageName = `${uuidv4()}.${imagem.extname}`

            await imagem.move(Application.tmpPath('uploads'),{
                name: imageName

            })
            body.imagem = imageName
        }

        const banner = await Banner.create(body)
       response.status(201)
       return{
           message: 'Banner cadastrado com sucesso!',
           data: banner,
       }
    }
    public async index() {
        const banner = await Banner.all()
        return{
            data: banner,
        }
    }
    public async show({params}:HttpContextContract){
        const banner = await Banner.findOrFail(params.id)
        return{
            data: banner,
        }

    }
    public async destroy({params}:HttpContextContract){
        const banner = await Banner.findOrFail(params.id)
        await banner.delete()
        return{
            message: "Banner excluido com sucesso!",
            data: banner,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const banner = await Banner.findOrFail(params.id)
        banner.nome = body.nome
        banner.descricao = body.descricao
        
        
        if (banner.imagem != body.imagem || !banner.imagem){
            
            const imagem = request.file('imagem',this.validationOptions)
            
            if(imagem){
                const imageName = `${uuidv4()}.${imagem.extname}`
                await imagem.move(Application.tmpPath('uploads'), {
                name: imageName,})
            banner.imagem = imageName
         }
    }
    await banner.save()

    return{
        message: "Banner atualizada com sucesso!",
        data: banner,
    }
}
}
