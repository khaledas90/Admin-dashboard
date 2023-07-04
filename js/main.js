

let body = document.querySelector("body");
let modeToggle = document.querySelector(".mode-toggle");
let sidebar = document.querySelector("nav");
let sidebarToggle = document.querySelector(".sidebar-toggle");


let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus === "colse"){
    body.classList.toggle("colse");
}

modeToggle.addEventListener("click" , function(){
    body.classList.toggle("dark")
    if(body.classList.contains("dark")){
        localStorage.setItem("mode","dark")
    }else{
        localStorage.setItem("mode","light")
    }
})


sidebarToggle.addEventListener("click" , function(){
    sidebar.classList.toggle("close")
    if(body.classList.contains("colse")){
        localStorage.setItem("status","colse")
    }else{
        localStorage.setItem("status","light")
    }
})

var xVal = ["Italy", "France", "Spain", "USA", "Argentina"];
var yV = [55, 49, 44, 24, 15];
var barCou = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xVal,
    datasets: [{
      backgroundColor: barCou,
      data: yV
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});


const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var xyValueess = [
  {x:40, y:6},
  {x:45, y:6.5},
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

new Chart("myChart3", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: "rgb(0,0,255)",
      data: xyValueess
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

var xValuessss = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValuessss = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart4", {
  type: "pie",
  data: {
    labels: xValuessss,
    datasets: [{
      backgroundColor: barColors,
      data: yValuessss
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Winecomment 2023"
    }
  }
});


const xValue = [50,60,70,80,90,100,110,120,130,140,150];
const yValue = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart5", {
  type: "line",
  data: {
    labels: xValue,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValue
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

const dashanalit = document.querySelector(".dash-analit");
const dashcontent = document.querySelector(".dash-content");
const content = document.querySelector(".content");
const likeCont = document.querySelector(".likeCont");
const comment = document.querySelector(".comment");
const share = document.querySelector(".share");

const Dahsboard = document.querySelector(".Dahsboard");
const Analytics = document.querySelector(".Analytics");
const ContentLi = document.querySelector(".ContentLi");
const LikeLi = document.querySelector(".LikeLi");
const CommentLi = document.querySelector(".CommentLi");
const shareLi = document.querySelector(".shareLi");



$(Analytics).click(function(){
    $(dashcontent).hide(1000);
    $(dashanalit).show();
    $(content).hide(1000);
    $(likeCont).hide(1000);
    $(comment).hide(1000);
    $(share).hide(1000);
});

$(Dahsboard).click(function(){
    $(dashcontent).show();
    $(dashanalit).hide(1000);
    $(content).hide(1000);
    $(likeCont).hide(1000);
    $(comment).hide(1000);
    $(share).hide(1000);
});

$(ContentLi).click(function(){
  $(content).show();
  $(dashcontent).hide(1000);
  $(dashanalit).hide(1000);
  $(likeCont).hide(1000);
  $(comment).hide(1000);
  $(share).hide(1000);
});

$(LikeLi).click(function(){
  $(likeCont).show();
  $(dashcontent).hide(1000);
  $(dashanalit).hide(1000);
  $(comment).hide(1000);
  $(content).hide(1000);
  $(share).hide(1000);
});

$(CommentLi).click(function(){
  $(comment).show();
  $(dashcontent).hide(1000);
  $(dashanalit).hide(1000);
  $(likeCont).hide(1000);
  $(content).hide(1000);
  $(share).hide(1000);
});

$(shareLi).click(function(){
  $(share).show();
  $(dashcontent).hide(1000);
  $(dashanalit).hide(1000);
  $(likeCont).hide(1000);
  $(content).hide(1000);
  $(comment).hide(1000);
});
