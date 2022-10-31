/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ carousel)
/* harmony export */ });
/* harmony import */ var _img_Evil1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Evil1.jpg */ "./src/img/Evil1.jpg");
/* harmony import */ var _img_epicBread_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/epicBread.png */ "./src/img/epicBread.png");
/* harmony import */ var _img_greenDiner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/greenDiner.png */ "./src/img/greenDiner.png");
/* harmony import */ var _img_Indoors_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Indoors.png */ "./src/img/Indoors.png");





function carousel (){
    const slides = [[_img_Evil1_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Tub of Evil Ice Cream'], [_img_epicBread_png__WEBPACK_IMPORTED_MODULE_1__, 'Fabulous Bread'], [_img_greenDiner_png__WEBPACK_IMPORTED_MODULE_2__, 'Outdoor shot of the building'], [_img_Indoors_png__WEBPACK_IMPORTED_MODULE_3__, 'Indoor shot of the building']];
    const hero = document.querySelector('.hero');

    slides.forEach((slide) => {
        const container = document.createElement('div');
        container.classList.add('slide');
        hero.appendChild(container);

        const img = document.createElement('img');
        img.setAttribute('src', slide[0]);
        img.setAttribute('alt', slide[1]);
        container.appendChild(img);
    });

    const btnNext = document.createElement('button');
    btnNext.textContent = '>';
    btnNext.classList.add('btn');
    btnNext.classList.add('btn-next');
    hero.appendChild(btnNext);

    const btnPrev = document.createElement('button');
    btnPrev.textContent = '<';
    btnPrev.classList.add('btn');
    btnPrev.classList.add('btn-prev');
    hero.appendChild(btnPrev);

    const slidesSelector = document.querySelectorAll('.slide');

    slidesSelector.forEach((sld, indx) => {
        sld.style.transform = `translateX(${indx * 100}%)`;
    });

    let curSlide = 0;
    let maxSlide = slidesSelector.length - 1;

    btnNext.addEventListener('click', function (){
        if(curSlide === maxSlide){
            curSlide = 0;
        }
        else{
            curSlide++;
        }

        slidesSelector.forEach((sld, indx) =>{
            sld.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });

        

    });

    btnPrev.addEventListener('click', function (){
        if(curSlide === 0){
            curSlide = maxSlide;
        }
        else{
            curSlide--;
        }

        slidesSelector.forEach((sld, indx) =>{
            sld.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });

        

    });
    
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
//creates form with first name, last name, email address, subject, and message fields
function contact (){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    content.appendChild(contact);

        const formStart = document.createElement('form');
        formStart.classList.add('form');
        contact.appendChild(formStart);

            const header = document.createElement('h3');
            header.textContent = 'Need to get in touch?';
            formStart.appendChild(header);

            const nameField = document.createElement('div');
            nameField.classList.add('nameField');
            formStart.appendChild(nameField);

                const nameLabel = document.createElement('label');
                nameLabel.textContent = 'Name ';
                nameField.appendChild(nameLabel);

                const nameWrapper = document.createElement('div');
                nameWrapper.classList.add('wrapper');
                nameWrapper.classList.add('name');
                nameField.appendChild(nameWrapper);

                    const fNameInput = document.createElement('input');
                    fNameInput.setAttribute('placeholder', 'First');
                    nameWrapper.appendChild(fNameInput);
                    
                    const lNameInput = document.createElement('input');
                    lNameInput.setAttribute('placeholder', 'Last');
                    nameWrapper.appendChild(lNameInput);

            const emailWrapper = document.createElement('div');
            emailWrapper.classList.add('wrapper');
            formStart.appendChild(emailWrapper);

                const emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email ';
                emailWrapper.appendChild(emailLabel);

                const emailInput = document.createElement('input');
                emailInput.setAttribute('placeholder', 'example@sample.com');
                emailWrapper.appendChild(emailInput);

            const subjectWrapper = document.createElement('div');
            subjectWrapper.classList.add('wrapper');
            formStart.appendChild(subjectWrapper);

                const subjectLabel = document.createElement('label');
                subjectLabel.textContent = 'Subject ';
                subjectWrapper.appendChild(subjectLabel);

                const subjectInput = document.createElement('input');
                subjectInput.setAttribute('placeholder', "RE: suspicious glow");
                subjectWrapper.appendChild(subjectInput);

            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('wrapper');
            formStart.appendChild(messageWrapper);

                const messageLabel = document.createElement('label');
                messageLabel.textContent = 'Message ';
                messageWrapper.appendChild(messageLabel);

                const messageInput = document.createElement('textarea');
                messageInput.setAttribute('rows', '4');
                messageInput.setAttribute('placeholder', "I jUsT gOt RaDiAtIoN pOiSoNiNg. That's what you sound like.");
                messageWrapper.appendChild(messageInput);

            const submitButton = document.createElement('button');
            submitButton.textContent = 'SUBMIT';
            submitButton.setAttribute('type', 'button');
            formStart.appendChild(submitButton);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");


function home (){
    const home = document.createElement('div');
        home.classList.add('home');
        content.appendChild(home);

    const hero = document.createElement('div');
    hero.classList.add('hero');
    home.appendChild(hero);
    (0,_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const about = document.createElement('p');
    about.textContent = "We are an entirely fictitious, but delicious, ice cream shop devoted entirely to fantastical flavors and super chill atmosphere. Our founders were created when a lonely ice cream maker was in an accident with radioactive waste, becoming the world's first sentient, business-owning appliance. Don't worry, we are regularly tested for the presence of any stray isotopes and are within the USDA guidelines for alpha, beta, and gamma radiation in all of our foodstuffs!";
    home.appendChild(about);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _img_lightningFlavor_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/lightningFlavor.jpg */ "./src/img/lightningFlavor.jpg");
/* harmony import */ var _img_frogFlavor_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/frogFlavor.jpg */ "./src/img/frogFlavor.jpg");
/* harmony import */ var _img_Evil2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/Evil2.jpg */ "./src/img/Evil2.jpg");
/* harmony import */ var _img_rainbowFlavor2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/rainbowFlavor2.jpg */ "./src/img/rainbowFlavor2.jpg");
/* harmony import */ var _img_cafe_americano_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/cafe americano.jpg */ "./src/img/cafe americano.jpg");
/* harmony import */ var _img_latte_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/latte.jpg */ "./src/img/latte.jpg");
/* harmony import */ var _img_affogato_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/affogato.jpg */ "./src/img/affogato.jpg");
/* harmony import */ var _img_brownie_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/brownie.jpg */ "./src/img/brownie.jpg");
/* harmony import */ var _img_cookies_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/cookies.jpg */ "./src/img/cookies.jpg");
/* harmony import */ var _img_loaf_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/loaf.jpg */ "./src/img/loaf.jpg");











function menu (){
    //holds data by which the menu tab is populated
    const menu = [
        ['Flavors',
            {
                image: _img_lightningFlavor_jpg__WEBPACK_IMPORTED_MODULE_0__,
                name: 'Lightning',
                price: '$0.06/kwh',
                description: "We've really captured lightning in a bottle with this one! Don't ask how we were able to cream the power of Zeus to create this smoth and tangy frozen treat.",
                disclaimer: "purchase of this flavor waives CBC of all responsibility for electricity related injury"
            },
            {
                image: _img_frogFlavor_jpg__WEBPACK_IMPORTED_MODULE_1__,
                name: 'Frog on a Cone',
                price: 'One "true loves kiss"',
                description: 'Limited time only! One out of every 500 of these cones we sell will actually be a cursed member of some fantastical aristocracy.',
                disclaimer: "Happily ever after not guaranteed"
            },
            {
                image: _img_Evil2_jpg__WEBPACK_IMPORTED_MODULE_2__,
                name: 'Evil Overlord',
                price: '$6.66',
                description: 'One taste of this delightful flavor will be enough to inspire delusions of world domination in even the most polite of customers. All the adrenaline of seeing your enemies driven before you without the legal implications of ACTUAL WARCRIMES.',
                disclaimer: "Actual warcrimes commited after leaving the store are not the responsiblity of CBC"
            },
            {
                image: _img_rainbowFlavor2_jpg__WEBPACK_IMPORTED_MODULE_3__,
                name: 'Rainbow Sherbert',
                price: '$1.23',
                description: 'The only frozen desert made with the entire visible spectrum of light.',
                disclaimer: "Not recommended for those with UV sensitivity"
            }
        ],

    ['Drinks',
            {
                image: _img_cafe_americano_jpg__WEBPACK_IMPORTED_MODULE_4__,
                name: 'Cafe Americano',
                price: '$1.99',
                description: "Espresso and hot water. Humans say it's pretty good.",
                disclaimer: "Gamma radiation free!"
            },
            {
                image: _img_latte_jpg__WEBPACK_IMPORTED_MODULE_5__,
                name: 'Latte',
                price: '$2.50',
                description: 'Espresso and steamed milk.',
                disclaimer: "Alpha radiation 'free'."
            },
            {
                image: _img_affogato_jpg__WEBPACK_IMPORTED_MODULE_6__,
                name: 'Affogato',
                price: '$4.00',
                description: 'Ice cream flavor of choice swimming in a double shot of espresso.',
                disclaimer: '"Radiation" "Free"'
            }
        ],
    ['Bakery',
            {
                image: _img_brownie_jpg__WEBPACK_IMPORTED_MODULE_7__,
                name: 'Brownie',
                price: '$1.29',
                description: 'Chocolate chip fudge brownie with chopped walnuts',
                disclaimer: "Contains nuts"
            },
            {
                image: _img_cookies_jpg__WEBPACK_IMPORTED_MODULE_8__,
                name: 'Cookies',
                price: '$0.99',
                description: 'Baked fresh every morning, ask your cashier for the flavor of the day.',
                disclaimer: "Made on equipment that also processes depleted uranium"
            },
            {
                image: _img_loaf_jpg__WEBPACK_IMPORTED_MODULE_9__,
                name: 'Loaf',
                price: '$2.00',
                description: 'Picture your favorite food, now picture it in a freshly baked cylindrical shape.',
                disclaimer: "Contains harmful doses of every allergen known to man"
            }
        ]
    ];

    //adds container for menu content that can then have visibility toggled by event listener in index js document
    const menuTab = document.createElement('div');
    menuTab.classList.add('menu');
    content.appendChild(menuTab);

    //iterates through menu object, broken down by category and adds header then creates HTML for individual menu items
    function menuIterator (){
        menu.forEach((category) => {
            category.forEach((item) => {
                if (category.indexOf(item) === 0){
                    const header = document.createElement('h1');
                    header.textContent = category[0];
                    menuTab.appendChild(header);
                }
                else{
                    itemBuilder(item);
                }
            })
        });
    };

    //called for each menu item that needs to be instantiated, disclaimer optional
    function itemBuilder(item){
        const container = document.createElement('div');
        menuTab.appendChild(container);

        const img = document.createElement('img');
        img.src = item.image
        container.appendChild(img);

        const name = document.createElement('h5');
        name.textContent = `${item.name} - ${item.price}`;
        name.classList.add('name');
        container.appendChild(name);

        const desc = document.createElement('p');
        desc.textContent = item.description;
        desc.classList.add('description');
        container.appendChild(desc);

        const disc = document.createElement('p');
        disc.textContent = item.disclaimer;
        disc.classList.add('disclaimer');
        container.appendChild(disc);

    }
    
    menuIterator();
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nav)
/* harmony export */ });
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");

//Creates navbar buttons and logo on main page
function nav (){
    const buttons = ['home', 'menu', 'contact'];
    const header = document.createElement('div');
    header.classList.add('nav');
    content.appendChild(header);

    const logoImg = document.createElement('img');
    logoImg.src = _logo_svg__WEBPACK_IMPORTED_MODULE_0__;
    logoImg.classList.add('logo');
    header.appendChild(logoImg);

    const navbar = document.createElement('ul');
    header.appendChild(navbar);

    buttons.forEach( (e) =>{
        const button = document.createElement('li')
        button.textContent = e.slice(0, 1).toUpperCase() + e.slice(1);
        button.setAttribute('data-pointer', e);
        navbar.appendChild(button);
    })
}

/***/ }),

/***/ "./src/img/Evil1.jpg":
/*!***************************!*\
  !*** ./src/img/Evil1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46ed3d639ba86479a995.jpg";

/***/ }),

/***/ "./src/img/Evil2.jpg":
/*!***************************!*\
  !*** ./src/img/Evil2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "725205ba5512209c7c29.jpg";

/***/ }),

/***/ "./src/img/Indoors.png":
/*!*****************************!*\
  !*** ./src/img/Indoors.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e61f68415830732a9871.png";

/***/ }),

/***/ "./src/img/affogato.jpg":
/*!******************************!*\
  !*** ./src/img/affogato.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17c4454380c217ef1cdd.jpg";

/***/ }),

/***/ "./src/img/brownie.jpg":
/*!*****************************!*\
  !*** ./src/img/brownie.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e5c4c5c7d42562ea3ea.jpg";

/***/ }),

/***/ "./src/img/cafe americano.jpg":
/*!************************************!*\
  !*** ./src/img/cafe americano.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f85537d5fccf3f049a2.jpg";

/***/ }),

/***/ "./src/img/cookies.jpg":
/*!*****************************!*\
  !*** ./src/img/cookies.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2a8cebb808dbd7939df.jpg";

/***/ }),

/***/ "./src/img/epicBread.png":
/*!*******************************!*\
  !*** ./src/img/epicBread.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9399123735c29f496206.png";

/***/ }),

/***/ "./src/img/frogFlavor.jpg":
/*!********************************!*\
  !*** ./src/img/frogFlavor.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca1cfcb5fa84ab0b8016.jpg";

/***/ }),

/***/ "./src/img/greenDiner.png":
/*!********************************!*\
  !*** ./src/img/greenDiner.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef892b5c92fe7ad55e04.png";

/***/ }),

/***/ "./src/img/latte.jpg":
/*!***************************!*\
  !*** ./src/img/latte.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd55fcbf7dbdf345b13c.jpg";

/***/ }),

/***/ "./src/img/lightningFlavor.jpg":
/*!*************************************!*\
  !*** ./src/img/lightningFlavor.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c8f6cd5b637408944d62.jpg";

/***/ }),

/***/ "./src/img/loaf.jpg":
/*!**************************!*\
  !*** ./src/img/loaf.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1be08f578e59454d449.jpg";

/***/ }),

/***/ "./src/img/rainbowFlavor2.jpg":
/*!************************************!*\
  !*** ./src/img/rainbowFlavor2.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5983e06175e8754b95b8.jpg";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7eb198ef33afee4def06.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");





(() => {
    const content = document.querySelector('#content');
    (0,_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
            if (btn.target.dataset.pointer === 'home' || 'menu' || 0){
                tabSwitcher(btn.target.dataset.pointer);
            };
        })
    }
    events();
    tabSwitcher();

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UztBQUM1RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmlsMSBmcm9tICcuL2ltZy9FdmlsMS5qcGcnO1xuaW1wb3J0IGVwaWNCcmVhZCBmcm9tICcuL2ltZy9lcGljQnJlYWQucG5nJztcbmltcG9ydCBvdXRzaWRlIGZyb20gJy4vaW1nL2dyZWVuRGluZXIucG5nJztcbmltcG9ydCBpbnNpZGUgZnJvbSAnLi9pbWcvSW5kb29ycy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJvdXNlbCAoKXtcbiAgICBjb25zdCBzbGlkZXMgPSBbW0V2aWwxLCAnVHViIG9mIEV2aWwgSWNlIENyZWFtJ10sIFtlcGljQnJlYWQsICdGYWJ1bG91cyBCcmVhZCddLCBbb3V0c2lkZSwgJ091dGRvb3Igc2hvdCBvZiB0aGUgYnVpbGRpbmcnXSwgW2luc2lkZSwgJ0luZG9vciBzaG90IG9mIHRoZSBidWlsZGluZyddXTtcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcblxuICAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlJyk7XG4gICAgICAgIGhlcm8uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc2xpZGVbMF0pO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBzbGlkZVsxXSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnRuTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bk5leHQudGV4dENvbnRlbnQgPSAnPic7XG4gICAgYnRuTmV4dC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICBidG5OZXh0LmNsYXNzTGlzdC5hZGQoJ2J0bi1uZXh0Jyk7XG4gICAgaGVyby5hcHBlbmRDaGlsZChidG5OZXh0KTtcblxuICAgIGNvbnN0IGJ0blByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5QcmV2LnRleHRDb250ZW50ID0gJzwnO1xuICAgIGJ0blByZXYuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgYnRuUHJldi5jbGFzc0xpc3QuYWRkKCdidG4tcHJldicpO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoYnRuUHJldik7XG5cbiAgICBjb25zdCBzbGlkZXNTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xuXG4gICAgc2xpZGVzU2VsZWN0b3IuZm9yRWFjaCgoc2xkLCBpbmR4KSA9PiB7XG4gICAgICAgIHNsZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2luZHggKiAxMDB9JSlgO1xuICAgIH0pO1xuXG4gICAgbGV0IGN1clNsaWRlID0gMDtcbiAgICBsZXQgbWF4U2xpZGUgPSBzbGlkZXNTZWxlY3Rvci5sZW5ndGggLSAxO1xuXG4gICAgYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpe1xuICAgICAgICBpZihjdXJTbGlkZSA9PT0gbWF4U2xpZGUpe1xuICAgICAgICAgICAgY3VyU2xpZGUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjdXJTbGlkZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xpZGVzU2VsZWN0b3IuZm9yRWFjaCgoc2xkLCBpbmR4KSA9PntcbiAgICAgICAgICAgIHNsZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpbmR4IC0gY3VyU2xpZGUpfSUpYDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG5cbiAgICB9KTtcblxuICAgIGJ0blByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKXtcbiAgICAgICAgaWYoY3VyU2xpZGUgPT09IDApe1xuICAgICAgICAgICAgY3VyU2xpZGUgPSBtYXhTbGlkZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY3VyU2xpZGUtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWRlc1NlbGVjdG9yLmZvckVhY2goKHNsZCwgaW5keCkgPT57XG4gICAgICAgICAgICBzbGQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsxMDAgKiAoaW5keCAtIGN1clNsaWRlKX0lKWA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuXG4gICAgfSk7XG4gICAgXG59IiwiLy9jcmVhdGVzIGZvcm0gd2l0aCBmaXJzdCBuYW1lLCBsYXN0IG5hbWUsIGVtYWlsIGFkZHJlc3MsIHN1YmplY3QsIGFuZCBtZXNzYWdlIGZpZWxkc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCAoKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgICAgICBjb25zdCBmb3JtU3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1TdGFydC5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybVN0YXJ0KTtcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdOZWVkIHRvIGdldCBpbiB0b3VjaD8nO1xuICAgICAgICAgICAgZm9ybVN0YXJ0LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmFtZUZpZWxkLmNsYXNzTGlzdC5hZGQoJ25hbWVGaWVsZCcpO1xuICAgICAgICAgICAgZm9ybVN0YXJ0LmFwcGVuZENoaWxkKG5hbWVGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lICc7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5hbWVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcbiAgICAgICAgICAgICAgICBuYW1lV3JhcHBlci5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKG5hbWVXcmFwcGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0ZpcnN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGZOYW1lSW5wdXQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMYXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVXcmFwcGVyLmFwcGVuZENoaWxkKGxOYW1lSW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBlbWFpbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVtYWlsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgICAgICAgICBmb3JtU3RhcnQuYXBwZW5kQ2hpbGQoZW1haWxXcmFwcGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwgJztcbiAgICAgICAgICAgICAgICBlbWFpbFdyYXBwZXIuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZXhhbXBsZUBzYW1wbGUuY29tJyk7XG4gICAgICAgICAgICAgICAgZW1haWxXcmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBzdWJqZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3ViamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICAgICAgICAgZm9ybVN0YXJ0LmFwcGVuZENoaWxkKHN1YmplY3RXcmFwcGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YmplY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgc3ViamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1N1YmplY3QgJztcbiAgICAgICAgICAgICAgICBzdWJqZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzdWJqZWN0TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBzdWJqZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiUkU6IHN1c3BpY2lvdXMgZ2xvd1wiKTtcbiAgICAgICAgICAgICAgICBzdWJqZWN0V3JhcHBlci5hcHBlbmRDaGlsZChzdWJqZWN0SW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWVzc2FnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgICAgICAgICAgZm9ybVN0YXJ0LmFwcGVuZENoaWxkKG1lc3NhZ2VXcmFwcGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gJ01lc3NhZ2UgJztcbiAgICAgICAgICAgICAgICBtZXNzYWdlV3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzQnKTtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiSSBqVXNUIGdPdCBSYURpQXRJb04gcE9pU29OaU5nLiBUaGF0J3Mgd2hhdCB5b3Ugc291bmQgbGlrZS5cIik7XG4gICAgICAgICAgICAgICAgbWVzc2FnZVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0KTtcblxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU1VCTUlUJztcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtU3RhcnQuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbn0iLCJpbXBvcnQgY2Fyb3VzZWwgZnJvbSBcIi4vY2Fyb3VzZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSAoKXtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVybyk7XG4gICAgY2Fyb3VzZWwoKTtcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0LnRleHRDb250ZW50ID0gXCJXZSBhcmUgYW4gZW50aXJlbHkgZmljdGl0aW91cywgYnV0IGRlbGljaW91cywgaWNlIGNyZWFtIHNob3AgZGV2b3RlZCBlbnRpcmVseSB0byBmYW50YXN0aWNhbCBmbGF2b3JzIGFuZCBzdXBlciBjaGlsbCBhdG1vc3BoZXJlLiBPdXIgZm91bmRlcnMgd2VyZSBjcmVhdGVkIHdoZW4gYSBsb25lbHkgaWNlIGNyZWFtIG1ha2VyIHdhcyBpbiBhbiBhY2NpZGVudCB3aXRoIHJhZGlvYWN0aXZlIHdhc3RlLCBiZWNvbWluZyB0aGUgd29ybGQncyBmaXJzdCBzZW50aWVudCwgYnVzaW5lc3Mtb3duaW5nIGFwcGxpYW5jZS4gRG9uJ3Qgd29ycnksIHdlIGFyZSByZWd1bGFybHkgdGVzdGVkIGZvciB0aGUgcHJlc2VuY2Ugb2YgYW55IHN0cmF5IGlzb3RvcGVzIGFuZCBhcmUgd2l0aGluIHRoZSBVU0RBIGd1aWRlbGluZXMgZm9yIGFscGhhLCBiZXRhLCBhbmQgZ2FtbWEgcmFkaWF0aW9uIGluIGFsbCBvZiBvdXIgZm9vZHN0dWZmcyFcIjtcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0KTtcbn0iLCJpbXBvcnQgbGlnaHRuaW5nIGZyb20gJy4vaW1nL2xpZ2h0bmluZ0ZsYXZvci5qcGcnO1xuaW1wb3J0IGZyb2cgZnJvbSAnLi9pbWcvZnJvZ0ZsYXZvci5qcGcnO1xuaW1wb3J0IGV2aWwgZnJvbSAnLi9pbWcvRXZpbDIuanBnJztcbmltcG9ydCByYWluYm93IGZyb20gJy4vaW1nL3JhaW5ib3dGbGF2b3IyLmpwZyc7XG5pbXBvcnQgYW1lcmljYW5vIGZyb20gJy4vaW1nL2NhZmUgYW1lcmljYW5vLmpwZyc7XG5pbXBvcnQgbGF0dGUgZnJvbSAnLi9pbWcvbGF0dGUuanBnJztcbmltcG9ydCBhZmZvZ2F0byBmcm9tICcuL2ltZy9hZmZvZ2F0by5qcGcnO1xuaW1wb3J0IGJyb3duaWUgZnJvbSAnLi9pbWcvYnJvd25pZS5qcGcnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnLi9pbWcvY29va2llcy5qcGcnO1xuaW1wb3J0IGxvYWYgZnJvbSAnLi9pbWcvbG9hZi5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51ICgpe1xuICAgIC8vaG9sZHMgZGF0YSBieSB3aGljaCB0aGUgbWVudSB0YWIgaXMgcG9wdWxhdGVkXG4gICAgY29uc3QgbWVudSA9IFtcbiAgICAgICAgWydGbGF2b3JzJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogbGlnaHRuaW5nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdMaWdodG5pbmcnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnJDAuMDYva3doJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSd2ZSByZWFsbHkgY2FwdHVyZWQgbGlnaHRuaW5nIGluIGEgYm90dGxlIHdpdGggdGhpcyBvbmUhIERvbid0IGFzayBob3cgd2Ugd2VyZSBhYmxlIHRvIGNyZWFtIHRoZSBwb3dlciBvZiBaZXVzIHRvIGNyZWF0ZSB0aGlzIHNtb3RoIGFuZCB0YW5neSBmcm96ZW4gdHJlYXQuXCIsXG4gICAgICAgICAgICAgICAgZGlzY2xhaW1lcjogXCJwdXJjaGFzZSBvZiB0aGlzIGZsYXZvciB3YWl2ZXMgQ0JDIG9mIGFsbCByZXNwb25zaWJpbGl0eSBmb3IgZWxlY3RyaWNpdHkgcmVsYXRlZCBpbmp1cnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogZnJvZyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRnJvZyBvbiBhIENvbmUnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnT25lIFwidHJ1ZSBsb3ZlcyBraXNzXCInLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTGltaXRlZCB0aW1lIG9ubHkhIE9uZSBvdXQgb2YgZXZlcnkgNTAwIG9mIHRoZXNlIGNvbmVzIHdlIHNlbGwgd2lsbCBhY3R1YWxseSBiZSBhIGN1cnNlZCBtZW1iZXIgb2Ygc29tZSBmYW50YXN0aWNhbCBhcmlzdG9jcmFjeS4nLFxuICAgICAgICAgICAgICAgIGRpc2NsYWltZXI6IFwiSGFwcGlseSBldmVyIGFmdGVyIG5vdCBndWFyYW50ZWVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGV2aWwsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0V2aWwgT3ZlcmxvcmQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnJDYuNjYnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT25lIHRhc3RlIG9mIHRoaXMgZGVsaWdodGZ1bCBmbGF2b3Igd2lsbCBiZSBlbm91Z2ggdG8gaW5zcGlyZSBkZWx1c2lvbnMgb2Ygd29ybGQgZG9taW5hdGlvbiBpbiBldmVuIHRoZSBtb3N0IHBvbGl0ZSBvZiBjdXN0b21lcnMuIEFsbCB0aGUgYWRyZW5hbGluZSBvZiBzZWVpbmcgeW91ciBlbmVtaWVzIGRyaXZlbiBiZWZvcmUgeW91IHdpdGhvdXQgdGhlIGxlZ2FsIGltcGxpY2F0aW9ucyBvZiBBQ1RVQUwgV0FSQ1JJTUVTLicsXG4gICAgICAgICAgICAgICAgZGlzY2xhaW1lcjogXCJBY3R1YWwgd2FyY3JpbWVzIGNvbW1pdGVkIGFmdGVyIGxlYXZpbmcgdGhlIHN0b3JlIGFyZSBub3QgdGhlIHJlc3BvbnNpYmxpdHkgb2YgQ0JDXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJhaW5ib3csXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JhaW5ib3cgU2hlcmJlcnQnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnJDEuMjMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIG9ubHkgZnJvemVuIGRlc2VydCBtYWRlIHdpdGggdGhlIGVudGlyZSB2aXNpYmxlIHNwZWN0cnVtIG9mIGxpZ2h0LicsXG4gICAgICAgICAgICAgICAgZGlzY2xhaW1lcjogXCJOb3QgcmVjb21tZW5kZWQgZm9yIHRob3NlIHdpdGggVVYgc2Vuc2l0aXZpdHlcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuXG4gICAgWydEcmlua3MnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiBhbWVyaWNhbm8sXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NhZmUgQW1lcmljYW5vJyxcbiAgICAgICAgICAgICAgICBwcmljZTogJyQxLjk5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFc3ByZXNzbyBhbmQgaG90IHdhdGVyLiBIdW1hbnMgc2F5IGl0J3MgcHJldHR5IGdvb2QuXCIsXG4gICAgICAgICAgICAgICAgZGlzY2xhaW1lcjogXCJHYW1tYSByYWRpYXRpb24gZnJlZSFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZTogbGF0dGUsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xhdHRlJyxcbiAgICAgICAgICAgICAgICBwcmljZTogJyQyLjUwJyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VzcHJlc3NvIGFuZCBzdGVhbWVkIG1pbGsuJyxcbiAgICAgICAgICAgICAgICBkaXNjbGFpbWVyOiBcIkFscGhhIHJhZGlhdGlvbiAnZnJlZScuXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGFmZm9nYXRvLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdBZmZvZ2F0bycsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICckNC4wMCcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdJY2UgY3JlYW0gZmxhdm9yIG9mIGNob2ljZSBzd2ltbWluZyBpbiBhIGRvdWJsZSBzaG90IG9mIGVzcHJlc3NvLicsXG4gICAgICAgICAgICAgICAgZGlzY2xhaW1lcjogJ1wiUmFkaWF0aW9uXCIgXCJGcmVlXCInXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgWydCYWtlcnknLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiBicm93bmllLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdCcm93bmllJyxcbiAgICAgICAgICAgICAgICBwcmljZTogJyQxLjI5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nob2NvbGF0ZSBjaGlwIGZ1ZGdlIGJyb3duaWUgd2l0aCBjaG9wcGVkIHdhbG51dHMnLFxuICAgICAgICAgICAgICAgIGRpc2NsYWltZXI6IFwiQ29udGFpbnMgbnV0c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltYWdlOiBjb29raWVzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb29raWVzJyxcbiAgICAgICAgICAgICAgICBwcmljZTogJyQwLjk5JyxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Jha2VkIGZyZXNoIGV2ZXJ5IG1vcm5pbmcsIGFzayB5b3VyIGNhc2hpZXIgZm9yIHRoZSBmbGF2b3Igb2YgdGhlIGRheS4nLFxuICAgICAgICAgICAgICAgIGRpc2NsYWltZXI6IFwiTWFkZSBvbiBlcXVpcG1lbnQgdGhhdCBhbHNvIHByb2Nlc3NlcyBkZXBsZXRlZCB1cmFuaXVtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGxvYWYsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xvYWYnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnJDIuMDAnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGljdHVyZSB5b3VyIGZhdm9yaXRlIGZvb2QsIG5vdyBwaWN0dXJlIGl0IGluIGEgZnJlc2hseSBiYWtlZCBjeWxpbmRyaWNhbCBzaGFwZS4nLFxuICAgICAgICAgICAgICAgIGRpc2NsYWltZXI6IFwiQ29udGFpbnMgaGFybWZ1bCBkb3NlcyBvZiBldmVyeSBhbGxlcmdlbiBrbm93biB0byBtYW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgXTtcblxuICAgIC8vYWRkcyBjb250YWluZXIgZm9yIG1lbnUgY29udGVudCB0aGF0IGNhbiB0aGVuIGhhdmUgdmlzaWJpbGl0eSB0b2dnbGVkIGJ5IGV2ZW50IGxpc3RlbmVyIGluIGluZGV4IGpzIGRvY3VtZW50XG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgICAvL2l0ZXJhdGVzIHRocm91Z2ggbWVudSBvYmplY3QsIGJyb2tlbiBkb3duIGJ5IGNhdGVnb3J5IGFuZCBhZGRzIGhlYWRlciB0aGVuIGNyZWF0ZXMgSFRNTCBmb3IgaW5kaXZpZHVhbCBtZW51IGl0ZW1zXG4gICAgZnVuY3Rpb24gbWVudUl0ZXJhdG9yICgpe1xuICAgICAgICBtZW51LmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjYXRlZ29yeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmluZGV4T2YoaXRlbSkgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBjYXRlZ29yeVswXTtcbiAgICAgICAgICAgICAgICAgICAgbWVudVRhYi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBpdGVtQnVpbGRlcihpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9jYWxsZWQgZm9yIGVhY2ggbWVudSBpdGVtIHRoYXQgbmVlZHMgdG8gYmUgaW5zdGFudGlhdGVkLCBkaXNjbGFpbWVyIG9wdGlvbmFsXG4gICAgZnVuY3Rpb24gaXRlbUJ1aWxkZXIoaXRlbSl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtZW51VGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZy5zcmMgPSBpdGVtLmltYWdlXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7aXRlbS5uYW1lfSAtICR7aXRlbS5wcmljZX1gO1xuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgICBjb25zdCBkaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNjLnRleHRDb250ZW50ID0gaXRlbS5kaXNjbGFpbWVyO1xuICAgICAgICBkaXNjLmNsYXNzTGlzdC5hZGQoJ2Rpc2NsYWltZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2MpO1xuXG4gICAgfVxuICAgIFxuICAgIG1lbnVJdGVyYXRvcigpO1xufSIsImltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5zdmcnO1xuLy9DcmVhdGVzIG5hdmJhciBidXR0b25zIGFuZCBsb2dvIG9uIG1haW4gcGFnZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2ICgpe1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ287XG4gICAgbG9nb0ltZy5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuXG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCggKGUpID0+e1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGUuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIGUuc2xpY2UoMSk7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcG9pbnRlcicsIGUpO1xuICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBuYXYgZnJvbSBcIi4vbmF2LmpzXCI7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbmF2KCk7XG4gICAgaG9tZSgpO1xuICAgIG1lbnUoKTtcbiAgICBjb250YWN0KCk7XG5cbiAgICBmdW5jdGlvbiB0YWJTd2l0Y2hlcih0YWIpe1xuICAgICAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gICAgICAgIGxldCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICAgICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpO1xuXG4gICAgICAgIGhvbWVUYWIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbWVudVRhYi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb250YWN0VGFiLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgKHRhYiA9PT0gJ21lbnUnKSA/IG1lbnVUYWIuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICAgICAgICA6ICh0YWIgPT09ICdjb250YWN0JykgPyBjb250YWN0VGFiLnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgICAgICAgOiBob21lVGFiLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgIH1cbiAgICBmdW5jdGlvbiBldmVudHMoKXtcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYgdWwnKTtcbiAgICAgICAgYnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChidG4pID0+IHtcbiAgICAgICAgICAgIGlmIChidG4udGFyZ2V0LmRhdGFzZXQucG9pbnRlciA9PT0gJ2hvbWUnIHx8ICdtZW51JyB8fCAnY29udGFjdCcpe1xuICAgICAgICAgICAgICAgIHRhYlN3aXRjaGVyKGJ0bi50YXJnZXQuZGF0YXNldC5wb2ludGVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGV2ZW50cygpO1xuICAgIHRhYlN3aXRjaGVyKCk7XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9