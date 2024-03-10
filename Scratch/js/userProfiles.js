function setProfilePicture() {

let userData = localStorage.getItem('users');


let users = JSON.parse(userData);


let username = users[0].Username;
console.log(username); // Kullanıcı adını konsola yazdırın
 

    if(username === 'dominic dococo'){
        let img = document.createElement("img");

      
        img.src = "/Scratch/img/loginPage/dominic.png";

      
        img.classList.add("img-fluid");

        let profilePicDiv = document.querySelector(".profile-pic");
        profilePicDiv.appendChild(img);
    }else{
        console.log('no profil pic');
    }


}

setProfilePicture();





// LocalStorage'dan kullanıcı verilerini alın
let userData = localStorage.getItem('users');

// Aldığınız veriyi bir değişkene atayın
let users = JSON.parse(userData);

// Veriyi bir JSON dosyasına yazın
let jsonContent = JSON.stringify(users);
let blob = new Blob([jsonContent], { type: 'application/json' });
let url = URL.createObjectURL(blob);

// Dosyayı indirme bağlantısını oluşturun
let downloadLink = document.createElement('a');
downloadLink.href = url;
downloadLink.download = 'users.json';

// Bağlantıyı tıklamak için otomatik tetikleyin
downloadLink.click();

