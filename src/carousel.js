import Evil1 from './img/Evil1.jpg';
import epicBread from './img/epicBread.png';
import outside from './img/greenDiner.png';
import inside from './img/Indoors.png';

export default function carousel (){
    const slides = [[Evil1, 'Tub of Evil Ice Cream'], [epicBread, 'Fabulous Bread'], [outside, 'Outdoor shot of the building'], [inside, 'Indoor shot of the building']];
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