---
title: "Cadastrar equipe"
---

O cadastro de equipes na **plataforma** é fundamental para organizar e gerenciar colaboradores de forma eficiente. Com essa funcionalidade, é possível delegar tarefas, acompanhar o desempenho da equipe e otimizar a comunicação interna, garantindo um fluxo de trabalho mais estruturado.

:::tip

**Pré-requisitos**:

* Apenas usuários com perfil de **administrador** podem cadastrar novas equipes.
* É necessário ter pelo menos uma equipe cadastrada na plataforma.

:::

**Passo a Passo:**

**Passo 1:** **Acesse** o menu **"Ajustes"** e clique em **"Equipes"**, em seguida, selecione **"+ Novo"**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/ajustes/equipes/cadastrar_equipe/image.avif)


**Passo 2: Defina o nome da equipe** e escolha se ela será a equipe **padrão** da plataforma (a equipe padrão recebe atendimentos quando não há uma equipe específica atribuída).


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/ajustes/equipes/cadastrar_equipe/image%20(1).avif)


**Passo 3:** **Configure o acesso aos atendimentos** da equipe, escolhendo uma das opções:

* **Todos:** para conversas pendentes ou em andamento, qualquer atendente da equipe poderá visualizar em todas as abas (Novos, Meus e Outros). Quando a conversa é concluída ela fica visível para todos os usuários na aba **Concluídos.**
* **Equipe:** para conversas pendentes ou em andamento, qualquer atendente da equipe poderá visualizar em todas as abas (Novos, Meus e Outros). Quando a conversa é concluída ela fica visível apenas para os usuários associados à equipe (na aba **Concluídos).**
* **Atendente:** somente o atendente responsável pelo atendimento pode visualizar, esteja ela em andamento ou concluída.

:::info

**Importante**: um usuário com perfil de **Administrador** (no Cadastro de Usuário), ou um usuário associado à equipe como Supervisor (na associação do usuário à equipe), poderá visualizar a conversa independentemente da configuração escolhida acima.

:::


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/ajustes/equipes/cadastrar_equipe/image%20(7).png)


**Passo 4** - Defina se a equipe terá a funcionalidade de distribuição de atendimento. Veja mais sobre distribuição de atendimento no [próximo artigo](/documentacao/ajustes/equipes/distribuicao-e-transbordo-de-atendimento).


Associe os usuários à equipe, selecionando se serão **usuários**, **supervisores** ou ambos.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/ajustes/equipes/cadastrar_equipe/image%20(8).png)


No quadro abaixo entenda as diferenças entre associar como usuário ou supervisor.

<table data-header-hidden><thead><tr><th valign="top"></th><th valign="top"></th></tr></thead><tbody><tr><td valign="top"><strong>Usuário</strong></td><td valign="top"><strong>Supervisor</strong></td></tr><tr><td valign="top">Enviam mensagens apenas em conversas que ele assume.</td><td valign="top">Enviam mensagens em suas conversas, ou em conversas de outros usuários.</td></tr><tr><td valign="top">Transferem apenas conversas que assumem.</td><td valign="top">Podem transferir suas próprias conversas ou de outros usuários.</td></tr><tr><td valign="top">Recebem notificação sonora quando novas conversas chegam</td><td valign="top">Não recebem notificação sonora quando novas conversas chegam</td></tr><tr><td valign="top">Entram na distribuição automática quando o recurso estiver ativado na equipe.</td><td valign="top">Não participam da distribuição automática</td></tr></tbody></table>

**Passo 5** - Clique em **Salvar** para concluir o cadastro da equipe.

**Considerações Adicionais:**

* Toda conversa dentro da plataforma precisa estar dentro de uma equipe.
* Crie equipes para que possa direcionar conversas através do chatbot. É possível criar quantas equipes forem necessárias.
* Um usuário pode fazer parte de **mais de uma equipe**, tanto como **usuário** quanto como **supervisor**.
* Ao excluir uma equipe o sistema verifica se há atendimentos abertos associados a ela. Neste momento o sistema pergunta se deverá concluir ou movê-las para outra equipe.
