import carousel from "./carousel";

export default function home (){
    const home = document.createElement('div');
        home.classList.add('home');
        content.appendChild(home);

    const hero = document.createElement('div');
    hero.classList.add('hero');
    home.appendChild(hero);
    carousel();

    const about = document.createElement('p');
    about.textContent = "We are an entirely fictitious, but delicious, ice cream shop devoted entirely to fantastical flavors and super chill atmosphere. Our founders were created when a lonely ice cream maker was in an accident with radioactive waste, becoming the world's first sentient, business-owning appliance. Don't worry, we are regularly tested for the presence of any stray isotopes and are within the USDA guidelines for alpha, beta, and gamma radiation in all of our foodstuffs!";
    home.appendChild(about);
}