'use strict';
const themeChange = document.querySelector('.themeChange i');
// const cursor = document.querySelector('.-opaque');

// theme Change
const changeThemeFunction = function () {
   themeChange.style.color = '#fff';

   themeChange.addEventListener('click', function () {
      document.body.classList.toggle('light_theme');

      if (themeChange.classList.contains('fa-moon')) {
         themeChange.classList.replace('fa-moon', 'fa-sun');
      } else {
         themeChange.classList.replace('fa-sun', 'fa-moon');
      }
   });
};

// cursor animation
// document.addEventListener('mousemove', (e) => {
//    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;');
// });

// document.addEventListener('click', () => {
//    cursor.classList.add('expand');

//    setTimeout(() => {
//       cursor.classList.remove('expand');
//    }, 500);
// });

// Theme function
changeThemeFunction();
