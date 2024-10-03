import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
          strong: 'Estagiário Full-stack',
          p: 'SBM TECHNOLOGY | Mai 2024 - Atual'
      },
      text: '<p>Participação em treinamento intensivo Full-stack, focado em tecnologias como Java/Spring, Angular (PrimeNG), JavaScript/TypeScript, HTML/CSS, MySQL e Postgresql e Jira.</p> <p>Desenvolvimento de projetos integrados com foco em aplicações CRUD, envolvendo back-end, front-end e banco de dados.</p> <p>Realização de testes para assegurar a qualidade e estabilidade das aplicações.</p> <p>Atuação em metodologias ágeis, com organização de Sprints semanais utilizando Jira para entregas contínuas.</p> <p>Implementação de melhorias em ambientes de desenvolvimento, otimizando processos e fluxos de trabalho.</p>'
  },
    {
      summary: {
        strong: 'Estagiário Web',
        p: 'Agência Formiga Digital | Mar 2024 - Mai 2024',
      },
      text: '<p>Desenvolvimento de websites utilizando WordPress, HTML e CSS.</p> <p>Suporte técnico, incluindo criação de e-mails.</p> <p>Gerenciamento e hospedagem de sites em plataformas como HostGator, Hostinger BR e Cloudflare.</p> <p>Criação de websites, blogs e lojas virtuais.</p> <p>Utilização do Trello para planejamento e execução de tarefas.</p>',
    },
    {
      summary: {
        strong: 'Freelancer de TI',
        p: 'JBM Quality Software Services | Mai 2023 - Fev 2024',
      },
      text: '<p>Participação no planejamento e execução de tarefas, utilizando Trello para organização.</p> <p>Desenvolvimento de estratégias em WordPress, incluindo a seleção de templates, plugins e personalizações conforme a finalidade do site.</p> <p>Realização de testes automatizados e manuais, seguindo a metodologia BDD, com registro de casos de teste e evidências.</p> <p>Comunicação constante com líderes sobre o progresso das tarefas e identificação de impedimentos.</p> <p>Experiência com requisições API Rest utilizando Postman.</p> <p>Passagem de conhecimento sobre WordPress para a equipe e contribuição para avaliações pós-ciclo.</p>',
    },
    {
      summary: {
        strong: 'Principais Habilidades Técnicas',
        p: 'Ao longo da vida',
      },
      text: '<p><strong>Front-end:</strong> HTML5, CSS3, JavaScript, TypeScript, Angular, PrimeNG, Angular Material, WordPress</p> <p><strong>Back-end:</strong> Java/Spring, Node.js, MySQL e PostgreSQL</p> <p><strong>Ferramentas e Metodologias:</strong> GitFlow, Jira, Trello, Scrum, BDD, Postman</p> <p><strong>Outras Tecnologias:</strong> VsCode, Eclipse, Intellij ef Trello</p>',
    },
  ]);
}
