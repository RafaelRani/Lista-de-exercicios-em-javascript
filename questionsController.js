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
    }



}