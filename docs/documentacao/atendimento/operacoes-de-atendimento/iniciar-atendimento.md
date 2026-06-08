---
title: "Iniciar Atendimento"
---

[https://drive.google.com/file/d/1Cd8d4KXSFMHwjjC43ZATn39m0LCrsPf3/view?usp=sharing](https://drive.google.com/file/d/1Cd8d4KXSFMHwjjC43ZATn39m0LCrsPf3/view?usp=sharing)

Na plataforma, os atendimentos podem ser iniciados de duas formas:

**Ativa:** quando a sua empresa inicia a conversa com o contato, seja por meio de um modelo de mensagem utilizando a API Oficial ou diretamente pela API Não Oficial.

**Receptiva:** quando o próprio contato envia a primeira mensagem e a empresa recebe o atendimento.

### **Passo 1: Iniciar o atendimento**

1. Na tela de **Atendimentos**, localize no canto inferior esquerdo o campo destinado à inserção do número.
2. Digite o número completo do contato, incluindo o **DDD**.
3. Clique no botão **“Conversar”** para dar início ao atendimento.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `kVZTyYiQ5jvPn6C4KeH8`)


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


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `IrpiI4klbeQ6BJKJ2p35`)


### **Iniciar Atendimento pelo "Menu de Opções"**

Além de iniciar o atendimento pelo campo na barra inferior, você também pode começar a conversa acessando o **menu de opções**.

**Passo 1: Iniciar atendimento pelo menu de opções**

1. Na tela de **Atendimentos**, clique no ícone de três pontos (**⋮**).
2. No menu que se abre, selecione **“Novo atendimento”**.
3. No painel lateral, serão exibidos os contatos cadastrados na conta. É possível **pesquisar pelo nome ou pelo número** do contato.
4. Clique no ícone
> 🖼️ **[IMAGEM PENDENTE]** (ref. `xsr5O8foKYkVhb0iI4Nk`)
para iniciar o atendimento.

:::info

Ao iniciar pelo menu de opções, serão exibidos os mesmos painéis do fluxo padrão: **Escolher o tipo de envio**, **Selecionar Canal e Equipe**, **Selecionar Modelo de Mensagem**, **Definir Parâmetros** e **clicar em “Iniciar atendimento”.**

:::


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `h6ONMD5qFVyAbH5dXSgA`)


### **Adicionar um novo contato**

No painel lateral, você também pode adicionar um novo contato:

1. Acima da barra de pesquisa, clique no botão **“Novo contato”**.
2. Preencha os dados do contato no painel que será aberto.
3. Clique em **Salvar**; o novo contato será exibido na lista de contatos cadastrados.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `39v88Qv9KcuoZx5KMD0z`)


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
