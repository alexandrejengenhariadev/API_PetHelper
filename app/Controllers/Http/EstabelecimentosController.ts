import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Estabelecimento from 'App/Models/Estabelecimento'

export default class EstabelecimentosController {
    public async store({request, response}:HttpContextContract){
        const body = request.body()
        const estabelecimento = Estabelecimento.create(body)
        response.status(201)

        return {
            message: 'Estabelecimento criado co sucesso!',
            data: estabelecimento,
        }

    }
    public async index() {
        const estabelecimento = await Estabelecimento.all()
        return{
            data: estabelecimento,
        }

        
    }
    public async show({params}:HttpContextContract){
        const estabelecimento = await Estabelecimento.findOrFail(params.id)
        return{
            data: estabelecimento,
        }

    }
    public async destroy({params}:HttpContextContract){
        const estabelecimento = await Estabelecimento.findOrFail(params.id)
        await estabelecimento.delete()
        return{
            message: "Estabelecimento excluido com sucesso!",
            data: estabelecimento,
        }

    }
    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const estabelecimento = await Estabelecimento.findOrFail(params.id)
        estabelecimento.nome_fantasia  = body.nome_fantasia
        estabelecimento.cnpj = body.cnpj
        estabelecimento.rua = body.rua
        estabelecimento.cidade = body.cidade
        estabelecimento.estado = body.estado
        estabelecimento.telefone = body.telefone
        estabelecimento.email = body.email
        estabelecimento.responsavel = body.responsavel
      
    await estabelecimento.save()

    return{
        message: "Estabelecimento atualizado com sucesso!",
        data: estabelecimento,
    }
}





}
