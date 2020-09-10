'use strict'

const hornArr = [];

$.ajax('./data/page-1.json', {method: 'GET', dataType: 'JSON'})
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
  this.horns = `${object.horns} Horns`;
  hornArr.push(this);
}

Horn.prototype.render = function (){
  const myTemplate = $('#horn-template').html();
  const $newSection = $(`<section class=${this.keyword}>${myTemplate}</section>`);
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('alt', this.keyword);
  $newSection.find('h3').text(this.horns);
  $newSection.find('img').attr('src', this.image_url);
  $('main').append($newSection);
}

function sort () {
  let keywordArr = [];
  hornArr.forEach(oneHornObj =>{
    if (keywordArr.includes(oneHornObj.keyword)=== false){
      keywordArr.push(oneHornObj.keyword);
    }
  })
  keywordArr.forEach(keyword =>{
    const $newDropDown = $(`<option value= "${keyword}">${keyword}</option>`);
    $('select').append($newDropDown);
  })
}

$('select').on('change', function(){
  // $('#horn-template').empty();
  if(this.value === 'loadAll'){
    $('section').show();
  }else {
    $('section').hide();
    $(`section[class=${this.value}]`).show();
  }
})
