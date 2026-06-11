---
title: "Reiniciar Atendimento"
---

[https://drive.google.com/file/d/1aO0pF1eAF1ULeNSJyjSaqsfQoX1l-ov8/view?usp=sharing](https://drive.google.com/file/d/1aO0pF1eAF1ULeNSJyjSaqsfQoX1l-ov8/view?usp=sharing)

Em determinadas situações, pode ser necessário retomar o contato com um cliente mesmo após o encerramento do atendimento ou depois que a janela de 24 horas da Meta expira. Para isso, a plataforma oferece recursos específicos que permitem reabrir conversas e restabelecer a comunicação de forma segura e controlada.

:::warning

**Atenção:** A reabertura da conversa **exigirá o envio de um Modelo de Mensagem pré-aprovado** somente quando o canal estiver utilizando a **API Oficial da Meta**.
Nos canais que operam com **API Não Oficial**, essa exigência não se aplica.

:::

:::tip

**Pré-requisitos**

* **Modelo de Mensagem:** É necessário possuir um Modelo de Mensagem pré-aprovado, ativo e devidamente cadastrado na plataforma (API Oficial).
* **Permissão de Acesso:** O usuário deve estar associado à equipe onde o atendimento foi concluído, especialmente em casos em que a equipe possui restrições de visualização.

:::

### **Passo 1: Localizar e Iniciar a Reativação**

1. Na tela de **Atendimentos**, acesse a aba **Concluídos**.
2. Selecione o atendimento que deseja reiniciar.
3. No canto inferior direito, clique no botão **Reiniciar**.

:::warning

**Observação:**

* **Canais com API Não Oficial:** O atendimento será reiniciado imediatamente.
* **Canais com API Oficial:** Será necessário seguir os próximos passos para completar a reativação.

:::


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento_operacoes-no-atendimento_reiniciar-atendimento_image.avif)


### **Passo 2: Selecionar o Modelo de Mensagem**

Ao clicar em **Reiniciar**, será exibido o painel de seleção de modelo:

1. Escolha o **Modelo de Mensagem** que será utilizado para reiniciar o contato.
2. Clique em **Continuar** para prosseguir com a configuração.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento_operacoes-no-atendimento_reiniciar-atendimento_image%20%281%29.avif)


### **Passo 3: Preencher Parâmetros e Enviar**

Se o **Modelo de Mensagem** selecionado contiver variáveis (por exemplo, \[NOME] ou \[ATENDENTE]), preencha os campos correspondentes na seção **Parâmetros**.

Após completar os parâmetros, clique em **Enviar Mensagem** para reiniciar oficialmente o atendimento.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento_operacoes-no-atendimento_reiniciar-atendimento_image%20%282%29.avif)


Após o envio do **Modelo de Mensagem**, na área de digitação, será exibida a mensagem: **"Deixe mensagens na fila para serem entregues assim que o contato responder."**

:::warning

**Observação**

Durante esse período, você pode preparar mensagens adicionais que serão enviadas automaticamente assim que o contato interagir.

:::


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento_operacoes-no-atendimento_reiniciar-atendimento_image%20%283%29.avif)


:::info

**Regras e Fluxo de Continuidade**

**1. Reabertura da Janela de Conversa**

A janela de conversa livre, que permite o envio de mensagens ilimitadas, será reaberta **apenas após a interação do contato**.
O contato precisa enviar qualquer tipo de mensagem (texto, emoji, vídeo ou arquivo) para que a janela seja ativada.

**2. Mensagens na Fila**

Enquanto o contato não responder:

* Você pode digitar e enviar novas mensagens normalmente.
* Essas mensagens serão **enfileiradas** e entregues automaticamente assim que a resposta do contato reabrir a janela de conversa.

**3. Reengajamento**

Se o contato demorar a responder:

* É possível enviar um **novo Modelo de Mensagem** para tentar retomar o contato.
* O processo de envio segue os mesmos passos descritos anteriormente, permitindo reabrir a janela de conversa.

**4. Janela de 24 Horas vs. Conclusão na Plataforma**

* Concluir uma conversa na plataforma é uma **ação interna**, sem impacto na janela de 24 horas da Meta.
* A janela de 24 horas só será encerrada se não houver interação do contato por **mais de 24 horas**.

**5. Restrições de Canal**

* Até a última atualização, a Meta **não permite reiniciar conversas** usando modelos em canais como Instagram ou Facebook Messenger caso a janela de mensagens já esteja fechada.
* O envio de modelos de reinício é aplicável principalmente ao **WhatsApp**.

:::
