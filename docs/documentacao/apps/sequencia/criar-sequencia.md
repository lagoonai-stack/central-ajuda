---
title: "Criar"
---

A funcionalidade **Sequências** permite programar uma série de mensagens enviadas automaticamente em intervalos definidos por você. É a forma mais eficiente de manter o acompanhamento de contatos sem depender de ações manuais repetitivas.

:::tip

**Pré-requisitos:**

* Perfil de **Administrador** na plataforma.
* Mensagens do tipo Sequência **aprovadas na plataforma.**
* **Chatbot de automação** que será usado está previamente configurado.

:::

## Acesse o módulo Sequências

No menu principal, clique em **Apps** e selecione **Sequências**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/criar/image.avif)


## Crie uma nova sequência

1. Na tela de Sequências, clique no botão **+ Nova**.
2. Um formulário será exibido — insira o **nome da sequência**.
3. Clique em **Continuar**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/criar/image%20(1).avif)


## Configure a primeira etapa

Você será direcionado para a página de configuração da sequência. Clique no botão **+** para adicionar a primeira etapa.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/criar/image%20(2).avif)


Na janela **Criar etapa**, preencha as configurações:

1. Selecione o tipo de conteúdo: **Enviar modelo de mensagem** ou **Enviar chatbot**.
2. No campo ao lado, selecione o **canal de atendimento** desejado.
3. Selecione o **modelo de mensagem** ou o **chatbot** que será utilizado nesta etapa.
4. **Opcional:** ative o toggle **Atendimento oculto** para que, após o disparo da sequência, o atendimento fique oculto até que o contato responda. Esta configuração só terá efeito para atendimentos criados no momento do disparo da sequência ou atendimentos com mais de 7 dias sem interação.
5. Na seção **Programação**, defina o **atraso no envio em relação à etapa anterior** — informe o valor e a unidade de tempo (minutos, horas, dias, semanas ou meses). Para envio imediato, ative o toggle **Enviar imediatamente**.
6. Na seção **Horários limites para envio**, configure:
   * O intervalo de horário permitido para o disparo (**De / às**)
   * Os **dias da semana permitidos** para envio
   * Ative **Em qualquer horário** ou **Em qualquer dia** caso não queira restrições
7. Clique em **Salvar**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `gbi1Pcl9P2PTsr31CZYP`)


:::info

Para incluir contatos na sequência, é necessário que ela tenha pelo menos uma etapa salva. Após configurar as etapas, clique em **Salvar Alterações** para habilitar a adição de contatos.

:::

***

## Artigos relacionados

* [Adicionar Etapa](/documentacao/apps/sequencia/adicionar-etapa)
* [Incluir Contatos na Sequência](/documentacao/apps/sequencia/incluir-contato-na-sequencia)
* [Desabilitar/Excluir Sequência](/documentacao/apps/sequencia/desabilitar-excluir-sequencia)
