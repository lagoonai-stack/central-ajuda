---
title: "Iniciar Atendimento"
---

<div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem'}}>
  <iframe
    src="https://www.youtube.com/embed/-7y6f_aP-IA"
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Iniciar Atendimento"
  ></iframe>
</div>

Na plataforma, os atendimentos podem ser iniciados de duas formas:

**Ativa:** quando a sua empresa inicia a conversa com o contato, seja por meio de um modelo de mensagem utilizando a API Oficial ou diretamente pela API Não Oficial.

**Receptiva:** quando o próprio contato envia a primeira mensagem e a empresa recebe o atendimento.

### **Passo 1: Iniciar o atendimento**

1. Na tela de **Atendimentos**, localize no canto inferior esquerdo o campo destinado à inserção do número.
2. Digite o número completo do contato, incluindo o **DDD**.
3. Clique no botão **“Conversar”** para dar início ao atendimento.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/operacoes-no-atendimento/iniciar-atendimento/image%20(2).jpg)


### **Passo 2: Escolher o tipo de envio**

Após clicar em **“Conversar”**, será exibido o painel **Enviar mensagem**.

1. Confirme os dados do contato encontrado.
2. Em **“Selecione o tipo de envio”**, escolha a opção **Iniciar atendimento**.
3. Na próxima tela, selecione o **canal** para iniciar o atendimento.

**Para API Não Oficial:**

4\. Selecione a **equipe** que será associada ao atendimento.
5\. O atendimento será aberto automaticamente.

**Para API Oficial:**

4\. Selecione a **equipe** que será associada ao atendimento.
5\. Escolha o **modelo de mensagem** obrigatório.
6\. Insira os **parâmetros do modelo** na tela seguinte (quando houver parâmetros no Modelo de Mensagem)
7\. Clique em **“Iniciar atendimento”** para abrir o atendimento com o modelo de mensagem selecionado.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/operacoes-no-atendimento/iniciar-atendimento/Anima%C3%A7%C3%A3o%20(11).gif)


### **Iniciar Atendimento pelo "Menu de Opções"**

Além de iniciar o atendimento pelo campo na barra inferior, você também pode começar a conversa acessando o **menu de opções**.

**Passo 1: Iniciar atendimento pelo menu de opções**

1. Na tela de **Atendimentos**, clique no ícone de três pontos (**⋮**).
2. No menu que se abre, selecione **“Novo atendimento”**.
3. No painel lateral, serão exibidos os contatos cadastrados na conta. É possível **pesquisar pelo nome ou pelo número** do contato.
4. Clique no ícone
![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/operacoes-no-atendimento/iniciar-atendimento/image%20(7).avif)
para iniciar o atendimento.

:::info

Ao iniciar pelo menu de opções, serão exibidos os mesmos painéis do fluxo padrão: **Escolher o tipo de envio**, **Selecionar Canal e Equipe**, **Selecionar Modelo de Mensagem**, **Definir Parâmetros** e **clicar em “Iniciar atendimento”.**

:::


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/operacoes-no-atendimento/iniciar-atendimento/Anima%C3%A7%C3%A3o%20(12).gif)


### **Adicionar um novo contato**

No painel lateral, você também pode adicionar um novo contato:

1. Acima da barra de pesquisa, clique no botão **“Novo contato”**.
2. Preencha os dados do contato no painel que será aberto.
3. Clique em **Salvar**; o novo contato será exibido na lista de contatos cadastrados.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/operacoes-no-atendimento/iniciar-atendimento/image%20(7).png)


:::warning

**Considerações Adicionais – API Oficial**

**1. Mensagens na Fila de Espera**
Enquanto o contato não responder e a janela de conversa não estiver ativa, é possível enfileirar novas mensagens.
As mensagens enfileiradas permanecerão aguardando e serão enviadas automaticamente assim que o contato responder e a janela de conversa for liberada.

**2. Implicações de Custo**
É importante estar atento ao modelo de precificação da **API Oficial**:

* Toda mensagem iniciada pela empresa (utilizando um **Modelo de Mensagem** após 24 horas) é classificada como **“Conversa Iniciada pela Empresa”** e gera cobrança.
* Para informações detalhadas sobre valores e regras de cobrança, tanto para conversas iniciadas pela empresa quanto para conversas iniciadas pelo usuário, consulte o site oficial do provedor da API (**Meta/Facebook**) ou entre em contato com a nossa equipe de **Suporte**.

:::
