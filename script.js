const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const FORM = document.getElementById('form');
const PORTFOLIO_IMAGES = document.getElementById('portfolio-images');
const PORTFOLIO_TAGS = document.getElementById('portfolio-tags');
const VERTICAL_PHONE = document.getElementById('verticalImage');
const VERTICAL_PHONE_BLACK = document.getElementById('iphone-vertical-black');
const HORIZONTAL_PHONE = document.getElementById('horizontalImage');
let slider = document.getElementById('home');
let portfolioImages = PORTFOLIO_IMAGES.querySelectorAll('img');
let portfolioImagesPosition = PORTFOLIO_IMAGES.querySelectorAll('div');


//SLIDER

let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active-item', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
        this.classList.add('active-item');
        
        
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
    }
    if (slider.classList.contains('slider2')) {
        slider.classList.remove('slider2');
    }
    else { slider.classList.add('slider2'); }
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
    }

    if (slider.classList.contains('slider2')) {
        slider.classList.remove('slider2');
    }
    else { slider.classList.add('slider2'); }
});
let hiddenValue = VERTICAL_PHONE_BLACK.hidden;
    console.log(hiddenValue);

//PHONES
VERTICAL_PHONE.addEventListener('click', (event) => {
    let hiddenValue = VERTICAL_PHONE_BLACK.hidden;

    if(hiddenValue === true && event.target.contains('verticalImage') === true){

        VERTICAL_PHONE_BLACK.setAttribute('hidden', 'true');
    } else if (hiddenValue === false && event.target.contains('verticalImage') === true){
        event.target.setAttribute('hidden', 'false');
    }
});

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