document.getElementById('mode-toogle').addEventListener('click', function() {
    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toogle');

    // Vérifie si le body a la classe dark-mode
    const isDarkMode = body.classList.contains('dark-mode');

    // Si le body est en mode sombre, retire la classe dark-mode et ajoute lightMode
    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('lightMode');
        modeToggleBtn.textContent = 'Mode sombre';
        modeToggleBtn.classList.remove('lightModeButton');
        modeToggleBtn.classList.add('darkModeButton');
    } else { // Sinon, retire lightMode et ajoute dark-mode
        body.classList.remove('lightMode');
        body.classList.add('dark-mode');
        modeToggleBtn.textContent = 'Mode clair';
        modeToggleBtn.classList.add('lightModeButton');
        modeToggleBtn.classList.remove('darkModeButton');
    }
});