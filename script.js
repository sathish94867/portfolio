// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);
// Java progress circular bar // Java progress circular bar 
let javaProgress = document.querySelector(".java"),
javaValue = document.querySelector(".java-progress");

let javaStartValue = 0,
javaEndValue = 90,
javaSpeed = 30;

let progressJava = setInterval(() => {
javaStartValue++;

javaValue.textContent = `${javaStartValue}%`;
javaProgress.style.background =`conic-gradient(#3f396d ${
    javaStartValue * 3.6
  }deg, #ededed 0deg)`;

if (javaStartValue == javaEndValue) {
  clearInterval(progressJava);
}
}, javaSpeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 80,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#fca61f ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

//spring
let springBootProgress = document.querySelector(".springboot"),
  springBootValue = document.querySelector(".springboot-progress");

let springBootStartValue = 0,
  springBootEndValue = 90, // Adjust the percentage as needed
  springBootSpeed = 30;

let progressSpringBoot = setInterval(() => {
  springBootStartValue++;

  springBootValue.textContent = `${springBootStartValue}%`;
  springBootProgress.style.background =  `conic-gradient(#00758F ${
    springBootStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (springBootStartValue == springBootEndValue) {
    clearInterval(progressSpringBoot);
  }
}, springBootSpeed);


// MySQL progress circular bar 
let mysqlProgress = document.querySelector(".mysql"),
  mysqlValue = document.querySelector(".mysql-progress");

let mysqlStartValue = 0,
  mysqlEndValue = 90, // Adjust the percentage as needed
  mysqlSpeed = 30;

let progressMySQL = setInterval(() => {
  mysqlStartValue++;

  mysqlValue.textContent = `${mysqlStartValue}%`;
  mysqlProgress.style.background =  `conic-gradient(#7d2ae8 ${
    mysqlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mysqlStartValue == mysqlEndValue) {
    clearInterval(progressMySQL);
  }
}, mysqlSpeed);





// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});



// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});