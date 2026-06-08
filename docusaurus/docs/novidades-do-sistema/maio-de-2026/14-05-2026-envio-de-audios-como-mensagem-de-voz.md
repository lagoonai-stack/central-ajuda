---
title: "14/05/2026 - Envio de áudios como mensagem de voz"
---

#### 🎙️ Confira o novo recurso: envio de áudios como mensagem de voz

A partir de agora, áudios enviados pela plataforma — seja via API, atendimento ou chatbot — chegam ao contato como mensagens de voz nativas do WhatsApp, com gráfico de forma de onda, ícone de microfone e botão de reprodução. Uma experiência mais natural e familiar para quem recebe.

#### **💬 API e Atendimentos**

Áudios enviados pela API ou diretamente em um atendimento agora chegam ao contato como mensagem de voz nativa do WhatsApp — com gráfico de forma de onda, ícone de microfone e botão de reprodução integrado no balão da conversa, substituindo o formato de arquivo de download exibido anteriormente.

**🔧 O que mudou?**

Os áudios enviados por essas vias chegavam ao contato como arquivos convencionais, com barra de progresso simples e ícone de música — diferente da experiência visual familiar do WhatsApp. A partir de agora, o formato de entrega passa a ser o de voz nativa.

**✅ O que foi implementado?**

* Áudios enviados via API agora chegam ao contato como mensagem de voz nativa.
* No atendimento, áudios anexados pelo ícone de áudio ou gravados diretamente pela plataforma são enviados como mensagem de voz nativa.

Quando o objetivo é enviar o áudio como arquivo para download, basta anexá-lo pela opção de **documento** — o formato de arquivo é preservado.


> 🖼️ **[IMAGEM PENDENTE]** — reenviar do GitBook (ref. `Pf6k8UtUzIwV3WD6B0Mw`)


Para saber mais sobre o envio de áudio pelo atendimento, acesse o artigo:

<p align="center"><a href="https://docs.flw.chat/guide/documentacao/atendimento/ferramentas-de-interacao" class="button primary">Enviar Áudio pelo Atendimento</a></p>

#### 🤖 Chatbot

Até agora, os áudios enviados pelo chatbot chegavam ao contato como arquivos de download — com barra de progresso simples e ícone de música, diferente da experiência nativa do WhatsApp. A partir de agora, os áudios configurados na ação **"Enviar mensagem"** são entregues como **mensagens de voz nativas**, com gráfico de forma de onda, ícone de microfone e botão de reprodução integrado no balão da conversa.

**🔧 O que estava acontecendo?**

O chatbot não diferenciava o formato de entrega do áudio — tudo era enviado como arquivo de áudio convencional, independentemente de como o conteúdo havia sido configurado. Isso gerava uma experiência menos natural para o contato, fora do padrão visual já familiar do aplicativo.

**✅ O que há de novo?**

* Todos os áudios enviados pelo chatbot agora chegam ao contato como **mensagem de voz nativa** — com visual de forma de onda, foto de perfil e botão de reprodução.
* É possível adicionar **até 5 versões de áudio** na mesma ação. O chatbot escolhe e envia uma delas de forma aleatória a cada execução, permitindo variar a comunicação com o contato.
* Para chatbots com canal de **API Oficial (WhatsApp)**, um novo toggle **"Enviar áudio como arquivo"** permite optar pelo envio no formato de arquivo quando necessário.
* Para canais **Z-API**, **Evolution API** e **Instagram/Messenger**, o áudio é sempre enviado diretamente, sem distinção de formato.

Para saber como configurar essa ação no seu chatbot, acesse o artigo:

<p align="center"><a href="https://docs.flw.chat/guide/documentacao/apps/chatbot/enviar-mensagem/enviar-audio" class="button primary">Enviar Áudio pelo Chatbot</a></p>
