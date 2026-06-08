---
title: "29/05/2026 - API CRM de Vendas"
---

### 🔗 Evolução na API para suportar novos recursos do CRM

A API do CRM foi atualizada para suportar o novo ciclo de vida de Ganho e Perda nos cards. As mudanças incluem novos filtros, campos de resposta e um endpoint dedicado para motivos de perda, tudo de forma retrocompatível, já que todos os novos parâmetros são opcionais.

***

#### ✅ **O que foi adicionado?**

### **1. Novo endpoint GET /v2/panel — Filtro e campo type**

• Foi criada uma **versão V2** do endpoint de listagem de painéis para suportar os novos recursos.
• Novo parâmetro de query opcional **type** para filtrar painéis pelo tipo. Valores aceitos: SALES e MANAGEMENT.
• O campo **type** é retornado no objeto de cada painel na resposta, indicando se ele é do tipo Vendas (SALES) ou Gestão (MANAGEMENT).

> ⚠️ O endpoint GET /v1/panel **não foi alterado** e continua funcionando normalmente. Vale lembrar que a V1 retorna apenas painéis do tipo Gestão (MANAGEMENT). Para acessar painéis do tipo Vendas, utilize a V2.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `kzoFyT5jLq74u1sIr0w5`)


### **2. Novo endpoint GET /v2/cards — Filtro por situação, campo status e motivo de perda**

• Foi criada uma **versão V2** do endpoint de listagem de cards para suportar os novos recursos.
• Novo parâmetro de query opcional **statuses** para filtrar cards por situação. Valores aceitos: OPEN, WON, LOST e ARCHIVED. É possível informar múltiplos valores simultaneamente.
• O campo **status** é retornado no objeto de cada card na resposta, refletindo o estado atual da negociação.
• O parâmetro **includeDetails** passa a aceitar o novo valor LostReason. Quando informado, a resposta de cada card com status LOST incluirá o objeto **lostReason**, contendo o id e o name do motivo registrado. Se LostReason não for enviado, o objeto lostReason ainda aparece na resposta, porém com os campos id e name retornando como null.

> **OPEN** → card em andamento, sem marcação de ganho/perda e sem arquivamento.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `oFwNjMy09CUJwH0JNTFT`)


### **3. Novo endpoint GET /v1/panels/`{panelId}`/lost-reasons**

• Endpoint dedicado para listar os **motivos de perda** cadastrados em um painel específico do tipo Vendas (SALES).
• Retorna a lista de motivos disponíveis com id e name de cada item.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `2Q7tDZ1gWSGfsTgVMZk1`)


### **4. Endpoint PUT /v3/panel/card/`{id}` — Atualização de status e remoção do parâmetro archived**

• Foi criada uma **versão V3** do endpoint de atualização de card para consolidar o gerenciamento de estado.
• O array **fields** passa a aceitar o valor "status", permitindo atualizar a situação do card via requisição PUT.
• Novo parâmetro opcional **status** no corpo da requisição. Valores aceitos: OPEN, WON, LOST e ARCHIVED. Apenas um valor pode ser enviado por vez.
• O campo **status** com o valor atualizado passa a ser retornado no objeto de resposta.
• O parâmetro **archived** foi removido do corpo da requisição, da resposta e dos valores aceitos no array fields, pois foi substituído pelo novo campo status.

> ⚠️ O parâmetro archived foi removido **apenas na V3**. Se você utiliza esse parâmetro e deseja migrar para a V3, atualize para o novo campo status com o valor ARCHIVED. Caso permaneça na V2, nenhuma alteração é necessária.

> ℹ️ A marcação de status WON (Ganho) ou LOST (Perda) é exclusiva para cards de **painéis do tipo Vendas** (SALES). Tentativas de aplicar esses status em cards de painéis do tipo Gestão (MANAGEMENT) não são suportadas.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `Bs06JTQJ7nSEojuJ5j8q`)


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `LNMNdXaTggeCNqegte9n`)


### **5. Endpoint PUT /v3/panel/card/`{id}` — Bloqueio de movimentação de etapa para cards finalizados**

• Cards com status WON (Ganho) ou LOST (Perda) não podem ter sua etapa (stepId) alterada enquanto estiverem nesse estado.
• Tentativas de mover a etapa de um card finalizado resultarão em erro, com mensagem indicando que o card não pode ser movido. Para reabrir o card, atualize o status para OPEN antes de alterar a etapa.

> ℹ️ Esta validação se aplica às versões V2 e V3 do endpoint de atualização de card.
