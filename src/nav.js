import logo from './logo.svg';
//Creates navbar buttons and logo on main page
export default function nav (){
    const buttons = ['home', 'menu', 'contact'];
    const header = document.createElement('div');
    header.classList.add('nav');
    content.appendChild(header);

    const logoImg = document.createElement('img');
    logoImg.src = logo;
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