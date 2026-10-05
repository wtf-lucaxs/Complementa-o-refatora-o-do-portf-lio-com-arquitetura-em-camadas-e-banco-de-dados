const PortfolioRepository = require('../repositories/portfolio.repository');

class PerfilService {
    async montarDadosPortfolio() {
        try {
            // Tenta buscar do banco de dados primeiro
            const linhas = await PortfolioRepository.obterDadosCompletos();
            
            if (linhas && linhas.length > 0) {
                const resultado = {
                    perfil: { nome: linhas[0].nome, email: linhas[0].email, descricao: linhas[0].descricao },
                    cursos: [],
                    certificados: []
                };
                const cursosAdicionados = new Set();
                const certAdicionados = new Set();

                linhas.forEach(linha => {
                    if (linha.curso_id && !cursosAdicionados.has(linha.curso_id)) {
                        cursosAdicionados.add(linha.curso_id);
                        resultado.cursos.push({ nome: linha.curso_nome, horas: linha.horas });
                    }
                    if (linha.certificado_id && !certAdicionados.has(linha.certificado_id)) {
                        certAdicionados.add(linha.certificado_id);
                        resultado.certificados.push({ titulo: linha.titulo, ano: linha.ano });
                    }
                });
                return resultado;
            }
        } catch (error) {
            console.log("⚠️ Banco travado por senha. Carregando dados de segurança para o teste local...");
        }

        // DADOS DE SEGURANÇA: Se o banco falhar, o seu site carrega isso aqui!
        return {
            perfil: {
                nome: "Lucas Daniel Mendes Kuller",
                email: "lucas.daniel@escola.com",
                descricao: "Estudante Técnico em Análise de Sistemas no Colégio Kennedy | Desenvolvedor Front-end | Entusiasta de IA"
            },
            cursos: [
                { nome: "C: conhecendo a Linguagem das Linguagens", horas: 8 },
                { nome: "Praticando Python: laços for e while", horas: 2 },
                { nome: "Praticando Python: condicionais if, elif e else", horas: 2 }
            ],
            certificados: [
                { titulo: "Back-end - Formação Alura", ano: 2025 }
            ]
        };
    }
}

module.exports = new PerfilService();
