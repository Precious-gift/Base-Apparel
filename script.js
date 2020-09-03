function changeImage(x) {
    if (x.matches) {
       document.getElementById('myImage').src = "images/hero-mobile.jpg"; 
    } else {
        document.getElementById('myImage').src = "images/hero-desktop.jpg";
    }
}
let x = window.matchMedia("(max-width: 768px)")
changeImage(x)
x.addListener(changeImage)


let y = document.getElementById('email');
let z = document.getElementById('button');
let v = document.getElementById('validate');

function myFunction() {

    y.style.borderColor = "hsl(0, 93%, 68%)";
    y.style.borderWidth = "2px";
    z.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    z.style.padding = "10px 20px";

}

function mySecondFunction() {
    mailFormat = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
    if (y.value.match(mailFormat)) {
        v.innerHTML = "Thank you";
        v.style.color = "hsl(0, 93%, 68%)";
    } else {
        v.innerHTML = "Please provide a valid email";
        y.style.backgroundImage = "url('images/icon-error.svg')";
        y.style.backgroundRepeat = "no-repeat";
        y.style.backgroundPosition = "center";
        v.style.color = "hsl(0, 93%, 68%)";
    }
}

z.addEventListener("click", myFunction);
z.addEventListener("click", mySecondFunction);