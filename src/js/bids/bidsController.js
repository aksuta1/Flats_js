import * as view from './bidsView.js';
import Bids from './bidsModel.js';

export default async function (state) {

  //создаем обьект модели для работы с заявками 
  if (!state.bids) state.bids = new Bids;

  //получаем заявки с сервера 
  await state.bids.getBids();

  // отображаем заявки на странице 
  view.renderBids(state.bids.bids);

}