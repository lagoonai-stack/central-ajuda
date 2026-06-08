# Pendências da migração GitBook → Docusaurus

## 🖼️ Imagens a re-adicionar — 759 no total, em 141 páginas

As imagens **não vieram no ZIP de export do GitBook** (o export trouxe só texto).
Cada local onde havia imagem está marcado no conteúdo com:

> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook

Para resolver: baixe cada imagem da central GitBook original e substitua o placeholder por:
`![descrição](/img/nome-da-imagem.png)` (coloque os arquivos em `static/img/`).

### Páginas com mais imagens pendentes

| Página | Qtd imagens |
|---|---|
| `documentacao/apps/chatbot/criando-um-chatbot.md` | 28 |
| `documentacao/faq/conexao-whatsapp/conexao-via-qr-code/index.md` | 25 |
| `documentacao/atendimento/ferramentas-de-interacao/solicitar-pagamento.md` | 20 |
| `documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/portabilidade-de-numero.md` | 18 |
| `documentacao/faq/instagram-messenger/cadastrar-instagram-facebook-messenger.md` | 16 |
| `documentacao/faq/conexao-whatsapp/erros-e-problemas/codigos-de-erros-da-meta.md` | 15 |
| `documentacao/atendimento/ferramentas-de-interacao/gravar-audio.md` | 14 |
| `documentacao/crm/contato/bloquear-ou-arquivar-contato.md` | 13 |
| `documentacao/apps/chatbot/copiar-e-colar-do-chatbot-na-plataforma.md` | 13 |
| `documentacao/faq/conexao-whatsapp/conexao-whatsapp-cloud-api/index.md` | 13 |
| `documentacao/atendimento/gestao-de-grupos-no-atendimento/api-nao-oficial.md` | 12 |
| `documentacao/atendimento/ferramentas-de-interacao/enviar-audio.md` | 11 |
| `documentacao/atendimento/ferramentas-de-interacao/iniciar-chatbot.md` | 11 |
| `documentacao/apps/chatbot/gatilhos.md` | 11 |
| `documentacao/apps/chatbot/tipos-de-chatbot.md` | 11 |
| `documentacao/faq/instagram-messenger/mensagens-do-instagram-nao-chegam.md` | 10 |
| `documentacao/atendimento/ferramentas-de-interacao/enviar-video.md` | 9 |
| `documentacao/atendimento/ferramentas-de-interacao/enviar-imagem.md` | 9 |
| `documentacao/atendimento/gestao-de-grupos-no-atendimento/api-oficial.md` | 9 |
| `documentacao/apps/chat-interno/ativar-e-desativar-funcionalidade.md` | 9 |
| `documentacao/faq/conexao-whatsapp/portfolio-empresarial/desativar-autenticacao-em-dois-fatores.md` | 9 |
| `documentacao/crm/contato/editar-campos-personalizados.md` | 8 |
| `documentacao/crm/contato/gerenciar-etiquetas/excluir-etiquetas.md` | 8 |
| `documentacao/atendimento/ferramentas-de-interacao/enviar-documento.md` | 8 |
| `documentacao/atendimento/ferramentas-de-interacao/enviar-mensagem-rapida.md` | 8 |
| `documentacao/ajustes/conta/processo-de-dar-permissao-para-reconectar-o-numero.md` | 8 |
| `documentacao/ajustes/integracoes/botao-do-whatsapp-e-tag-de-rastreamento.md` | 8 |
| `documentacao/apps/campanha/gestao-de-permissoes-em-campanhas.md` | 8 |
| `documentacao/apps/distribuicao-de-atendimentos/distribuicao-de-atendimentos.md` | 8 |
| `documentacao/faq/conexao-whatsapp/conexao-via-qr-code/remover-conexao-qr-code.md` | 8 |

*(mostrando as 30 com mais imagens; total de 141 páginas afetadas)*

---

## Outras observações

- **Vídeos do YouTube**: os `{% embed %}` do GitBook que apontavam pro YouTube já viraram iframes funcionais. Embeds do Google Drive viraram links — recomendo subir os arquivos importantes pra um storage próprio.
- **Links internos quebrados**: alguns links entre páginas dependiam de imagens/refs do GitBook e podem apontar pra lugar errado. O build acusa quais no warning `broken links` — revisar conforme for usando.
- **Rota duplicada**: `documentacao/apps/distribuicao-de-atendimentos` tem uma colisão menor de rota — só revisar se aquela página específica ficar estranha.
