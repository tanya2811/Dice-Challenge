const number1 = document.getElementById("num1");
let nums1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "dice" + nums1 + ".png";
var randomSourse1 = "images/" + randomImg1;
var image1 = document.querySelectorAll("img")[0];

const number2 = document.getElementById("num2");
let nums2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "dice" + nums2 + ".png";
var randomSourse2 = "images/" + randomImg2;
var image2 = document.querySelectorAll("img")[1];

const butt1 = document.getElementById("but1");
const butt2 = document.getElementById("but2");
const res = document.getElementById("res");

const butt3 = document.querySelector("#but3");
const player =document.getElementById("p1")
const player2 =document.getElementById("p2")

var flag1 = false;
var flag2 = false;
var a =" ";
var b =" ";

function resq() {
  butt1.addEventListener("click", () => {
    image1.setAttribute("src", randomSourse1);
    flag1 = true;
    result();
  });
  butt2.addEventListener("click", () => {
    image2.setAttribute("src", randomSourse2);
    flag2 = true;
    result();
  });
  butt3.addEventListener("click", () => {
     a=prompt("Write Player1 name");
   console.log(a);
    b=prompt("Write Player2 name");
   console.log(b);
   getValue();
   getValue2();
   result();
  });
}

function getValue() {
  
  player.innerHTML = a;

}

function getValue2() {

  player2.innerHTML = b;
}
resq();


function result() {
  if (flag1 == true && flag2 == true) {
    if (nums1 > nums2) {
      res.innerHTML = `${a} WINS!!`;
    } else if (nums1 < nums2) {
      res.innerHTML = `${b} WINS!!`;
    } else {
      res.innerHTML = "DRAW";
    }
  }
}
