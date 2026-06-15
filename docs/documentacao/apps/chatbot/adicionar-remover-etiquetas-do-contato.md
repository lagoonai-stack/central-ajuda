---
title: "Adicionar/Remover Etiquetas do Contato"
---

O bloco **Adicionar/remover etiquetas do contato** permite aplicar ou retirar etiquetas de um contato automaticamente durante o fluxo do chatbot — sem precisar fazer isso manualmente pela tela de Contatos. Ele fica disponível no grupo **Contato**, dentro das ações do builder.

#### Passo 1: Adicionar o bloco ao fluxo

1. No builder do chatbot, clique no **ícone "+"** para adicionar uma nova ação ao fluxo.
2. Na lista de **Ações disponíveis**, localize o grupo **Contato**.
3. Clique em **Adicionar/remover etiquetas do contato**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/chat-interno/add_rmv_etiqueta/image%20(8).png)


#### Passo 2: Escolher a operação

O bloco possui dois modos de operação — selecione o que deseja realizar:

* **Adicionar etiqueta** — aplica uma ou mais etiquetas ao contato.
* **Remover etiqueta** — retira uma ou mais etiquetas do contato.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/chat-interno/add_rmv_etiqueta/image%20(10).png)


#### Passo 3: Selecionar as etiquetas

1. Clique no botão **"+"** ao lado do campo de etiquetas.
2. Um modal será aberto com a lista de etiquetas disponíveis, exibidas em **ordem alfabética**.
3. Use o **campo de pesquisa** para localizar uma etiqueta pelo nome.
4. Marque o **checkbox** ao lado de cada etiqueta que deseja aplicar ou remover.
5. Um **contador** ao lado do título "Etiquetas" é atualizado dinamicamente conforme você seleciona ou desmarca as opções.
6. Clique em **Adicionar** para confirmar a seleção.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/chat-interno/add_rmv_etiqueta/image%20(11).png)


#### Criar uma nova etiqueta pelo builder

Não encontrou a etiqueta que precisa? É possível criar uma nova diretamente pelo modal, sem sair do chatbot:

1. No modal de etiquetas, clique no botão **"+"** ao lado da barra de pesquisa.
2. O modal **Criar nova etiqueta** será aberto.
3. Informe o **nome** da etiqueta e selecione uma **cor**.
4. Clique em **Salvar**.

A nova etiqueta será criada e exibida imediatamente na listagem, já disponível para seleção.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/chat-interno/add_rmv_etiqueta/image.avif)


:::warning

⚠️ Pelo builder é possível apenas **criar** novas etiquetas. Para **editar** o nome, a cor ou **excluir** uma etiqueta existente, acesse a tela de **Contatos** na plataforma.

:::

#### Como funciona no fluxo

Ao adicionar o bloco ao chatbot, ele será executado automaticamente sempre que o contato passar por aquele ponto do fluxo. Isso permite, por exemplo:

* Aplicar uma etiqueta quando o contato responder a uma pergunta específica
* Remover uma etiqueta ao concluir uma etapa do atendimento
* Categorizar contatos automaticamente com base no caminho percorrido no chatbot
