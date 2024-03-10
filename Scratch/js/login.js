window.onload = function() {
    let loginForm = document.querySelector('#login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Kullanıcının girdiği e-posta ve şifre
        let emailInput = document.querySelector('input[name="email"]');
        let passwordInput = document.querySelector('input[name="password"]');
        let email = emailInput.value;
        let password = passwordInput.value;

        // Local storage'daki kullanıcı bilgilerini al
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Kullanıcı bilgilerini kontrol et
        let userFound = users.find(user => user.emailOrPhone === email && user.password === password);

        // Eğer kullanıcı bulunduysa ve giriş bilgileri doğruysa main.html sayfasına yönlendir
        if (userFound) {
            window.location.href = "main.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
};





























function setLanguage(){
    let language = "en"
    localStorage.setItem('language',language)
}

setLanguage();


let languageSelector = document.getElementById('languages');

languageSelector.addEventListener('change', function() {
    let selectedLanguage = languageSelector.value;
    console.log(selectedLanguage); 

    if(selectedLanguage === 'en'){
        document.querySelector('label[for="languages"]').innerText = 'Choose a language:';
        document.querySelector('.signup a').innerText = 'Sign Up';
        document.querySelector('footer').innerText = '&copy; 2024 Secratch. All rights reserved';
        document.querySelector('.form-section h1').innerText = 'Secratch';
        document.querySelector('.input-container input[type="email"]').setAttribute('placeholder', 'Email,Phone number');
        document.querySelector('.input-container input[type="password"]').setAttribute('placeholder', 'Password');
        document.querySelector('button[type="submit"]').innerText = 'Log In';
    } else if (selectedLanguage === 'tr') {
        document.querySelector('label[for="languages"]').innerText = 'Bir dil seçin:';
        document.querySelector('.signup a').innerText = 'Kaydol';
        document.querySelector('footer').innerText = '&copy; 2024 Secratch. Tüm hakları saklıdır';
        document.querySelector('.form-section h1').innerText = 'Secratch';
        document.querySelector('.input-container input[type="email"]').setAttribute('placeholder', 'E-posta, Telefon numarası');
        document.querySelector('.input-container input[type="password"]').setAttribute('placeholder', 'Şifre');
        document.querySelector('button[type="submit"]').innerText = 'Giriş Yap';
    } else if (selectedLanguage === 'fr') {
        document.querySelector('label[for="languages"]').innerText = 'Choisissez une langue:';
        document.querySelector('.signup a').innerText = "S'inscrire";
        document.querySelector('footer').innerText = '&copy; 2024 Secratch. Tous droits réservés';
        document.querySelector('.form-section h1').innerText = 'Secratch';
        document.querySelector('.input-container input[type="email"]').setAttribute('placeholder', 'Email, numéro de téléphone');
        document.querySelector('.input-container input[type="password"]').setAttribute('placeholder', 'Mot de passe');
        document.querySelector('button[type="submit"]').innerText = 'Connexion';
    } else if (selectedLanguage === 'de') {
        document.querySelector('label[for="languages"]').innerText = 'Wählen Sie eine Sprache:';
        document.querySelector('.signup a').innerText = 'Anmelden';
        document.querySelector('footer').innerText = '&copy; 2024 Secratch. Alle Rechte vorbehalten';
        document.querySelector('.form-section h1').innerText = 'Secratch';
        document.querySelector('.input-container input[type="email"]').setAttribute('placeholder', 'E-Mail, Telefonnummer');
        document.querySelector('.input-container input[type="password"]').setAttribute('placeholder', 'Passwort');
        document.querySelector('button[type="submit"]').innerText = 'Anmelden';
    } else if (selectedLanguage === 'es') {
        document.querySelector('label[for="languages"]').innerText = 'Elige un idioma:';
        document.querySelector('.signup a').innerText = 'Registrarse';
        document.querySelector('footer').innerText = '&copy; 2024 Secratch. Todos los derechos reservados';
        document.querySelector('.form-section h1').innerText = 'Secratch';
        document.querySelector('.input-container input[type="email"]').setAttribute('placeholder', 'Correo electrónico, número de teléfono');
        document.querySelector('.input-container input[type="password"]').setAttribute('placeholder', 'Contraseña');
        document.querySelector('button[type="submit"]').innerText = 'Iniciar sesión';
    }
});

