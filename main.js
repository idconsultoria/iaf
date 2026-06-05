/* ==========================================
   IAF PLAYROOM — JAVASCRIPT CONTROLLER
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- STATE VARIABLES ---
  let currentTheme = 'main';
  let currentView = 'landing';
  
  // Parametric controls
  let speedMultiplier = 1.0;
  let strokeThickness = 1.5;
  let showGridLines = true;
  
  // Simulator parameters
  let simFrequency = 5.0;
  let simChaos = 20;

  // Theme Names Mapping
  const themeNames = {
    'main': 'O Sintetizador Orgânico',
    'v1': 'Grade Topográfica (V1)',
    'v2': 'Terminal Líquido (V2)',
    'v3': 'O Bio-Sinal (V3)',
    'v4': 'A Tela Editorial (V4)',
    'v5': 'O Fluxo Brutalista (V5)'
  };

  // --- DOM ELEMENTS ---
  const viewport = document.getElementById('sandbox-viewport');
  const activeStyleNameLabel = document.getElementById('active-style-name');
  
  // Theme selectors
  const themeCards = document.querySelectorAll('.theme-card');
  const themeRadios = document.querySelectorAll('input[name="theme-selector"]');
  
  // View buttons
  const viewBtns = document.querySelectorAll('.view-btn');
  const views = document.querySelectorAll('.sandbox-view');
  
  // Parametric controls
  const speedRange = document.getElementById('speed-range');
  const speedVal = document.getElementById('speed-val');
  const weightRange = document.getElementById('weight-range');
  const weightVal = document.getElementById('weight-val');
  const showGridCheckbox = document.getElementById('show-grid');
  const bgGrid = document.getElementById('bg-grid');
  
  // Simulator inputs
  const simFreqRange = document.getElementById('sim-frequency');
  const simChaosRange = document.getElementById('sim-chaos');
  const simRandomBtn = document.getElementById('sim-random-btn');
  const telemetryFreq = document.getElementById('telemetry-freq');
  const telemetryChaos = document.getElementById('telemetry-chaos');

  // --- INTERACTION CONTROLS ---

  // Theme Toggler
  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      // Deactivate all cards
      themeCards.forEach(c => c.classList.remove('active'));
      // Activate clicked card
      card.classList.add('active');
      
      const radio = card.querySelector('input[type="radio"]');
      radio.checked = true;
      
      handleThemeChange(radio.value);
    });
  });

  function handleThemeChange(newTheme) {
    // Remove previous theme class
    viewport.classList.remove(`theme-${currentTheme}`);
    // Add new theme class
    viewport.classList.add(`theme-${newTheme}`);
    currentTheme = newTheme;
    
    // Update labels
    activeStyleNameLabel.textContent = themeNames[newTheme];
    
    // Update theme-specific configurations for the canvas
    resetBackgroundCanvasColors();
  }

  // View Switcher
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const targetView = btn.getAttribute('data-view');
      switchView(targetView);
    });
  });

  function switchView(targetView) {
    views.forEach(v => v.classList.remove('active'));
    
    const targetElement = document.getElementById(`view-${targetView}`);
    if (targetElement) {
      targetElement.classList.add('active');
    }
    
    currentView = targetView;
    
    // If user opens the simulator, trigger canvas setup
    if (currentView === 'lab') {
      setTimeout(initSimulatorCanvas, 100);
    }
  }

  // Parametric Sliders
  speedRange.addEventListener('input', (e) => {
    speedMultiplier = parseFloat(e.target.value);
    speedVal.textContent = speedMultiplier.toFixed(1) + 'x';
  });

  weightRange.addEventListener('input', (e) => {
    strokeThickness = parseFloat(e.target.value);
    let label = 'Normal';
    if (strokeThickness <= 0.8) label = 'Fino';
    else if (strokeThickness > 3) label = 'Espesso';
    else if (strokeThickness >= 2 && strokeThickness <= 3) label = 'Médio';
    
    weightVal.textContent = label + ` (${strokeThickness}px)`;
    
    // Update CSS custom variable on viewport for svg dividers
    viewport.style.setProperty('--line-weight', `${strokeThickness}px`);
  });

  showGridCheckbox.addEventListener('change', (e) => {
    showGridLines = e.target.checked;
    if (showGridLines) {
      bgGrid.classList.remove('hidden');
    } else {
      bgGrid.classList.add('hidden');
    }
  });

  // Simulator controls
  if (simFreqRange) {
    simFreqRange.addEventListener('input', (e) => {
      simFrequency = parseFloat(e.target.value);
      telemetryFreq.textContent = simFrequency.toFixed(1) + 'Hz';
    });
  }

  if (simChaosRange) {
    simChaosRange.addEventListener('input', (e) => {
      simChaos = parseInt(e.target.value);
      telemetryChaos.textContent = simChaos + '%';
    });
  }

  if (simRandomBtn) {
    simRandomBtn.addEventListener('click', () => {
      simFrequency = Math.random() * 12 + 2;
      simChaos = Math.floor(Math.random() * 80 + 10);
      
      simFreqRange.value = simFrequency;
      simChaosRange.value = simChaos;
      
      telemetryFreq.textContent = simFrequency.toFixed(1) + 'Hz';
      telemetryChaos.textContent = simChaos + '%';
    });
  }


  // --- GENERATIVE BACKGROUND CANVAS ---
  const bgCanvas = document.getElementById('generative-canvas');
  const bgCtx = bgCanvas.getContext('2d');
  
  let animationFrameId;
  let width = bgCanvas.width = bgCanvas.offsetWidth;
  let height = bgCanvas.height = bgCanvas.offsetHeight;
  
  // Resize handler
  window.addEventListener('resize', () => {
    width = bgCanvas.width = bgCanvas.offsetWidth;
    height = bgCanvas.height = bgCanvas.offsetHeight;
  });

  // Flow variables
  let time = 0;
  let colors = {
    accent: '#0da69e',
    glow: '#00ffd5',
    contrast: '#1c2b30'
  };

  function resetBackgroundCanvasColors() {
    const computedStyles = getComputedStyle(viewport);
    colors.accent = computedStyles.getPropertyValue('--accent-primary').trim();
    colors.glow = computedStyles.getPropertyValue('--accent-hover').trim();
    colors.contrast = computedStyles.getPropertyValue('--accent-muted').trim();
  }

  // Draw loop for background
  function drawBackgroundFlow() {
    bgCtx.clearRect(0, 0, width, height);
    time += 0.005 * speedMultiplier;
    
    // Select styling draw pattern based on currentTheme
    switch(currentTheme) {
      case 'main':
        drawSintetizadorOrganico();
        break;
      case 'v1':
        drawGradeTopografica();
        break;
      case 'v2':
        drawTerminalLiquido();
        break;
      case 'v3':
        drawBioSinal();
        break;
      case 'v4':
        drawTelaEditorial();
        break;
      case 'v5':
        drawFluxoBrutalista();
        break;
    }
    
    animationFrameId = requestAnimationFrame(drawBackgroundFlow);
  }

  // Estilo Principal: O Sintetizador Orgânico
  // 3 long glowing curves intersecting elegantly
  function drawSintetizadorOrganico() {
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness;
    bgCtx.shadowBlur = 15;
    bgCtx.shadowColor = colors.glow;
    
    // Draw 3 flowing waves
    for (let i = 0; i < 3; i++) {
      bgCtx.beginPath();
      let shift = i * 150;
      let phase = time + i * 2;
      
      bgCtx.moveTo(0, height * 0.4 + Math.sin(phase) * 30);
      
      let cp1x = width * 0.25;
      let cp1y = height * 0.2 + Math.cos(phase) * 80;
      let cp2x = width * 0.7;
      let cp2y = height * 0.7 + Math.sin(phase) * 120;
      
      bgCtx.bezierCurveTo(
        cp1x, cp1y, 
        cp2x, cp2y, 
        width, height * 0.5 + Math.cos(phase + 1) * 40
      );
      
      bgCtx.stroke();
    }
    
    // Reset shadow for performance
    bgCtx.shadowBlur = 0;
  }

  // Variante 1: Grade Topográfica
  // Parallel contour lines
  function drawGradeTopografica() {
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness * 0.7;
    bgCtx.globalAlpha = 0.5;
    
    const linesCount = 8;
    const spacing = 45;
    
    for (let i = 0; i < linesCount; i++) {
      bgCtx.beginPath();
      let offset = i * spacing;
      let phase = time + (i * 0.05);
      
      // Let's create an isoline contour look
      bgCtx.moveTo(-50, height * 0.2 + offset);
      
      let cp1x = width * 0.3;
      let cp1y = height * 0.1 + offset + Math.sin(phase) * 60;
      
      let cp2x = width * 0.6;
      let cp2y = height * 0.6 + offset + Math.cos(phase) * 60;
      
      bgCtx.bezierCurveTo(
        cp1x, cp1y,
        cp2x, cp2y,
        width + 50, height * 0.4 + offset
      );
      
      bgCtx.stroke();
    }
    bgCtx.globalAlpha = 1.0;
  }

  // Variante 2: Terminal Líquido
  // Monospace grids and vertical linear flows (Manhattan distance / binary flow representation)
  function drawTerminalLiquido() {
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness * 0.8;
    bgCtx.shadowBlur = 8;
    bgCtx.shadowColor = colors.accent;
    
    const cols = 5;
    const spacing = width / (cols + 1);
    
    for (let i = 0; i < cols; i++) {
      let x = spacing + (i * spacing);
      bgCtx.beginPath();
      
      let phase = time * 2 + i;
      let waveY = (time * 150 + i * 200) % (height + 200) - 100;
      
      bgCtx.moveTo(x, 0);
      // Let the path go straight down but with step-like paths or fluid ripples
      for(let y = 0; y < height; y += 40) {
        let offsetX = Math.sin(y * 0.005 + phase) * 20;
        bgCtx.lineTo(x + offsetX, y);
      }
      bgCtx.stroke();
      
      // Draw glowing binary dots along the lines
      bgCtx.fillStyle = colors.glow;
      bgCtx.beginPath();
      bgCtx.arc(x + Math.sin(waveY * 0.005 + phase) * 20, waveY, 3, 0, Math.PI * 2);
      bgCtx.fill();
    }
    bgCtx.shadowBlur = 0;
  }

  // Variante 3: O Bio-Sinal
  // Perfect oscilloscope waves
  function drawBioSinal() {
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness;
    bgCtx.globalAlpha = 0.8;
    
    bgCtx.beginPath();
    bgCtx.moveTo(0, height * 0.5);
    
    let freq = 0.003;
    let amplitude = 60;
    
    for (let x = 0; x < width; x += 5) {
      // Combine multiple sine waves for organic signal beats
      let y = height * 0.5 + 
              Math.sin(x * freq + time * 5) * amplitude * Math.cos(x * 0.0005) +
              Math.sin(x * 0.01 - time * 2) * 10;
      bgCtx.lineTo(x, y);
    }
    
    bgCtx.stroke();
    
    // Draw a secondary signal (pulse)
    bgCtx.strokeStyle = colors.glow;
    bgCtx.lineWidth = strokeThickness * 0.6;
    bgCtx.beginPath();
    bgCtx.moveTo(0, height * 0.55);
    for (let x = 0; x < width; x += 10) {
      let y = height * 0.55 + 
              Math.cos(x * freq * 1.5 + time * 3) * 25 * Math.sin(x * 0.001);
      bgCtx.lineTo(x, y);
    }
    bgCtx.stroke();
    bgCtx.globalAlpha = 1.0;
  }

  // Variante 4: A Tela Editorial (Light mode, bold frame contours)
  function drawTelaEditorial() {
    bgCtx.fillStyle = colors.accent;
    bgCtx.globalAlpha = 0.06;
    
    // Draw sweeping organic shapes filled with color, framing sections
    bgCtx.beginPath();
    bgCtx.moveTo(width, height * 0.2);
    
    let cp1x = width * 0.5 + Math.sin(time) * 100;
    let cp1y = height * 0.4 + Math.cos(time) * 50;
    let cp2x = width * 0.3 + Math.cos(time * 0.5) * 80;
    let cp2y = height * 0.8 + Math.sin(time) * 100;
    
    bgCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width * 0.8, height);
    bgCtx.lineTo(width, height);
    bgCtx.closePath();
    bgCtx.fill();
    
    // Draw fine structural lines
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness * 1.5;
    bgCtx.globalAlpha = 0.15;
    bgCtx.beginPath();
    bgCtx.arc(width * 0.1, height * 0.4, 300 + Math.sin(time) * 30, 0, Math.PI * 2);
    bgCtx.stroke();
    
    bgCtx.globalAlpha = 1.0;
  }

  // Variante 5: O Fluxo Brutalista
  // Thick jagged wireframes and sharp coordinates
  function drawFluxoBrutalista() {
    bgCtx.strokeStyle = colors.accent;
    bgCtx.lineWidth = strokeThickness * 2;
    bgCtx.fillStyle = colors.glow;
    
    // Heavy bezier wireframe
    bgCtx.beginPath();
    bgCtx.moveTo(0, height * 0.7);
    
    let cp1x = width * 0.4 + Math.sin(time * 2) * 50;
    let cp1y = height * 0.1 + Math.cos(time) * 100;
    let cp2x = width * 0.6;
    let cp2y = height * 0.9;
    
    bgCtx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, height * 0.3);
    bgCtx.stroke();
    
    // Draw crosshair junctions/anchors at the curves
    bgCtx.fillRect(cp1x - 6, cp1y - 6, 12, 12);
    bgCtx.fillRect(cp2x - 6, cp2y - 6, 12, 12);
    
    // Draw brutalist overlay lines
    bgCtx.strokeStyle = 'rgba(255,255,255,0.06)';
    bgCtx.lineWidth = 1;
    bgCtx.beginPath();
    bgCtx.moveTo(cp1x, 0);
    bgCtx.lineTo(cp1x, height);
    bgCtx.moveTo(0, cp2y);
    bgCtx.lineTo(width, cp2y);
    bgCtx.stroke();
  }

  // Initialize background flow
  resetBackgroundCanvasColors();
  drawBackgroundFlow();


  // --- SIMULATOR INTERACTIVE WAVE CANVAS ---
  let simCanvas;
  let simCtx;
  let simAnimFrameId;
  let simTime = 0;

  function initSimulatorCanvas() {
    simCanvas = document.getElementById('simulator-canvas');
    if (!simCanvas) return;
    
    simCtx = simCanvas.getContext('2d');
    
    // Resize to container
    simCanvas.width = simCanvas.parentElement.clientWidth;
    simCanvas.height = simCanvas.parentElement.clientHeight - 40;
    
    // Start drawing loop for simulator
    if (simAnimFrameId) cancelAnimationFrame(simAnimFrameId);
    drawSimulatorWave();
  }

  function drawSimulatorWave() {
    if (currentView !== 'lab' || !simCanvas) return;
    
    simCtx.clearRect(0, 0, simCanvas.width, simCanvas.height);
    
    const w = simCanvas.width;
    const h = simCanvas.height;
    const centerY = h * 0.5;
    
    simTime += 0.02;
    
    // Draw structural grid in simulator background
    simCtx.strokeStyle = 'rgba(13, 166, 158, 0.08)';
    simCtx.lineWidth = 1;
    for(let x = 0; x < w; x += 30) {
      simCtx.beginPath();
      simCtx.moveTo(x, 0);
      simCtx.lineTo(x, h);
      simCtx.stroke();
    }
    for(let y = 0; y < h; y += 30) {
      simCtx.beginPath();
      simCtx.moveTo(0, y);
      simCtx.lineTo(w, y);
      simCtx.stroke();
    }
    
    // Draw the neural telemetry wave
    simCtx.beginPath();
    simCtx.moveTo(0, centerY);
    
    let waveAmplitude = h * 0.35;
    
    for (let x = 0; x < w; x++) {
      // Calculate frequency and inject chaos (noise)
      let noise = (Math.sin(x * 0.05 + simTime * 10) * (simChaos / 100)) * 15;
      let angle = (x * (simFrequency / 100)) + simTime;
      
      let y = centerY + Math.sin(angle) * waveAmplitude * Math.cos(x * 0.002) + noise;
      
      // First pixel
      if (x === 0) simCtx.moveTo(x, y);
      else simCtx.lineTo(x, y);
    }
    
    simCtx.strokeStyle = colors.accent;
    simCtx.lineWidth = 2.5;
    simCtx.shadowBlur = 10;
    simCtx.shadowColor = colors.glow;
    simCtx.stroke();
    
    simCtx.shadowBlur = 0;
    
    simAnimFrameId = requestAnimationFrame(drawSimulatorWave);
  }

  // Handle window resizing for simulator canvas
  window.addEventListener('resize', () => {
    if (currentView === 'lab' && simCanvas) {
      simCanvas.width = simCanvas.parentElement.clientWidth;
      simCanvas.height = simCanvas.parentElement.clientHeight - 40;
    }
  });

});
