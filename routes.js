const express = require('express')
const questions = require('./questions')

const routes = express.Router()
//lista de exercícios:
//https://www.inf.pucrs.br/~pinho/LaproI/Exercicios/SeqDecisao/lista1.htm

routes.get('/questao1', questions.questao1)
routes.get('/questao2', questions.questao2)
routes.get('/questao3', questions.questao3)
routes.get('/questao4', questions.questao4)
routes.get('/questao5', questions.questao5)
routes.get('/questao6', questions.questao6)
routes.get('/questao7', questions.questao7)
routes.get('/questao8', questions.questao8)
routes.get('/questao9', questions.questao9)
routes.get('/questao10', questions.questao10)
routes.get('/questao11', questions.questao11)
routes.get('/questao12', questions.questao12)
routes.get('/questao13', questions.questao13)
routes.get('/questao14', questions.questao14)


module.exports = routes