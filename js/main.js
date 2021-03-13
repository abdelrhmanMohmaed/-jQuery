// home Session 

$('#close').click(function () {
    let optionswidth = $('.nav-links').outerWidth();
    $('.caption').animate({ "margin-left": "0" }, 900)
    $('.nav-links').animate({ "left": -optionswidth }, 900)
})

$('#open-nav').click(function () {
    let optionswidth = $('.nav-links').outerWidth();
    $('.caption').animate({ "margin-left": optionswidth }, 900)
    $('.nav-links').animate({ "left": "0" }, 900)
})

// duration Session Day
let day = document.getElementById('day')
function getDay() {
    let d = new Date();
    day.innerHTML = "D / " + d.getDate();
    setTimeout(getDay, 60000)
}
getDay()
//Hours
let hours = document.getElementById('hours')
function getHours() {
    let d = new Date();
    hours.innerHTML = d.getHours() + " H";
    setTimeout(getHours, 1000)
}
getHours()
//muintes
let minutes = document.getElementById('minutes')
function getMinutes() {
let d = new Date();
    minutes.innerHTML = d.getMinutes() + " M";
    setTimeout(getMinutes, 1000)
}
getMinutes()
//seconds
let seconds = document.getElementById('seconds')
function getSeconds() {
    let d = new Date();
    seconds.innerHTML = d.getSeconds() + ' S';
    setTimeout(getSeconds, 1000)
}
getSeconds()


//details Session

$("#details h3").click(function () {
    $(this).next().slideToggle(500)
    $(this).css('display', 'block')
    $("#details div").not($(this).next()).slideUp(500);
})

//back-home 

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        $(".back-home").fadeIn(350);
    }
    else {
        $(".back-home").fadeOut(350);
    }
})

// $("btn-Send").click(function () {
//     userAccount = {
//         $("#nameInput").val();
//         $("#email-Input").val();
//         $("#massegInput").val();
//     }
//     allAccounts.push(userAccount);
//     localStorage.setItem("AccountList", JSON.stringify(allAccounts))
// })

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("email-Input");
let massegInput = document.getElementById("massegInput");
let inputs = document.getElementsByClassName("form-control");

let AllAccounts = [];

$("#btn-Send").click(function () {
    addAccount();
    resetForm();
    $("#char").text(100); //reset Characyer Reamining of (100)
})

function addAccount() {
    userAccount = {
        name: nameInput.value,
        email: emailInput.value,
        masseg: massegInput.value,
    }
    AllAccounts.push(userAccount);
    localStorage.setItem("AccountList", JSON.stringify(AllAccounts))
}

function resetForm() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

$('textarea').keyup(function () {
    let max = 100;
    let length = $(this).val().length;
    let ch = max - length;
    if (ch <= 0) {
        $("#char").text("your available character finished");
        $("#btn-Send").attr('disabled', true);
    }
    else {
        $("#char").text(ch);
        $("#btn-Send").removeAttr("disabled");
    }
    blankMessage()
})
//nameRejex
//nameInput.addEventListener("blur", checkName);
nameInput.onkeyup = function checkName() {
    let nameRejex = /^[A-Z|a-z]{1,28}$/;
    if (!nameRejex.test(nameInput.value) && nameInput.value == "") {
        $("#btn-Send").attr('disabled', true);
    } else {
        $("#btn-Send").removeAttr("disabled");
    }
}
//EmailRejex
//emailInput.addEventListener("blur", checkEmail);
emailInput.onkeyup = function checkEmail() {
    let emaileRejex = /^[A-Z|a-z|@|0-9|.]{1,40}$/;
    if (!emaileRejex.test(emailInput.value) && emailInput.value == "") {
        $("#btn-Send").attr('disabled', true);
    } else {
        $("#btn-Send").removeAttr("disabled");
    }
}
// blankMessage
//massegInput.addEventListener("blur", blankMessage);
function blankMessage() {
    if (massegInput.value == "") {
        $("#btn-Send").attr('disabled', true);
    } else {
        $("#btn-Send").removeAttr("disabled");
    }
}



