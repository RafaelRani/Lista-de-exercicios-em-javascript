const express = require('express')
const questionsController = require('./questionsController')

const routes = express.Router()
//lista de exercícios:
//https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/SeqDecisao/lista1.htm

routes.get('/questao1', questionsController.questao1)
routes.get('/questao2', questionsController.questao2)
routes.get('/questao3', questionsController.questao3)
routes.get('/questao4', questionsController.questao4)
routes.get('/questao5', questionsController.questao5)
routes.get('/questao6', questionsController.questao6)
routes.get('/questao7', questionsController.questao7)
routes.get('/questao8', questionsController.questao8)

module.exports = routes