---
title: "Gatilhos"
---

Os gatilhos definem a condição que aciona o seu chatbot de atendimento — ou seja, quando ele entra em ação automaticamente numa conversa. Agora é possível configurar os gatilhos diretamente dentro do chatbot, sem precisar sair para outra área da plataforma. Este artigo explica como adicionar, editar e excluir gatilhos, além das regras que governam cada tipo.

:::warning

A funcionalidade de gatilhos está disponível **apenas para chatbots de atendimento**. Chatbots do tipo automação não possuem essa opção.

:::

**Duas formas de configurar:** Os gatilhos podem ser configurados diretamente no builder do chatbot (conforme este artigo) ou pelo card do canal, na tela de **Chatbots para atendimento** (clicando em **Editar** no canal desejado). As duas formas são sincronizadas — qualquer alteração feita em um lugar é refletida automaticamente no outro.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `ny8QhWj8POmKKzVlBv0R`)


#### Passo 1: Criar um novo chatbot e configurar os gatilhos

Na aba **Chatbot**, clique em **+ Novo**, preencha as configurações iniciais e clique em **Salvar**. A página inicial do chatbot será aberta com duas opções:

* **Adicionar gatilho** — abre o sidebar para configurar o primeiro gatilho imediatamente.
* **Configurar mais tarde** — cria o chatbot e permite configurar os gatilhos em outro momento.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `jFFFK8Q8kJbtvm7lHZhn`)


**Se você escolher "Configurar mais tarde":**

O chatbot será exibido com o nó **Gatilhos** (barra cinza, contador 0) e um nó de **Enviar mensagem** já conectado. Nesse estado, dois botões ficam disponíveis no nó:

* **Adicionar gatilho** — abre o sidebar **Definir gatilho**.
* **Configurar** — abre o sidebar **Configuração geral do chatbot**, onde é possível definir o **Tempo de espera para envio da resposta** e o **Tempo máximo de inatividade**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `XC7hErjL5KLqK6Vp7A7v`)


#### Passo 2: Definir um gatilho

Ao clicar em **Adicionar gatilho**, o sidebar **Definir gatilho** será aberto. Selecione uma das opções no campo **"Defina um gatilho"**:

| Tipo de gatilho                           | Quando o chatbot é acionado                                       |
| ----------------------------------------- | ----------------------------------------------------------------- |
| **Iniciar atendimento pelo canal**        | Quando o contato enviar qualquer mensagem independente do horário |
| **Iniciar atendimento dentro do horário** | Quando o contato enviar mensagem dentro do horário de atendimento |
| **Iniciar atendimento fora do horário**   | Quando o contato enviar mensagem fora do horário de atendimento   |
| **Palavra-chave**                         | Quando o contato enviar uma mensagem com a palavra-chave definida |

Após selecionar o tipo, os campos correspondentes serão exibidos para preenchimento.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `z5bhFqKhkLM9NpzuzW6b`)


#### Passo 3: Preencher as configurações do gatilho

Independente do tipo de gatilho selecionado, os campos abaixo serão exibidos para preenchimento:

1. O **Tipo do canal** vinculado ao chatbot será exibido automaticamente (ex: WhatsApp Oficial, Instagram). Essa informação é definida na criação do chatbot **e não pode ser alterada.**
2. Selecione um **Canal de atendimento** na lista. Apenas um canal pode ser selecionado por gatilho.
3. **Somente para o tipo Palavra-chave:** informe também a **palavra-chave** que deve acionar o chatbot. Um canal pode ter vários chatbots por palavra-chave, desde que as palavras sejam diferentes.
4. Clique em **Salvar**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `Kp4UX14Vvqf6FXn3rrb7`)


:::warning

**Nota:** O botão **Salvar** permanece desabilitado até que todos os campos obrigatórios sejam preenchidos.

:::

#### Passo 4: Acompanhar os gatilhos no fluxo

Após salvar, o gatilho aparece conectado ao nó inicial. Cada gatilho exibe:

* Ícone e número do canal
* Tipo do gatilho (ex: Iniciar atendimento, Dentro do horário, Iniciar com palavra-chave)
* Para o tipo Palavra-chave: a palavra configurada é exibida abaixo do nome do canal

Ao adicionar o **primeiro gatilho**, a barra do nó muda de **cinza para azul** e o contador é atualizado automaticamente.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `CmUxIScTheo0LSbY7j5q`)


#### Editar ou excluir um gatilho

Clique no **ícone de três pontos** ao lado do nó do gatilho para acessar as opções:

* **Editar** — abre o sidebar **Definir gatilho** com os dados já preenchidos para edição.
* **Excluir** — exibe uma confirmação antes de remover o gatilho do fluxo.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `7zK5CqQrXzWgAMY6jV2T`)


## O que afeta a exibição dos gatilhos

**Canais desabilitados para seleção**

Alguns canais podem aparecer desabilitados na lista ao configurar um gatilho. Isso ocorre quando:

* O canal **já está vinculado ao mesmo tipo de gatilho** neste chatbot (para evitar duplicidade).


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `ZUHZEHFoKrEgFyOGn7xT`)


* Para o tipo Palavra-chave: o canal **já possui a mesma palavra-chave** configurada neste chatbot. Ao passar o mouse, o tooltip exibirá: *"Já existe um gatilho com esta palavra-chave para este canal."*


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `UxNbvgeIsCai5kk5QeQe`)


**Regra de exclusividade entre tipos de gatilho**

Os gatilhos **Iniciar atendimento pelo canal** e **Dentro/Fora do horário** não podem coexistir no mesmo chatbot. Ao adicionar um, o outro é removido automaticamente.

| Se você adicionar...                 | O que é removido automaticamente    |
| ------------------------------------ | ----------------------------------- |
| Iniciar atendimento pelo canal       | Dentro do horário + Fora do horário |
| Dentro do horário ou Fora do horário | Iniciar atendimento pelo canal      |

:::info

Essa remoção acontece de forma automática, sem confirmação adicional.

:::

**Canal já vinculado a outro chatbot**

Se o canal selecionado já tiver outro chatbot associado para o mesmo tipo de disparo, será exibido um aviso:

:::warning

**Nota:** Ao substituir, o novo chatbot passa a atender o tipo de gatilho conflitante, mas o chatbot anterior **não é removido completamente** — ele continua ativo para os demais gatilhos que não entraram em conflito.

**Por exemplo:** se o chatbot anterior possuía um gatilho de **Iniciar atendimento pelo canal** e o novo chatbot foi publicado com um gatilho de **Dentro do horário** para o mesmo canal, o novo chatbot assume o atendimento dentro do horário, enquanto o chatbot anterior é mantido automaticamente para o período **fora do horário**. O rascunho do chatbot anterior continua visível no builder, mas ao tentar publicá-lo novamente, o modal de conflito será exibido novamente.

:::


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `3blxADYYRaXWrOn9X6nf`)


Ao clicar em **Publicar**, o modal **Conflito de chatbot** será exibido com os detalhes dos canais e do chatbot que será substituído. Você poderá confirmar a substituição ou cancelar.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `SoEuA7BEHEIdEXuj0C2m`)


**Canal removido da conta**

Se um canal (WhatsApp, Instagram ou Messenger) que possui gatilhos associados for removido da conta, esses gatilhos deixarão de ser exibidos no chatbot. Caso o canal seja reconectado, os gatilhos voltam a aparecer automaticamente, sem necessidade de reconfigurá-los.

**Comportamento ao arquivar e desarquivar o chatbot**

:::warning

Após desarquivar um chatbot, é necessário **publicá-lo novamente** para que os gatilhos voltem a funcionar ativamente.

:::

| Situação                           | O que acontece com os gatilhos                                                                           |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Chatbot arquivado**              | Perde o vínculo ativo com os canais, mas os gatilhos continuam salvos e visíveis no builder              |
| **Chatbot desarquivado**           | Volta como rascunho com os gatilhos visíveis, porém sem vínculo ativo com canais até uma nova publicação |
| **Canal removido ou inativado**    | Os gatilhos associados deixam de ser exibidos por não haver canal ativo relacionado                      |
| **Canal reativado ou reconectado** | Os gatilhos voltam a ser exibidos automaticamente                                                        |

### Chatbots criados antes desta atualização

Ao acessar um chatbot existente, ele será adaptado automaticamente ao novo modelo. Os gatilhos já configurados serão carregados e exibidos no nó inicial de **Gatilhos**, sem necessidade de reconfigurá-los.
