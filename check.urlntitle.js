// ==UserScript==
// @name        Websites filter
// @namespace   jeanpaullucien
// @description Банит хреновые сайты
// @version     1
// @grant       none
// ==/UserScript==
'use strict';

var i = 0, badUrlTitle = [
  
  ['mail.ru', 'yandex.ru', 'google.com'], //URLs
  ['', '', ''],                                //Заголовки
  [2, 1, 0],                                         //Причина, номер ссылается на массив
  ['лол', 'мошенничество', 'мимо']                                //список причин
  
];
//alert(badUrlTitle[0].length);
while (i < badUrlTitle[0].length) {
  if (window.location.host == badUrlTitle[0][i]) {
    window.stop();
    document.body.style.background = 'black';
    document.body.style.display = 'none';
    alert('Сайт ' + document.title + ' (' + window.location.host + ') заблокирован по причине: ' + badUrlTitle[3][badUrlTitle[2][i]] + '.');
    break;
  }
  i++;
}
//var body = document.getElementByTagName('body');
//alert(body);
//alert(div);
//body.innerHTML
//document.body.innerHTML += '<div style="background: blue; position: fixed;"><h2>Pizza!</h2></div>';
//document.getElement('body').innerHTML += string;
//body.appendChild(div);
