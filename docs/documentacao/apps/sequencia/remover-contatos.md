---
title: "Remover Contatos"
---

É possível remover contatos de uma sequência de forma individual ou em massa, diretamente pela aba **Contatos na sequência**.

## Remover contato individualmente

### **Pelo ícone de remover**

1. Clique no ícone de remoção ao lado do contato que deseja remover.
2. Um modal de confirmação será exibido — clique em **Continuar** para confirmar.
3. O contato será removido da sequência sem solicitação de código de validação.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/remover-contatos/image%20(3).gif)


### **Pelo checkbox**

1. Marque o **checkbox** ao lado do contato.
2. Clique no botão **Remover** que aparece no cabeçalho da tabela.
3. Um modal de confirmação será exibido — clique em **Continuar** para confirmar.
4. O contato será removido da sequência sem solicitação de código de validação.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/remover-contatos/image%20(4).gif)



## Selecionar e remover contatos em massa

1. Marque os checkboxes ao lado dos contatos que deseja remover. Para selecionar todos os contatos da página, marque o **checkbox mestre** no cabeçalho da tabela — a listagem exibe até **50 contatos por página**.
2. Caso todos os contatos da página estejam selecionados, o sistema exibirá a opção **"Selecionar todos os \[X] contatos"** para estender a seleção a todas as páginas.
3. Clique no botão **Remover** que aparece no topo da listagem.
4. Um modal de confirmação será exibido com a quantidade de contatos selecionados — clique em **Continuar**.
5. Para remoções acima de 10 contatos, será solicitado um **código de validação (OTP)** enviado para o seu e-mail. Insira o código e clique em **Confirmar**.
6. Os contatos selecionados serão removidos da sequência.

![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/remover-contatos/image.avif)



:::info

Ao navegar entre páginas, a seleção da página anterior é descartada automaticamente — exceto quando a seleção global estiver ativa.

:::

## Acompanhando o progresso da remoção

Ao remover mais de 10 contatos, o sistema exibe automaticamente uma notificação na **Central de Notificações** (ícone de sino). Por ela você acompanha o andamento da ação em tempo real e pode cancelá-la se necessário.

Quando o processo é concluído, a notificação é atualizada informando a quantidade de contatos removidos com sucesso. Caso ocorra algum erro ou a ação seja cancelada, a notificação informará quantos contatos foram processados e quantos não foram concluídos.

![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/remover-contatos/image%20(1).avif)


## Auditoria

Todas as ações de remoção de contatos são registradas automaticamente em **Ajustes > Auditoria > Histórico de alterações**, na entidade **Sequências | Contato**.

Cada registro contém:

* **Data da ação**
* **Tipo da ação** (remoção)
* **Alterado por** — usuário responsável ou sistema, quando a remoção for executada automaticamente pela sequência
* **Entidade**
* **Campo de alterações** — indica qual contato foi removido

Também é possível identificar a **origem da remoção**, informando por qual meio o contato foi removido da sequência — como pelo cadastro da sequência, cadastro do contato, chatbot ou API.

***

## Artigos relacionados

* [Incluir Contatos na Sequência](/documentacao/apps/sequencia/incluir-contato-na-sequencia)
* [Contatos na Sequência](/documentacao/apps/sequencia/contatos-na-sequencia)
* [Sequências via API](/documentacao/apps/sequencia/sequencias-via-api)
