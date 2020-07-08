const $header = document.querySelector('header');
const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];

window.addEventListener('scroll',toggleHeader, false);
function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        $menu.firstElementChild.classList.remove('max-hamburger');
        $menu.firstElementChild.classList.add('min-hamburger');
    } else if (window.pageYOffset < 60 && $header.classList.contains('min-header')) {
     $header.classList.add('max-header');
     $header.classList.remove('min-header');
     $logo.classList.remove('min-logo');
     $logo.classList.add('max-logo');
     $navBar.classList.remove('min-nav');
     $navBar.classList.add('max-nav')
     $menu.firstElementChild.classList.remove('min-hamburger');
    $menu.firstElementChild.classList.add('max-hamburger');
     }
     

}
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
$menu.addEventListener('click',toggleMenu,false);
var isOpen = false;
function toggleMenu() {
    if (!isOpen){
    $navBar.classList.add('menu-opened');
    $menu.firstElementChild.classList.add('close-btm');
    isOpen = true;
    }else {
        $navBar.classList.remove('menu-opened');
        $menu.firstElementChild.classList.remove('close-btm');
        isOpen = false;
    }
}
$navBar.addEventListener('click',navClick,false);
function navClick(evt) {
    console.log(evt.target.tagName);
    if (evt.target.tagName == 'A') {
        toggleMenu();
    }

}