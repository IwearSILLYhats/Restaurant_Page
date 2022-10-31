import contact from "./contact.js";
import home from "./home.js";
import menu from "./menu.js";
import nav from "./nav.js";

(() => {
    const content = document.querySelector('#content');
    nav();
    home();
    menu();
    contact();

    function tabSwitcher(tab){
        let homeTab = document.querySelector('.home');
        let menuTab = document.querySelector('.menu');
        let contactTab = document.querySelector('.contact');

        homeTab.style.display = 'none';
        menuTab.style.display = 'none';
        contactTab.style.display = 'none';

        (tab === 'menu') ? menuTab.style.display = ''
            : (tab === 'contact') ? contactTab.style.display = ''
            : homeTab.style.display = '';

    }
    function events(){
        const buttons = document.querySelector('.nav ul');
        buttons.addEventListener('click', (btn) => {
            if (btn.target.dataset.pointer === 'home' || 'menu' || 'contact'){
                tabSwitcher(btn.target.dataset.pointer);
            };
        })
    }
    events();
    tabSwitcher();

})();