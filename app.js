'use strict'

// const hornArr = [];

$.ajax('page-1.json', {method: 'GET', dataType: 'JSON'})
  .then(hornInfo => {
    hornInfo.forEach (animal=>{
      new Horn(animal).render();
    })
    
  })

function Horn(object){
  this.image_url = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyword = object.keyword;
  this.horns = object.horns;
}

Horn.prototype.render = function (){
  const myTemplate = $('#horn-template').html();
  const $newSection = $(`<section>${myTemplate}</section>`);
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('alt', this.keyword);
  $newSection.find('h3').text(this.horns);
  $newSection.find('img').attr('src', this.image_url);
  $('main').append($newSection);
}


function sort = {
  let hornArr = [];
  for (var i = 0, i < horn)
    if (i <= 1)
    
}

keyword.prototype.