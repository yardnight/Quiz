window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("_sticky", window.scrollY > 0);
})

//===================<Menu Burger>======================================
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(event) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}
//===================<Theme switch>=====================================
(function() {
	// 
    var themeSwitch = document.getElementById('switcher');
    if(themeSwitch) {
    	initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function(event){ 
            resetTheme(); // update color theme
            }
        );

        function initTheme() {
        	var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
        	// update checkbox
        	themeSwitch.checked = darkThemeSelected;
    			// update body data-theme attribute
    			darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
        };

        function resetTheme() {
        	if(themeSwitch.checked) { // dark theme has been selected
        		document.body.setAttribute('data-theme', 'dark');
        		localStorage.setItem('themeSwitch', 'dark');
        	} else {
        		document.body.setAttribute('data-theme', 'light');
        		localStorage.setItem('themeSwitch', 'light');
        	} 
        };
	}
	

}());
//===================<Skills SLIDER>========================================================
function slidesPlugin(activeSlide = 2) {
    const hardSkills = document.querySelectorAll('.hard-skills__slide');
    const extraSkills = document.querySelectorAll('.extra-skills__slide');
   
    hardSkills[activeSlide].classList.add('active');
    var activeExSlide = extraSkills.length-activeSlide;
    extraSkills[activeExSlide].classList.add('active');
    eventLook(hardSkills);
    eventLook(extraSkills);

    // tracking clicking on a skillslide
    function eventLook(slides){
        for (const slide of slides) {
            slide.addEventListener('click', () => { 
                               
                clearActiveClasses(slides);
                slide.classList.add('active')
            })
        }
    }
    // cleaning activity
    function clearActiveClasses(slides) {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

}

slidesPlugin(2);

class Skill{
    constructor(name,progress,iconName){
        this.name=name;
        this.progress=progress;
        this.iconName=iconName;
        this.iconSrc="img/icons/icons.svg#iconskills--"+this.iconName;
        this.iconClass="svg-iconskills--"+ this.iconName + "-dims";
        this.iconAlt="iconSkills--"+ this.iconName
    }
    }

var htmlSkill = new Skill("HTML5",80,"html5");
var cssSkill = new Skill("CSS3",60,"css3");
var jsSkill = new Skill("JS",45,"js3");
var sassSkill = new Skill("SASS",60,"sass");
var gulpSkill = new Skill("GULP",50,"gulp");
var gitSkill = new Skill("GIT",70,"git");

var skills=[htmlSkill,cssSkill,jsSkill,sassSkill,gulpSkill,gitSkill];

skillsProgress(skills);

function skillsProgress(skills){

    var skillsName=document.querySelectorAll('.hard-skills__slide h3');
    for (var i=0; i<skillsName.length; i++){
        skillsName[i].innerHTML=skills[i].name;
    }

    var skillsValues=document.querySelectorAll('#progress');
    var skillsAmount = skillsValues.length
    if(skills.length===skillsAmount){
        
        for (var i=0; i<skillsAmount; i++) {
            skillsValues[i].innerHTML = skills[i].progress+'%';
        }
    } else{
        console.log("HTML skills amount doesnt mutch js skill's amount")
    }
    var skillIconSources = document.querySelectorAll('.hard-skills__slide .icon-box source');
    
    for (var i=0; i<skillIconSources.length; i++) {
        skillIconSources[i].srcset = skills[i].iconSrc;
    }
    var skillsIcons = document.querySelectorAll('.hard-skills__slide .icon-box img');
    for (var i=0; i<skillsIcons.length; i++) {
        skillsIcons[i].src = skills[i].iconSrc;
        skillsIcons[i].className = skills[i].iconClass;
        skillsIcons[i].alt = skills[i].iconAlt;
    }
}

function addHardSkillSlider(skills){
    var skillsContainer=document.querySelector('.hard-skills__content')
    var skillsCounter=document.querySelectorAll('hard-skills__slide').length;
    if (skills.length>skillsCounter){
        var newSlide = skillsContainer.appendChild('div');
        newSlide.className = 'hard-skills__slide';
    }
}

//===================<FORMS>==============================================================

// "use strict"

// document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form');
//     console.log(form)
//     form.addEventListener('submit', formSend);

//     async function formSend(event) {
//         event.preventDefault();
//         let error = formValidate(form)
//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for(let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input) ;

//             if(input.classList.contains('_email')){
//                 if(emailTest(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//     }
//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// })