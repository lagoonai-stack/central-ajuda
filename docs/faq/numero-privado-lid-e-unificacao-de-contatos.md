---
title: "Número Privado (LID) e Unificação de Contatos"
---

Recentemente, o WhatsApp implementou uma atualização significativa em suas políticas de privacidade, alterando a forma como os números de telefone são exibidos em novas conversas através da introdução de um identificador chamado **LID**. Essa mudança pode, em alguns casos, gerar dúvidas e ocasionar a criação de contatos duplicados na plataforma.

Esta documentação tem como objetivo explicar o que é o LID, por que ele ocorre e orientar você sobre o procedimento correto para gerenciar e unificar esses contatos, garantindo a integridade do seu histórico de atendimento.

**1. O que é o "LID" e por que ele aparece?**

O **LID** é um identificador alfanumérico temporário que o WhatsApp utiliza para proteger a privacidade dos usuários em novas conversas. Isso ocorre especialmente em dois cenários:

1. Quando o cliente inicia o contato e possui configurações de privacidade restritas.
2. Quando o canal de atendimento inicia o atendimento com o contato diretamente pelo aplicativo do WhatsApp (celular) ao invés de usar a plataforma.

**Comportamento:** Ao receber uma mensagem de um número desconhecido ou restrito, a plataforma pode não receber o telefone de imediato, exibindo o LID no lugar do nome (Ex: `[NOVO] 45114384841704@lid`).

**Comportamento da plataforma:** Nosso sistema exibe o LID que recebe no campo de nome do contato. Assim que o cliente interage e o WhatsApp libera o número real, o sistema automaticamente cria (ou atualiza) o contato com o número correto.

**Consequência:** Isso cria um **contato provisório** na sua base. Se você já tinha esse cliente salvo anteriormente com o telefone real, o sistema pode acabar ficando com dois registros: o antigo (com telefone) e o novo (com LID).

:::warning

⚠️ **Importante**

Enquanto o sistema tiver apenas o LID, **não é possível responder à conversa**, pois a plataforma ainda não possui o número de telefone para o qual enviar a mensagem.

:::


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/faq/numero_privado_lid/image.avif)


**2. Como Unificar Contatos (Resolvendo o LID)**

A forma mais eficiente de resolver a fragmentação (ter um contato LID e um contato real para a mesma pessoa) é através da **Edição e Mesclagem**.

O sistema identifica automaticamente se o dado que você está inserindo pertence a outro contato e sugere a unificação dos históricos.

**Passo a Passo para Mesclar:**

1. **Acesse o Contato Provisório (LID):** Abra a conversa ou a ficha do contato (CRM -> Contatos) que está identificado apenas pelo código LID (o registro novo/duplicado).
2. **Edite o Contato:** Clique no botão de **Editar** (ícone de lápis) nos dados do contato.
3. **Insira o Dado Chave:** No campo **Telefone**, digite o número real do cliente.
4. **Detecção Automática:** Ao tentar salvar, o sistema identificará que esse telefone já pertence ao cadastro antigo do seu cliente.
5. **Assistente de Mesclagem:** Em vez de bloquear, o sistema abrirá automaticamente o modal **"Contato semelhante já existente"**, perguntando se você deseja revisar as informações


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/faq/numero_privado_lid/image%20(11).png)


6. **Confirmação:** Clique em **Revisar** para prosseguir.

:::info

**O que o sistema faz?**

O sistema irá **mesclar** os dois perfis. O registro duplicado (LID) será deletado e **todo o histórico de conversas, cards, etiquetas e anotações será movido para o contato original (Oficial)**.

:::

Isso garante que você não perca nenhuma mensagem e centralize toda a comunicação em um único perfil organizado.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/faq/numero_privado_lid/mesclar%20contatos%20de%20numero%20privado.gif)


**3. Perguntas Frequentes Adicionais**

* **A mesclagem automática não funcionou. Por quê?** A função automática de "Mesclar" depende de uma correspondência exata de dados técnicos que nem sempre o WhatsApp fornece. Por isso, o método manual descrito acima (Editando e inserindo o telefone) é a forma mais segura e garantida de forçar a unificação.
* **Isso acontece na API Oficial (WABA)?** Não. Esse comportamento é característico de conexões via QR Code (Z-API/Não Oficiais). A API Oficial do WhatsApp (Cloud API) recebe sempre o número de telefone como identificador único, evitando a criação de duplicatas por LID.
