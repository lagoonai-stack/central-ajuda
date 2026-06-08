---
title: "Criando um chatbot"
---

A automação no atendimento ao cliente se tornou uma das estratégias mais eficazes para melhorar a experiência do usuário, reduzir o tempo de resposta e otimizar recursos. Na **plataforma**, é possível criar **chatbots personalizados** para responder automaticamente perguntas frequentes, direcionar atendimentos e garantir agilidade no contato com seus clientes, tudo isso integrado aos canais oficiais como **WhatsApp**, Instagram e Facebook.

Neste artigo, você vai aprender como configurar um chatbot na **plataforma** de forma prática e eficiente.

:::tip

**Pré-requisitos:**

* Uma conta ativa na **plataforma**;
* Permissão de administrador para configurar o chatbot;
* Um **canal de atendimento** configurado (WhatsApp, Instagram ou Facebook);
* Mapeamento das perguntas e respostas que deseja automatizar;
* Clareza sobre o objetivo do bot (ex: triagem de atendimento, envio de informações, direcionamento por setor).

:::

**Passo a passo para criar um chatbot na plataforma**

**Passo 1:** No painel da **plataforma**, clique no menu **"Apps**" e em seguida selecione **"Chatbot"**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `XGRGG6fEsoCJcrj7t7o6`)


**Passo 2**: Defina o **tipo de Chatbot** (Atendimento ou Automação), em seguida clique em “+ **Novo "** para iniciar a criação de um fluxo.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `D9Q2gqDsnl7gK0cHZRev`)


**Passo 3:** Escolha um nome que represente a função do bot (ex: "Bot de Suporte", "Bot Comercial").
Selecione o canal no qual o **chatbot** será ativado (WhatsApp, Instagram ou Facebook), e qual a equipe padrão onde todas as conversas que se iniciarem serão criadas Clique no botão **"salvar".**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `KR69aIh4THBbP3VmCRgo`)


**Passo 4:** O sistema vai apresentar a tela de edição do seu **chatbot**. No centro da tela serão exibidos os componentes de execução do chatbot, à direita será exibida a apresentação do seu chatbot, ou seja, como ele será exibido no **WhatsApp** do seu cliente.

Abaixo, no centro da tela, tem um botão de **salvar as alterações**. Do lado esquerdo tem um botão para **testar** e do lado direito um botão para **publicar a versão em produção**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `Ih1Ql0KLf4GGHDdtVNrM`)


:::danger

**Observação**:

* O botão **"Testar"** deve ser utilizado para validar o funcionamento do chatbot **antes da publicação oficial**. Ao realizar essa publicação de teste, o chatbot **não ficará visível no canal de atendimento escolhido**, ou seja, apenas você poderá testá-lo.
* Ao clicar em **"Testar"**, a plataforma gera um **código com hashtag** exclusivo. Esse código, ao ser enviado no canal de atendimento (como o WhatsApp, por exemplo), **ativa o chatbot em modo de teste**, permitindo que você simule a experiência do cliente e avalie o fluxo ainda em fase de desenvolvimento.
* Para isso, é necessário clicar em **"Testar"** e, em seguida, **confirmar a ação clicando em "Publicar alterações"** na janela (modal) exibida na tela.
* Quando o seu chatbot estiver pronto para uso, clique no botão **"Publicar versão"**, localizado no canto inferior direito da tela. Ao realizar essa ação, o chatbot será disponibilizado oficialmente e, caso já esteja associado a um canal de atendimento, **passará a responder automaticamente às conversas recebidas**\
:::

**Passo 5**: Agora é o momento de definir as **instruções que o seu chatbot deverá executar**. Para isso, clique no botão **“+”** e selecione uma das opções disponíveis a seguir:


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `sELljHJHhJnS4qeI8BLz`)


* **Mensagem: i**nstrução que vai disparar uma mensagem tão logo chegue a vez dela no fluxo do seu chatbot. Essa mensagem pode ser uma mensagem de texto apenas, um áudio, uma mensagem de texto com imagem / vídeo ou pode ser um documento um PDF. Durante a execução o chatbot vai exibir essa mensagem e vai passar para a próxima instrução.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `7vgGlGyYLwYHnNJDocRB`)


* **Modelo de mensagem:** você pode escolher uma mensagem do tipo marketing ou do tipo utilidade que tenha sido previamente cadastrada e aprovada pela meta, e enviar para o seu contato. Esse tipo de mensagem é imprescindível que seja utilizado quando você estiver configurando um chatbot de automação, por exemplo. Em uma campanha ou em uma sequência como não se sabe se a janela de 24h estará aberta no momento do disparo, o ideal é que coloque uma mensagem modelo, assim garantirá que essa mensagem chegue até o contato.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `5ucAmTgrRIMxu59vHBxh`)


* **Pergunta:** a pergunta pode ser apenas uma pergunta com texto, com menu de botões ou uma pergunta com uma lista de opções. Independente do modelo que você selecionar o sistema vai ficar aguardando a resposta do seu contato. Assim que o contato responder o sistema vai executar o próximo comando da configuração.Uma pergunta ainda pode ser configurada para:


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `npiQ211hfDvCw4v2pPri`)


* **Resposta inválida**: a pergunta é com botões ou lista, por exemplo, e seu contato equivocadamente encaminhar um áudio ou um texto. Neste caso é possível configurar o envio de uma mensagem alertando o contato.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `UuXX7LIqFH9vjoWeO4Nu`)


* **Tempo de espera**: configure o tempo de espera a ser aguardado entre o envio de mensagens ou o tempo total de espera.
  * O tempo limite de espera é o tempo máximo que você vai esperar até que o usuário responda. Se ele não responder naquele tempo máximo o sistema vai executar o subfluxo de tempo limite de espera.
  * Tempo de tolerância é o tempo entre uma mensagem e outra enviada pelo usuário. É ideal para que agrupe todas as mensagens enviadas e as trate como uma só (por exemplo, para enviar para processamento de uma Inteligência Artificial).
  * **Integração:** pode ser utilizado para disparo juntamente com webhook que vai encaminhar um arquiov JSON para uma sistema externo.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `1GhvK28EmwycTWPspFo6`)


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `eu49kDZltiEuiXJbFyLW`)


* **Webhooks**: são comandos enviados para ferramentas/sistemas externos (ex.: n8n ou Make). Envia um JSON para uma url externa à plataforma. Nesta URL você vai receber um arquivo com todas as informações sobre o atendimento e sobre o contato com qual você está interagindo naquele momento. Ao devolver uma informação com o código 200 ou 400, o chatbot sistema vai iniciar um fluxo de sucesso ou falha da execução do webhook. Você também pode programar fluxos de retorno ao invés de códigos, como por exemplo retornar um “OK”, “CPF INVÁLIDO”, “NENHUM PAGAMENTO ABERTO”, etc. Com isso você pode criar fluxos alternativos no chatbot que serão executados caso após receber o retorno. Importante citar que uma vez feito o disparo para o seu sistema, o chatbot aguarda por até 20 segundos por uma resposta. Caso ele não obtenha uma resposta do seu sistema no prazo máximo de 20 segundos, vai entra num fluxo alternativo sinalizando que não recebeu um retorno do webhook. Neste ponto você você precisa configurar quais serão as ações a seguir.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `IDzRjHbOBW5rsiPWzhzI`)


* As **condicionais** são estruturas utilizadas para **testar informações** e, com base no resultado desse teste, direcionar o fluxo para um caminho específico.

  Cada condicional pode conter **vários casos**, e dentro de cada caso é possível definir **condições** que precisam ser atendidas. Essas condições podem ser:

  * Do tipo **“E”**: todas as condições devem ser verdadeiras ao mesmo tempo.
  * Do tipo **“OU”**: apenas uma das condições precisa ser verdadeira.

  Para alterar o tipo da condicional (**E/OU**), clique no **canto superior direito do agrupamento**.

  No **canto superior esquerdo**, você pode clicar em **“Caso 1”** para **renomear a condicional**, facilitando a leitura e organização.

  É possível adicionar **outros casos** ao grupo de condicionais. O sistema executa os casos **de forma sequencial**:

  * Testa o primeiro caso.
  * Se nenhuma condição for satisfeita, passa para o segundo.
  * Continua testando os casos seguintes, um a um.

  Se **nenhum caso for atendido**, o sistema segue para o **caso padrão**, que representa o **fluxo final** da condicional.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `770Yv4t1hpVIIKiQ7afT`)


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `3TZM2SZU0tikSOPh87Eh`)


Atualmente, você pode validar dentro de uma **condicional**:

* **Horário de funcionamento**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `QYW1eOE1UKdy8Mzx6RXT`)


* **Uma resposta a uma pergunta feita**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `8MDW7wYRYz1hNfVQ0yNq`)


* **A uma resposta a um modelo de mensagem**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `D2uaJf22luMtA8HtkR9f`)


* **Teste de valor de um campo personalizado do contato**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `og9kolR89yWpuxn5heJ4`)


* **Etiqueta associada a um contato**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `N6xsUlVOOOoJ23rr8lnX`)


* **Última mensagem enviada pelo contato**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `iHSKTP10XhvV75J24m5g`)


* **Metadados do contato ou do atendimento**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `CNOoJGi7WIkkdc7XzmxH`)


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `8oQnOEnjsc9owkqOyAqo`)


* **Data atual**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `xmiuM5xDmU1UnteQLtAL`)


* **Dia da semana atual**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `7zp5l04sqhPybbIG2DRC`)


* **Horário atual**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `l0FnYvCoYOfcPEwzit26`)


* **Ponto de retorno**: são utilizados para que você desvie o fluxo de execução do seu chatbot para qualquer outro ponto do próprio chatbot. Isso faz com que você não precise ficar copiando e duplicando fluxos,é possível marcar uma um ponto de retorno naquele ponto do seu código do chatbot e então, em qualquer local, você pode desviar o fluxo para aquele ponto de retorno.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `Qjp1h6sJVUtYPXnno4f4`)


* **Ações:** escolha ações dentre as seguinte possíveis:
  * Adicionar ou remover uma etiqueta ao contato.
  * Adicionar o seu contato ou remover contato de uma sequência.
  * Aguardar mensagens do contato - essa opção de aguardar mensagens do contato faz com que o chatbot espere até um determinado limite de tempo para que o contato encaminhe uma mensagem, e ficar em pausa durante esse tempo configado esperando uma resposta do contato. Se Neste período o contato encaminhar uma mensagem o chatbot continua para a ação seguinte, caso o tempo limite configurado seja excedido ele entrará no fluxo de exceção por limite de tempo excedido.
  * Espera por alguns segundos: diferente da do aguardar mensagem do contato aqui o chatbot começa a contar o tempo e quando ele acabar vai para a próxima instrução. Ele é ideal para você colocar intervalos de tempo entre disparo de mensagens para seus contatos.
  * Direcionar para outro chatbot.
  * Direcionar para um ponto de retorno.
  * Retornar para o menu anterior
  * Encaminhar o atendimento para uma equipe, assim a qualquer momento você pode pegar um atendimento e encaminhar para uma equipe seja por escolha do seu contato, seja por exemplo, devido a um tempo limite atingido
  * Encerrar um atendimento
  * Modificar meta dados internos do contato ou do atendimento


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `YD0pVjoGJ4YGDZ5bcdn9`)


Ao final você clique no botão **salvar alterações**. Após os testes você clica no botão **publicar versão** para que este chatbot fique disponível e comece a responder ao canal de atendimento para o qual ele foi associado.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `GlEwwJdso9LiLOeTtEfH`)


### Considerações finais

* Criar um chatbot na **plataforma** é uma forma inteligente de oferecer **atendimento 24/7**, qualificar seus leads e garantir mais agilidade no suporte. Além disso, você pode monitorar os resultados através de **relatórios de atendimento**, acompanhando quantos contatos foram atendidos pelo bot e onde os clientes mais interagem.
* É possível ainda ver o fluxo de um atendimento no **Log de Atendimento.**
* Lembre-se: um chatbot eficiente depende de **mensagens claras, fluxos bem estruturados** e constante **análise de performance**.

\
