---
title: "Status de Integridade do Canal"
---

O campo de **Integridade** funciona como um monitor de saúde em tempo real para a sua conexão de WhatsApp. Ele permite que os administradores saibam rapidamente se o canal está operando de forma correta ou se o sistema está lidando com alguma instabilidade técnica.

Para consultar o status atual, acesse o menu **Ajustes > Conta > Canais de atendimento** e clique em **"Detalhes"** no canal desejado.

Abaixo, explicamos o significado de cada um dos 4 níveis de integridade e como a plataforma reage em cada cenário para proteger a sua operação:

#### 🟢 Estável

É o melhor cenário possível. Significa que a conexão entre a plataforma e o WhatsApp (ou o seu provedor) está funcionando perfeitamente, sem interrupções. O envio e o recebimento de mensagens estão ocorrendo em tempo real.

#### 🟡 Verificando Conexão

O sistema atua de forma preventiva. Nesta fase, a nossa infraestrutura detectou uma potencial falha, atraso ou queda de conexão com o canal e iniciou uma verificação automática.

* **Impacto na operação:** Para evitar alarmismo desnecessário devido a pequenas oscilações de rede, nenhum aviso é exibido para o atendente na tela de atendimento. A operação segue normalmente enquanto o sistema tenta resolver a falha em segundo plano.

#### 🟠 Em Alerta

O problema foi confirmado e persiste. Como a verificação inicial não resolveu a instabilidade, a plataforma entra em modo de proteção de dados e começa a tentar ativamente reconectar o canal.

* **Impacto na operação:** Os usuários passam a ver um aviso na interface informando que o sistema está tentando uma reconexão.
* **Fila de Segurança:** Para garantir que nenhuma informação se perca, **todas as mensagens enviadas pela equipe a partir deste momento são direcionadas para uma fila de espera protegida**. Elas serão disparadas automaticamente assim que a conexão for restabelecida.

#### 🔴 Crítico

A conexão falhou de forma severa ou prolongada. Este status indica que o canal está inoperante há algum tempo.

* **Impacto na operação:** Os usuários recebem um alerta claro de que existe uma instabilidade grave no canal. As mensagens de saída continuam sendo retidas na fila de segurança.
* **Ação necessária:** Neste estágio, geralmente é necessária a intervenção de um administrador. Pode ser preciso verificar se o número sofreu algum bloqueio na Meta ou reconectar o QR Code (no caso de canais não oficiais).

#### 🛡️ Resumo da Proteção de Mensagens

A transição automática entre estes status foi desenhada para garantir que **a sua equipe nunca perca o trabalho realizado**.

Mesmo que o canal entre em estado de **"Alerta"** ou **"Crítico"**, o atendente pode continuar digitando e enviando as mensagens no chat; a plataforma irá guardá-las em segurança e entregá-las aos clientes na ordem correta assim que o status retornar para **"Estável"**.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `c8AR6lGDA9kb4tUr5zsj`)


### Detalhes Técnicos

Esta seção descreve como o sistema de integridade funciona internamente.

#### Enum de Status

Internamente, o campo `HealthStatus` do canal utiliza o enum `ChannelHealthStatus` com os seguintes valores:

| Valor interno  | Exibição na UI         | Descrição                             |
| -------------- | ---------------------- | ------------------------------------- |
| `OK`           | 🟢 Estável             | Canal operacional                     |
| `CHECK`        | 🟡 Verificando conexão | Verificação inicial em curso          |
| `ALERT`        | 🟠 Em alerta           | Falha confirmada, tentando reconectar |
| `CRITICAL`     | 🔴 Crítico             | Falha prolongada, reboot acionado     |
| `DISCONNECTED` | —                      | Desconexão permanente detectada       |
| `DISABLED`     | —                      | Canal desabilitado manualmente        |

#### Mecanismo de Health Check (Circuit Breaker)

O health check é controlado por um job do Hangfire que roda com retentativas automáticas. O número de tentativas (`RetryCount`) determina o status atual:

| Faixa de `RetryCount` | Status resultante | Tempo acumulado aproximado |
| --------------------- | ----------------- | -------------------------- |
| 0 – 7                 | `CHECK`           | Até \~2 minutos            |
| 8 – 23                | `ALERT`           | Até \~6 minutos            |
| ≥ 24                  | `CRITICAL`        | A partir de \~6 minutos    |

A cada tentativa, o sistema aguarda a resposta do gateway por até 15 segundos (na primeira tentativa) ou 10 segundos (nas subsequentes).

**Critério de saúde (canal ZAPI):** o canal é considerado saudável quando:

1. Existe uma mensagem enviada com sucesso nos últimos 2 minutos
2. A instância do gateway está com status `Connected`
3. Todos os webhooks necessários estão inscritos

#### Recuperação automática

Quando o gateway responde com sucesso em qualquer tentativa:

1. O status é alterado para `OK`
2. As mensagens retidas na fila de segurança são reenfileiradas automaticamente para envio
3. A interface do utilizador é notificada em tempo real via WebSocket

#### Pausa automática de campanhas

Quando o status muda para `ALERT`, `CRITICAL` ou `DISCONNECTED`, todas as campanhas ativas associadas ao canal são **pausadas automaticamente** com a seguinte mensagem de motivo:

* `ALERT` / `CRITICAL`: *"O número \[X] está com a conexão instável"*
* `DISCONNECTED`: *"O número \[X] está desconectado"*

As campanhas permanecem pausadas até que um administrador as retome manualmente após a estabilização do canal.
