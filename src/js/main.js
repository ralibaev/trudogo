!function(e,n,A){function o(e,n){return typeof e===n}function t(){var e,n,A,t,a,i,l;for(var f in r)if(r.hasOwnProperty(f)){if(e=[],n=r[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],l=i.split("."),1===l.length?Modernizr[l[0]]=t:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=t),s.push((t?"":"no-")+l.join("-"))}}function a(e){var n=u.className,A=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),c?u.className.baseVal=n:u.className=n)}function i(e,n){if("object"==typeof e)for(var A in e)f(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),t=Modernizr[o[0]];if(2==o.length&&(t=t[o[1]]),"undefined"!=typeof t)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){r.push({name:e,fn:n,options:A})},addAsyncTest:function(e){r.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var f,u=n.documentElement,c="svg"===u.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;f=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),l._l={},l.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},l._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){l.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),t(),a(s),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);
Modernizr.on('webp', function(result) {
  if (result) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

// Меню
let navToggle = document.querySelector('.main-nav__toggle');
if (navToggle) {
  let mainMenu = document.querySelector('.main-nav__list');
  navToggle.addEventListener('click', function() {
    if (mainMenu.classList.contains('main-nav__list--showed')) {
      navToggle.classList.remove('main-nav__toggle--opened');
      mainMenu.classList.remove('main-nav__list--showed');
      setTimeout(function() {mainMenu.classList.remove('main-nav__list--opened');}, 350);
    } else {
      navToggle.classList.add('main-nav__toggle--opened');
      mainMenu.classList.add('main-nav__list--opened');
      setTimeout(function() {mainMenu.classList.add('main-nav__list--showed');}, 50);
    };
  });
}

// Слайдер в преимуществах
let advSlides = document.querySelectorAll('.advantages__slide-item');
if (advSlides.length) {
  let advCount = 0;
  for (let i = 0; i < advSlides.length; i++) {
    advCount++;
  }

  let advButtonList = document.querySelector('.advantages__button-list');
  for (let i = 0; i < advCount; i++) {
    let advButton = document.createElement('button');
    advButton.classList.add('advantages__button-item');
    advButtonList.append(advButton);
  }

  advButtonList.childNodes[0].classList.add('advantages__button-item--active');

  for (let i = 0; i < advSlides.length; i++) {
    advSlides[i].style.left = (i * 100) + '%';
  }

  function showAdv() {
    for (let i = 0; i < advCount; i++) {
      if (advButtonList.childNodes[i].classList.contains('advantages__button-item--active')) {
        for (let j = 0; j < advSlides.length; j++) {
          advSlides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevAdv() {
    let x = 0;
    for (let i = 0; i < advCount; i++) {
      if (advButtonList.childNodes[i].classList.contains('advantages__button-item--active')) {
        x = i;
      }
    }
    advButtonList.childNodes[x].classList.remove('advantages__button-item--active');
    if (x == 0) {
      advButtonList.lastChild.classList.add('advantages__button-item--active');
    } else {
      advButtonList.childNodes[x - 1].classList.add('advantages__button-item--active');
    }
    showAdv();
  }

  function nextAdv() {
    let x = 0;
    for (let i = 0; i < advCount; i++) {
      if (advButtonList.childNodes[i].classList.contains('advantages__button-item--active')) {
        x = i;
      }
    }
    advButtonList.childNodes[x].classList.remove('advantages__button-item--active');
    if (x == (advCount - 1)) {
      advButtonList.firstChild.classList.add('advantages__button-item--active');
    } else {
      advButtonList.childNodes[x + 1].classList.add('advantages__button-item--active');
    }
    showAdv();
  }

  for (let i = 0; i < advCount; i++) {
    advButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < advSlides.length; j++) {
        advButtonList.childNodes[j].classList.remove('advantages__button-item--active')
      }
      advButtonList.childNodes[i].classList.add('advantages__button-item--active');
      showAdv();
    });
  }

  let advPrevButton = document.querySelector('.advantages__button--prev');
  advPrevButton.addEventListener('click', prevAdv);

  let advNextButton = document.querySelector('.advantages__button--next');
  advNextButton.addEventListener('click', nextAdv);
}

// Слайдер в первых услугах
let s1Slides = document.querySelectorAll('.service1__slide-item');
if (s1Slides.length) {
  let s1Count = 0;
  for (let i = 0; i < s1Slides.length; i++) {
    s1Count++;
  }

  let s1ButtonList = document.querySelector('.service1__button-list');
  for (let i = 0; i < s1Count; i++) {
    let s1Button = document.createElement('button');
    s1Button.classList.add('service1__button-item');
    s1ButtonList.append(s1Button);
  }

  s1ButtonList.childNodes[0].classList.add('service1__button-item--active');

  for (let i = 0; i < s1Slides.length; i++) {
    s1Slides[i].style.left = (i * 100) + '%';
  }

  function showS1() {
    for (let i = 0; i < s1Count; i++) {
      if (s1ButtonList.childNodes[i].classList.contains('service1__button-item--active')) {
        for (let j = 0; j < s1Slides.length; j++) {
          s1Slides[j].style.left = (j * 100) - (i * 100) + '%';
        }
      }
    }
  }

  function prevS1() {
    let x = 0;
    for (let i = 0; i < s1Count; i++) {
      if (s1ButtonList.childNodes[i].classList.contains('service1__button-item--active')) {
        x = i;
      }
    }
    s1ButtonList.childNodes[x].classList.remove('service1__button-item--active');
    if (x == 0) {
      s1ButtonList.lastChild.classList.add('service1__button-item--active');
    } else {
      s1ButtonList.childNodes[x - 1].classList.add('service1__button-item--active');
    }
    showS1();
  }

  function nextS1() {
    let x = 0;
    for (let i = 0; i < s1Count; i++) {
      if (s1ButtonList.childNodes[i].classList.contains('service1__button-item--active')) {
        x = i;
      }
    }
    s1ButtonList.childNodes[x].classList.remove('service1__button-item--active');
    if (x == (s1Count - 1)) {
      s1ButtonList.firstChild.classList.add('service1__button-item--active');
    } else {
      s1ButtonList.childNodes[x + 1].classList.add('service1__button-item--active');
    }
    showS1();
  }

  for (let i = 0; i < s1Count; i++) {
    s1ButtonList.childNodes[i].addEventListener('click', function() {
      for (let j = 0; j < s1Slides.length; j++) {
        s1ButtonList.childNodes[j].classList.remove('service1__button-item--active')
      }
      s1ButtonList.childNodes[i].classList.add('service1__button-item--active');
      showS1();
    });
  }

  let s1PrevButton = document.querySelector('.service1__button--prev');
  s1PrevButton.addEventListener('click', prevS1);

  let s1NextButton = document.querySelector('.service1__button--next');
  s1NextButton.addEventListener('click', nextS1);
}
