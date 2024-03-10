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
    }else if(username === 'enzo gorlami'){
        let img = document.createElement("img");

      
        img.src = "/Scratch/img/loginPage/enzo.png";

      
        img.classList.add("img-fluid");

        let profilePicDiv = document.querySelector("#pp");
        profilePicDiv.appendChild(img);
    }else if(username === 'antonio margheriti'){
        let img = document.createElement("img");

      
        img.src = "/Scratch/img/loginPage/antonio.png";

      
        img.classList.add("img-fluid");

        let profilePicDiv = document.querySelector(".profile-pic");
        profilePicDiv.appendChild(img);
    }

    


}

setProfilePicture();





