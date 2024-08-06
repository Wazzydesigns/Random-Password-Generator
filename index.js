const passwordBox = document.getElementById("password");
const passwordBoxTwo = document.getElementById("password2");

const length = 12;
const length2 = 14;
const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function createPassword(){
    let password = "";
    let password2 = "";
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    password2 += allCharacters[Math.floor(Math.random() * allCharacters.length)];

    while(length > password.length){
      password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
    while(length2 > password2.length){
      password2 += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBoxTwo.value = password2;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

function copyPasswordTwo(){
    passwordBoxTwo.select();
    document.execCommand("copy");
}