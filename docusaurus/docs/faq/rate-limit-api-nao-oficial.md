---
title: "Rate Limit da API Não Oficial do WhatsApp"
---

Para proteger a estabilidade da conexão e evitar bloqueios pelo WhatsApp, a plataforma aplica um controle automático de velocidade de envio nas conexões de **API Não Oficial**. Esse mecanismo é chamado de **rate limit** e define quantas mensagens podem ser disparadas por canal em um determinado intervalo de tempo.

Quando o limite é atingido, a plataforma **não descarta a mensagem**: ela é retida e reenviada automaticamente assim que o canal estiver liberado.

***

## Qual é o limite de envio?

O limite varia conforme o **tipo de mensagem** enviada, já que mídias (imagem, vídeo, áudio e documento) exigem mais recursos de processamento do que mensagens de texto.

| Tipo de mensagem            | Capacidade aproximada        |
| --------------------------- | ---------------------------- |
| Somente texto               | \~10 mensagens a cada 10 seg |
| Somente mídia (imagem etc.) | \~3 mensagens a cada 10 seg  |
| Mix (texto + mídia)         | Depende da proporção         |

> **Exemplo prático:** enviar 7 textos e 1 imagem já equivale ao limite máximo de um intervalo. A partir daí, o próximo envio aguarda o ciclo reiniciar.

O limite é **por canal**: cada número de WhatsApp conectado à plataforma tem sua própria contagem independente. Operações com múltiplos canais não interferem umas nas outras.

***

## O que acontece quando o limite é atingido?

Ao atingir o limite, o canal recebe um bloqueio temporário. A plataforma detecta isso automaticamente e inicia um ciclo de **retentativas progressivas**, aumentando o intervalo de espera a cada nova tentativa para não sobrecarregar o canal.

| Tentativas    | Intervalo de espera aproximado |
| ------------- | ------------------------------ |
| 1ª e 2ª       | 5 segundos                     |
| 3ª a 5ª       | 17 a 25 segundos               |
| 6ª a 10ª      | \~1 a 2 minutos                |
| 11ª a 20ª     | \~4 a 7 minutos                |
| 21ª em diante | \~10 minutos ou mais           |

Esse processo ocorre de forma **totalmente automática e invisível** para o atendente. A mensagem permanece na fila interna até ser entregue com sucesso.

***

## O que é o erro H522?

Se após **1 hora de retentativas** a mensagem ainda não conseguiu ser enviada, a plataforma considera que o canal não tem capacidade de entregar aquela mensagem e encerra o processo.

Nesse caso:

* A mensagem é marcada com status de **Falha**
* O erro **H522** é registrado com a descrição: *"A quantidade de disparos excedeu a capacidade do canal"*
* O atendente ou administrador pode visualizar esse detalhe no histórico da conversa

:::warning

O erro **H522 não é recuperável automaticamente**. Caso ele ocorra com frequência, é recomendável revisar o volume de disparos ou distribuir o envio entre mais canais.

:::

***

## Como evitar atingir o limite?

* **Espace os disparos em campanhas:** ao configurar envios em massa, utilize intervalos entre as mensagens para não saturar o canal.
* **Prefira texto quando possível:** mensagens de texto consomem menos capacidade do que mídias.
* **Use múltiplos canais:** distribua os envios entre diferentes números de WhatsApp para aumentar a capacidade total.
* **Monitore o status do canal:** acompanhe o [Status de Integridade do Canal](/faq/status-de-integridade-do-canal) para identificar instabilidades antes que afetem os envios.

***

### Detalhes Técnicos

Esta seção descreve como o mecanismo de rate limit funciona internamente.

#### Configuração do Rate Limit

| Parâmetro              | Valor                    |
| ---------------------- | ------------------------ |
| Limite de pontos       | 10 pontos por janela     |
| Tamanho de cada janela | 10 segundos              |
| Janelas analisadas     | 3 (30 segundos no total) |
| Retry após bloqueio    | 5 segundos               |

#### Peso por tipo de mensagem

| Tipo      | Peso     |
| --------- | -------- |
| Texto     | 1 ponto  |
| Imagem    | 3 pontos |
| Áudio     | 3 pontos |
| Vídeo     | 3 pontos |
| Documento | 3 pontos |

#### Como o limite é calculado

O sistema utiliza uma **janela deslizante com média**:

1. A cada envio, o sistema analisa os últimos 30 segundos divididos em 3 janelas de 10 segundos
2. Calcula a média de pontos consumidos nessas 3 janelas
3. Se a média for **≥ 10 pontos**, a mensagem é bloqueada
4. Se a média for inferior, o envio é registrado e o contador incrementa com o peso do tipo daquela mensagem

Há também uma **detecção rápida**: se a janela atual já acumulou 10 pontos ou mais, o bloqueio ocorre imediatamente, sem calcular a média.

#### Backoff progressivo das retentativas

O intervalo de espera entre cada tentativa cresce progressivamente conforme a fórmula abaixo:

| Tentativas    | Multiplicador | Delay aproximado                    |
| ------------- | ------------- | ----------------------------------- |
| 1ª e 2ª       | —             | 5 segundos (padrão)                 |
| 3ª a 5ª       | 4×            | 5 + (4 × nº da tentativa) segundos  |
| 6ª a 10ª      | 10×           | 5 + (10 × nº da tentativa) segundos |
| 11ª a 20ª     | 20×           | 5 + (20 × nº da tentativa) segundos |
| 21ª em diante | 30×           | 5 + (30 × nº da tentativa) segundos |

Após **1 hora** sem sucesso, o sistema encerra as tentativas e registra o erro **H522** com status `FAILED` na mensagem.
