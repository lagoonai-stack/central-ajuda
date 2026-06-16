---
title: "Códigos de Erros"
---

Ao integrar ou utilizar serviços da Meta, alguns códigos de erro podem ser retornados pela plataforma. Neste artigo, você encontrará a descrição desses códigos e orientações para entender suas causas e possíveis soluções.

### **Erro 131049 - Envio de Template Messenger de Marketing** <a href="#o8rw4y96ay9d" id="o8rw4y96ay9d"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/bckp.avif)


**Como agir ao receber esse erro:**

Ao receber esse código de erro, **não é recomendado tentar reenviar a mesma mensagem imediatamente**. Esse retorno está relacionado ao **limite de mensagens de marketing que o destinatário recebeu recentemente**.

Nesse caso, você pode:

* Enviar uma **mensagem do tipo Utilidade**, se fizer sentido para a comunicação.
* **Aguardar um período maior antes de tentar novamente**, pois o limite aplicado pela Meta pode permanecer ativo por diferentes períodos de tempo.

A própria mensagem de erro retornada pela Meta inclui um link para a documentação oficial com mais detalhes sobre essa limitação: https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#user-marketing-template-message-limits

***

**Por que esse erro ocorre?**

Esse erro acontece quando você tenta enviar um **modelo de mensagem para iniciar ou reiniciar uma conversa** com o cliente.

É importante destacar que **não se trata de um erro da plataforma**, mas sim de uma **restrição aplicada diretamente pela Meta**, sobre a qual não temos controle.

Em determinadas situações, a Meta identifica que um número de telefone **recebeu muitas mensagens de marketing em um curto período**. Para preservar uma boa experiência para os usuários do WhatsApp e manter o engajamento saudável na plataforma, a Meta pode **bloquear temporariamente o envio de novas mensagens de marketing para esse número**.

Essa é uma medida automática aplicada pela própria Meta.

***

**Boas práticas para evitar esse bloqueio:**

Embora não seja possível controlar diretamente essa restrição, algumas práticas podem ajudar a **reduzir a chance de esse bloqueio ocorrer**:

* **Varie os tipos de mensagem**
  Evite enviar apenas mensagens de marketing. Sempre que possível, utilize também **mensagens do tipo Utilidade**, quando forem relevantes para o cliente.
* **Evite envios excessivos em curto período**
  O envio frequente de mensagens de marketing para o mesmo número em um intervalo pequeno de tempo aumenta a probabilidade de bloqueio.
* **Aguarde o desbloqueio automático**
  Caso o bloqueio ocorra, será necessário **aguardar o período determinado pela Meta**, que pode variar de **algumas horas até alguns dias**, até que o envio de mensagens de marketing seja liberado novamente.

***

### **Erro 131056 - Limite de Volume de Envios de Mensagens Atingido** <a href="#afwfmfslcv85" id="afwfmfslcv85"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(9).avif)


**Por que esse erro ocorre?**

Esse erro ocorre, principalmente, quando **muitas mensagens de marketing são enviadas para o mesmo contato em um curto período de tempo**.

Nesses casos, a plataforma continua funcionando normalmente, porém a **Meta (responsável pelo WhatsApp)** pode aplicar **restrições temporárias no envio de mensagens de marketing** para determinados números.

Isso acontece porque a Meta possui mecanismos de controle para **evitar que usuários recebam um volume excessivo de mensagens de marketing**, o que poderia prejudicar a experiência dentro do WhatsApp. Quando o sistema identifica que um número recebeu muitas mensagens desse tipo em um intervalo curto, o envio de novas mensagens de marketing pode ser **temporariamente pausado para aquele destinatário**.

Essa medida é aplicada automaticamente pela Meta e tem como objetivo **manter um ambiente saudável e equilibrado para os usuários da plataforma**.

***

**Possíveis soluções:**

Embora essa restrição seja aplicada diretamente pela Meta, algumas práticas podem ajudar a **reduzir a ocorrência desse erro**:

* **Reduza a quantidade de mensagens enviadas para cada contato**
  Evite enviar muitas mensagens de marketing para o mesmo número em um curto intervalo de tempo. Distribuir melhor os envios ajuda a diminuir a probabilidade de bloqueios temporários.
* **Varie os tipos de mensagens enviadas**
  Em vez de utilizar apenas mensagens de marketing, sempre que possível utilize também **mensagens do tipo Utilidade**, que normalmente possuem regras de envio mais flexíveis.
* **Monitore o status de envio das mensagens**
  Acompanhe os relatórios ou status de entrega das mensagens. Caso identifique bloqueios frequentes, considere **reduzir o volume de envios** e aguardar o período de desbloqueio automático aplicado pela Meta.

***

### **Erro 130472 - Experimento da Meta** <a href="#cdbuvqduo7ju" id="cdbuvqduo7ju"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/bkp2.avif)


**Por que esse erro ocorre?**

Esse erro pode ocorrer porque a **Meta (Facebook)** selecionou **aproximadamente 1% dos números de telefone conectados ao WhatsApp Cloud API no mundo** para participarem de um **experimento controlado**.

O objetivo desse teste é avaliar **como o recebimento de mensagens de marketing impacta a experiência dos usuários finais no WhatsApp**.

***

**O que isso significa na prática?**

Para os números incluídos nesse experimento, o envio de **modelos de mensagem da categoria Marketing** pode ser **temporariamente limitado ou bloqueado**, mesmo que sua conta **WABA (WhatsApp Business Account)** esteja:

* corretamente configurada;
* com saldo disponível;
* com templates aprovados pela Meta;
* sem qualquer infração às políticas da plataforma.

Ou seja, **a restrição não está relacionada a erro de configuração ou penalização da conta**, mas sim a um teste conduzido pela própria Meta.

***

**O que a Meta está avaliando nesses testes?**

A Meta realiza esse tipo de experimento para **ajustar seus algoritmos e políticas de envio de mensagens**. Entre os pontos analisados estão:

* o impacto de mensagens de marketing na **satisfação do usuário**;
* **taxas de entrega, leitura, bloqueio e denúncias**;
* possíveis **ajustes nos limites de envio de mensagens de marketing**.

:::info

**Observação:**

Esses experimentos são temporários, porém **a Meta não divulga um prazo oficial para o encerramento do teste**.

:::

***

**Soluções e alternativas:**

Se você precisar se comunicar com um contato que esteja incluído nesse experimento, algumas estratégias podem ajudar a contornar a restrição de mensagens de marketing:

1. **Utilize modelos da categoria Utilidade**
   O bloqueio está focado principalmente em **mensagens de Marketing**. Sempre que possível, tente iniciar a conversa utilizando **modelos da categoria Utilidade**, como confirmação de pedido, envio de boleto ou lembretes de agendamento. Esses modelos geralmente não são afetados pelo experimento.
2. **Aguarde o usuário iniciar a conversa (janela de 24 horas)**
   A restrição se aplica ao envio iniciado pela empresa (**business-initiated conversation**). Caso o cliente envie uma mensagem primeiro, será aberta uma **janela de atendimento de 24 horas**, na qual você poderá responder normalmente sem as restrições aplicadas ao marketing.
3. **Utilize canais alternativos para iniciar o contato**
   Se o assunto for urgente, você pode entrar em contato com o cliente por outros canais, como **telefone, SMS ou e-mail**, e solicitar que ele envie uma mensagem no WhatsApp. Assim, a janela de atendimento será aberta e a conversa poderá continuar normalmente.

:::info

**Pontos importantes:**

* **Não é um erro da plataforma ou do provedor (BSP):** a restrição vem diretamente da API da Meta.
* **Não é uma penalização:** o bloqueio não está relacionado à qualidade do número ou a denúncias de usuários.
* **Não é possível solicitar remoção do teste:** como se trata de um experimento automático e aleatório da Meta, **não há opção de opt-out** para sair manualmente desse grupo.

:::

***

### **Erro 130497 - Conta Comercial Impedida de Enviar Mensagens** <a href="#cdbuvqduo7ju" id="cdbuvqduo7ju"></a>

O **erro 130497** indica que a conta do **WhatsApp Business** está sujeita a uma **restrição geográfica de envio de mensagens**. Essa limitação ocorre quando a Meta não consegue validar corretamente a localização da empresa, geralmente devido a **informações incompletas ou configuradas incorretamente no Meta Business Manager**.

**Por que isso acontece?**

Diferente do que muitas pessoas imaginam, a Meta **não identifica automaticamente o país da empresa apenas pelo prefixo do número de telefone** (por exemplo, +55 para o Brasil).

Quando o campo **“País”** não está preenchido ou está configurado incorretamente nas informações da empresa no **Business Manager**, o sistema pode aplicar **restrições de envio entre países (cross-country messaging)**.

Nesses casos, o envio de mensagens pode ser bloqueado, **mesmo quando a comunicação ocorre dentro do mesmo país**.

***

**Como resolver:**

Para regularizar a configuração da empresa, siga os passos abaixo:

1. Acesse o **Meta Business Manager**.
2. Vá até **Configurações do negócio**.
3. Selecione **Informações da empresa**.
4. Localize o campo **País** e verifique se ele está preenchido corretamente (por exemplo: **Brasil**).
5. Caso o campo esteja vazio ou incorreto, clique em **Editar**, selecione o país correto e **salve as alterações**.
6. Após a atualização, aguarde o período de **propagação da configuração na Meta**.

**Resultado esperado:**

Após a atualização das informações da empresa no **Business Manager** e a propagação das alterações pela Meta, **o envio de mensagens tende a ser normalizado automaticamente**.

***

### **Erro 131042 - META**


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(3).avif)


**Por que esse erro ocorre?**

O **erro 131042** ocorre quando a **Meta enfrenta dificuldades para processar o pagamento** utilizando o cartão cadastrado na conta do **portfólio empresarial (Business Manager)**.

Na maioria dos casos, o problema está relacionado a **falhas no processamento do pagamento pela própria Meta**, o que impede a realização do débito, mesmo quando o cartão cadastrado está válido e ativo.

Essa situação pode acontecer devido a:

* inconsistências temporárias no sistema de cobrança da Meta;
* falha ao processar o valor total pendente;
* problemas com o método de pagamento configurado na conta.

***

**Como solucionar esse erro:**

1. **Confirme os dados do cartão**

Verifique se as informações do cartão cadastradas no **Business Manager** estão corretas e atualizadas.
Também é importante confirmar se **há saldo ou limite disponível** para a cobrança.<br/>

2. **Tente realizar o pagamento manualmente**

No **Gerenciador de Negócios**, siga os passos abaixo:

1. Acesse **Contas**.
2. Clique em **Contas do WhatsApp**.
3. Vá até **Configurações de pagamento**.
4. Verifique o **saldo pendente**.

Se houver um valor em aberto (por exemplo, **US$ 8**), tente realizar o pagamento manualmente.

Caso o pagamento do valor total não seja processado, tente **ajustar o valor manualmente para um valor ligeiramente menor**, como **US$ 7**, e realize a cobrança novamente. Após o pagamento ser reconhecido, a Meta normalmente **libera o envio de mensagens automaticamente**.<br/>

3. **Atualize ou adicione um novo método de pagamento**

Se o problema persistir, atualize o método de pagamento:

1. Acesse **Contas > Contas do WhatsApp > Configurações de pagamento**.
2. Na página de **Configurações de pagamento**, clique em **Adicionar forma de pagamento**.
3. Siga as instruções exibidas na tela.
4. Insira os dados do cartão e clique em **Salvar**.

Após atualizar ou adicionar um novo método de pagamento, aguarde alguns minutos para que a Meta processe a alteração.

***

### Erro 131026 - Número Não Registrado no WhatsApp <a href="#sirpmrgu535p" id="sirpmrgu535p"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(4).avif)


**Por que esse erro ocorre?**

O **erro 131026** ocorre quando há uma tentativa de envio de mensagem para um número que **não está registrado no WhatsApp**. Nesse caso, o sistema não consegue entregar a mensagem porque **o número informado não possui uma conta ativa na plataforma**.

**Causas mais comuns:**

* **Número não possui conta no WhatsApp**
  O número informado não está associado a nenhuma conta ativa no WhatsApp.
* **Mudança de número pelo usuário**
  O destinatário pode ter alterado o número utilizado no WhatsApp e não atualizou essa informação com sua empresa.
* **Erro ao digitar o número**
  O número pode ter sido inserido incorretamente, com **dígitos a mais, a menos ou no formato incorreto**.
* **Conta desativada**
  O usuário pode ter **desativado temporariamente ou permanentemente sua conta do WhatsApp**.

***

**Como resolver:**

1. **Verifique se o número está correto**

* Confirme se o número foi informado corretamente.
* Certifique-se de que ele está no **formato internacional**, incluindo o código do país (ex.: **+55** para Brasil).
* Verifique se o número contém o **nono dígito**, quando aplicável.
* Confirme com o cliente se o número utilizado é o mesmo registrado no WhatsApp.<br/>

2. **Verifique se o número possui WhatsApp**

Você pode validar isso de duas formas:

* Tentar iniciar uma conversa diretamente pelo aplicativo WhatsApp.
* Utilizar o link: **https://wa.me/\\[número]**

Se o número não estiver registrado no WhatsApp, a conversa não poderá ser iniciada.<br/>

3. **Teste o envio da mensagem para outro número**

Caso ainda haja dúvida sobre a origem do problema, faça um teste:

* Envie **o mesmo Template de Mensagem (TM)** para outro número que você sabe que está ativo no WhatsApp.

**Resultados possíveis:**

* **Se a mensagem for enviada com sucesso:** o problema está no número original, que provavelmente **não está registrado no WhatsApp**.
* **Se a mensagem não for enviada:** o problema pode estar relacionado ao **template de mensagem** ou à **configuração da conta**. Nesse caso, tente enviar **outro template** para confirmar.

***

### Erro 131000 - Erro Desconhecido <a href="#e0ukwxsjis3v" id="e0ukwxsjis3v"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image.png)


**Por que esse erro ocorre?**

O **erro 131000** ocorre quando há uma **falha técnica no processamento do envio de mensagens pela API do WhatsApp da Meta**.

Esse tipo de erro normalmente está relacionado a **problemas temporários de comunicação entre os sistemas**, configurações incorretas ou **instabilidades momentâneas nos serviços da Meta**.

**Possíveis causas:**

Entre as situações mais comuns que podem gerar esse erro estão:

* **Instabilidade temporária nos servidores da Meta:** [**status da API da Meta**](https://metastatus.com/)**;**
* **Falhas de comunicação** entre a plataforma utilizada e a API do WhatsApp;
* **Configurações incorretas** na integração com a API.

***

**Como resolver:**

* **Verifique o status da API da Meta**
  Confirme se há relatos de **instabilidade ou manutenção** nos serviços da Meta que possam estar afetando o envio de mensagens.
* **Verifique sua conexão com a internet**
  Certifique-se de que a conexão utilizada para acessar a plataforma está funcionando corretamente.
* **Tente enviar a mensagem novamente**
  Em muitos casos, esse erro é temporário e pode ser resolvido ao realizar **uma nova tentativa de envio** após alguns instantes.

:::info

**Observação:**

Se esse erro ocorrer **logo após a conexão de um número na API Oficial**, pode ser necessário **reconfigurar a integração**.

Nesse caso:

1. Acesse o **portfólio empresarial (Meta Business Manager)**.
2. Exclua as informações relacionadas à conexão do número.
3. Realize **novamente o processo de conexão do número à API Oficial**.

Após a reconexão, o envio de mensagens tende a voltar ao funcionamento normal.

:::

***

### **Erro 135000 - Falha ao Enviar Mensagem** <a href="#jrbec5iwehcn" id="jrbec5iwehcn"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(5).avif)


**Por que esse erro ocorre?**

O **erro 135000** pode ocorrer quando um atendente tenta enviar um **modelo de mensagem (template)** durante um atendimento e o envio falha. Esse problema geralmente está relacionado a **inconsistências na sincronização ou validação do modelo de mensagem junto à Meta**.

Em alguns casos, o modelo pode estar aprovado na Meta, mas **não estar corretamente sincronizado ou atualizado na plataforma**, o que impede o envio.

***

**Como resolver:**

Uma das formas mais comuns de resolver esse problema é **realizar a sincronização dos modelos de mensagem com a Meta**. Essa ação deve ser realizada por um usuário com **perfil de Administrador**.

Se o problema persistir, siga os passos abaixo:

1. **Acesse os Modelos de Mensagem**
   Localize o modelo que está sendo utilizado no painel de **Modelos de Mensagem de Atendimento**.
2. **Duplique o modelo de mensagem**
   Crie uma cópia do modelo que apresentou o erro. Você pode manter o mesmo conteúdo ou realizar pequenos ajustes, se necessário.
3. **Envie o novo modelo para aprovação**
   Após duplicar o modelo, envie-o para aprovação da Meta e aguarde até que ele seja aprovado.
4. **Teste o envio novamente**
   Depois da aprovação, utilize o **modelo duplicado** para realizar um novo teste de envio da mensagem.

:::info

**Boas práticas:**

Se o modelo duplicado funcionar normalmente, pode ser útil **duplicar outros modelos que apresentem comportamento semelhante**, garantindo que todos estejam atualizados e sincronizados corretamente com a Meta. Isso ajuda a evitar falhas no envio e mantém o fluxo de comunicação funcionando sem interrupções.

:::

***

### **Erro 131047 - Mais de 24h Sem Contato** <a href="#id-26m6d0s9n32g" id="id-26m6d0s9n32g"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(1).png)


**Por que esse erro ocorre?**

O **erro 131047** ocorre quando uma empresa tenta enviar uma mensagem **fora da janela de atendimento de 24 horas do WhatsApp**.

De acordo com as políticas do WhatsApp, após **24 horas desde a última mensagem enviada pelo cliente**, a empresa não pode mais responder livremente na conversa. A partir desse momento, novas mensagens só podem ser enviadas utilizando um **modelo de mensagem (template) previamente aprovado pela Meta**.

Essa regra existe para **evitar comunicações não solicitadas e preservar uma boa experiência para os usuários do WhatsApp**.

***

**Como resolver:**

Para retomar o atendimento, é necessário **enviar um modelo de mensagem aprovado pela Meta**. Após o cliente responder a essa mensagem, a **janela de atendimento de 24 horas será reaberta**, permitindo que a conversa continue normalmente.

:::info

**Observação:**

Esse erro também pode ocorrer se **o número do contato for editado durante uma conversa ativa**.

Por exemplo, se durante o atendimento houver a necessidade de **corrigir o número do cliente**, como adicionar o **nono dígito** ou atualizar o telefone informado, o sistema pode interpretar a alteração como um **novo contato sem histórico recente de interação**, resultando no erro de janela de 24 horas.

:::

***

### **Erro 131048 - Parâmetro Ausente ou Inválido** <a href="#g8blifezkmxm" id="g8blifezkmxm"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(6).avif)


**Por que esse erro ocorre?**

O **erro 131048** ocorre quando há algum problema na estrutura da mensagem enviada ou quando a conta atinge **limitações relacionadas à qualidade ou ao volume de envio de mensagens**.

Esse erro pode acontecer quando **parâmetros obrigatórios estão ausentes ou inválidos**, ou quando a Meta identifica comportamentos que podem indicar **envio excessivo de mensagens ou possível atividade de spam**.

**Causas mais comuns:**

* **Parâmetro ausente ou inválido**
  A mensagem enviada pode não conter todas as informações necessárias ou pode incluir **dados em formato incorreto**, o que impede o processamento da requisição pela API da Meta.
* **Limite de qualidade ou spam atingido**
  O WhatsApp pode aplicar restrições temporárias quando identifica que a conta possui **baixa classificação de qualidade**. Isso pode ocorrer quando muitos usuários **bloqueiam o número ou denunciam as mensagens como spam**.
* **Limite de taxa de envio**
  Também pode ocorrer quando há **um volume muito alto de mensagens enviadas em um curto período**, ultrapassando os limites definidos pela Meta.

***

**Como resolver:**

* **Verifique os parâmetros da mensagem**
  Confirme se todos os campos obrigatórios da mensagem estão presentes e se os dados enviados estão no **formato correto**.
* **Reduza o volume de envios**
  Caso o erro esteja relacionado a limites de envio, diminua a quantidade de mensagens enviadas a partir do mesmo número em um curto intervalo de tempo.
* **Verifique a qualidade da conta**
  No **WhatsApp Manager**, consulte o **status de qualidade do número** para verificar se há alertas relacionados a bloqueios ou denúncias por parte dos usuários.
* **Evite mensagens repetitivas**
  Evite enviar **mensagens idênticas ou muito frequentes**, pois esse comportamento pode ser interpretado pela Meta como spam.

***

### **Erro 132001 - Modelo Não Existe** <a href="#g8blifezkmxm" id="g8blifezkmxm"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(7).avif)


**Por que esse erro ocorre?**

O **erro 13201** ocorre quando há uma tentativa de envio de um **modelo de mensagem (template)** que **não está registrado ou não é reconhecido pela API do WhatsApp**.

Isso significa que o sistema não conseguiu localizar o modelo solicitado na base de templates disponíveis na Meta.

**Causas mais comuns:**

* **Modelo de mensagem excluído**
  O template pode ter sido **removido no WhatsApp Manager (Gerenciador de Negócios)** e, por isso, não está mais disponível para envio.
* **Nome do modelo incorreto**
  O nome do modelo pode ter sido **informado de forma incorreta**, impedindo que a API identifique o template correspondente.
* **Modelo ainda em análise**
  O template pode estar **em processo de aprovação pela Meta** e, enquanto estiver nesse status, não poderá ser utilizado para envio.
* **Modelo rejeitado**
  Se o modelo foi **reprovado pela Meta**, ele não poderá ser utilizado até que seja ajustado e aprovado novamente.

***

**Como resolver:**

* **Sincronize os modelos de mensagem**
  Solicite a um usuário com perfil de **Administrador** que realize a **sincronização dos modelos de mensagem com a Meta**, garantindo que todos os templates estejam atualizados na plataforma.
* **Crie um novo modelo de mensagem**
  Se o modelo não existir mais ou estiver com problemas, crie um **novo template** e aguarde a aprovação da Meta.
* **Reenvie o modelo para aprovação**
  Caso o modelo esteja **reprovado ou ainda em análise**, revise o conteúdo conforme necessário e envie novamente para aprovação.
* **Siga as diretrizes da Meta para templates**
  Certifique-se de que o modelo atende às [diretrizes para modelos de mensagem](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/), evitando novas reprovações.

***

### **Erro 131031 - Conta Restrita ou Bloqueada** <a href="#ukhgiy1yhf" id="ukhgiy1yhf"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(2).png)


**Por que esse erro ocorre?**

O **erro 131031** ocorre quando a conta do **WhatsApp Business** está **restrita ou bloqueada pela Meta**. Essa situação normalmente indica que a conta pode ter violado **alguma política ou regra de uso do WhatsApp Business**.

Quando isso acontece, a Meta pode **limitar temporariamente ou bloquear o envio de mensagens** até que a situação seja analisada ou regularizada.

**Causas mais comuns:**

* **Violação das políticas da Meta**
  Envio de mensagens que não seguem as diretrizes do WhatsApp Business, como **conteúdo inadequado ou comunicação não autorizada pelos usuários**.
* **Reclamações de usuários**
  Um número elevado de **bloqueios ou denúncias de spam** por parte dos destinatários pode impactar negativamente a qualidade da conta e levar a restrições.
* **Atividades consideradas suspeitas**
  Uso inadequado da API, como **envio excessivo de mensagens em massa ou automações agressivas**, pode fazer com que a Meta aplique restrições preventivas na conta.

***

**Como resolver:**

Para entender o motivo da restrição e verificar possíveis orientações da Meta, siga os passos abaixo:

1. Acesse o **Meta Business Manager**.
2. Na barra lateral esquerda, clique no ícone de **menu**.
3. Clique em **Página Inicial do Suporte para Empresas**.
4. Verifique se há **notificações, alertas ou mensagens da Meta** relacionadas à conta ou ao erro.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(8).avif)


**Revise as políticas de uso:**

Certifique-se de que sua conta está em conformidade com as **Políticas Comerciais** e as **Políticas de Mensagens da Meta**.
Evite enviar **mensagens não solicitadas** ou conteúdos que possam ser interpretados como **spam pelos destinatários**.

**Responda às notificações da Meta:**

Verifique se há **notificações ou solicitações de ação** no **Gerenciador de Negócios**. Caso existam, siga as orientações fornecidas pela Meta.

Em muitos casos, a Meta pode solicitar **informações adicionais ou ajustes nas práticas de envio** para que a conta seja analisada e eventualmente reativada.

**Corrija possíveis práticas inadequadas:**

Revise sua estratégia de envio de mensagens e evite práticas que possam gerar restrições.

Algumas boas práticas incluem:

* **Reduzir o envio de mensagens para listas grandes de contatos** que não interagiram recentemente com sua empresa;
* **Priorizar mensagens relevantes**, alinhadas ao interesse e à necessidade dos clientes;
* Garantir que o **opt-in (consentimento do cliente para receber mensagens)** esteja devidamente coletado e documentado.

***

### **Erro 100 - Mensagem Não Suportada** <a href="#ukhgiy1yhf" id="ukhgiy1yhf"></a>


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(3).png)


**Por que esse erro ocorre?**

Esse erro geralmente acontece quando há **problemas nos parâmetros enviados na requisição ou nas permissões necessárias para executar a ação na API da Meta**.

Ele pode ocorrer quando o sistema tenta acessar um recurso inexistente, utiliza dados inválidos ou quando o aplicativo não possui as permissões necessárias para realizar determinada operação.

**Causas mais comuns:**

* **Parâmetros inválidos ou ausentes**
  O erro pode ocorrer quando a requisição enviada para a API contém **parâmetros incorretos, incompletos ou em formato inválido**. Por exemplo, ao tentar acessar um recurso utilizando um **ID inválido** ou sem informar todos os campos obrigatórios: [Desenvolvedores do Facebook](https://developers.facebook.com/community/threads/1221094378050282/?utm_source=chatgpt.com)
* **Recurso inexistente ou inacessível**
  A tentativa de acessar um **recurso que não existe ou que não está disponível para o aplicativo** também pode gerar esse erro.
* **Permissões insuficientes**
  O aplicativo pode não possuir as **permissões necessárias** para executar determinada ação, como enviar mensagens ou acessar determinados dados.
* **Problemas com URLs**
  Quando a mensagem contém links, **URLs malformadas ou que não seguem os requisitos da Meta** podem impedir o processamento da requisição.

***

**Como resolver:**

* **Verifique os parâmetros da requisição**
  Confirme se **todos os parâmetros obrigatórios estão presentes** e se os dados enviados estão no **formato correto**.
* **Confirme as permissões do aplicativo**
  Verifique se o aplicativo possui **todas as permissões necessárias** para realizar a ação desejada. Caso necessário, revise ou conceda as permissões no painel da Meta: [Processo Para Conceder Permissão](/documentacao/ajustes/conta/processo-de-dar-permissao-para-reconectar-o-numero)
* **Valide os recursos utilizados**
  Certifique-se de que **os recursos ou IDs informados realmente existem** e que estão acessíveis para o aplicativo.
* **Teste as URLs utilizadas**
  Se a mensagem contiver links, valide as URLs para garantir que estão corretamente formatadas. Ferramentas de verificação da Meta podem ajudar a identificar problemas com os links antes do envio: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

***

### **Erro 131051 - Mensagem Não Suportada pela API**


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(4).png)


**O que significa essa mensagem?**

A mensagem **“Mensagem não suportada pela API”** aparece quando um contato envia um tipo de conteúdo que **não é compatível com a API oficial da Meta**, utilizada nas integrações com **WhatsApp, Instagram ou Messenger**.

Nesses casos, a plataforma não consegue **exibir ou processar o conteúdo recebido**, pois esse formato **não é suportado pela API disponibilizada pela Meta**.

***

**Em quais situações essa mensagem pode aparecer?**

Ao visualizar uma conversa na plataforma, pode aparecer o aviso **“Mensagem não suportada pela API”** no lugar do conteúdo enviado pelo contato.

Esse comportamento é **esperado e controlado diretamente pela Meta**, não sendo algo que possa ser alterado ou corrigido pela plataforma.

Mesmo que o conteúdo específico não possa ser exibido, **a conversa não é perdida**. Todas as demais mensagens trocadas permanecem normalmente disponíveis no histórico do atendimento.

Vale lembrar que **as limitações podem variar conforme atualizações da API oficial da Meta**, que define quais tipos de mensagens podem ou não ser processados por integrações.

***

**Exemplos de conteúdos que podem gerar essa mensagem:**

Alguns tipos de conteúdo que podem resultar nesse aviso incluem:

* **Reações a mensagens** (como emojis de reação no WhatsApp);
* **Figurinhas animadas** ou stickers personalizados não compatíveis;
* **Áudios temporários** ou formatos específicos de notas de voz;
* **Arquivos ou formatos muito recentes**, ainda não suportados pela API oficial;
* **Mensagens enviadas por bots ou automações externas** que utilizam recursos não compatíveis com a integração.

***

**O que fazer quando essa mensagem aparecer?**

Caso esse aviso apareça durante um atendimento, algumas ações podem ajudar a continuar a conversa normalmente:

* Informe ao cliente que **o formato do conteúdo enviado não é compatível com a integração oficial**;
* Solicite que ele **reenvie a informação em outro formato**, como texto, imagem, áudio padrão ou documento;
* Oriente o contato a evitar o envio de **reações, figurinhas animadas ou formatos não convencionais**, caso o problema ocorra com frequência.

:::info

**Observação:**

Esse comportamento **não indica um erro da plataforma**, mas sim **uma limitação da API oficial da Meta**, responsável por definir quais tipos de conteúdo podem ser processados por integrações externas.

:::

***

### Erro 131060 - Mensagem Indisponível (Coexistência e CTWA)


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/whatsapp_(oficial)/erros_comuns/codigos_de_erros/image%20(5).png)


Ao operar canais de **WhatsApp Business**, especialmente em cenários que utilizam **anúncios Click-to-WhatsApp (CTWA)** em ambientes de **Coexistência (COEX)**, você pode se deparar com um aviso no atendimento indicando o **erro 131060**.

Esse comportamento está relacionado a uma limitação conhecida da infraestrutura do WhatsApp.

***

**O que está acontecendo?**

Esse erro ocorre devido a um **atraso na classificação da conversa pelos servidores do WhatsApp**.

Quando um cliente inicia uma conversa com um número de **WhatsApp Business**, o aplicativo precisa primeiro exibir uma **mensagem de sistema de segurança**, conhecida como **aviso azul**, que informa ao usuário que a conversa está sendo gerenciada por um serviço da Meta.

Exemplo do aviso exibido ao usuário: “Esta empresa agora usa um serviço seguro da Meta para gerenciar esta conversa.”

Esse aviso confirma que a conversa está sendo tratada como uma interação com **WhatsApp Business via API**.

***

**Por que ocorre o erro?**

Se o cliente **envia uma mensagem antes que o aviso azul apareça no aplicativo**, o WhatsApp ainda trata aquela conversa como um chat comum do aplicativo **Small and Medium Business (SMB)**.

Nesse cenário:

* a plataforma recebe o **evento de envio da mensagem**,
* porém **o conteúdo da mensagem não é compartilhado com a API Oficial (Cloud API)**.

Como resultado, a mensagem chega ao sistema **sem conteúdo**, gerando o **erro 131060** no histórico da conversa.

***

**Por que isso acontece mais em anúncios (CTWA)?**

Identificamos que a maioria das ocorrências acontece em fluxos iniciados por **Click-to-WhatsApp**, quando o usuário clica em anúncios do **Facebook ou Instagram** que direcionam para o WhatsApp.

Isso ocorre devido à combinação de alguns fatores:

**Velocidade de ação:** O usuário clica no anúncio e a mensagem automática pré-definida é enviada quase imediatamente.

**Primeiro contato com a empresa:** Geralmente é a primeira vez que o cliente conversa com o número da empresa, e ele ainda **não possui o contato salvo na agenda**.

**Processamento inicial da criptografia:** A criptografia de ponta a ponta e a identificação da conversa comercial ainda estão sendo processadas pela infraestrutura da Meta, o que pode atrasar a exibição do aviso azul.

***

**Observação técnica:**

Embora não exista uma confirmação oficial da Meta sobre todos os fatores envolvidos, observamos que alguns cenários podem aumentar a incidência desse comportamento:

* Dispositivos mais antigos
* Conexão de internet instável
* Alto volume de mensagens simultâneas

Esses fatores podem **aumentar o tempo necessário para concluir a inicialização da conversa segura**, ampliando a janela em que a mensagem pode ser enviada antes da exibição do aviso de sistema.

***

**Posicionamento oficial da Meta:**

Nossa equipe técnica escalou esse comportamento diretamente para a equipe de produto da Meta.

O retorno oficial foi que:

* Trata-se de **um comportamento conhecido da plataforma**
* Ocorre devido ao **atraso na exibição da mensagem de sistema**
* O impacto é **maior em números que utilizam Coexistência (COEX)** e possuem **alto volume de tráfego**

**Como mitigar esse cenário:**

De acordo com a orientação atual da Meta, a única forma de evitar esse comportamento em fluxos iniciados por anúncios **Click-to-WhatsApp** é:

**Migrar o número completamente para a Cloud API (API Oficial)**, deixando de utilizar o modo de **Coexistência com o aplicativo físico do WhatsApp**.

**Próximos passos da Meta:**

A Meta informou que pretende:

* documentar esse cenário oficialmente em sua documentação
* revisar a descrição do erro
* avaliar melhorias na arquitetura para reduzir ou eliminar essa limitação no futuro

Nossa equipe continua acompanhando o tema de perto e **este artigo será atualizado caso novas orientações ou soluções sejam disponibilizadas pela Meta**.
