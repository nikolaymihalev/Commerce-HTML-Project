const titleDescBG = 'Персонализирани подаръци за любителите на животните! В TailorPaws ние превръщаме снимки на вашите любими домашни любимци в уникални и персонализирани подаръци. Независимо дали търсите нещо специално за себе си или любим човек, нашите продукти носят усмивка и топлина.';
const titleDescEN = 'Personalized gifts for animal lovers! At TailorPaws, we turn photos of your beloved pets into unique and personalized gifts. Whether you\'re looking for something special for yourself or a loved one, our products bring a smile and warmth.'

const moreBtnBG = 'Виж повече';
const moreBtnEN = 'Show more';

const processTitleBG = 'Как работим?';
const processTitleEN = 'How do we work?';

const contactUsBG = 'Свържи се с нас';
const contactUsEN = 'Contact us'

const shareImgTitleBG = 'Изпратете ни снимка';
const shareImgTitleEN = 'Send us a photo';

const shareImgDescBG = 'Изберете любима снимка на вашия домашен любимец, която най-добре улавя неговата личност. Колкото по-ясна е снимката, толкова по-детайлен ще е крайният резултат!'
const shareImgDescEN = 'Choose a favorite photo of your pet that best captures their personality. The clearer the photo, the more detailed the final result will be!';

const craeteDesignTitleBG = 'Създаваме уникален дизайн';
const craeteDesignTitleEN = 'We create a unique design';

const createDesignDescBG = 'Нашият екип от художници трансформира вашата снимка в персонализирана анимация, която улавя духа и личността на вашия домашен любимец. Работим с внимание към детайла, за да направим дизайна жив и уникален.';
const createDesignDescEN = 'Our team of artists transforms your photo into a personalized animation that captures the spirit and personality of your pet. We work with attention to detail to make the design come alive and unique.';

const putDesignTitleBG = 'Поставяме дизайна върху продукт';
const putDesignTitleEN = 'We place the design on a product';

const putDesignDescBG = 'След като одобрите дизайна, ние го прилагаме върху избрания от вас продукт – чаша, тениска, пъзел и др. Нашите материали са с високо качество, за да гарантират издръжливост и наситеност на цветовете.';
const putDesignDescEN = 'Once you approve the design, we apply it to the product of your choice – a mug, t-shirt, puzzle, etc. Our materials are of high quality to ensure durability and color saturation.';

const takeProdTitleBG = 'Получавате своя персонализиран подарък';
const takeProdTitleEN = 'You receive your personalized gift';

const takeProdDescBG = 'Ще ви изпратим готовия продукт директно до дома ви. Готово е – имате уникален подарък, който ще ви напомня за вашия пухкав приятел всеки ден!';
const takeProdDescEN = 'We will send the finished product directly to your home. It\'s done - you have a unique gift that will remind you of your furry friend every day!';

const titleDescEl = document.getElementById('title-desc');
const moreBtn = document.getElementById('more-btn');
const processTitleEl = document.getElementById('process-title');
const contactUsBtn = document.getElementById('contact-us');
const shareImgTitleEl = document.getElementById('share-img-title');
const shareImgDescEl = document.getElementById('share-img-desc');
const createDesignTitleEl = document.getElementById('create-design-title');
const createDesignDescEl = document.getElementById('create-design-desc');
const putDesignTitleEl = document.getElementById('put-design-title');
const putDesignDescEl = document.getElementById('put-design-desc');
const takeProdTitleEl = document.getElementById('take-prod-title');
const takeProdDescEl = document.getElementById('take-prod-desc');

const bgBtn = document.getElementById('lang-btn-bg');
const enBtn = document.getElementById('lang-btn-en');
const langContainer = document.getElementById('lang-det');

bgBtn.addEventListener('click', () => {
    titleDescEl.innerText = titleDescBG;
    moreBtn.innerText = moreBtnBG;
    processTitleEl.innerText = processTitleBG;
    contactUsBtn.innerText = contactUsBG;
    shareImgTitleEl.innerText = shareImgTitleBG;
    shareImgDescEl.innerText = shareImgDescBG;
    createDesignTitleEl.innerText = craeteDesignTitleBG;
    createDesignDescEl.innerText = createDesignDescBG;
    putDesignTitleEl.innerText = putDesignTitleBG;
    putDesignDescEl.innerText = putDesignDescBG;
    takeProdTitleEl.innerText = takeProdTitleBG;
    takeProdDescEl.innerText = takeProdDescBG;

    langContainer.open = false;  
})

enBtn.addEventListener('click', () => {
    titleDescEl.innerText = titleDescEN;
    moreBtn.innerText = moreBtnEN;
    processTitleEl.innerText = processTitleEN;
    contactUsBtn.innerText = contactUsEN;
    shareImgTitleEl.innerText = shareImgTitleEN;
    shareImgDescEl.innerText = shareImgDescEN;
    createDesignTitleEl.innerText = craeteDesignTitleEN;
    createDesignDescEl.innerText = createDesignDescEN;
    putDesignTitleEl.innerText = putDesignTitleEN;
    putDesignDescEl.innerText = putDesignDescEN;
    takeProdTitleEl.innerText = takeProdTitleEN;
    takeProdDescEl.innerText = takeProdDescEN;

    langContainer.open = false;            
})