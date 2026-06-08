# Central de Ajuda — Lagoon One (Docusaurus)

Site de documentação estático, estilo GitBook, gerado a partir do export do GitBook.

## Rodar localmente

```bash
npm install
npm start          # dev server em http://localhost:3000
npm run build      # gera site estático em build/
npm run serve      # testa o build localmente
```

## Editar conteúdo

Os documentos ficam em `docs/`, em Markdown. Edite no VS Code:
- Cada `.md` é uma página. O `title` no topo (frontmatter) define o título.
- A navegação (sidebar) é gerada automaticamente pela estrutura de pastas.
- Caixas de destaque: use `:::tip`, `:::info`, `:::warning`, `:::danger`.
- Vídeo do YouTube: `<iframe width="100%" height="420" src="https://www.youtube.com/embed/ID" frameborder="0" allowfullscreen></iframe>`

## Deploy no Dokploy

1. No Dokploy, crie um serviço **Application** (não Compose) tipo **Dockerfile**, ou suba via **Compose** usando o `docker-compose.yml` incluído.
2. Provider: aponte pro repositório Git OU use o build local. O `Dockerfile` faz: build com Node 20 → serve estático via nginx na porta **80**.
3. Em **Domains**, configure `help.lagoonone.com.br` (ou um subdomínio de teste como `docs.lagoonone.com.br`), porta **80**, HTTPS + Let's Encrypt.
4. Deploy.

> Como é site estático servido por nginx, não precisa de banco, não tem login, e o acesso é público — perfeito pra central de ajuda de clientes.

## Pendências

Veja `PENDENCIAS.md` — principalmente as imagens, que precisam ser re-adicionadas (não vieram no export do GitBook).
