const dataset = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Finalizar modal de task",
      tag: 'feature',
      priority: 'urgente',
      content:
        "Finalizar design, desenvolvimento e implementação do modal de tasks para usuário adicionar informações a respeito das mesmas",
    },
    "task-2": {
      id: "task-2",
      title: "Corrigir login",
      tag: 'bug',
      priority: 'média',
      content:
        "Diminuir período de validação com o back-end e corrigir bug do toast notification",
    },
    "task-3": {
      id: "task-3",
      title: "Organizar folha de estilos",
      tag: 'refactor',
      priority: 'alta',
      content:
        "Organizar folha de estilos de acordo com a sintaxe do SASS",
    },
    "task-4": {
      id: "task-4",
      title: "Escrever testes para componentes",
      tag: 'test',
      priority: 'baixa',
      content:
        "Testes para os componentes de modal, tasks e login, assim como para os componentes de notificação",
    },
    "task-5": {
      id: "task-5",
      title: "Pipeline",
      tag: 'build',
      priority: 'urgente',
      content:
        "Configuração da pipeline de desenvolvimento no Github",
    },
    "task-6": {
      id: "task-6",
      title:
        "Desinstalar libs não usadas",
      tag: 'chore',
      priority: 'baixa',
      content:
        "Identificar e desinstalar libs não usadas no produto final mas que foram instaladas durante o desenvolvimento",
    },
  },
  columns: {
    "column-1": { id: "column-1", title: "A fazer", taskIds: ["task-1"] },
    "column-2": {
      id: "column-2",
      title: "Fazendo",
      taskIds: ["task-2", "task-3"],
    },
    "column-3": { id: "column-3", title: "Revisão", taskIds: [] },
    "column-4": { id: "column-4", title: "Finalizado", taskIds: ["task-4"] },
    "column-5": { id: "column-5", title: "Refatorando", taskIds: ["task-5"] },
    "column-6": { id: "column-6", title: "Deploy", taskIds: ["task-6"] },
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6",
  ],
};
export default dataset;
