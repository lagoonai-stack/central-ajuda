---
title: "Gerenciar Grupos (Arquivar, Bloquear, Sair, Excluir)"
---

[https://drive.google.com/file/d/1DE1f1BVmFJWT3D6274jzOyordW2eSC7Z/view?usp=sharing](https://drive.google.com/file/d/1DE1f1BVmFJWT3D6274jzOyordW2eSC7Z/view?usp=sharing)

As **Ações de Arquivamento** permitem controlar a visibilidade, o status e o comportamento de um grupo diretamente pela plataforma. Siga os passos abaixo para gerenciar corretamente cada uma dessas opções.

**Passo 1: Acessar as ações de gerenciamento**

1. Abra a conversa do grupo.
2. Clique no ícone
![imagem](hhttps://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image%20(31).avif)
(Ver detalhes do grupo) no cabeçalho.
   Isso abrirá o painel lateral **“Dados do grupo”**, onde todas as opções de administração ficam centralizadas.

**Passo 2: Selecionar e visualizar a ação desejada**

1. No painel lateral, clique no ícone
![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image%20(32).avif)
(Ações de Arquivamento).
2. Um painel com quatro opções será exibido.
   Por padrão, a ação **“Arquivar”** virá pré-selecionada.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image.avif)


Escolha a ação que deseja executar:

* **Arquivar:**
  Move a conversa para a seção **Concluídos**, encerrando o atendimento apenas na plataforma para fins de organização. O grupo é reaberto automaticamente caso novas mensagens sejam recebidas.
  \&#xNAN;*Não afeta o grupo no WhatsApp.*
* **Bloquear:**
  Move a conversa para a seção **Concluídos** e interrompe totalmente o envio e o recebimento de mensagens pela plataforma.
  \&#xNAN;*Não afeta o grupo no WhatsApp.*
* **Sair (apenas API Não Oficial):**
  Remove **somente o canal de atendimento** do grupo.
  A conversa é movida para **Concluídos** e a saída é **irreversível** no WhatsApp.
* **Excluir:**
  Remove o grupo **somente se o canal for o criador do grupo**:
  * **API Oficial:** o canal é sempre o criador, então a exclusão é sempre permitida.
  * **API Não Oficial:** o canal pode ser apenas participante. A exclusão só será permitida se ele for **criador do grupo**.
    A exclusão remove o grupo para todos os participantes e é **irreversível**, refletindo também no WhatsApp.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image%20(3).gif)


**Passo 3: Finalizar a ação**

1. Certifique-se de que a ação desejada está selecionada.
2. Clique no botão **“Confirmar”** para aplicar a operação.

A ação será executada imediatamente e refletida conforme as regras descritas acima.

:::warning

**Regra de Acesso e Permissão**

**Observação importante sobre permissões**

As ações **Arquivar, Bloquear, Sair e Excluir** possuem restrições específicas para garantir a **integridade dos dados** e o correto **fluxo de trabalho da equipe**.

**Perfis autorizados**

* Apenas **Administradores da Conta** e **Moderadores do Grupo** têm permissão para executar essas ações.

**Restrições para outros usuários**

* Perfis que não possuam essas funções verão as opções **desabilitadas**, sem possibilidade de execução.

:::

**Regras e Consequências de Cada Ação**

Todas as ações listadas abaixo **movem a conversa para a aba “Concluídos”** na plataforma, alterando o status do grupo conforme descrito:

| Ação         | Consequência                                                                                                                                                                                     | Observação Importante                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Arquivar** | Move a conversa para a seção **Concluídos**. Caso novas mensagens sejam recebidas, o grupo será reaberto automaticamente.                                                                        | Ação interna: Não afeta o grupo no WhatsApp.                                                                   |
| **Bloquear** | Bloqueia o envio e o recebimento de mensagens do grupo na plataforma. A conversa é movida para a seção **Concluídos**, mas pode ser desbloqueada a qualquer momento.                             | Ação interna: Não afeta o grupo no WhatsApp.                                                                   |
| **Sair**     | O canal da plataforma sai do grupo (somente o canal será removido). A conversa é finalizada e movida para a seção **Concluídos**, permanecendo disponível apenas para consulta.                  | Ação irreversível, refletida no WhatsApp. **Disponível** somente para canais conectados à **API Não Oficial.** |
| **Excluir**  | Remove o grupo para todos os participantes. A conversa é finalizada e movida para a seção **Concluídos**, permanecendo disponível apenas para consulta, enquanto o grupo é excluído no WhatsApp. | Ação irreversível, refletida no WhatsApp. Deve ser executada com cautela.                                      |

**Passo 4: Ações de Reversão (Desarquivar e Desbloquear)**

Grupos que foram **arquivados** ou **bloqueados** podem ser reativados a qualquer momento, restaurando seu status normal na plataforma.

1. Acesse a conversa do grupo na aba **Concluídos**.
2. Clique no ícone
![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image%20(31).avif)
(Ver detalhes do grupo) no cabeçalho.
3. No painel lateral **“Dados do grupo”**, identifique o botão **“Desarquivar”** ou **“Desbloquear”**, conforme o status atual do grupo.
4. Clique no ícone correspondente e confirme a ação para reativar o grupo.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/image%20(1).avif)


**Regras de Hierarquia entre Bloqueio e Arquivamento**

É importante entender como as ações de **Bloqueio** e **Arquivamento** interagem, pois elas possuem uma hierarquia específica e impactam o status do grupo.

<table><thead><tr><th width="276">Cenário</th><th>Regra de Precedência</th></tr></thead><tbody><tr><td><strong>Arquivado e Depois Bloqueado</strong></td><td>Permitido. Um grupo que já está <strong>arquivado</strong> pode ser <strong>bloqueado</strong>. A conversa permanecerá na aba <strong>Concluídos</strong>, mas o <strong>status de Bloqueio</strong> impede qualquer nova interação.</td></tr><tr><td><strong>Bloqueado</strong></td><td>O <strong>bloqueio tem prioridade</strong> sobre o arquivamento. Se um grupo estiver <strong>bloqueado</strong>, a opção de arquivar <strong>não estará disponível</strong>. Ao ser desbloqueado, o grupo retornará automaticamente à aba <strong>Meus</strong>, pronto para novas interações.</td></tr></tbody></table>

**Reativação de Grupos: Comportamento do Histórico**

Quando um grupo é **concluído** (via Arquivar ou Bloquear) e posteriormente reativado (via Desarquivar ou Desbloquear), o sistema mantém o histórico e cria um novo ciclo de atendimento de acordo com as regras abaixo:

**1. Preservação do Histórico (Registro Concluído)**

* O registro da conversa anterior, incluindo o momento em que foi **Arquivado** ou **Bloqueado**, permanece na aba **Concluídos**.
* Ele não é alterado e serve como histórico daquele ciclo de atendimento.

**2. Criação de um Novo Ciclo (Atendimento Ativo)**

* Ao reverter a ação (**Desarquivar** ou **Desbloquear**), o sistema cria um **novo atendimento ativo** para o grupo.
* O grupo é exibido imediatamente na aba **Meus** do usuário responsável.

**3. Acesso ao Histórico Completo**

* No novo atendimento ativo, todo o histórico da conversa anterior está disponível.
* Para visualizar mensagens mais antigas, clique no botão **“Ver conversa anterior”** no topo da janela de chat.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/atendimento/grupos-do-whatsapp/criar-grupos/gerenciar-grupos/Anima%C3%A7%C3%A3o%20(11).gif)

