const express = require('express');
const router = express.Router();
const PerfilService = require('../services/perfil.service');

router.get('/', async (req, res) => {
    try {
        const dados = await PerfilService.montarDadosPortfolio();
        res.render('portfolio', { dados });
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro interno no servidor de banco de dados.");
    }
});

module.exports = router;
