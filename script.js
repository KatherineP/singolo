const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');
const PORTFOLIO_IMAGES = document.getElementById('portfolio-images');
const PORTFOLIO_TAGS = document.getElementById('portfolio-tags');
let portfolioImages = PORTFOLIO_IMAGES.querySelectorAll('img');
let portfolioImagesPosition = PORTFOLIO_IMAGES.querySelectorAll('div');

//HEADER MENU
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


//PORTFOLIO
PORTFOLIO_IMAGES.addEventListener('click', (event) => {
    portfolioImages.forEach(el => el.classList.remove('active-portfolio-image'));
    event.target.classList.add('active-portfolio-image');
});

PORTFOLIO_TAGS.addEventListener('click', (event) => {
    PORTFOLIO_TAGS.querySelectorAll('span').forEach(el => el.classList.remove('tag_selected'));
    event.target.classList.add('tag_selected');
    let selectedTagText = event.target.innerText;
   
    if(selectedTagText === 'Web Design'){
        portfolioImagesPosition.forEach(el => el.classList.remove('image-hidden'));
    for(let i = 0; i < portfolioImagesPosition.length; i++){
        if((portfolioImagesPosition[i].classList.contains('web-design')) === false){
            portfolioImagesPosition[i].classList.add('image-hidden');
        }
        }
    }else if(selectedTagText === 'Graphic Design'){
        portfolioImagesPosition.forEach(el => el.classList.remove('image-hidden'));
        for(let i = 0; i < portfolioImagesPosition.length; i++){
        if((portfolioImagesPosition[i].classList.contains('graphic-design')) === false){
            portfolioImagesPosition[i].classList.add('image-hidden');
        }
        }
    }else if(selectedTagText === 'Artwork'){
        portfolioImagesPosition.forEach(el => el.classList.remove('image-hidden'));
        for(let i = 0; i < portfolioImagesPosition.length; i++){
        if((portfolioImagesPosition[i].classList.contains('artwork')) === false){
            portfolioImagesPosition[i].classList.add('image-hidden');
        }
        }
    }else if(selectedTagText === 'All'){
        portfolioImagesPosition.forEach(el => el.classList.remove('image-hidden'));
    }



});









//CONTACT FORM
FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    //return false;
});

BUTTON.addEventListener('click', (event) => {
    if (document.getElementById('name').checkValidity() && document.getElementById('email').checkValidity()) {
        //event.preventDefault();
    let subject = document.getElementById('subject').value.toString();
    let describe = document.getElementById('describe').value.toString();


        if(subject.length < 1){
            document.getElementById('subject-result').innerText = 'Без темы';
        }else {
            document.getElementById('subject-result').innerText = 'Тема: ' +  subject;
        }

    if(describe.length < 1){
        document.getElementById('describe-result').innerText = 'Без описания';
    }else {
        document.getElementById('describe-result').innerText = 'Описание: ' +  describe;
    }

    document.getElementById('message-block').classList.remove('hidden');
    }
    
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('describe-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
});