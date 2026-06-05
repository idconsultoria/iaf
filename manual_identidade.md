# Manual de Identidade Visual e Biblioteca de Componentes — IAF

Este manual documenta de forma expandida a identidade visual **"O Sintetizador Orgânico"**, o estilo principal selecionado para a comunidade **IA que Funciona (IAF)**. Ele detalha as diretrizes estéticas e disponibiliza 15 componentes em HTML prontos para uso, alinhados com a filosofia de unir a rigidez pragmática da engenharia à fluidez orgânica das linhas e do tom azul teal.

---

## 1. Fundamentos da Identidade: O Sintetizador Orgânico

A identidade é construída sobre três pilares visuais:

1.  **A Grade Pragmática (Estrutura)**: Interfaces divididas por linhas finas de `1px` com baixa opacidade, alinhamentos rigorosos e caixas limpas. Representa o código, a lógica e o foco em resultados.
2.  **O Fluxo Orgânico (Alma)**: Linhas curvas dinâmicas desenhadas algoritmocamente ou via vetores SVG que interligam seções e se sobrepõem à grade reta. Representa a IA generativa, a plasticidade cognitiva e a inovação.
3.  **O Tom Teal (Energia)**: O teal (`#0da69e`) como acento principal, acompanhado de sua versão neon (`#00ffd5`) para interações (hover/foco) e um chumbo profundo (`#080d0f`) como base de baixo contraste que substitui o preto puro corporativo.

---

## 2. Variáveis de Design (CSS Custom Properties)

Para que os componentes funcionem de maneira coesa, inclua estas variáveis no escopo `:root` do seu projeto CSS:

```css
:root {
  /* Paleta de Cores */
  --bg-primary: #080d0f;       /* Fundo principal chumbo */
  --bg-secondary: #0d1519;     /* Fundo secundário (cards e blocos) */
  --accent-primary: #0da69e;   /* Teal principal */
  --accent-hover: #00ffd5;     /* Teal neon para interações */
  --accent-muted: rgba(13, 166, 158, 0.12); /* Fundo sutil com transparência */
  --text-primary: #f3f6f6;     /* Texto de leitura principal */
  --text-secondary: #8a9d9f;   /* Texto secundário/apoio */
  
  /* Fontes */
  --font-title: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-code: 'Fira Code', monospace;
  
  /* Estrutura */
  --border-radius: 12px;
  --border-color: rgba(13, 166, 158, 0.2);
  --line-weight: 1.5px;
  --shadow-glow: 0 8px 32px rgba(13, 166, 158, 0.15);
}
```

---

## 3. Biblioteca de Componentes HTML (15 Exemplos)

Abaixo estão definidos os componentes em HTML puro estruturado com classes semânticas baseadas nas variáveis de design descritas acima.

### 1. Logo Monograma com Curva Integrada
O logo combina tipografia estruturada a um vetor contínuo que simboliza o traço curvo marcante da IAF.
```html
<!-- Componente: Logo Monograma -->
<div class="iaf-logo-wrapper">
  <svg class="iaf-logo-svg" viewBox="0 0 100 40" width="100" height="40" aria-label="Logo IA que Funciona">
    <!-- Linha curva suave conectando o logotipo -->
    <path class="iaf-logo-curve" d="M10,30 Q30,10 50,30 T90,10" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Texto pragmático e bold em Outfit -->
    <text x="15" y="24" font-family="var(--font-title)" font-size="11" font-weight="900" fill="var(--text-primary)" letter-spacing="1.5">IAF</text>
  </svg>
</div>
```

### 2. Barra de Navegação Principal (Header)
Barra superior transparente para ser sobreposta às linhas e grids gerados no fundo do site.
```html
<!-- Componente: Header Principal -->
<header class="iaf-navbar">
  <div class="iaf-nav-brand">
    <!-- Logo Monograma (Comp 1) -->
    <span class="logo-text">iaf</span>
  </div>
  <nav class="iaf-nav-menu">
    <a href="#manifesto" class="iaf-nav-link active">Manifesto</a>
    <a href="#projetos" class="iaf-nav-link">Laboratório</a>
    <a href="#eventos" class="iaf-nav-link">Eventos</a>
  </nav>
  <div class="iaf-nav-cta">
    <button class="iaf-btn iaf-btn-primary iaf-btn-sm">Conectar-se</button>
  </div>
</header>
```

### 3. Botão Principal (Default & Hover state)
Botão com cantos arredondados suavizados, contraste nítido e efeito de sombreamento com brilho teal.
```html
<!-- Componente: Botão Primário -->
<button class="iaf-btn iaf-btn-primary">
  Entrar no Fluxo
</button>

<!-- Componente: Botão Secundário (Borda Fina) -->
<button class="iaf-btn iaf-btn-secondary">
  Ver Repositórios
</button>
```

### 4. Badge Técnico / Etiqueta de Status
Badges compactos em fonte mono usados para sinalizar categorias de projetos ou status em tempo real.
```html
<!-- Componente: Badges de Categoria -->
<span class="iaf-badge">
  <span class="iaf-badge-pulse"></span>
  STATUS: ONLINE
</span>

<span class="iaf-badge iaf-badge-neutral">
  PROMPT-ENG
</span>
```

### 5. Card de Princípios (Manifesto)
Card fechado com numeração em algarismo romano e foco conceitual em alto contraste.
```html
<!-- Componente: Card de Princípio -->
<div class="iaf-principle-card">
  <div class="iaf-card-roman">I.</div>
  <h3 class="iaf-card-title">Pragmatismo Absoluto</h3>
  <p class="iaf-card-body">A teoria é fascinante, mas o código em produção é o que resolve. Priorizamos o que de fato entrega utilidade tangível.</p>
</div>
```

### 6. Card de Projeto com Pré-visualização Vetorial
Card com uma área dedicada para exibir linhas de oscilação representativas da IA antes do texto descritivo.
```html
<!-- Componente: Card de Projeto Featured -->
<div class="iaf-project-card">
  <div class="iaf-project-media">
    <!-- SVG simulando a curva/onda do sinal gerado por IA -->
    <svg class="iaf-wave-preview" viewBox="0 0 300 100">
      <path d="M10,50 Q75,10 150,50 T290,50" fill="none" stroke="var(--accent-primary)" stroke-width="2"/>
    </svg>
  </div>
  <div class="iaf-project-content">
    <span class="iaf-project-tag">Open Source // RAG</span>
    <h3 class="iaf-project-name">MyceliumSearch</h3>
    <p class="iaf-project-desc">Mapeador semântico de base de dados RAG utilizando grafos neurais flexíveis.</p>
    <div class="iaf-project-footer">
      <span class="iaf-tech-used">Python + Neo4j</span>
      <a href="#" class="iaf-project-link">Código ↗</a>
    </div>
  </div>
</div>
```

### 7. Bloco Hero de Chamada (Call to Action)
O bloco principal do topo da landing page, projetado para receber as curvas geradas via Canvas no fundo.
```html
<!-- Componente: Bloco Hero -->
<section class="iaf-hero-block">
  <div class="iaf-badge-container">
    <span class="iaf-badge">IAF COMUNIDADE 2026</span>
  </div>
  <h1 class="iaf-hero-title">Onde a Inteligência Artificial <span>realmente funciona</span>.</h1>
  <p class="iaf-hero-subtitle">Mapeamos as melhores práticas pragmáticas de IA generativa em soluções reais e de código aberto feitas no Brasil.</p>
  <div class="iaf-hero-buttons">
    <a href="#" class="iaf-btn iaf-btn-primary iaf-btn-lg">Participar da Comunidade</a>
    <a href="#" class="iaf-btn iaf-btn-secondary iaf-btn-lg">Conhecer Projetos</a>
  </div>
</section>
```

### 8. Divisor de Seção com Curva SVG
Em vez de linhas retas cinzas, as divisões de blocos de página usam curvas suaves de Bézier.
```html
<!-- Componente: Divisor Curvo de Transição -->
<div class="iaf-divider-container">
  <svg class="iaf-divider-svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <!-- Preenchimento do fundo conectando a seção anterior à posterior -->
    <path class="iaf-divider-fill" d="M0,50 C360,100 720,0 1080,50 L1440,30 L1440,100 L0,100 Z" fill="var(--bg-secondary)"/>
    <!-- Traço em azul teal que confere o visual linear orgânico -->
    <path class="iaf-divider-stroke" d="M0,50 C360,100 720,0 1080,50 L1440,30" fill="none" stroke="var(--accent-primary)" stroke-width="var(--line-weight)"/>
  </svg>
</div>
```

### 9. Campo de Inserção com Borda Focada (Form Input)
Campos de entrada que recebem destaque brilhante em azul teal e mudam sua sombra ao focar.
```html
<!-- Componente: Input Técnico de E-mail -->
<div class="iaf-input-group">
  <label class="iaf-label" for="builder-email">E-mail do Pesquisador</label>
  <div class="iaf-input-wrapper">
    <input type="email" id="builder-email" class="iaf-input" placeholder="seu-email@builder.com" required>
    <button type="submit" class="iaf-input-btn">Cadastrar</button>
  </div>
</div>
```

### 10. Card de Métrica / Estatística
Módulos compactos de dados usados para telemetria ou indicadores de projetos da comunidade.
```html
<!-- Componente: Card de Métrica -->
<div class="iaf-metric-card">
  <span class="iaf-metric-title">COMPRESSÃO DE CONTEXTO</span>
  <div class="iaf-metric-display">
    <span class="iaf-metric-number">-41.8%</span>
    <span class="iaf-metric-trend">tokens economizados</span>
  </div>
  <p class="iaf-metric-detail">Média obtida no framework local comparada a prompts puros de zero-shot.</p>
</div>
```

### 11. Box de Telemetria / Logs (Estilo Terminal)
Área estruturada para exibir saídas de código e avisos técnicos, com cabeçalho de status da conexão.
```html
<!-- Componente: Box de Terminal -->
<div class="iaf-terminal">
  <div class="iaf-terminal-header">
    <div class="iaf-terminal-dots">
      <span class="dot-red"></span>
      <span class="dot-yellow"></span>
      <span class="dot-green"></span>
    </div>
    <span class="iaf-terminal-title">iaf-pipeline --stream</span>
  </div>
  <pre class="iaf-terminal-body"><code>$ iaf-cli reasoning-agent run --verbose
[03:21:40] [INFO] Inicializando modelo latente...
[03:21:42] [OK] Conexão com Neo4j estabelecida (status: 200)
[03:21:43] [STREAM] Gerando caminhos de raciocínio lógico...
[03:21:45] [OK] Processamento concluído com sucesso. 12 caminhos mapeados.</code></pre>
</div>
```

### 12. Newsletter Form Minimalista
Card de e-mail centralizado no meio da página de rodapé.
```html
<!-- Componente: Newsletter Minimalista -->
<div class="iaf-newsletter-box">
  <div class="iaf-newsletter-info">
    <h3>Newsletter do Fluxo</h3>
    <p class="iaf-newsletter-sub">Assine e receba ensaios técnicos semanais de prompts e infraestrutura de IA testados na marra.</p>
  </div>
  <form class="iaf-newsletter-form">
    <input type="email" placeholder="builder@email.com" class="iaf-newsletter-input">
    <button class="iaf-btn iaf-btn-primary">Inscrever-se</button>
  </form>
</div>
```

### 13. Grid Auxiliar (Malha Técnica de Background)
A representação física da grade de engenharia aplicada sob a página.
```html
<!-- Componente: Grid Auxiliar Técnico -->
<div class="iaf-bg-grid-overlay" aria-hidden="true">
  <!-- Este componente deve cobrir o fundo do body ou de seções principais -->
  <div class="grid-line-vertical"></div>
  <div class="grid-line-horizontal"></div>
</div>
```

### 14. Bloco de Rodapé da Comunidade (Footer)
Rodapé pragmático combinando o monograma com informações diretas sobre a governança e direitos.
```html
<!-- Componente: Footer Simplificado -->
<footer class="iaf-footer">
  <div class="iaf-footer-brand">
    <span class="logo-mono">iaf</span>
    <p>IA que Funciona. Projetos de código aberto criados cooperativamente.</p>
  </div>
  <div class="iaf-footer-links">
    <a href="#">GitHub</a>
    <a href="#">Discord</a>
    <a href="#">Termos de Uso</a>
  </div>
  <div class="iaf-footer-copyright">
    <span>© 2026 IAF. Desenvolvido sob a licença MIT.</span>
  </div>
</footer>
```

### 15. Acordeão de FAQ Técnico (Perguntas Frequentes)
Elemento colapsável usando linhas curvas suaves como indicadores de clique.
```html
<!-- Componente: Item Colapsável / FAQ -->
<details class="iaf-accordion-item">
  <summary class="iaf-accordion-trigger">
    <span>Como posso enviar um projeto para o laboratório da IAF?</span>
    <svg class="iaf-accordion-icon" viewBox="0 0 24 24" width="18" height="18">
      <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </summary>
  <div class="iaf-accordion-content">
    <p>Os projetos do laboratório da comunidade são avaliados de acordo com sua utilidade pragmática. Crie um Pull Request no nosso repositório principal descrevendo o problema real que sua ferramenta resolve e anexando um caso de uso validado.</p>
  </div>
</details>
```

---

## 4. Diretrizes de Implementação CSS

Para aplicar a estilização correta e fiel à identidade do **Sintetizador Orgânico** sobre os componentes acima, utilize as seguintes regras de CSS:

```css
/* RESET DE ACENTOS E BOTÕES */
.iaf-btn {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  padding: 10px 24px;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.iaf-btn-primary {
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  box-shadow: var(--shadow-glow);
}

.iaf-btn-primary:hover {
  background-color: var(--accent-hover);
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 255, 213, 0.25);
}

.iaf-btn-secondary {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.iaf-btn-secondary:hover {
  background-color: var(--accent-muted);
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.iaf-btn-sm {
  padding: 6px 14px;
  font-size: 12px;
}

.iaf-btn-lg {
  padding: 14px 32px;
  font-size: 16px;
}

/* CARDS */
.iaf-principle-card, .iaf-project-card, .iaf-metric-card {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.iaf-principle-card:hover, .iaf-project-card:hover, .iaf-metric-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow);
}

/* GRADES AUXILIARES */
.iaf-bg-grid-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  background-image: 
    linear-gradient(rgba(13, 166, 158, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(13, 166, 158, 0.04) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* TERMINAL LOGS */
.iaf-terminal {
  background-color: #040709;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  font-family: var(--font-code);
}

.iaf-terminal-header {
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iaf-terminal-dots {
  display: flex;
  gap: 6px;
}

.iaf-terminal-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot-red { background-color: #ff5555; }
.dot-yellow { background-color: #ffb86c; }
.dot-green { background-color: #50fa7b; }

.iaf-terminal-title {
  font-size: 11px;
  color: var(--text-secondary);
}

.iaf-terminal-body {
  padding: 16px;
  color: #a9fffd;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}
```
