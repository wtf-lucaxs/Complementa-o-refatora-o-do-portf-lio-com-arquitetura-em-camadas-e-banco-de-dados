const db = { 
  perfil: { 
    nomeCompleto: "Lucas Daniel Mendes Kuller", 
    idade: 16, 
    curso: "Técnico em Análise de Sistemas", 
    escola: "Colégio Kennedy" 
  }, 
  habilidades: [ 
    { nome: "JavaScript", nivel: "75%" }, 
    { nome: "C", nivel: "70%" }, 
    { nome: "Python", nivel: "65%" }, 
    { nome: "Desenvolvimento Web", nivel: "80%" },
    { nome: "Inteligência Artificial", nivel: "60%" }
  ], 
  projetos: [ 
    { 
      titulo: "Projetos em JavaScript", 
      descricao: "Criação de scripts e aplicações web aprendidos nos cursos da Alura.", 
      tecnologias: [ "JavaScript", "Web" ] 
    }, 
    { 
      titulo: "Projetos com IA", 
      descricao: "Exploração de IA Generativa para criação de ideias, imagens e melhoria de código.", 
      tecnologias: [ "IA Generativa", "Prompt Engineering" ] 
    }, 
    { 
      titulo: "Projetos Técnicos", 
      descricao: "Desenvolvimento de aplicações e códigos voltados para aprendizado técnico.", 
      tecnologias: [ "C", "Python", "Back-end" ] 
    }
  ], 
  contato: { 
    whatsapp: "5542998236132", 
    telefone: "99823-6132", 
    email: "lucas.kuller@escola.pr.gov.br" 
  } 
}; 

export default db;
