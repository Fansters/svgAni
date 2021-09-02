"use strict";

// svg Paths
const moonPath = "M100 50C100 50 77.6142 23 50 23C22.3858 23 0 50 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";



// svg
const darkMode = document.querySelector("#darkMode");

// functions
let toggle = false;
darkMode.addEventListener('click', () => {

     // using anime js
     // setting up timeline
     const timeline = anime.timeline({
          duration: 1000,
          easing: 'easeOutExpo'
     });
     // adding dif animations
     timeline.add({
          targets: '.sun',
          d: [
               { value: toggle ? sunPath : moonPath }
          ]
     })
          .add({
               targets: '#darkMode',
               rotate: toggle ? 0 : 250
          }, '-=500')
          .add({
               targets: 'section',
               backgroundColor: toggle ? '#fff' : 'rgb(22,22,22)',
               color: toggle ? '#002360' : '#fff'
          }, '-=950');
     toggle = !toggle;
});
