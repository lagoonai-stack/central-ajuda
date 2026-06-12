---
title: "Incluir Contatos"
---

A inclusão de contatos em uma sequência é feita manualmente, diretamente na página da sequência. Você pode adicionar contatos de três formas diferentes, de acordo com a sua necessidade.

## Adicionar contatos

Na página da sequência, clique no botão **+ Adicionar contatos** no canto superior direito da tela. O modal **Adicionar contatos** será exibido com três opções de inclusão.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/incluir-contatos/image%20(2).jpg)


Escolha uma das opções abaixo de acordo com a sua necessidade.

## **Filtro por contato**

Utilize os filtros da sua base de contatos salvos para selecionar quem receberá a sequência.

1. Selecione **Filtro por contato**.
2. No modal **Filtrar contatos**, preencha os campos desejados para filtrar sua base:
   * **Nome, Telefone, Instagram ou E-mail**
   * **Origem:** Criado manualmente, Criado automaticamente ou Importado
   * **Data de importação**
   * **Etiquetas:** selecione as etiquetas e defina a condição de filtro
   * **Carteiras:** selecione uma ou mais carteiras
   * **Campos personalizados**
3. Clique em **Aplicar filtros**.
4. Confira os contatos encontrados e clique em **Adicionar**.
5. Um modal de confirmação será exibido com a quantidade de contatos que serão adicionados. Se houver contatos que já fazem parte da sequência, o sistema informará quantos não serão adicionados novamente.
6. Clique em **Continuar** para confirmar. Para adições acima de 10 contatos, será solicitado um **código de validação (OTP)** enviado para o seu e-mail.
7. Após a confirmação, os contatos serão adicionados à sequência.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/incluir-contatos/image%20(7).png)


## **Lista de números**

Adicione contatos informando diretamente os números de telefone.

1. Selecione **Lista de números**.
2. No campo **Números de telefone**, cole ou insira os números desejados — um por vez ou copiados de uma tabela.
3. Clique em **Adicionar**.
4. Um modal de confirmação será exibido com a quantidade de contatos que serão adicionados. Se houver duplicatas, o sistema informará quantos não serão adicionados novamente.
5. Clique em **Continuar** para confirmar. Para adições acima de 10 contatos, será solicitado um **código de validação (OTP)** enviado para o seu e-mail.
6. Após a confirmação, os contatos serão adicionados à sequência.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/incluir-contatos/image%20(8).png)


## **Todos os contatos**

Adiciona todos os contatos cadastrados na plataforma à sequência de uma só vez.

1. Selecione **Todos os contatos**.
2. Um modal de confirmação será exibido com a quantidade total de contatos que serão adicionados.
3. Clique em **Adicionar X contatos** para confirmar. Será solicitado um **código de validação (OTP)** enviado para o seu e-mail.
4. Após a confirmação, todos os contatos serão adicionados à sequência.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/incluir-contatos/image%20(9).png)


:::danger

**Atenção:** Os disparos das mensagens para os contatos adicionados acontecerão todos em um mesmo momento, conforme programado nas etapas. Atente-se às regras dos canais de atendimento configurados para evitar bloqueios, banimentos e uso indesejado de limites do canal.

:::

:::info

Contatos que já fazem parte da sequência não serão adicionados novamente.

:::

## Acompanhando o progresso da adição

Ao adicionar mais de 10 contatos, o sistema exibe automaticamente uma notificação na **Central de Notificações** (ícone de sino). Por ela você acompanha o andamento da ação em tempo real e pode cancelá-la se necessário.

Quando o processo é concluído, a notificação é atualizada informando a quantidade de contatos adicionados com sucesso. Caso ocorra algum erro ou a ação seja cancelada, a notificação informará quantos contatos foram processados e quantos não foram concluídos.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/incluir-contatos/image%20(10).png)


## Auditoria

Todas as ações de adição de contatos são registradas automaticamente em **Ajustes > Auditoria > Histórico de alterações**, na entidade **Sequências | Contato**.

Cada registro contém:

* **Data da ação**
* **Tipo da ação** (adição)
* **Alterado por** — usuário responsável ou sistema
* **Entidade**
* **Campo de alterações** — indica qual contato foi adicionado ou removido

Também é possível identificar a **origem da inserção**, informando por qual meio o contato foi adicionado à sequência — como pelo cadastro da sequência, cadastro do contato, chatbot ou API.

***

## Artigos relacionados

* [Contatos na Sequência](/documentacao/apps/sequencia/contatos-na-sequencia)
* [Concluídos](/documentacao/apps/sequencia/concluidos)
* [Sequências via API](/documentacao/apps/sequencia/sequencias-via-api)
