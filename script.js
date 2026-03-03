// SCROLL-EFFEKT (Lager fargelaget over toppbildet når du scroller)
window.addEventListener('scroll', function() {
  const overlay = document.getElementById('scrollOverlay');
  const scrollPosition = window.scrollY;
  
  // Beregner hvor synlig fargen skal være. Den er på 100% etter 400px scroll.
  let opacity = scrollPosition / 400; 
  if (opacity > 0.95) opacity = 0.95; // Stopper på 95% så man *kanskje* aner bildet bak
  
  overlay.style.opacity = opacity;
});

// PROGRAM
document.getElementById('toggleProgram').addEventListener('click', function () {
  const content = document.getElementById('programContent');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    this.textContent = 'Skjul program';
  } else {
    content.classList.add('hidden');
    this.textContent = 'Vis program';
  }
});

// HJELP
document.getElementById('toggleHjelp').addEventListener('click', function () {
  const content = document.getElementById('hjelpContent');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    this.textContent = 'Skjul';
  } else {
    content.classList.add('hidden');
    this.textContent = 'Ønsker du å hjelpe?';
  }
});

// OVERNATTING
document.getElementById('toggleOvernatting').addEventListener('click', function () {
  const content = document.getElementById('overnattingContent');
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    this.textContent = 'Skjul overnatting';
  } else {
    content.classList.add('hidden');
    this.textContent = 'Trenger du overnatting?';
  }
});

// FREDAG
document.getElementById('toggleFredag').addEventListener('click', function () {
  const content = document.getElementById('fredagContent'); // Fikset target her!
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    this.textContent = 'Skjul info om fredag';
  } else {
    content.classList.add('hidden');
    this.textContent = 'Vis info om fredag';
  }
});
