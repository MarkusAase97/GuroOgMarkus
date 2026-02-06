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
