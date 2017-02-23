( () => {
  'use strict';
})();

$(document).ready( () => {
  const $grooveContainer = $('.grooveContainer'); 
  let mouseX = 0;
  let mouseY = 0;

  // Allows user possibility of more or less shapes each visit
  function shapeNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // To change color of shapes
  function randomHexColor() {
    return '#' + Math.random().toString(16).slice(2,8);
  }

  function shapeCreator(numShapes) {
    for (let i = 0; i < numShapes; i++) {
      $grooveContainer.append('<div class="newShapes"></div>');
    }
  }

  shapeCreator(shapeNumber(10, 21));
  
  const $newShapes = $('.newShapes');

  // Assign random background-color(s) with Underscore.js
  _.each($newShapes, (shape) => {
    $(shape).css('background-color', randomHexColor());
  });

  $('.numAndColor').on('click', () => {
    _.each($newShapes, (shapes) => {
      $(shapes).css({
        'background-color': randomHexColor(),
        'box-shadow': '1px 1px 50px 15px' + randomHexColor(),
      });
    });
  });

  // Capture movement of cursor
  $(document).on('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  // I've got the need, the . . . 
  function needForSpeed(min, max, shape) {
    let turbo = Math.random() * (max - min) + min;
    let xp = 0;
    let yp = 0;

    setInterval( () => {
      xp += ((mouseX - xp)/turbo);
      yp += ((mouseY - yp)/turbo);
      $(shape).css({left:xp, top:yp});  
    }, 30);
  }

  _.each($newShapes, (shapes) => {
    needForSpeed(10, 50, shapes);
  });

}); // $(document).ready()
