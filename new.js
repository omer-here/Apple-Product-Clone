//head1
var box = document.getElementById('head1');
box.addEventListener('mouseenter',turnBlue);
box.addEventListener('mouseleave',turnWhite);

function turnBlue(){
    document.getElementById("card1").style.backgroundColor = "#0d6efd";
    box.style.color="#ffffff";
}

function turnWhite(){
    document.getElementById("card1").style.backgroundColor = "#ffffff";
    box.style.color="#000000";
}


//head2
var box1 = document.getElementById('head2');
box1.addEventListener('mouseenter',turnBlue1);
box1.addEventListener('mouseleave',turnWhite1);

function turnBlue1(){
    document.getElementById("card2").style.backgroundColor = "#0d6efd";
    box1.style.color="#ffffff";
}

function turnWhite1(){
    document.getElementById("card2").style.backgroundColor = "#ffffff";
    box1.style.color="#000000";
}


//head3
var box2 = document.getElementById('head3');
box2.addEventListener('mouseenter',turnBlue2);
box2.addEventListener('mouseleave',turnWhite2);

function turnBlue2(){
    document.getElementById("card3").style.backgroundColor = "#0d6efd";
    box2.style.color="#ffffff";
}

function turnWhite2(){
    document.getElementById("card3").style.backgroundColor = "#ffffff";
    box2.style.color="#000000";
}

var btn1 = document.getElementById('btn_base');
btn1.addEventListener('click',showBase);

function showBase(){
    document.getElementById('phone1').textContent = 'Iphone 14';
}