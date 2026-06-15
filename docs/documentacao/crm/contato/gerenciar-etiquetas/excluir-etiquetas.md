---
title: "Excluir Etiquetas"
---

Excluir uma etiqueta de contatos é uma ação permanente e irreversível — ao confirmar, a etiqueta é removida de todos os contatos que a possuem simultaneamente. Para evitar exclusões acidentais, a plataforma exibe o impacto em tempo real e, quando necessário, solicita uma validação de segurança antes de concluir a ação. Este artigo explica quem pode excluir etiquetas, como funciona o processo e o que esperar em cada situação.

#### **Quem pode excluir etiquetas de contatos?**

Somente usuários com perfil de **Administrador** ou **Super Administrador** têm permissão para editar e excluir etiquetas de contatos.

Usuários com perfis operacionais, como **Atendente**, visualizam apenas a opção de criar novas etiquetas. Os ícones de edição e exclusão ficam completamente ocultos da interface para esses perfis.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/permissao%20de%20editar%20e%20excluir%20etiqueta%20para%20atendentes.gif)


#### **Como excluir uma etiqueta de contato**

**Passo 1: Acessar o painel de etiquetas**

1. No menu superior, acesse **CRM > Contatos**.
2. Localize e abra o cadastro de qualquer contato.
3. No painel lateral, clique no ícone de edição ao lado de **Etiquetas**.
4. O painel de etiquetas será exibido com a lista de etiquetas disponíveis.
5. Clique no ícone de **lixeira** ao lado da etiqueta que deseja excluir.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image.avif)


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image.png)


**Passo 2: Verificar o impacto**

Ao clicar em excluir, o modal **"Excluir etiqueta de contatos"** será aberto. O sistema calcula automaticamente quantos contatos possuem essa etiqueta e exibe um alerta em destaque:

* **Se a etiqueta estiver vinculada a contatos:** o alerta exibirá *"X contatos serão afetados."*


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image%20(1).png)


* **Se a etiqueta não estiver vinculada a nenhum contato:** o alerta exibirá *"Nenhum contato será afetado."*


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image%20(2).png)


:::warning

A mensagem de aviso no modal informa: ***"Ao excluir esta etiqueta, ela será removida permanentemente de todos os contatos associados. Esta ação não pode ser desfeita."***

:::

**Passo 3: Confirmar a exclusão**

O próximo passo depende do impacto identificado:

* **Sem contatos afetados (0 contatos):** clique em **"Excluir etiqueta"** e a exclusão será processada imediatamente, sem etapas adicionais.
* **Com contatos afetados (1 ou mais):** ao clicar em **"Excluir etiqueta"**, a ação será retida e o sistema abrirá o modal de **"Validação de acesso"**, solicitando um código de segurança enviado para o seu e-mail.


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image%20(3).png)


**Passo 4: Inserir o código de validação (quando solicitado)**

1. Acesse o e-mail/telefone cadastrado no usuário que fez a solicitação de exclusão.
2. Localize o código de validação recebido.
3. Insira o código no modal de **"Validação de acesso"** e confirme.
4. Após a validação correta, a exclusão será concluída e a etiqueta removida de todos os contatos vinculados.

**Resumo dos cenários de exclusão**

| Situação                             | Validação exigida             | O que acontece                                  |
| ------------------------------------ | ----------------------------- | ----------------------------------------------- |
| Etiqueta **sem** contatos vinculados | Nenhuma                       | Exclusão imediata ao confirmar no modal         |
| Etiqueta **com** contatos vinculados | Código OTP por e-mail/celular | Exclusão concluída apenas após inserir o código |

#### **Registro na Auditoria**

Toda exclusão de etiqueta fica registrada no **Histórico de Alterações**, acessível em **Admin > Auditoria**. Os logs gerados variam conforme o cenário:

* **Exclusão sem impacto:** um registro na entidade **"Etiquetas"**, com o nome da tag excluída.
* **Exclusão com impacto (via OTP):** dois registros — um na entidade **"Etiquetas"** (exclusão) e outro na entidade **"OTP Validação"** (confirmação de segurança).


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image%20(1).avif)


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/crm/contato/gerenciar-etiquetas/excluir-etiquetas/image%20(2).avif)


:::info

**Dica:** Caso queira cancelar a ação em qualquer etapa, clique em **"Cancelar"** no modal. Nenhuma alteração será feita e a etiqueta permanecerá intacta.

:::
