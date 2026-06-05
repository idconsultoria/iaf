# O Sintetizador Orgânico — Guia de Estilo & Manual de Identidade Visual (IAF)

> **"A inteligência artificial generativa é fluida, caótica e orgânica. A engenharia que a coloca de pé é precisa, estruturada e pragmática. A nossa identidade visual é a intersecção exata entre esses dois mundos."**

Bem-vindo ao guia de estilo oficial da **IA que Funciona (IAF)**. Este documento não é apenas uma lista de especificações técnicas; é a codificação visual da alma da nossa comunidade. Ele foi desenhado para praticantes, engenheiros de prompt, designers e entusiastas que desejam construir interfaces que fujam do clichê corporativo asséptico de startups e do caos estético cyberpunk gratuito.

Aqui, a tecnologia encontra a biologia digital através de grades precisas, curvas dinâmicas e o tom vibrante do Azul Teal.

---

## 1. A Filosofia Estética: "Pragmatismo Audacioso"

A maioria das comunidades e startups de tecnologia sofre de uma crise de mesmice visual: degradês abstratos roxos, cantos exageradamente arredondados e fontes geométricas que parecem não ter voz. 

A **IAF** propõe uma direção diferente, batizada de **O Sintetizador Orgânico**. Nossa estética é guiada por três princípios narrativos:

```
    [ A GRADE TÉCNICA ]        +        [ A LINHA FLUIDA ]       =   O SINTETIZADOR ORGÂNICO
(Rigidez, Lógica, Produção)        (IA Generativa, Conexões)         (Pragmatismo com Alma)
```

*   **A Rigidez da Grade (O Pragmatismo)**: Nossas páginas nascem sobre uma malha modular de engenharia. Cada elemento de texto, botão e card está alinhado a uma grade invisível de pixels. Isso transmite confiabilidade, seriedade e a certeza de que "isso aqui funciona".
*   **A Fluidez da Curva (A Audácia)**: Cruzando esta grade, surgem linhas curvas suaves e contínuas de 1px a 3px de espessura. Elas agem como rios sinápticos, ligando ideias e seções de maneira natural. Elas representam a IA generativa: maleável, em constante evolução, humana e imprevisível.
*   **A Luz do Latente (O Foco)**: A luz na nossa interface é pontual. Não usamos fundos brilhantes que cansam a vista; o fundo é uma noite profunda chumbo-petróleo (`#080d0f`), permitindo que pequenos pontos de destaque em Teal Neon (`#00ffd5`) guiem o olhar do usuário como estrelas guia na tela.

---

## 2. A Paleta de Cores e sua Ressonância Cognitiva

As cores da IAF foram selecionadas para criar uma atmosfera de foco imersivo, simulando um ambiente de desenvolvimento avançado mas com um calor orgânico subjacente.

```
+-----------------------------------------------------------------------+
|  #080d0f (Fundo Chumbo) -> Profundidade, calmaria e foco prolongado   |
+-----------------------------------------------------------------------+
|  #0da69e (Teal Principal) -> A harmonia entre o digital e o orgânico  |
+-----------------------------------------------------------------------+
|  #00ffd5 (Teal Neon) -> Energia viva, interações e tomadas de ação    |
+-----------------------------------------------------------------------+
```

*   **Base: `#080d0f` (Chumbo Profundo)**  
    Substitui o preto puro digital (`#000000`), que é agressivo aos olhos, e o cinza corporativo comum. É um cinza-chumbo com um leve subtom azulado. Evoca profundidade computacional e permite que o contraste do texto permaneça extremamente nítido sem ser cansativo.
*   **Acento Principal: `#0da69e` (Azul Teal)**  
    O azul representa a estabilidade e a técnica. O verde representa o orgânico e o crescimento. O Teal une o melhor dos dois mundos. É a cor que ancora a nossa marca, usada em títulos secundários, bordas ativas e grafismos de relevo.
*   **Destaque Vivo: `#00ffd5` (Teal Neon)**  
    A energia do espaço latente da IA. É um ciano esverdeado super saturado, usado cirurgicamente em interações críticas (hover de botões, indicadores de conexões de rede e pontos de foco).
*   **Suporte: `#0d1519` (Cinza Petróleo Secundário)**  
    Usado para preenchimento de cards, cabeçalhos de tabelas e blocos secundários, criando camadas de profundidade visual sobre o fundo principal.
*   **Leitura: `#f3f6f6` (Off-White)**  
    Um branco suave, levemente acinzentado, que brilha com elegância sem a agressividade do branco puro `#ffffff`.

---

## 3. Tipografia: Vozes Complementares

A IAF fala através de três famílias tipográficas específicas no Google Fonts, cada uma assumindo um papel na narrativa visual:

*   **Outfit (Títulos & Destaques)**  
    *Voz: Moderna e Amigável.*  
    Com traços geométricos simplificados e cantos ligeiramente suavizados, `Outfit` traz um ar contemporâneo e inovador. Ela quebra a frieza técnica das fontes monospaçadas tradicionais, dando as boas-vindas ao visitante na cabeceira da página.
*   **Inter (Texto Corrido & Corpo)**  
    *Voz: Neutra, Transparente e Altamente Legível.*  
    `Inter` é a campeã da legibilidade em telas digitais. Usada para parágrafos, descrições e formulários, ela garante que as ideias da comunidade sejam transmitidas sem fricção ou ruído visual.
*   **Fira Code (Dados, Tags & Status)**  
    *Voz: O Dialeto do Construtor.*  
    Por ser monospaçada e possuir ligaduras de código, `Fira Code` é a assinatura visual de que a IAF é feita por praticantes. Ela é usada para tags, metadados, saídas de terminal e pequenos detalhes estruturais.

---

## 4. Biblioteca de Componentes HTML (15 Exemplos)

Abaixo estão os 15 componentes oficiais da IAF. Cada um acompanha uma narrativa de **Intenção Estética** para explicar o porquê de seu design e as **Diretrizes de Implementação** para garantir consistência visual no código.

---

### Componente 1: Logo Monograma com Curva Integrada
* **Intenção Estética**: Representar graficamente o nome "IAF" de forma compacta, onde uma única curva suave de Bézier corta as letras rígidas, ilustrando fisicamente a intersecção de lógica e fluidez.
* **Diretrizes**: A curva deve usar a cor acentuada (`--accent-primary`) e ter extremidades arredondadas (`stroke-linecap="round"`). O texto "IAF" usa `Outfit` com peso `900` para estabilidade.

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

---

### Componente 2: Barra de Navegação Principal (Header)
* **Intenção Estética**: O cabeçalho deve flutuar sobre o background sem criar uma barreira visual sólida. A transparência permite que as linhas geradas dinamicamente no Canvas do fundo do site corram por baixo, unificando o visual.
* **Diretrizes**: Manter o fundo transparente ou levemente esfumaçado com `backdrop-filter: blur(8px)`. Use links em `var(--text-secondary)` transicionando para `--accent-primary` no hover.

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

---

### Componente 3: Botões Principais (Primário e Secundário)
* **Intenção Estética**: O botão primário deve parecer "carregado eletricamente". Ele usa o preenchimento teal e emite um brilho suave (`box-shadow` neon). O botão secundário é o contrapeso discreto: apenas uma borda elegante sem brilho.
* **Diretrizes**: A transição de hover deve usar `cubic-bezier(0.25, 0.8, 0.25, 1)` para parecer instantânea mas suave, mudando a cor para o Teal Neon (`--accent-hover`) e elevando o botão ligeiramente em `-2px`.

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

---

### Componente 4: Badges Técnicos de Status e Categoria
* **Intenção Estética**: Substituir etiquetas coloridas genéricas por blocos limpos em fonte mono. O badge de status ativo contém um ponto luminoso que pulsa suavemente, mimetizando sistemas de servidores e computação em tempo real.
* **Diretrizes**: Fonte `Fira Code` em caixa alta. O círculo interno deve usar animações CSS simples de escala e opacidade para criar o efeito "pulsante".

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

---

### Componente 5: Card de Princípios (Manifesto)
* **Intenção Estética**: Organizar o manifesto da comunidade em blocos rígidos mas premium. A numeração romana gigante em teal atua como âncora visual e dá um tom intelectual e editorial ao manifesto.
* **Diretrizes**: Cantos arredondados de `12px` e borda sutil de `1px` em `rgba(13, 166, 158, 0.2)`. O card deve clarear ligeiramente o fundo ao sofrer hover do mouse.

```html
<!-- Componente: Card de Princípio -->
<div class="iaf-principle-card">
  <div class="iaf-card-roman">I.</div>
  <h3 class="iaf-card-title">Pragmatismo Absoluto</h3>
  <p class="iaf-card-body">A teoria é fascinante, mas o código em produção é o que resolve. Priorizamos o que de fato entrega utilidade tangível.</p>
</div>
```

---

### Componente 6: Card de Projeto com Pré-visualização Vetorial
* **Intenção Estética**: Exibir as criações da comunidade unindo dados, código e curvas. A parte superior do card contém um "visor de oscilação" simulado com SVGs de ondas senoidais, conectando o card ao traço curvo da IAF.
* **Diretrizes**: A seção de mídia do card deve ter fundo mais escuro para destacar as linhas de visualização. O rodapé do card separa a pilha tecnológica (`tech-stack`) do link de ação com uma borda sutil.

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

---

### Componente 7: Bloco Hero de Chamada (Call to Action)
* **Intenção Estética**: A "porta de entrada" do site. A tipografia do título (`Outfit`) é gigante e o destaque em azul teal no texto enfatiza que a IA *realmente funciona*. A diagramação deve ser centralizada e limpa para deixar o fundo com curvas respirar.
* **Diretrizes**: Use a tag `<span>` para o texto destacado e estilize-o com gradiente linear sutil de Teal Principal para Teal Neon.

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

---

### Componente 8: Divisor de Seção com Curva SVG
* **Intenção Estética**: Eliminar cortes retos abruptos entre as seções do site. A curva de Bézier em SVG liga a transição de fundos escuros de forma suave e harmônica, quebrando a monotonia do layout retangular.
* **Diretrizes**: O SVG deve ser responsivo (`preserveAspectRatio="none"`). A linha de traço superior deve usar a espessura da variável `--line-weight` para garantir consistência com o resto dos traços do site.

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

---

### Componente 9: Campo de Inserção com Borda Focada (Form Input)
* **Intenção Estética**: O formulário é a principal entrada de dados para novos membros. Ele deve parecer integrado ao design do site, com uma borda fina que se ilumina com o brilho teal apenas ao receber o foco do cursor.
* **Diretrizes**: No CSS, use a transição na propriedade `border-color` e aplique um efeito de `box-shadow` neon bem sutil (`rgba(13, 166, 158, 0.2)`) no estado `:focus-within`.

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

---

### Componente 10: Card de Métrica / Estatística
* **Intenção Estética**: Mostrar o sucesso pragmático das soluções criadas. O número deve ter grande escala de contraste, destacado em fonte mono, com um indicador claro sobre o que essa economia representa.
* **Diretrizes**: A métrica principal deve usar `var(--accent-primary)`. O card segue as mesmas regras de borda de `1px` e cantos arredondados de `12px` dos demais cards do sistema.

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

---

### Componente 11: Box de Telemetria / Logs (Estilo Terminal)
* **Intenção Estética**: Emular a tela de um terminal de desenvolvimento clássico. É um dos componentes mais importantes para passar a alma prática da comunidade: aqui não há slides corporativos, apenas logs reais de execução.
* **Diretrizes**: O fundo deve ser um preto quase absoluto (`#040709`) para dar contraste com as linhas de código ciano e verdes claras. As três bolinhas superiores de controle dão o toque de interface de aplicação local.

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

---

### Componente 12: Newsletter Form Minimalista
* **Intenção Estética**: Um bloco compacto de rodapé que estimula o engajamento sem criar atrito. Ele divide a área de informações em uma coluna e o formulário em outra sobre o fundo cinza secundário.
* **Diretrizes**: Usar em rodapés ou no final da landing page principal. O botão de inscrição deve usar `--accent-primary` para manter o foco de ação nítido.

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

---

### Componente 13: Grid Auxiliar (Malha Técnica de Background)
* **Intenção Estética**: A manifestação visual da rigidez e do alinhamento que governa o design. A malha quadriculada de 40px deve flutuar suavemente no fundo com opacidade muito baixa para não poluir o conteúdo textual.
* **Diretrizes**: Implemente via gradiente repetitivo em CSS puro para evitar carregamento de imagens pesadas, usando opacidade de `0.04`.

```html
<!-- Componente: Grid Auxiliar Técnico -->
<div class="iaf-bg-grid-overlay" aria-hidden="true">
  <!-- Este componente deve cobrir o fundo do body ou de seções principais -->
  <div class="grid-line-vertical"></div>
  <div class="grid-line-horizontal"></div>
</div>
```

---

### Componente 14: Bloco de Rodapé da Comunidade (Footer)
* **Intenção Estética**: O encerramento da experiência de navegação. Ele deve ser organizado em colunas bem definidas que exibem links de forma pragmática e as notas de licença de código aberto (MIT).
* **Diretrizes**: Usar fonte `Inter` de 12px a 14px em cores secundárias (`--text-secondary`) e manter o monograma do logo presente na base.

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

---

### Componente 15: Acordeão de FAQ Técnico (Perguntas Frequentes)
* **Intenção Estética**: Organizar as dúvidas frequentes da comunidade de forma limpa. Ao invés de setas genéricas, usamos um ícone minimalista e um contorno que suaviza o card ao abrir.
* **Diretrizes**: Use as tags HTML semânticas `<details>` e `<summary>`. O ícone SVG deve rotacionar suavemente em 180 graus no estado aberto.

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

## 5. Diretrizes para Micro-animações e Interatividade

A interface do **Sintetizador Orgânico** deve se comportar como um organismo técnico vivo. Para isso, siga estas regras ao escrever animações CSS ou JS:

1.  **Curva de Aceleração**: Nunca use acelerações mecânicas lineares (`transition: all 0.3s linear`). Prefira curvas de transição humanas e velozes, como `cubic-bezier(0.25, 0.8, 0.25, 1)`.
2.  **O Efeito de Brilho (Glow)**: Ao passar o mouse sobre botões primários ou inputs ativos, o box-shadow deve aumentar sua opacidade suavemente, simulando o acendimento de um tubo de néon.
3.  **Movimento da Linha de Fundo**: O Canvas generativo do background deve correr a uma velocidade constante e muito lenta (velocidade base de `1.0x` ou menos) para evitar distrações na leitura.
4.  **Micro-interações de Hover**: Cards devem subir levemente (`transform: translateY(-4px)`) e clarear seu contorno para dar a resposta física ao usuário de que aquele item é clicável e interativo.
