const burgerBtn = document.getElementById('burger');

burgerBtn.addEventListener('click', function() {
  document.querySelector('header').classList.toggle('open');
})

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemoffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemoffset - animItemPoint) && pageYOffset < (animItemoffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
setTimeout(() => {
  animOnScroll();
}, 300);

const langBtns = document.querySelectorAll('.lang-menu-btn');
const allLang = ['en', 'ru'];
const enBtn = document.querySelector('.enBtn');
const ruBtn = document.querySelector('.ruBtn');

function setLanguageIndicator(lang) {
  if (lang === 'en') {
    enBtn.classList.add('menu-list__link_selected');
    ruBtn.classList.remove('menu-list__link_selected');
  } else {
    ruBtn.classList.add('menu-list__link_selected');
    enBtn.classList.remove('menu-list__link_selected');
  }
}

langBtns.forEach((item) => {
  item.addEventListener('click', changeUrlLanguage);
});

function changeUrlLanguage(evt) {
  let lang = evt.target.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
};

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  setLanguageIndicator(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  for (let key in langArr) {
    let elements = document.querySelectorAll('.lng-' + key);
    elements.forEach(elem => {
      if (elem) {
        elem.innerHTML = langArr[key][hash];
      }
    });
  }
}

changeLanguage();

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}