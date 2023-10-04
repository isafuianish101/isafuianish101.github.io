//Dynamic Background
const backgroundColor = [ "#36454F", "#023020", "#301934", "#343434", "#1B1212", "#28282B", "#353935" ]

//Navigation
const sectionHome = document.querySelector("#section-home");
const sectionAbout = document.querySelector("#section-about");
const sectionContact = document.querySelector("#section-contact");
const tabContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');
document.querySelector("#gotoAboutMe").addEventListener("click", (e) => {
  sectionHome.classList.replace("active", "deactive");
  sectionAbout.classList.replace("deactive", "active");
  sectionContact.classList.replace("active", "deactive");
});
document.querySelector("#gotoContactMe").addEventListener("click", (e) => {
  sectionHome.classList.replace("active", "deactive");
  sectionAbout.classList.replace("active", "deactive");
  sectionContact.classList.replace("deactive", "active");
});
document.querySelector("#gotoHomefromAbout").addEventListener("click", (e) => {
  sectionHome.classList.replace("deactive", "active");
  sectionAbout.classList.replace("active", "deactive");
  sectionContact.classList.replace("active", "deactive");
});
document.querySelector("#gotoHomefromContact").addEventListener("click", (e) => {
  sectionHome.classList.replace("deactive", "active");
  sectionAbout.classList.replace("active", "deactive");
  sectionContact.classList.replace("active", "deactive");
});
tabContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
    tabContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
})
document.querySelectorAll('#experience .btn-pill').forEach(btn => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.previousElementSibling.classList.toggle("active");
    if (btn.classList.contains('down')) {
      btn.classList.replace('down', 'up');
    } else {
      btn.classList.replace('up', 'down');
    }
  });
})

//Special Dates
var mySpecialDates = [
  {mmdd: 'Jan01', show: ['🎉','⚡️','✨', '💥'], animation: 'glow', title: 'English New Year', type: ''},
  {mmdd: 'Jan10', show: ['नमस्ते', 'أهلا','এইযে','你好','Hej','Salut','Hallo','Γεια','Ciao','こんにちは','ನಮಸ್ಕಾರ','안녕하십니까','Salve','ഹലോ','नमस्कार','ନମସ୍କାର','ਸਤ ਸ੍ਰੀ ਅਕਾਲ','வணக்கம்'], animation: 'upAndDisappere', title: 'World Laugusthter Day', type: ''},
  {mmdd: 'Jan12', show:['🏃','🏃‍♀️','🧍','🧍‍♀️','👫','🧎‍♂️','🧎‍♀️','🏄🏻‍♀️','🏄🏻‍♂️','🏌🏻','⛹🏻‍♀️','🏋🏻‍♀️','🤹🏻','🤸🏻‍♂️'], animation:'blink', title: 'National Youth Day', type:''},
  {mmdd: 'Jan24', show: ['👸','👼🏻','👧🏻'], animation: 'upAndDisappere', title: 'National Girl Child Day', type: ''},
  {mmdd: 'Jan26', show: ['❤️','💖','💝','💛','💘','💗'], animation: 'upAndDisappere', title: 'Married & Adopted by Neha', type: ''},
  {mmdd: 'Jan28', show: ['🖐🏻','🤐','⚔️','🔒','🛡️'], animation: 'upAndDisappere', title: 'Data protection day', type: ''},
  {mmdd: 'Feb04', show:['🎗️'], animation:'blink', title: 'World Cancer Day', type:''},
  {mmdd: 'Feb11', show:['😰','😷','🤕','🤒','🤮','🤢','🥴','😵'], animation:'blink', title: 'World Day Of The Sick', type:''},
  {mmdd: 'Feb14', show: ['❤️','💖','💝','💛','💘','💗'], animation: 'upAndDisappere', title: 'Saint Valentine’s Day', type: ''},
  {mmdd: 'Feb28', show: ['💡','🔎', '📐','📏','📝','📜','🧫','🧬','💊','🕳','🦠'], animation: 'upAndDisappere', title: 'National Science Day', type: ''},
  {mmdd: 'Mar03', show: ['🦚','🐶','🐱','🦁','🐵','🐍','🐪','🐢','🐇','🐘','🦉'], animation: 'swing', title: 'World Wildlife Day', type: ''},
  {mmdd: 'Mar08', show: ['👩','👧','👮‍♀️','🧕','👩‍🌾','💂‍♀️','👷‍♀️','🕵️‍♀️','👩‍⚕️','👩‍🏫','👩‍🔧','👩‍⚖️','👩‍🚀'], animation: 'swing', title: 'International Women’s Day', type: ''},
  {mmdd: 'Mar22', show: ['💧'], animation: 'downAndDisappere', title: 'World Water Day', type: ''},
  {mmdd: 'Apr07', show:['💪','🦷','👁','🩸','🧠','👂','🦵','👁','👅','🚭'], animation:'blink', title: 'World Health Day', type:''},
  {mmdd: 'Apr22', show: ['🌏','🌍','🌎'], animation: 'swing', title: 'World Earth Day', type: ''},
  {mmdd: 'May01', show:['👷','👮‍♀️','👮','👷‍♀️','💂‍♀️','💂','👩‍🌾','👨‍⚕️','👩‍🏭','👩‍🏫','👩‍⚖️'], animation:'blink', title: 'International Labour Day', type:''},
  {mmdd: 'May12', show:['👩‍⚕️','🧓','👩‍💼','👩‍🔬'], animation:'upAndDisappere', title: 'International Nurses Day', type:''},
  {mmdd: 'May17', show:['📡','📞','☎️','🛰️'], animation:'blink', title: 'World Telecommunication Day', type:''},
  {mmdd: 'May31', show: ['🚭'], animation: 'swing', title: 'Anti-Tobacco Day', type: ''},
  {mmdd: 'Jun05', show: ['🌏','🌍','🌎'], animation: 'swing', title: 'World Environment Day', type: ''},
  {mmdd: 'Jun08', show:['🌊','🐚','🚢','🏊','🐬','🏄'], animation:'blink', title: 'World Ocean Day', type:''},
  {mmdd: 'Jun21', show:['👨‍👧','👨‍👦','👨','👴'], animation:'blink', title: 'Father’s Day', type:''},
  {mmdd: 'Jun27', show: ['🎂','🍰','🍩','🎉','🎊'], animation: 'upAndDisappere', title: 'My Birth Day', type: ''},
  {mmdd: 'Jul01', show:['👨‍⚕️','👨🏼‍⚕️','👨🏽‍⚕️','👨🏾‍⚕️','👨🏿‍⚕️'], animation:'blink', title: 'National Doctor’s Day', type:''},
  {mmdd: 'Jul04', show:['🇺🇸'], animation:'swing', title: 'Indepedence Day of United States', type:''},
  {mmdd: 'Jul29', show:['🐯','🐅','🐆'], animation:'upAndDisappere', title: 'International Tiger Day', type:''},
  {mmdd: 'Aug02', show:['💛','👯‍♀️','👬','💃','🕺','🙋‍♀️','🙋‍♂️','✌🏻','🤟🏻','🤙🏻','🖐🏻','👍🏻'], animation:'swing', title: 'International Friendship Day', type:''},
  {mmdd: 'Aug15', show: ['flag-india'], animation: 'swing', title: 'Indepedence Day of India', type: 'custom'},
  {mmdd: 'Aug29', show:['🏃','🏃‍♀️','🏄🏻‍♀️','🏄🏻‍♂️','🏌🏻','⛹🏻‍♀️','🏋🏻‍♀️','🤹🏻','🤸🏻‍♂️','🏋🏻','🚴🏻‍♀️','🏊🏻‍♀️','🚣🏻','🤾🏻‍♂️',''], animation:'blink', title: 'National Sports Day', type:''},
  {mmdd: 'Sep05', show:['👨‍🏫','👨🏽‍🏫'], animation:'upAndDisappere', title: 'Teachers’ Day', type:''},
  {mmdd: 'Sep15', show:['💡','🔎', '📐','📏','📝','📜','🧫','🧬','💊','🕳','🦠'], animation:'upAndDisappere', title: 'Engineers’ Day In India', type:''},
  {mmdd: 'Oct01', show: ['❤️','💖','💝','💛','💘','💗'], animation: 'upAndDisappere', title: 'Engaged with Neha', type: ''},
  {mmdd: 'Oct05', show:['👨‍🏫','👨🏽‍🏫'], animation:'blink', title: 'World Teachers’ Day', type:''},
  {mmdd: 'Oct08', show:['✈️','🛩️','👩‍✈️','👨‍✈️'], animation:'swing', title: 'Indian Air Force Day', type:''},
  {mmdd: 'Oct09', show:['🏤','✉️','📫','📩','📪','📮','📃'], animation:'upAndDisappere', title: 'World Post Office Day', type:''},
  {mmdd: 'Oct11', show:['👸','👼🏻','👧🏻'], animation:'upAndDisappere', title: 'International Girl Child Day', type:''},
  {mmdd: 'Dec01', show:['🎗️'], animation:'blink', title: 'World Aids Day', type:''},
  {mmdd: 'Dec25', show: ['🎄','🎁','🎉','🎊','🎅🏻'], animation: 'upAndDisappere', title: 'Christmas Day', type: ''},
  {mmdd: 'Feb31', show: ['👩‍❤️‍👨','💖','👸🏻','🤴🏻'], animation: 'upAndDisappere', title: 'My Marriage Aniversary', type: ''},
]
const urlSearchParams = new URLSearchParams(window.location.search);
const override = urlSearchParams.get('specialday');
var specialDate = mySpecialDates.find((item) => {
  if (override) {
    return item.mmdd === override
  } else {
    return (item.mmdd === Date().split(' ')[1] + Date().split(' ')[2])
  }
})
function showBgSpecial(specialDate) {
  if (window.innerWidth > 992) {
    var count = 40;
  } else if (window.innerWidth > 768) {
    var count = 30;
  } else if (window.innerWidth > 600) {
    var count = 20;
  } else {
    var count = 10;
  }
  var bgSpecial = document.querySelector('.bg .bg-special');
  for (let i = 0; i < count; i++) {
    var span = document.createElement('span');
    var x = Math.floor(Math.random() * window.innerWidth * 0.9 );
    var y = Math.floor(Math.random() * window.innerHeight * 0.9 );
    var size = Math.floor(Math.random() * 50 + 20);
    span.title = "Celebrating " + specialDate.title;
    span.style.cursor = 'help';
    span.style.left = x + 'px';
    span.style.top = y + 'px';
    span.style.animationName = specialDate.animation;
    span.style.animationDuration = `${1 + size / 10}s`;
    if (specialDate.type == 'custom') {
      var width = Math.floor(size * 1.5);
      var height = Math.floor(size / 2 * 1.5);
      var flag = document.createElement('div');
      flag.innerHTML = document.querySelector('.' + specialDate.show).innerHTML
      flag.classList.add(specialDate.show);
      span.style.width = width + 'px';
      span.style.height = height + 'px';
      span.appendChild(flag);
    } else {
      if (specialDate.show.length > 1) {
        span.innerText = specialDate.show[Math.floor(Math.random() * specialDate.show.length) ]
        // console.log(span.innerText)
      } else {
        span.innerText = specialDate.show[0];
      }
      span.style.fontSize = size + 'px';
    }
    bgSpecial.appendChild(span);
  }
}

//Sub title typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = typedTextSpan.getAttribute("data").split(',');
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 200);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, 2000);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, 100);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) {
      textArrayIndex=0;
    }
    setTimeout(type, 3000);
  }
}

// Add effect to DOM
document.addEventListener("DOMContentLoaded", () => { 
  
  // Dynamic backgound color
  document.body.style.backgroundColor = backgroundColor[Math.floor(Math.random() * backgroundColor.length) ];
  
  // Dynamic backgound elements
  if (specialDate) {
    showBgSpecial(specialDate);
  } else {
    bgBubbles = document.querySelector('.bg .bg-bubbles').style.display = "block";
  }

  // Initiate subheader typing
  setTimeout(type, 2000);

});
