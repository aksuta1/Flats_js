import SingleItem from './singleItemModel.js';
import * as view from './singleItemView.js';

export default async function (state){
    console.log('Single Item Controller STARTED!!!');

    state.singleItem = new SingleItem(state.routeParams);
    
    //получаем данные с сервера
    await state.singleItem.getItem();

    //отрисовываем разметку  для отдельного обьекта 
    view.render (state.singleItem.result);


}