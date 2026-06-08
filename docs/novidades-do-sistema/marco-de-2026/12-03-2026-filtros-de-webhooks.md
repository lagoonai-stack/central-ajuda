---
title: "12/03/2026 - Filtros de Webhooks"
---

#### 🆕 **Webhooks: Novos filtros nas assinaturas**

Agora ficou muito mais fácil **controlar quais eventos sua integração recebe via webhook**.

Antes, ao assinar um evento, o sistema enviava **todas as ocorrências daquele tipo** para a URL configurada. Isso fazia com que muitas integrações precisassem processar **grandes volumes de chamadas desnecessárias**, mesmo quando apenas uma parte dos eventos era relevante.

🚀 **O que chegou de novo?**

Agora é possível configurar **filtros nos eventos de webhook**, permitindo que você receba **apenas os eventos que realmente importam para sua integração**.

Os seguintes eventos agora suportam filtros:

**Atendimentos e mensagens**

* Atendimento criado
* Atendimento alterado
* Atendimento concluído
* Mensagem atualizada
* Mensagem recebida
* Mensagem enviada

**Contato**

* Contato etiqueta alterada

**CRM (Painéis)**

* Painel — Card criado
* Painel — Card alterado
* Painel — Card movido
* Painel — Anotação criada
* Painel — Anotação alterada

**Modelos de mensagem**

* Modelo de mensagem criado
* Modelo de mensagem alterado

⚙️ **Filtros disponíveis**

Dependendo do evento selecionado, é possível filtrar por:

* Canal
* Equipe
* Usuário
* Situação da conversa
* Etiquetas do contato
* Painéis
* Tipos de modelo de mensagem

Cada filtro permite **seleção múltipla** e também possui a opção **“Todos”**, mantendo o comportamento padrão quando necessário.

⚙️ **Como funciona na prática?**

* Os filtros são **opcionais**.
* Quando configurados, o webhook recebe **apenas eventos que atendem a todos os critérios definidos**.
* Quando nenhum filtro é aplicado, o webhook **continua funcionando como antes**, recebendo todos os eventos do tipo assinado.

💡 Com isso, as integrações ficam **mais eficientes, organizadas e escaláveis**, reduzindo chamadas desnecessárias e facilitando o processamento apenas do que realmente importa. 🚀


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `R9y28ZersXoKbKD5FYEH`)

