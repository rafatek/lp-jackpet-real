# Prompt — Landing Page Real Pet Center / Jack Pet

Crie uma landing page institucional, responsiva (mobile-first) e de alta conversão para uma clínica veterinária e pet shop chamada **Real Pet Center** (marca do grupo **Jack Pet**). O objetivo principal é levar o visitante a clicar no botão de contato via WhatsApp.

## 1. Identidade visual

- Logo: arquivo `jack-pet-logo.png` (anexado/na pasta do projeto) — cachorro em círculo azul-claro com borda amarela, sobre fundo azul-marinho, com o texto "Jack Pet" em azul-claro e "Grupo Real Pet Center" em azul-claro/amarelo.
- Paleta de cores baseada na logo:
  - Azul-marinho (fundo/destaque): `#1B2A6B` (ajustar tom exato pela logo)
  - Azul-claro (títulos, botões secundários): `#7FD4F0` / `#5CC4E8`
  - Amarelo (destaques, CTAs, bordas): `#F5D742` / `#FFD447`
  - Branco para textos sobre fundo escuro
- Tipografia: fonte arredondada e amigável (estilo "cartoon"/"friendly"), peso bold para títulos — algo como "Baloo 2", "Fredoka" ou "Nunito" (Google Fonts).
- Estilo geral: divertido, colorido, acolhedor, transmitindo cuidado com pets — nada corporativo/frio.

## 2. Estrutura da página

### 2.1 Header (fixo ou não, com fundo azul-marinho)
- Logo à esquerda (Jack Pet / Real Pet Center)
- Menu de navegação (âncoras para as seções da própria página):
  - Banho e Tosa
  - Veterinária
  - Endereço
- Botão CTA destacado (amarelo): **"Entrar em contato!"** → link do WhatsApp (ver seção 4)

### 2.2 Hero Section
- Título (H1): **"Encontre tudo o que você precisa em um só lugar."**
- Subtítulo/descrição: mencionar cirurgias, semi-internamento, vacinas, exames laboratoriais, raio-x, ultrassonografia, etc.
- Botão CTA: "Entrar em contato!" → WhatsApp
- Bloco de destaques rápidos (ícones + texto), em grid ou carrossel:
  - Veterinário
  - Farmácia
  - Banho & Tosa
  - Cirurgia
- Imagem de destaque (usar foto de pet fornecida na pasta de imagens, se houver; caso não, usar ilustração/mockup de pet feliz)

### 2.3 Seção Banho e Tosa
- Título: **"O mais completo Banho & Tosa!"**
- Lista de serviços/preços (cards ou lista com ícones):
  - Banho a partir de: R$ 45,00
  - Banho com Ozônio
  - Tosa bebê
  - Desembolo
  - Variedade em tosas
  - Hidratação
- Botão CTA: "Entrar em contato!" → WhatsApp
- Imagens de apoio (usar fotos da pasta de imagens do cliente, se disponíveis)

### 2.4 Seção Veterinária
- Título: **"Veterinário especializado"**
- Lista de serviços:
  - Cirurgia
  - Procedimentos
  - Vacinas
  - Exames laboratoriais
  - Tratamento semi-internamento
- Botão CTA: "Entrar em contato!" → WhatsApp

### 2.5 Seção Institucional / Diferenciais
- Bloco 1 — "Amor aos animais": "Desde consultas até cirurgias, oferecemos serviços completos para a saúde e bem-estar do seu pet."
- Bloco 2 — "Equipe profissional": "Nossa equipe qualificada garante um atendimento personalizado e respeitoso para cada animalzinho."
- Layout em 2 colunas ou cards lado a lado, com ícone ilustrativo em cada um.

### 2.6 Seção de Avaliações do Google (NOVA — a ser criada)
- Título: **"O que nossos clientes dizem"** (ou similar)
- Exibir de 3 a 6 depoimentos em formato de cards, com:
  - Nome do cliente
  - Nota em estrelas (★★★★★)
  - Texto do comentário
  - Ícone/selo do Google
- Se possível, integrar via **Google Places API** (busca por `cid=9718983592062101220`, o mesmo ID usado no link do mapa) para puxar avaliações reais automaticamente. Caso não seja viável tecnicamente nesta primeira versão, criar a seção estática com layout pronto para receber os depoimentos manualmente depois.
- Incluir link/botão: "Ver todas as avaliações no Google" → apontar para a ficha do Google Meu Negócio do cliente.

### 2.7 Seção de Endereço/Contato (Footer)
- Chamada: **"Fale conosco e venha nos conhecer"**
- Botão CTA: "Entrar em contato!" → WhatsApp
- Endereço físico: Avenida Zacarias de Assunção, Quadra 27, Loja 3, Centro, Ananindeua - PA
- Mapa incorporado (iframe do Google Maps) usando o link:
  `https://maps.google.com/maps?ll=-1.353922,-48.366315&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=9718983592062101220`
- Ícones de redes sociais (se fornecidos pelo cliente)

### 2.8 Banner de Cookies (LGPD)
- Texto: "Usamos cookies para personalizar conteúdos e melhorar a sua experiência."
- Botões: "Configurar" e "Entendi e aceito"
- Deve fechar e salvar preferência (localStorage ou cookie) para não reaparecer a cada visita.

## 3. Requisitos técnicos

- HTML5 + CSS3 + JavaScript puro (ou React, se o antigravity preferir esse stack padrão)
- Totalmente responsivo (mobile-first), já que a maior parte do tráfego de clínicas locais vem de celular
- Performance: imagens otimizadas/comprimidas, lazy loading
- SEO básico: `<title>`, meta description, tags Open Graph (para compartilhamento no WhatsApp/Facebook), favicon com a logo
- Acessibilidade: contraste adequado, alt text em todas as imagens, uso semântico de tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Botões "Entrar em contato!" (todos) devem apontar para:
  `https://api.whatsapp.com/send?phone=5591981768181&text=Ol%C3%A1!%20Vi%20seu%20an%C3%BAncio%20no%20Google%20e%20gostaria%20de%20solicitar%20uma%20consulta`
- Analytics: deixar espaço/placeholder para inserção futura de Google Analytics e Meta Pixel

## 4. Assets disponíveis
- Logo: `jack-pet-logo.png` (Jack Pet / Grupo Real Pet Center)
- Demais fotos do pet shop/clínica: adicionar na pasta `/assets/images/` do projeto (aguardando envio completo pelo cliente)

## 5. Tom de voz do conteúdo
- Caloroso, acolhedor, direto ao ponto
- Falar como se estivesse conversando com um tutor de pet preocupado com o bem-estar do animal
- Evitar jargão técnico excessivo; usar linguagem simples

---

**Entregável esperado:** uma landing page completa em um único projeto (arquivos HTML/CSS/JS ou componentes React), pronta para publicação, com todos os links de contato e mapa funcionando corretamente.
