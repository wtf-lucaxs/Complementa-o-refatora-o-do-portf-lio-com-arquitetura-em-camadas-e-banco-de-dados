const PerfilService = require('../services/perfil.service');

class PortfolioController {
    async renderPortfolio(req, res) {
        try {
            const dados = await PerfilService.montarDadosPortfolio();
            res.render('portfolio', { dados });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro interno");
        }
    }
}

const portfolioController = new PortfolioController();
module.exports = portfolioController;
