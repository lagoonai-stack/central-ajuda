---
title: "CloudAPI"
---

A conexão **WhatsApp Cloud API** da **plataforma** é o método tradicional utilizado para vincular sua conta de WhatsApp à plataforma de forma segura e eficiente. Esse processo é essencial para garantir a comunicação entre a API e o WhatsApp Business, permitindo o envio e recebimento de mensagens dentro do sistema.

:::info

**Pré-requisitos:** Antes de iniciar a conexão **WhatsApp Cloud API**, certifique-se de atender aos seguintes requisitos:

* **Número disponível:** Ter um número de telefone cadastrado no **WhatsApp Business**.
* **Desconexão do Aplicativo:** O número não pode estar conectado ao aplicativo WhatsApp no celular. Se estiver, você deverá desconectar a conta no app antes de finalizar o processo.
* **Portfólio Empresarial:** Ter um Gerenciador de Negócios (Meta Business Suite) configurado.
* **Perfil Administrador:** Ser um usuário com perfil de administrador na plataforma e no Facebook.
* **Recebimento de Código:** Ter acesso ao número para receber o código de verificação via SMS ou Ligação Telefônica.

:::

**Passo 1: Iniciando a Integração**

1. No menu superior da plataforma, clique em Ajustes -> Conta.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `qW3C06gxSYBfq3SA6ZhC`)


2. Clique na aba **Canais de Atendimento** e em seguida clique no botão de adição **(+)**, navegue até WhatsApp CloudAPI e selecione Cloud Meta.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `ChMmeFoC8d88wXJrFmFL`)


**Passo 2:** Configuração do Número

1. Selecione a opção Conectar novo número.

:::warning

**Atenção:** Ao vincular o número na Cloud API, você não poderá mais utilizá-lo no aplicativo do Whatsapp.

:::


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `K0s5qTn5b1cMHTrKcUCJ`)


2. Na tela de parceria, clique em Entrar com Facebook para iniciar o onboarding oficial.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook



> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `GQN9PBn9rdMpBSodVLbi`)


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `FUVKGQ1YPEznEWXCQcnv`)


**Passo 3: Autenticação e Dados Empresariais**

1. Realize o login na conta do Facebook que administra seu Gerenciador de Negócios.
2. Selecione o Portfólio empresarial correspondente.
3. Confira os dados da empresa (Nome, Site e País) e clique em Avançar.

**Passo 6:** Selecione o **"Portfólio empresarial"** e confira os **dados da empresa** (nome, site e país), em seguida clique em **"Avançar"**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `z00AvX9fmcqj3S3dUcCj`)


**Passo 7:** Informe o número do País (BR+55) e insira o número que deseja conectar.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook


**Passo 8:** A Meta enviará um código para o **"aplicativo do WhatsApp"**. Insira o código recebido e clique em **"Avançar"**.

<div data-full-width="true">
> 🖼️ **[IMAGEM PENDENTE]** (ref. `JNCpZNFzMYzdWxbSaCYO`)
</div>

**Passo 9:** Confirme o **Display name** e o **fuso horário** em seguida clique em **"Avançar"**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook


#### Validação do Número (Migração)

1. Informe o código do país (BR +55) e insira o número que deseja conectar.
2. Importante: O sistema detectará se o número está ativo em um aparelho. Você precisará confirmar a saída do aplicativo móvel para prosseguir.
3. Escolha o método de recebimento do código de verificação de 6 dígitos: SMS ou Ligação Telefônica.
4. Insira o código recebido para finalizar a criação da sua WABA (WhatsApp Business Account).

**Passo 10:** Recebimento do código de verificação. Uma mensagem será enviada para o **WhatsApp Business** com um código de 6 dígitos.

**Passo 11:** Insira o código de 6 dígitos recebido no WhatsApp Business e clique em **"Verificar"**.

**Passo 12:** Clique em [**adicionar forma de pagamento**](/documentacao/faq/conexao-whatsapp/pagamentos/configurar-pagamento) em seguida clique em **"Continuar"**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook


**Passo 13:** Para finalizar a conexão, selecione o número que está integrando e em seguida clique em **"Continuar".**


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `wYH9yrzzTQGd8AOgKSS4`)


**Passo 14:** Clique em **"Finalizar"** para concluir o processo.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook


**Considerações Finais**

* **Este é o método de conexão recomendado quando o número não é elegível para conexão via QR Code.** A **Meta** avalia o histórico de uso do número e pode determinar que alguns números não são elegíveis para a conexão via QR Code. Caso isso aconteça, você deve utilizar este método (WhatsApp Cloud API).
* **Atualmente, o WhatsApp Desktop para Windows não é compatível com** a Cloud API.\*\* As mensagens enviadas e recebidas pelo WhatsApp Desktop deixarão de funcionar.
* **Neste método, o número precisará ser desconectado do WhatsApp Business App.** Diferente da conexão via QR Code, este método não permite o uso simultâneo do número no app e na API.
* **Neste momento, a sincronização de contatos, números e conversas ainda não está disponível.**
* Algumas funcionalidades não são suportadas na API Oficial, como **Canais, Status, Grupos, enquetes, eventos e localização em tempo real**.
* O número conectado via método convencional **não pode ser usado simultaneamente no WhatsApp Business App**.

**O que altera no app WhatsApp Business**

* **Não será possível usar o número no WhatsApp Business App enquanto estiver conectado à API.**
* Todos os outros dispositivos como **WhatsApp Web** serão desconectados, mas poderão ser reconectados após o vínculo;
* **Não será possível mais editar e excluir mensagens;**
* Mensagens que desaparecem e visualização única **não poderão** ser mais usadas;

**Documentação,** [**clique aqui**](https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users)**.**
