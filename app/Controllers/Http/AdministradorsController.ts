import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Administrador from 'App/Models/Administrador'

export default class AdministradorsController {

    public async store({request, response}:HttpContextContract){
        const body = request.body()

        const administrador = await Administrador.create(body)

        response.status(201)

        return {
            message: 'Administrador criado co sucesso!',
            data: administrador,
        }
      
    }
    public async index() {
        const administrador = await Administrador.all()
        return{
            data: administrador,
        }

        
    }
    public async show({params}:HttpContextContract){
        const administrador = await Administrador.findOrFail(params.id)
        return{
            data: administrador,
        }

    }
    public async destroy({params}:HttpContextContract){
        const administrador = await Administrador.findOrFail(params.id)
        await administrador.delete()
        return{
            message: "Admnistrador excluido com sucesso!",
            data: administrador,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const administrador = await Administrador.findOrFail(params.id)
        administrador.nome  = body.nome
        administrador.email = body.email
        administrador.senha = body.senha
      
    await administrador.save()

    return{
        message: "Administrador atualizado com sucesso!",
        data: administrador,
    }
}

    
}
