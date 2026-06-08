---
title: "Gestão de Permissões em Campanhas"
---

A funcionalidade de Gestão de Permissões em Campanhas permite que administradores definam, de forma individualizada, o que cada usuário pode fazer dentro do módulo — criando campanhas, disparando envios ou apenas visualizando. Isso garante mais segurança e autonomia operacional sem a necessidade de elevar o perfil global de um colaborador. Este artigo explica como acessar, configurar e entender os diferentes níveis de permissão disponíveis.

#### Quem pode acessar essa funcionalidade?

Somente usuários com perfil de **Administrador** ou **Super Administrador** conseguem abrir e utilizar o gerenciador de permissões.

Usuários com outros perfis (como Atendente) visualizam o botão **"Permissões"** na tela, mas ele aparece desabilitado. Ao passar o mouse sobre ele, é exibida a mensagem: *"Funcionalidade disponível apenas para administradores"*.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `0iS2VAY9Cp1PUjHTurfx`)


**Passo 1: Acessar o Gerenciador de Permissões**

1. No menu superior da plataforma, acesse **Apps** > **Campanhas**.
2. No cabeçalho da tela, clique no botão **"Permissões"** (ao lado do botão **"Novo"**).
3. O modal **"Permissões de usuários"** será aberto.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `RfGbHvApjl2fd5VaxGwh`)


**Passo 2: Localizar um Usuário**

No modal de permissões, você pode localizar rapidamente qualquer usuário utilizando os filtros disponíveis:

* **Barra de busca:** pesquise pelo nome do usuário.
* **Filtro de perfil:** filtre a lista por tipo de perfil (Atendente, Administrador, etc.).

A lista exibe o avatar, o nome e o perfil de cada usuário. Caso algum usuário esteja bloqueado na plataforma, ele aparecerá com a tag **"Bloqueado"** em vermelho.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `jWDhAZb2yRmfwko1L1T0`)


**Passo 3: Alterar o Nível de Permissão**

À direita de cada usuário, há um ícone colorido que indica o nível de acesso atual. Clique nele para abrir o menu e selecionar um novo nível.

:::warning

Usuários com perfil de **Super Administrador** e **Administrador** possuem permissão total nativa e **não podem ter seu acesso alterado** nesta tela. Eles exibem um ícone de cadeado 🔒 e o tooltip: *"Não pode ser alterado."*

:::


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `ifNGmDd0GsxBTi9WEDoR`)


#### Níveis de Permissão Disponíveis

O sistema conta com 3 níveis de acesso ao módulo de Campanhas:

| Ícone       | Nível                    | O que pode fazer                                                                             |
| ----------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| 🟢 Verde    | **Gestão Completa**      | Criar, editar, excluir, **disparar** e **interromper** campanhas. Acesso total ao módulo.    |
| 🔵 Azul     | **Criador de Campanhas** | Criar rascunhos, editar e visualizar relatórios. **Não pode disparar nem pausar** campanhas. |
| 🔴 Vermelho | **Sem Acesso**           | Visualiza o menu Campanhas, mas ao clicar recebe a mensagem *"Sem acesso a campanhas"*.      |

#### Como funciona a restrição para "Criador de Campanhas"

Usuários com o nível 🔵 **Criador de Campanhas** conseguem criar e salvar campanhas normalmente, mas os botões de **disparo** e de **pausar/continuar** envios ficam bloqueados. Ao passar o mouse sobre eles, é exibida a mensagem: *"Ação não disponível para o seu nível de permissão no módulo."*


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `38f4wHK9dGLtThyp0xTp`)


#### Sincronização automática com o perfil do usuário

Ao alterar o perfil global de um usuário em **Ajustes > Usuários**, o sistema atualiza automaticamente a permissão de Campanhas, seguindo a hierarquia:

* **Administrador** → 🟢 Gestão Completa
* **Atendente** → 🔵 Criador de Campanhas
* **Atendente Restrito** → 🔴 Sem Acesso

Antes de aplicar a alteração, o sistema exibe um modal de confirmação **"Perfil de acesso alterado"** com informações sobre o impacto da mudança:

* **Ao promover para Administrador:** a mensagem informa que o usuário terá **acesso completo** a todos os módulos.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `BFCkbvqRYpZoaP7b8uuJ`)


* **Ao rebaixar de Administrador para Atendente ou Atendente Restrito:** a mensagem informa que o usuário terá **acesso limitado** aos módulos.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `TkDjwVxDmwJxzgglznFf`)


* **Ao alterar entre Atendente e Atendente Restrito (ou vice-versa):** a mensagem informa que as permissões atuais serão removidas e substituídas pelas permissões padrão do novo perfil.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `edjaB47vdiqbXtXBfr7K`)


Em todos os casos, você pode clicar em **"Confirmar"** para aplicar a alteração ou **"Cancelar"** para mantê-la sem mudanças.

#### Ordenação da lista de usuários

A lista no modal de permissões segue uma hierarquia de exibição:

1. Usuários com **permissão máxima** (Gestão Completa), ordenados por perfil: Super Admin → Admin → Atendente → Atendente Restrito
2. Usuários com **permissão média** (Criador de Campanhas): Atendente → Atendente Restrito
3. Usuários **sem acesso**: Atendente → Atendente Restrito

Usuários com o mesmo perfil e mesma permissão seguem ordem alfabética.

:::info

💡 **Dica:** Se você precisa que um colaborador da equipe de marketing realize disparos sem ter acesso às configurações administrativas da conta, basta atribuir a ele o nível 🟢 **Gestão Completa** diretamente no módulo de Campanhas — sem precisar alterar o perfil global do usuário.

:::
