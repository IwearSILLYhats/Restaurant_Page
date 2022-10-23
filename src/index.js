import home from "./home.js";
import nav from "./nav.js";

(() => {
    const content = document.querySelector('#content');
    nav();
    home();

})();