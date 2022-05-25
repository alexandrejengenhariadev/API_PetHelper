import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Combo from 'App/Models/Combo'

export default class CombosController {

    public async store({request, response}:HttpContextContract){
        const body = request.body()

        const combo = await Combo.create(body)

        response.status(201)

        return {
            message: 'Combo criado com sucesso!',
            data: combo,
        }
      
    }
    public async index() {
        const combo = await Combo.all()
        return{
            data: combo,
        }

        
    }
    public async show({params}:HttpContextContract){
        const combo = await Combo.findOrFail(params.id)
        return{
            data: combo,
        }

    }
    public async destroy({params}:HttpContextContract){
        const combo = await Combo.findOrFail(params.id)
        await combo.delete()
        return{
            message: "Combo excluido com sucesso!",
            data: combo,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const combo = await Combo.findOrFail(params.id)
        combo.combo  = body.combo
        combo.valor = body.valor
        
      
    await combo.save()

    return{
        message: "Combo atualizado com sucesso!",
        data: combo,
    }
}



}
