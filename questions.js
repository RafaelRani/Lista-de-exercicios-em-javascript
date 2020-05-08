const express = require("express")

module.exports = {
    questao1(req, res){
        var pontos = req.body

        var d = Math.sqrt(Math.pow((pontos.p2.x - pontos.p1.x), 2) + Math.pow((pontos.p2.y - pontos.p1.y), 2))
        res.json(d)
    },

    questao2(req, res){
        var a = req.body.a
        var b = req.body.b
        var c = req.body.c

        var r = Math.pow((a + b), 2)
        var s = Math.pow((b + c), 2)
        var d = (r + s)/2
        res.json(d)
    }, 

    questao3(req, res){
        var anos = req.body.anos
        var meses = req.body.meses
        var dias = req.body.dias

        dias += meses*30 + anos*365
        res.json(dias)
    },

    questao4(req, res){
        var dias = req.body.dias

        var anos = parseInt(dias/365)
        var meses = parseInt((dias % 365)/30)
        dias = ((dias % 365) % 30) 
        res.json({
            'anos': anos,
            'meses': meses,
            'dias': dias
        })
    }, 

    questao5(req, res){
        var nota1 = req.body.nota1
        var nota2 = req.body.nota2
        var nota3 = req.body.nota3 

        media = (nota1*2 + nota2*3 + nota3*5)/3
        res.json(media)
    },

    questao6(req, res){
        var seg = req.body.seg

        var horas = parseInt(seg/3600)
        var min = parseInt((seg % 3600)/60)
        seg = ((seg % 3600) % 60)
        result = {
            'horas': horas,
            'minutos': min,
            'segundos': seg
        }
        res.json(result)
    },

    questao7(req, res){
        var custoFab = req.body.custo_fabrica

        var percentDist = custoFab * 28 / 100
        var percentImpostos = custoFab * 45 / 100
        var custoCons = custoFab + percentDist + percentImpostos
        res.json(custoCons)
    },

    questao8(req, res){
        var a = req.body.a
        var b = req.body.b
        var c = req.body.c
        var d = req.body.d
        var e = req.body.e
        var f = req.body.f

        var x = (c*e - b*f)/(a*e - b*d)
        var y = (a*f - c*d)/(a*e - b*d)
        res.json({
            'x': x,
            'y': y
        })
    },

    questao9(req, res){
        var n1 = req.body.n1
        var n2 = req.body.n2
        var n3 = req.body.n3

        var mensagem = "aprovado"
        var media = (n1 + n2 + n3)/3

        if(media < 6){
            mensagem = "reprovado"
        }
        res.json({mensagem})
    },

    questao10(req, res){
        var a = req.body.a
        var b = req.body.b
        var c = req.body.c

        var maior = a
        if(b > maior)
            maior = b
        if(c > maior)
            maior = c

        res.json({a,b,c,maior})
    },

    questao11(req, res){
        var n1 = req.body.n1
        var n2 = req.body.n2 

        if((n1 % n2 == 0)||(n2 % n1 == 0)){
            mensagem = "São multiplos!"
        }else{
            mensagem = "Não são múltiplos!"
        }

        res.json({mensagem})
    },

    questao12(req, res){
        var idade = req.body.idade

        var categoria = "idade inválida!"
        if(idade >= 5 && idade <= 7){
            categoria = "infantil A"
        }else if(idade >= 8 && idade <= 10){
            categoria = "infantil B"
        }else if(idade >= 11 && idade <= 13){
            categoria = "juvenil A"
        }else if(idade >= 14 && idade <= 17){
            categoria = "juvenil B"
        }else if(idade >= 18){
            categoria = "adulto"
        }
        
        res.json({categoria})
    }

}