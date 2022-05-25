import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Requisicao from 'App/Models/Requisicao'

export default class RequisicaosController {

    public async store({request, response}:HttpContextContract){
        const body = request.body()

        const requisicao = await Requisicao.create(body)

        response.status(201)

        return {
            message: 'Requisicao criada com sucesso!',
            data: requisicao,
        }
      
    }
    public async index() {
        const requisicao = await Requisicao.all()
        return{
            data: requisicao,
        }

        
    }
    public async show({params}:HttpContextContract){
        const requisicao = await Requisicao.findOrFail(params.id)
        return{
            data: requisicao,
        }

    }
    public async destroy({params}:HttpContextContract){
        const requisicao = await Requisicao.findOrFail(params.id)
        await requisicao.delete()
        return{
            message: "Requisição excluida com sucesso!",
            data: requisicao,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const requisicao = await Requisicao.findOrFail(params.id)
        requisicao.nome_fantasia  = body.nome_fantasia
        requisicao.responsavel = body.responsavel
        requisicao.endereco = body.endereco
        requisicao.email = body.email
        requisicao.telefone = body.telefone
        requisicao.descricao = body.descricao
       
      
    await requisicao.save()

    return{
        message: "Requisição atualizada com sucesso!",
        data: requisicao,
    }
}

    
}
