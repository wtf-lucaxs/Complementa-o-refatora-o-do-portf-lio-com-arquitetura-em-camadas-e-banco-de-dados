const db = require('../database/conexao');

class PortfolioRepository {
    async obterDadosCompletos() {
        const query = `
            SELECT 
                p.id AS perfil_id, p.nome, p.email, p.descricao,
                c.id AS curso_id, c.nome AS curso_nome, c.horas,
                cert.id AS certificado_id, cert.titulo, cert.ano
            FROM perfil p
            LEFT JOIN cursos c ON p.id = c.fk_perfil
            LEFT JOIN certificados cert ON p.id = cert.fk_perfil
            WHERE p.id = 1
        `;
        const [rows] = await db.query(query);
        return rows;
    }
}

module.exports = new PortfolioRepository();
