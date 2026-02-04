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
