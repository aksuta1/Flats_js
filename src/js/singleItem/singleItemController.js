import SingleItem from './singleItemModel.js';

export default function (state){
    console.log('Single Item Controller STARTED!!!');

    state.singleItem = new SingleItem(state.routeParams);
    state.singleItem.getItem();

}