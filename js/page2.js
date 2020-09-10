'use strict'

const animalArr = [];

$.ajax('./data/page-2.json', {method: 'GET', dataType: 'JSON'})
  .then(hornInfo => {
    hornInfo.forEach (animal=>{
      new Horn(animal);
    })
    
    animalArr.forEach(type => {
      $('main').append(type.createHtml());
    })
    sort();
  })

function Horn(object){
  this.image_url = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyword = object.keyword;
  this.horns = object.horns;
  animalArr.push(this);
}

Horn.prototype.createHtml = function (){
  let template = $('#animals').html();
  let html = Mustache.render(template, this);
  return html;
}

function sort () {
  let keywordArr = [];
  animalArr.forEach(oneHornObj =>{
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
  if(this.value === 'loadAll'){
    $('section').show();
  }else {
    $('section').hide();
    $(`section[class=${this.value}]`).show();
  }
})
