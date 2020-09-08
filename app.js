'use strict'

const hornArr = [];

$.ajax('page-1.json', {method: 'GET', dataType: 'JSON'})
  .then(hornInfo => {
    hornInfo.forEach (animal=>{
      new Horn(animal).render();
    })
    sort();
  })

function Horn(object){
  this.image_url = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyword = object.keyword;
  this.horns = object.horns;
  hornArr.push(this);
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

// feature 2

function sort () {
  let keywordArr = [];
  hornArr.forEach(oneHornObj =>{
    if (keywordArr.includes(oneHornObj.keyword)=== false){
      keywordArr.push(oneHornObj.keyword);
    }
  })
  console.log(keywordArr); 
  keywordArr.forEach(keyword =>{
    const $newDropDown = $(`<option value= "${keyword}">${keyword}</option>`);
    $('select').append($newDropDown);
  })
}

function click ()

$('select').on('click', function(){
  click();
})