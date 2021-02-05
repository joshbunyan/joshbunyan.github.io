
/* Responsive menu function */
function Condense() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* On-scroll functions */
window.onscroll = function() {
    menuAppearance()
    traverse()
    purseFunction()
};

function menuAppearance() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("myTopnav").className = "topnav";
    }
}

function traverse() {
    if (document.documentElement.scrollTop > 950) {
        document.getElementById("bc2").className = "snark col-5";
        document.getElementById("traverse").className = "traverse col-5"
    }
}

function purseFunction() {
    if (document.documentElement.scrollTop > 1000) {
        document.getElementById("purse").className = "snark col-5";
        document.getElementById("jp").className = "giphy-embed";
    }
}

/* If Yes is clicked */
function excellent() {
    document.getElementById("dwight").className = "giphy-embed";
}

/* If No is clicked */
function wrong() {
    document.getElementById("dwight2").className = "giphy-embed";
}

/* Canvas Test */
var c = document.getElementById("line");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();