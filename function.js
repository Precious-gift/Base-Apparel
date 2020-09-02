function myFunction() {
    let mailFormat = [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$ ;
    let x = document.getElementById('email').value;
    let y = document.getElementById('validate').innerHTML;
    let z = document.getElementById('email').style;
    let b = document.getElementById('button').style;

    z.borderColor = "blue";
    b.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    
    if (x != mailFormat) {
        y = "Please provide a valid email";
    }
    else {
        y = "Thank you";
    }
}

function changeImage(c) {
    if (c.matches) {
        document.getElementById('myImage').src = "images/hero-desktop.jpg";
    }
    
}
var c = window.matchMedia("(max-width: 768px)")
changeImage(c)
c.addListener(changeImage)


function myDemo() {
    let d = document.getElementById('demo');
    if (window.matchMedia("(max-width: 700px)").matches) {
        d.innerHTML = "The screen is less than, or equal to, 700 pixels wide.";
    } else{
        d.innerHTML = "The screen is at least 700 pixels wide.";
    }
}