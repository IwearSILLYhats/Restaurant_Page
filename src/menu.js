import lightning from './img/lightningFlavor.jpg';
import frog from './img/frogFlavor.jpg';
import evil from './img/Evil2.jpg';
import rainbow from './img/rainbowFlavor2.jpg';
import americano from './img/cafe americano.jpg';
import latte from './img/latte.jpg';
import affogato from './img/affogato.jpg';
import brownie from './img/brownie.jpg';
import cookies from './img/cookies.jpg';
import loaf from './img/loaf.jpg';

export default function menu (){
    //holds data by which the menu tab is populated
    const menu = [
        ['Flavors',
            {
                image: lightning,
                name: 'Lightning',
                price: '$0.06/kwh',
                description: "We've really captured lightning in a bottle with this one! Don't ask how we were able to cream the power of Zeus to create this smoth and tangy frozen treat.",
                disclaimer: "purchase of this flavor waives CBC of all responsibility for electricity related injury"
            },
            {
                image: frog,
                name: 'Frog on a Cone',
                price: 'One "true loves kiss"',
                description: 'Limited time only! One out of every 500 of these cones we sell will actually be a cursed member of some fantastical aristocracy.',
                disclaimer: "Happily ever after not guaranteed"
            },
            {
                image: evil,
                name: 'Evil Overlord',
                price: '$6.66',
                description: 'One taste of this delightful flavor will be enough to inspire delusions of world domination in even the most polite of customers. All the adrenaline of seeing your enemies driven before you without the legal implications of ACTUAL WARCRIMES.',
                disclaimer: "Actual warcrimes commited after leaving the store are not the responsiblity of CBC"
            },
            {
                image: rainbow,
                name: 'Rainbow Sherbert',
                price: '$1.23',
                description: 'The only frozen desert made with the entire visible spectrum of light.',
                disclaimer: "Not recommended for those with UV sensitivity"
            }
        ],

    ['Drinks',
            {
                image: americano,
                name: 'Cafe Americano',
                price: '$1.99',
                description: "Espresso and hot water. Humans say it's pretty good.",
                disclaimer: "Gamma radiation free!"
            },
            {
                image: latte,
                name: 'Latte',
                price: '$2.50',
                description: 'Espresso and steamed milk.',
                disclaimer: "Alpha radiation 'free'."
            },
            {
                image: affogato,
                name: 'Affogato',
                price: '$4.00',
                description: 'Ice cream flavor of choice swimming in a double shot of espresso.',
                disclaimer: '"Radiation" "Free"'
            }
        ],
    ['Bakery',
            {
                image: brownie,
                name: 'Brownie',
                price: '$1.29',
                description: 'Chocolate chip fudge brownie with chopped walnuts',
                disclaimer: "Contains nuts"
            },
            {
                image: cookies,
                name: 'Cookies',
                price: '$0.99',
                description: 'Baked fresh every morning, ask your cashier for the flavor of the day.',
                disclaimer: "Made on equipment that also processes depleted uranium"
            },
            {
                image: loaf,
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