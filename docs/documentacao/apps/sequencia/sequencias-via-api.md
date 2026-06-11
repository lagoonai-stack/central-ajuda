---
title: "Sequências via API"
---

É possível gerenciar sequências diretamente via API, realizando operações de listagem, adição e remoção de contatos de forma programática. O comportamento segue as mesmas regras da plataforma.

:::info

As mesmas regras da plataforma se aplicam via API. Contatos que já fazem parte da sequência não serão adicionados novamente.

:::

## Endpoints disponíveis

### Listar sequências

Retorna todas as sequências cadastradas na conta.

* **Método:** `GET`
* **Endpoint:** Sequências > Listar

### Listar contatos

Retorna todos os contatos atualmente em execução em uma sequência específica.

* **Método:** `GET`
* **Endpoint:** Sequências > Listar contatos
* **Parâmetros necessários:** ID da sequência

### Adicionar contato

Adiciona um único contato a uma sequência.

* **Método:** `POST`
* **Endpoint:** Sequências > Adicionar contato
* **Parâmetros necessários:** ID da sequência + ID do contato ou telefone

### Adicionar contatos

Adiciona múltiplos contatos a uma sequência em uma única requisição.

* **Método:** `POST`
* **Endpoint:** Sequências > Adicionar contatos
* **Parâmetros necessários:** ID da sequência + lista de IDs dos contatos ou telefones

### Remover contato

Remove um único contato de uma sequência.

* **Método:** `DEL`
* **Endpoint:** Sequências > Remover contato
* **Parâmetros necessários:** ID da sequência + ID do contato ou telefone

### Remover contatos

Remove múltiplos contatos de uma sequência em uma única requisição.

* **Método:** `DEL`
* **Endpoint:** Sequências > Remover contatos
* **Parâmetros necessários:** ID da sequência + lista de IDs dos contatos ou telefones


![imagem](https://pub-eb092ec0af8f4647afd1a46435d20f24.r2.dev/apps_sequencias_sequencias-via-api_image.avif)


***

## Artigos relacionados

* [Criar Sequência](/documentacao/apps/sequencia/criar-sequencia)
* [Incluir Contatos na Sequência](/documentacao/apps/sequencia/incluir-contato-na-sequencia)
* [Contatos na Sequência](/documentacao/apps/sequencia/contatos-na-sequencia)
* [Remover Contatos](/documentacao/apps/sequencia/remover-contatos)
