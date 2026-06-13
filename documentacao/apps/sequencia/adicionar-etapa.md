---
title: "Adicionar Etapa"
---

As etapas definem o que será enviado, quando e em qual canal dentro de uma sequência. Você pode adicionar quantas etapas de envio quiser, combinando modelos de mensagem e chatbots, além de configurar etapas especiais que controlam o comportamento do fluxo.

:::tip

**Pré-requisitos:**

* Ter acesso à plataforma com perfil de **Administrador**.
* Ter uma **sequência** criada.
* Ter as mensagens do tipo sequência com status **aprovado** na plataforma.
* Ter um **chatbot de automação** previamente configurado.

:::

## Etapas de envio

### Adicionar uma nova etapa

Na página da sequência, clique no botão **+** localizado entre as etapas existentes e o bloco de finalização.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/adicionar-desabilitar-etapa/image.avif)


Na janela **Criar etapa**, preencha as configurações:

1. Selecione o tipo de conteúdo: **Enviar modelo de mensagem** ou **Enviar chatbot**.
2. Selecione o **canal de atendimento** desejado.
3. Selecione o **modelo de mensagem** ou o **chatbot** que será utilizado.
4. **Opcional:** ative o toggle **Atendimento oculto** para que o atendimento fique oculto até que o contato responda. Esta configuração só terá efeito para atendimentos criados no momento do disparo da sequência ou atendimentos com mais de 7 dias sem interação.
5. Na seção **Programação**, defina o **atraso no envio em relação à etapa anterior** — informe o valor e a unidade de tempo (minutos, horas, dias, semanas ou meses). Para envio imediato, ative o toggle **Enviar imediatamente**.
6. Na seção **Horários limites para envio**, configure:
   * O intervalo de horário permitido para o disparo (**De / às**)
   * Os **dias da semana permitidos**
   * Ative **Em qualquer horário** ou **Em qualquer dia** se não houver restrições
7. Clique em **Salvar**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/adicionar-desabilitar-etapa/image%20(1).avif)


### Revisar e salvar a sequência

Confira se todas as etapas estão na ordem correta e com as configurações desejadas. Clique em **Salvar Alterações** para confirmar.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/adicionar-desabilitar-etapa/image%20(5).avif)


## Etapas especiais

As etapas especiais controlam o comportamento da sequência. Cada uma pode ser adicionada **apenas uma vez** e não possuem configuração de programação ou horário.

### **Reiniciar sequência**

Permite que a sequência seja reiniciada automaticamente após sua conclusão, criando uma recorrência.

1. Clique no botão **+** e selecione **Reiniciar sequência**.
2. Na janela que abrir, configure:
   * **Reiniciar no máximo:** defina quantas vezes a sequência poderá ser reiniciada — até **5 vezes**.
   * **Reiniciar após:** defina o intervalo de tempo antes do reinício — em minutos, horas, dias, semanas ou meses. Para reinício imediato, ative o toggle **Reiniciar imediatamente**.
3. Clique em **Salvar**.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/adicionar-desabilitar-etapa/image%20(6).avif)


### **Finalizar sequência**

Marca o encerramento do fluxo para o contato. Não possui configurações adicionais — a etapa é adicionada automaticamente ao salvar a primeira etapa da sequência.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps/sequencias/adicionar-desabilitar-etapa/image%20(7).png)


### **Remover contato**

Remove automaticamente o contato da sequência quando ele atende a condições definidas por você. A verificação é feita antes de cada etapa — se o contato atender à condição, ele é removido e as etapas seguintes não são executadas.

1. Clique no botão **+** e selecione **Remover contato**.
2. Na janela **Condição de remoção do contato**, defina a lógica das condições:
   * **Deve satisfazer todas as condições:** o contato será removido apenas se atender a todos os critérios definidos.
   * **Deve satisfazer uma das condições:** o contato será removido se atender a pelo menos um dos critérios.
3. Clique em **Adicionar condição** e configure cada condição de acordo com o tipo escolhido:

**Campo do contato**

* Selecione o campo: Nome, Telefone, Email, Instagram ou campos personalizados.
* Selecione o operador: igual a, diferente de, contém, não contém, está definido.
* Insira o valor de referência.

**Etiqueta do contato**

* Selecione o operador: contém ou não contém.
* Clique em **Definir etiquetas** para selecionar as etiquetas desejadas.

**Metadado do contato**

* Insira a chave do metadado.
* Selecione o operador: igual a, diferente de, menor que, menor ou igual a, maior que, maior ou igual a, contém, não contém ou está definido.
* Insira o valor de referência.<br/>

4. Repita o passo anterior para adicionar mais condições, se necessário. É possível adicionar até **3 condições**.
5. Clique em **Salvar**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `b7xhXaYBQvL91wnZPSA6`)


***

## Artigos relacionados

* [Criar Sequência](/documentacao/apps/sequencia/criar-sequencia)
* [Incluir Contatos na Sequência](/documentacao/apps/sequencia/incluir-contato-na-sequencia)
* [Desabilitar/Excluir Sequência](/documentacao/apps/sequencia/desabilitar-excluir-sequencia)
