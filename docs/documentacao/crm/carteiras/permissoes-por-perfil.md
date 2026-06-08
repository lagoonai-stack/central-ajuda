---
title: "Permissões por Perfil"
---

A visibilidade dos contatos e as permissões de gerenciamento de carteiras variam conforme o perfil do usuário na plataforma e as configurações ativas no aplicativo de **Carteirização de Contatos.** Este artigo explica como cada perfil se comporta para que você configure sua operação da forma mais adequada.

#### Permissões por perfil

| Perfil                                                               | Visibilidade de contatos                          | Permissões                     |
| -------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------ |
| **Administrador**                                                    | Todos os contatos da plataforma                   | Cria, edita e exclui carteiras |
| **Atendente com carteira e com restrição de contatos habilitada**    | Apenas os contatos das carteiras vinculadas a ele | Não cria nem edita carteiras   |
| **Atendente sem carteira ou com restrição de contatos desabilitada** | Todos os contatos da plataforma                   | Não cria nem edita carteiras   |

#### Entendendo a restrição de acesso aos contatos

A coluna **Visibilidade de contatos** da tabela acima depende da flag **Restringir acesso aos contatos**, configurada no aplicativo de Carteirização de Contatos.

* **Flag desabilitada:** todos os atendentes visualizam todos os contatos da plataforma, independentemente de terem carteiras atribuídas.
* **Flag habilitada:** atendentes com carteiras atribuídas visualizam apenas os contatos das suas carteiras. Atendentes sem carteira continuam vendo todos os contatos.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `xeBVpY4XVD17mY00vkjU`)


:::warning

Usuários do perfil **Atendente Restrito** não têm acesso à tela de contatos, independentemente da configuração da flag ou de terem carteiras atribuídas.

:::

:::info

**Dica:** Para que a restrição funcione corretamente, certifique-se de que a **atribuição automática** está habilitada nas carteiras. Assim, ao iniciar um atendimento, o usuário já terá acesso aos dados do contato automaticamente.

:::

#### Saiba mais

* Para habilitar a flag de restrição de acesso, acesse [Habilitar o App](/documentacao/apps/carteirizacao-de-contatos/habilitar-o-app).
* Para criar e configurar carteiras, acesse [Criar uma Nova Carteira](/documentacao/crm/carteiras/criar-uma-nova-carteira).
