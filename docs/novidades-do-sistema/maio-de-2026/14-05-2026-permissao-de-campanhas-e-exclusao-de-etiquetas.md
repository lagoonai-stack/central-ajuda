---
title: "14/05/2026 - Permissão de Campanhas e Exclusão de Etiquetas"
---

#### **🗂️ Novo Recurso: Gestão de Permissões em Campanhas**

Chega de depender de administradores para disparar campanhas!

Chegou a **Gestão de Permissões**, uma nova funcionalidade no módulo de **Campanhas** que permite definir, de forma individual, o nível de acesso de cada usuário — sem precisar alterar o perfil global da conta.

Agora é possível delegar autonomia de disparo para membros da equipe de forma granular e segura.

✨ **Principais Vantagens:**

* **Controle sem riscos:** Dê permissão de disparo para quem precisa, sem conceder acesso a áreas sensíveis da conta.
* **Três níveis de acesso:** 🟢 Gestão Completa, 🔵 Criador de Campanhas e 🔴 Sem Acesso — cada um com permissões bem definidas.
* **Sincronização automática:** Ao alterar o perfil de um usuário em Ajustes → Usuários, as permissões de Campanhas são atualizadas automaticamente.

Para entender como acessar o gerenciador, configurar os níveis de permissão e entender o que cada nível permite, acesse o nosso guia completo!

<p align="center"><a href="https://docs.flw.chat/guide/documentacao/apps/campanha/gestao-de-permissoes-em-campanhas" class="button primary">Ler artigo completo</a></p>

#### 🗂️ CRM: Nova camada de segurança na exclusão de etiquetas de contatos

Ao excluir uma etiqueta de contatos, a plataforma não exibia de forma clara quantos contatos seriam impactados pela ação — o que levava administradores a realizarem exclusões acidentais de segmentações importantes, sem possibilidade de desfazer. Esse comportamento foi corrigido.

**🔧 O que estava acontecendo?**

A exclusão de etiquetas não tinha nenhuma trava de segurança proporcional ao impacto da ação. Como uma única etiqueta pode estar vinculada a centenas milhares de contatos, removê-la significava desvincular todos simultaneamente — de forma permanente. Sem um aviso claro sobre o alcance, exclusões acidentais eram frequentes.

**✅ O que há de novo?**

A partir de agora, ao iniciar a exclusão de uma etiqueta, o sistema calcula automaticamente quantos contatos serão afetados e exibe esse número em destaque antes de qualquer confirmação. O fluxo de exclusão agora se adapta conforme o impacto:

* Etiquetas sem contatos vinculados podem ser excluídas diretamente, sem etapas adicionais.
* Etiquetas vinculadas a um ou mais contatos exigem uma validação por código de segurança antes de concluir a exclusão.
* Apenas **Administradores** visualizam e utilizam essas opções de edição e exclusão.

Para saber mais sobre como funciona o processo, acesse o artigo:

<p align="center"><a href="https://docs.flw.chat/guide/documentacao/crm/contato/gerenciar-etiquetas/excluir-etiquetas" class="button primary">Excluir Etiqueta</a></p>
