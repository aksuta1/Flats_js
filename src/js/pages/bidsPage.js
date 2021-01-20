import bids from './../bids/bidsController.js';

export default function (){
  //очищаем контейнер
  document.querySelector('#app').innerHTML = '';
  
  //запускаем компонент bids
  bids(state);

}