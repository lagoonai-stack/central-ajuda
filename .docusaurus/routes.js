import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '150'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b70'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '94f'),
            routes: [
              {
                path: '/documentacao/ajustes/',
                component: ComponentCreator('/documentacao/ajustes/', '9c5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/conta/',
                component: ComponentCreator('/documentacao/ajustes/conta/', '133'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/conta/dados-da-conta',
                component: ComponentCreator('/documentacao/ajustes/conta/dados-da-conta', '7e6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/conta/horario-de-atendimento',
                component: ComponentCreator('/documentacao/ajustes/conta/horario-de-atendimento', '4dc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/conta/processo-de-dar-permissao-para-reconectar-o-numero',
                component: ComponentCreator('/documentacao/ajustes/conta/processo-de-dar-permissao-para-reconectar-o-numero', '345'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/conta/remover-canal-de-atendimento',
                component: ComponentCreator('/documentacao/ajustes/conta/remover-canal-de-atendimento', '921'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/equipes/',
                component: ComponentCreator('/documentacao/ajustes/equipes/', '5ff'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/equipes/cadastrar-equipe',
                component: ComponentCreator('/documentacao/ajustes/equipes/cadastrar-equipe', '97a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/equipes/distribuicao-e-transbordo-de-atendimento',
                component: ComponentCreator('/documentacao/ajustes/equipes/distribuicao-e-transbordo-de-atendimento', 'f5f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/equipes/relacao-de-acessos-x-conversas',
                component: ComponentCreator('/documentacao/ajustes/equipes/relacao-de-acessos-x-conversas', '362'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/equipes/tipo-de-associacao-usuario-x-supervisor',
                component: ComponentCreator('/documentacao/ajustes/equipes/tipo-de-associacao-usuario-x-supervisor', 'aa3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/integracoes/',
                component: ComponentCreator('/documentacao/ajustes/integracoes/', '091'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/integracoes/botao-do-whatsapp-e-tag-de-rastreamento',
                component: ComponentCreator('/documentacao/ajustes/integracoes/botao-do-whatsapp-e-tag-de-rastreamento', 'e50'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/', 'ee1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/como-criar-modelo-de-mensagem',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/como-criar-modelo-de-mensagem', 'd49'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-conversa-cobranca',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-conversa-cobranca', '2d0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-troca-de-mensagem',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-troca-de-mensagem', '3f8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/editar-modelos-de-mensagem',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/editar-modelos-de-mensagem', '9b8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/mensagens-com-botoes-imagem-video-e-documento',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/mensagens-com-botoes-imagem-video-e-documento', 'ba2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/parametros-e-personalizacao-de-mensagens',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/parametros-e-personalizacao-de-mensagens', '3bf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/modelo-de-mensagens/tipos-de-modelo-de-mensagem',
                component: ComponentCreator('/documentacao/ajustes/modelo-de-mensagens/tipos-de-modelo-de-mensagem', '5f0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/usuarios/',
                component: ComponentCreator('/documentacao/ajustes/usuarios/', 'ccc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/usuarios/cadastrar-usuarios',
                component: ComponentCreator('/documentacao/ajustes/usuarios/cadastrar-usuarios', 'd7a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/usuarios/editar-foto-do-usuario',
                component: ComponentCreator('/documentacao/ajustes/usuarios/editar-foto-do-usuario', '959'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/ajustes/usuarios/tipos-de-perfis-de-usuarios',
                component: ComponentCreator('/documentacao/ajustes/usuarios/tipos-de-perfis-de-usuarios', 'abd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/',
                component: ComponentCreator('/documentacao/apps/', 'b19'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/', 'e62'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/aba-configuracoes',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/aba-configuracoes', '4b8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/habilidades',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/habilidades', 'b64'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/indicador-de-digitando',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/indicador-de-digitando', 'cb2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/novo-agente',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/novo-agente', '47f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/simular-tempo-de-digitacao',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/simular-tempo-de-digitacao', '7ae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/agentes-inteligentes/versoes-dos-agentes',
                component: ComponentCreator('/documentacao/apps/agentes-inteligentes/versoes-dos-agentes', '5bb'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/',
                component: ComponentCreator('/documentacao/apps/campanha/', '6be'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/arquivar-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/arquivar-campanha', 'bab'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/consultar-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/consultar-campanha', 'f04'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/criar-modelo-de-mensagem-para-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/criar-modelo-de-mensagem-para-campanha', 'f69'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/criar-nova-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/criar-nova-campanha', '4f3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/exportar-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/exportar-campanha', '523'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/gestao-de-permissoes-em-campanhas',
                component: ComponentCreator('/documentacao/apps/campanha/gestao-de-permissoes-em-campanhas', 'f0a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/campanha/riscos-e-custos-da-campanha',
                component: ComponentCreator('/documentacao/apps/campanha/riscos-e-custos-da-campanha', 'd46'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/carteirizacao-de-contatos/',
                component: ComponentCreator('/documentacao/apps/carteirizacao-de-contatos/', '7af'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/carteirizacao-de-contatos/habilitar-o-app',
                component: ComponentCreator('/documentacao/apps/carteirizacao-de-contatos/habilitar-o-app', '3f0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chat-interno/',
                component: ComponentCreator('/documentacao/apps/chat-interno/', '682'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chat-interno/ativar-e-desativar-funcionalidade',
                component: ComponentCreator('/documentacao/apps/chat-interno/ativar-e-desativar-funcionalidade', '2b5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chat-interno/tipos-de-conversa-usuario-x-equipe-x-todos',
                component: ComponentCreator('/documentacao/apps/chat-interno/tipos-de-conversa-usuario-x-equipe-x-todos', 'eb6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/',
                component: ComponentCreator('/documentacao/apps/chatbot/', 'e99'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/adicionar-remover-etiquetas-do-contato',
                component: ComponentCreator('/documentacao/apps/chatbot/adicionar-remover-etiquetas-do-contato', '234'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/copiar-e-colar-do-chatbot-na-plataforma',
                component: ComponentCreator('/documentacao/apps/chatbot/copiar-e-colar-do-chatbot-na-plataforma', '17e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/criando-um-chatbot',
                component: ComponentCreator('/documentacao/apps/chatbot/criando-um-chatbot', '2b1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/enviar-mensagem',
                component: ComponentCreator('/documentacao/apps/chatbot/enviar-mensagem', '9d5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/enviar-pergunta',
                component: ComponentCreator('/documentacao/apps/chatbot/enviar-pergunta', '316'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/gatilhos',
                component: ComponentCreator('/documentacao/apps/chatbot/gatilhos', 'acf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/chatbot/tipos-de-chatbot',
                component: ComponentCreator('/documentacao/apps/chatbot/tipos-de-chatbot', 'eae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/distribuicao-de-atendimentos/',
                component: ComponentCreator('/documentacao/apps/distribuicao-de-atendimentos/', 'd91'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/distribuicao-de-atendimentos/',
                component: ComponentCreator('/documentacao/apps/distribuicao-de-atendimentos/', 'caf'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/grupos-do-whatsapp/',
                component: ComponentCreator('/documentacao/apps/grupos-do-whatsapp/', 'f50'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/grupos-do-whatsapp/habilitar-o-app',
                component: ComponentCreator('/documentacao/apps/grupos-do-whatsapp/habilitar-o-app', '885'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/mensagens-agendadas/',
                component: ComponentCreator('/documentacao/apps/mensagens-agendadas/', '768'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/mensagens-agendadas/agendamentos-pelo-crm',
                component: ComponentCreator('/documentacao/apps/mensagens-agendadas/agendamentos-pelo-crm', 'e42'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/mensagens-agendadas/como-gerenciar-os-agendamentos',
                component: ComponentCreator('/documentacao/apps/mensagens-agendadas/como-gerenciar-os-agendamentos', '7a8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/mensagens-agendadas/modelo-para-mensagens-agendadas',
                component: ComponentCreator('/documentacao/apps/mensagens-agendadas/modelo-para-mensagens-agendadas', '266'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/pagamentos',
                component: ComponentCreator('/documentacao/apps/pagamentos', '0c6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/',
                component: ComponentCreator('/documentacao/apps/sequencia/', '9c3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/adicionar-etapa',
                component: ComponentCreator('/documentacao/apps/sequencia/adicionar-etapa', '171'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/concluidos',
                component: ComponentCreator('/documentacao/apps/sequencia/concluidos', '14f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/contatos-na-sequencia',
                component: ComponentCreator('/documentacao/apps/sequencia/contatos-na-sequencia', '2e6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/criar-sequencia',
                component: ComponentCreator('/documentacao/apps/sequencia/criar-sequencia', '2e0'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/desabilitar-excluir-sequencia',
                component: ComponentCreator('/documentacao/apps/sequencia/desabilitar-excluir-sequencia', '85c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/incluir-contato-na-sequencia',
                component: ComponentCreator('/documentacao/apps/sequencia/incluir-contato-na-sequencia', '928'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/remover-contatos',
                component: ComponentCreator('/documentacao/apps/sequencia/remover-contatos', '358'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/sequencia/sequencias-via-api',
                component: ComponentCreator('/documentacao/apps/sequencia/sequencias-via-api', 'e56'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/tempo-de-seguranca',
                component: ComponentCreator('/documentacao/apps/tempo-de-seguranca', 'a73'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/apps/transcricao-de-audio-com-ia',
                component: ComponentCreator('/documentacao/apps/transcricao-de-audio-com-ia', '99b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/',
                component: ComponentCreator('/documentacao/atendimento/', '577'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/comece-aqui/',
                component: ComponentCreator('/documentacao/atendimento/comece-aqui/', '880'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/comece-aqui/abrir-dados-do-contato',
                component: ComponentCreator('/documentacao/atendimento/comece-aqui/abrir-dados-do-contato', '516'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/comece-aqui/acessando-pela-web',
                component: ComponentCreator('/documentacao/atendimento/comece-aqui/acessando-pela-web', '29d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/comece-aqui/acessando-pelo-app',
                component: ComponentCreator('/documentacao/atendimento/comece-aqui/acessando-pelo-app', '1dd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/', '08f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/agendamentos-pelo-atendimento',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/agendamentos-pelo-atendimento', '7d5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-audio',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-audio', '80f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-documento',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-documento', '43f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-imagem',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-imagem', '4ae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-mensagem-rapida',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-mensagem-rapida', '4ed'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-modelo-de-mensagem',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-modelo-de-mensagem', 'bc6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/enviar-video',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/enviar-video', '33c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/gravar-audio',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/gravar-audio', '397'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/iniciar-chatbot',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/iniciar-chatbot', 'bb7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/notas-internas-na-conversa-da-plataforma',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/notas-internas-na-conversa-da-plataforma', '72d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/ferramentas-de-interacao/solicitar-pagamento',
                component: ComponentCreator('/documentacao/atendimento/ferramentas-de-interacao/solicitar-pagamento', 'b17'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/gestao-de-grupos-no-atendimento/',
                component: ComponentCreator('/documentacao/atendimento/gestao-de-grupos-no-atendimento/', '597'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/gestao-de-grupos-no-atendimento/api-nao-oficial',
                component: ComponentCreator('/documentacao/atendimento/gestao-de-grupos-no-atendimento/api-nao-oficial', 'f2c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/gestao-de-grupos-no-atendimento/api-oficial',
                component: ComponentCreator('/documentacao/atendimento/gestao-de-grupos-no-atendimento/api-oficial', 'c2b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/gestao-de-grupos-no-atendimento/gerenciar-grupos-arquivar-bloquear-sair-excluir',
                component: ComponentCreator('/documentacao/atendimento/gestao-de-grupos-no-atendimento/gerenciar-grupos-arquivar-bloquear-sair-excluir', '81b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/integracao-atendimento-x-crm/',
                component: ComponentCreator('/documentacao/atendimento/integracao-atendimento-x-crm/', '55e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/integracao-atendimento-x-crm/inserir-card-em-painel-1',
                component: ComponentCreator('/documentacao/atendimento/integracao-atendimento-x-crm/inserir-card-em-painel-1', '0a7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/', 'cf7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/alterar-padrao-de-arquivamento-12h-imediato',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/alterar-padrao-de-arquivamento-12h-imediato', 'fb1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/assumir-atendimento',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/assumir-atendimento', '131'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/concluir-atendimento',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/concluir-atendimento', 'f47'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/iniciar-atendimento',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/iniciar-atendimento', '4f1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/reiniciar-atendimento',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/reiniciar-atendimento', '2c8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/atendimento/operacoes-de-atendimento/transferir-atendimento',
                component: ComponentCreator('/documentacao/atendimento/operacoes-de-atendimento/transferir-atendimento', 'de3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/',
                component: ComponentCreator('/documentacao/crm/', '371'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/',
                component: ComponentCreator('/documentacao/crm/carteiras/', '48b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/alterar-ou-excluir-uma-carteira',
                component: ComponentCreator('/documentacao/crm/carteiras/alterar-ou-excluir-uma-carteira', '43a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/criar-uma-nova-carteira',
                component: ComponentCreator('/documentacao/crm/carteiras/criar-uma-nova-carteira', '9a8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/funcionamento-da-carteirizacao',
                component: ComponentCreator('/documentacao/crm/carteiras/funcionamento-da-carteirizacao', '4ac'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/incluir-contato-na-carteira',
                component: ComponentCreator('/documentacao/crm/carteiras/incluir-contato-na-carteira', '6a3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/carteiras/permissoes-por-perfil',
                component: ComponentCreator('/documentacao/crm/carteiras/permissoes-por-perfil', '7a8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/',
                component: ComponentCreator('/documentacao/crm/contato/', '0a8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/bloquear-ou-arquivar-contato',
                component: ComponentCreator('/documentacao/crm/contato/bloquear-ou-arquivar-contato', 'b62'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/cadastrar-contato',
                component: ComponentCreator('/documentacao/crm/contato/cadastrar-contato', '9f1'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/editar-campos-personalizados',
                component: ComponentCreator('/documentacao/crm/contato/editar-campos-personalizados', 'd80'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/exportar-base-de-contatos',
                component: ComponentCreator('/documentacao/crm/contato/exportar-base-de-contatos', 'fc5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/gerenciar-etiquetas/',
                component: ComponentCreator('/documentacao/crm/contato/gerenciar-etiquetas/', '46d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/gerenciar-etiquetas/excluir-etiquetas',
                component: ComponentCreator('/documentacao/crm/contato/gerenciar-etiquetas/excluir-etiquetas', 'dee'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/gerenciar-etiquetas/inserir-etiqueta',
                component: ComponentCreator('/documentacao/crm/contato/gerenciar-etiquetas/inserir-etiqueta', '6cc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/gerenciar-etiquetas/inserir-etiqueta-1',
                component: ComponentCreator('/documentacao/crm/contato/gerenciar-etiquetas/inserir-etiqueta-1', '4c7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/importacao-de-contatos',
                component: ComponentCreator('/documentacao/crm/contato/importacao-de-contatos', '424'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/contato/pesquisar-contato',
                component: ComponentCreator('/documentacao/crm/contato/pesquisar-contato', 'd6f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/paineis/',
                component: ComponentCreator('/documentacao/crm/paineis/', '502'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/paineis/gestao',
                component: ComponentCreator('/documentacao/crm/paineis/gestao', '4dc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/paineis/primeiros-passos',
                component: ComponentCreator('/documentacao/crm/paineis/primeiros-passos', 'de8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/paineis/tipos-de-painel',
                component: ComponentCreator('/documentacao/crm/paineis/tipos-de-painel', '1ae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/crm/paineis/vendas',
                component: ComponentCreator('/documentacao/crm/paineis/vendas', '03f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/',
                component: ComponentCreator('/documentacao/faq/', 'bc5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/', '653'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/', '2ac'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/desativar-contas-de-anuncio',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/desativar-contas-de-anuncio', '9cd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/remover-conexao-qr-code',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-via-qr-code/remover-conexao-qr-code', 'cf8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/', '9e3'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/alterar-display-name',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/alterar-display-name', '8b5'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/alterar-perfil-do-whatsapp',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/alterar-perfil-do-whatsapp', '81b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/configuracoes-whatsapp',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/configuracoes-whatsapp', '49d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/portabilidade-de-numero',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/portabilidade-de-numero', '435'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/remover-numero-do-portfolio',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/remover-numero-do-portfolio', 'd21'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/erros-e-problemas/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/erros-e-problemas/', '442'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/erros-e-problemas/acessar-pagina-de-suporte',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/erros-e-problemas/acessar-pagina-de-suporte', 'bfc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/erros-e-problemas/codigos-de-erros-da-meta',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/erros-e-problemas/codigos-de-erros-da-meta', 'e45'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/erros-e-problemas/solicitar-revisao-de-banimento',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/erros-e-problemas/solicitar-revisao-de-banimento', 'fb2'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/pagamentos/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/pagamentos/', 'f08'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/pagamentos/configurar-pagamento',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/pagamentos/configurar-pagamento', '46a'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/pagamentos/consultar-extrato-de-pagamento',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/pagamentos/consultar-extrato-de-pagamento', '0bd'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/', '00b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/alterar-logomarca-do-portfolio',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/alterar-logomarca-do-portfolio', '53c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/criar-portfolio-empresarial',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/criar-portfolio-empresarial', '768'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/desativar-autenticacao-em-dois-fatores',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/desativar-autenticacao-em-dois-fatores', '6d8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/incluir-administradores',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/incluir-administradores', '2c8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/informacoes-do-portfolio',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/informacoes-do-portfolio', 'c10'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/conexao-whatsapp/portfolio-empresarial/verificar-portfolio-empresarial',
                component: ComponentCreator('/documentacao/faq/conexao-whatsapp/portfolio-empresarial/verificar-portfolio-empresarial', '430'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/instagram-messenger/',
                component: ComponentCreator('/documentacao/faq/instagram-messenger/', 'c52'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/instagram-messenger/cadastrar-instagram-facebook-messenger',
                component: ComponentCreator('/documentacao/faq/instagram-messenger/cadastrar-instagram-facebook-messenger', '4f8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/instagram-messenger/mensagens-do-instagram-nao-chegam',
                component: ComponentCreator('/documentacao/faq/instagram-messenger/mensagens-do-instagram-nao-chegam', '822'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/faq/instagram-messenger/renovar-token-do-instagram-e-messenger',
                component: ComponentCreator('/documentacao/faq/instagram-messenger/renovar-token-do-instagram-e-messenger', 'f8e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/outros/',
                component: ComponentCreator('/documentacao/outros/', '39e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/outros/alterar-informacoes-do-meu-usuario',
                component: ComponentCreator('/documentacao/outros/alterar-informacoes-do-meu-usuario', 'a3f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/outros/como-alternar-entre-contas-na-plataforma',
                component: ComponentCreator('/documentacao/outros/como-alternar-entre-contas-na-plataforma', '713'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/outros/como-ativar-as-notificacoes-web-na-plataforma',
                component: ComponentCreator('/documentacao/outros/como-ativar-as-notificacoes-web-na-plataforma', '32b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/',
                component: ComponentCreator('/documentacao/relatorios/', 'e34'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/atendimento/',
                component: ComponentCreator('/documentacao/relatorios/atendimento/', 'aae'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/atendimento/como-concluir-atendimentos-em-massa',
                component: ComponentCreator('/documentacao/relatorios/atendimento/como-concluir-atendimentos-em-massa', '14e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/atendimento/como-exportar-mensagens-na-plataforma',
                component: ComponentCreator('/documentacao/relatorios/atendimento/como-exportar-mensagens-na-plataforma', '3a9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/atendimento/como-exportar-relatorio-na-plataforma',
                component: ComponentCreator('/documentacao/relatorios/atendimento/como-exportar-relatorio-na-plataforma', 'b0c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/documentacao/relatorios/consumo-de-infraestrutura',
                component: ComponentCreator('/documentacao/relatorios/consumo-de-infraestrutura', '0a6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/faq/mensagens-waiting-message',
                component: ComponentCreator('/faq/mensagens-waiting-message', '732'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/faq/numero-privado-lid-e-unificacao-de-contatos',
                component: ComponentCreator('/faq/numero-privado-lid-e-unificacao-de-contatos', '287'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/faq/rate-limit-api-nao-oficial',
                component: ComponentCreator('/faq/rate-limit-api-nao-oficial', '2ba'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/faq/status-de-integridade-do-canal',
                component: ComponentCreator('/faq/status-de-integridade-do-canal', '5fa'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/',
                component: ComponentCreator('/novidades-do-sistema/', '9f8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/abril-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/abril-de-2026/', '3a7'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/abril-de-2026/02-04-2026',
                component: ComponentCreator('/novidades-do-sistema/abril-de-2026/02-04-2026', '75d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/abril-de-2026/17-04-2026-app-2.1.34',
                component: ComponentCreator('/novidades-do-sistema/abril-de-2026/17-04-2026-app-2.1.34', 'ae6'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/', '63c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/04-02-2026',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/04-02-2026', 'a74'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/12-02-2026',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/12-02-2026', '10b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/20-02-2026',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/20-02-2026', 'f76'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/26-02-2026',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/26-02-2026', '1c8'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/fevereiro-de-2026/27-02-2026',
                component: ComponentCreator('/novidades-do-sistema/fevereiro-de-2026/27-02-2026', '341'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/', '19c'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/02-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/02-01-2026', '5fa'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/07-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/07-01-2026', '95e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/19-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/19-01-2026', 'd56'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/21-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/21-01-2026', '174'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/21-01-2026-api',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/21-01-2026-api', '94d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/22-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/22-01-2026', '921'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/janeiro-de-2026/28-01-2026',
                component: ComponentCreator('/novidades-do-sistema/janeiro-de-2026/28-01-2026', 'a7f'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/junho-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/junho-de-2026/', '803'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/junho-de-2026/03-06-2026',
                component: ComponentCreator('/novidades-do-sistema/junho-de-2026/03-06-2026', '499'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/', 'bda'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/06-05-2026',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/06-05-2026', 'bfa'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/12-05-2026',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/12-05-2026', '2dc'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/13-05-2026',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/13-05-2026', 'd01'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/14-05-2026-envio-de-audios-como-mensagem-de-voz',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/14-05-2026-envio-de-audios-como-mensagem-de-voz', '220'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/14-05-2026-permissao-de-campanhas-e-exclusao-de-etiquetas',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/14-05-2026-permissao-de-campanhas-e-exclusao-de-etiquetas', '427'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/20-05-2026',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/20-05-2026', '3d9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/22-05-2026-etiquetas-no-chatbot',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/22-05-2026-etiquetas-no-chatbot', '98e'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/22-05-2026-gatilhos-no-chatbot',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/22-05-2026-gatilhos-no-chatbot', 'a38'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/27-05-2026',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/27-05-2026', 'dd9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/29-05-2026-api-crm-de-vendas',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/29-05-2026-api-crm-de-vendas', 'a25'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/maio-de-2026/29-05-2026-crm-de-vendas',
                component: ComponentCreator('/novidades-do-sistema/maio-de-2026/29-05-2026-crm-de-vendas', '2b9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/marco-de-2026/',
                component: ComponentCreator('/novidades-do-sistema/marco-de-2026/', '02d'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/marco-de-2026/12-03-2026',
                component: ComponentCreator('/novidades-do-sistema/marco-de-2026/12-03-2026', 'ee9'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/marco-de-2026/12-03-2026-filtros-de-webhooks',
                component: ComponentCreator('/novidades-do-sistema/marco-de-2026/12-03-2026-filtros-de-webhooks', 'e50'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/marco-de-2026/18-03-2026',
                component: ComponentCreator('/novidades-do-sistema/marco-de-2026/18-03-2026', 'b27'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/novidades-do-sistema/marco-de-2026/25-03-2026',
                component: ComponentCreator('/novidades-do-sistema/marco-de-2026/25-03-2026', '72b'),
                exact: true,
                sidebar: "mainSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'c02'),
                exact: true,
                sidebar: "mainSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
