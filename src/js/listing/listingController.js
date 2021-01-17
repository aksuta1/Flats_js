import * as view from './listingView';


export default function(state){
  console.log('Component Listing started!');

  //рендер контейнера для карточек
  view.render();

  //рендер карточек
  state.results.forEach(function(item){
view.renderCard(item)
  });
  

  state.emitter.subscribe('event:render-listing', ()=>{
      console.log('FUNCTION STARTED!!!');
      console.log(state.results);

  });
}