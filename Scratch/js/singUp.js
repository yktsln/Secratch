function saveUserData(emailOrPhone, Username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let newUser = {
        emailOrPhone: emailOrPhone,
        Username: Username, 
        password: password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

document.addEventListener('DOMContentLoaded', function() {
    let signUpForm = document.querySelector('form');

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let emailOrPhoneInput = signUpForm.querySelector('input[type="text"][placeholder="Email or Phone number"]');
        let UsernameInput = signUpForm.querySelector('input[type="text"][placeholder="Username"]');
        let passwordInput = signUpForm.querySelector('input[type="password"][placeholder="Password"]');

        let emailOrPhone = emailOrPhoneInput ? emailOrPhoneInput.value : '';
        let Username = UsernameInput ? UsernameInput.value : '';
        let password = passwordInput ? passwordInput.value : '';


        saveUserData(emailOrPhone, Username, password);
        alert('User signed up successfully!');

        window.location.href = "main.html";
    });
});



 document.getElementById('signup-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);
            fetch('http://localhost:3000/signup', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData)),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                this.reset();
            })
            .catch(error => console.error('Error:', error));
    });



localStorage.clear();





















































function setLanguage(language) {
    let labels = {
        'en': 'Choose a language:',
        'fr': 'Choisissez une langue:',
        'de': 'Wählen Sie eine Sprache:',
        'es': 'Elige un idioma:',
        'tr': 'Bir dil seçin:'
    }; 

    let signupTexts = {
        'en': 'Sign Up',
        'fr': "S'inscrire",
        'de': 'Anmelden',
        'es': 'Registrarse',
        'tr': 'Kaydol'
    };

    let footerTexts = {
        'en': '2024 Secratch. All rights reserved',
        'fr': '2024 Secratch. Tous droits réservés',
        'de': '2024 Secratch. Alle Rechte vorbehalten',
        'es': '2024 Secratch. Todos los derechos reservados',
        'tr': '2024 Secratch. Tüm hakları saklıdır'
    };

    let placeholders = {
        'en': {
            'email': 'Email or Phone number',
            'password': 'Password',
            'username': 'Full Name'
        },
        'fr': {
            'email': 'Email, numéro de téléphone',
            'password': 'Mot de passe',
            'username': 'Nom complet'
        },
        'de': {
            'email': 'E-Mail, Telefonnummer',
            'password': 'Passwort',
            'username': 'Vollständiger Name'
        },
        'es': {
            'email': 'Correo electrónico, número de teléfono',
            'password': 'Contraseña',
            'username': 'Nombre completo'
        },
        'tr': {
            'email': 'E-posta, Telefon numarası',
            'password': 'Şifre',
            'username': 'Tam Adı'
        }
    };

    let buttonTexts = {
        'en': 'Log In',
        'fr': 'Connexion',
        'de': 'Anmelden',
        'es': 'Iniciar sesión',
        'tr': 'Giriş Yap'
    };

    document.querySelector('label[for="languages"]').innerText = labels[language];
    document.querySelector('.container h1').innerText = signupTexts[language];
    document.querySelector('footer p').innerText = footerTexts[language];
    document.querySelector('.have-account a').innerText = buttonTexts[language];
    document.querySelectorAll('input[type="text"]').forEach(input => {
        if (input.placeholder.includes('Email')) {
            input.placeholder = placeholders[language]['email'];
        } else if (input.placeholder.includes('Name')) {
            input.placeholder = placeholders[language]['name'];
        } else if (input.placeholder.includes('Confirm Password')) {
            input.placeholder = placeholders[language]['confirmPassword'];
        }
    });
    document.querySelectorAll('input[type="password"]').forEach(input => {
        input.placeholder = placeholders[language]['password'];
    });
}

setLanguage('en');

document.getElementById('languages').addEventListener('change', function() {
    setLanguage(this.value);
});
