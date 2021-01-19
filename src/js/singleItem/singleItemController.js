import SingleItem from './singleItemModel.js';
import * as view from './singleItemView.js';

export default async function (state) {
  console.log('Single Item Controller STARTED!!!');

  state.singleItem = new SingleItem(state.routeParams);

  //получаем данные с сервера
  await state.singleItem.getItem();

  //отрисовываем разметку  для отдельного обьекта 
  view.render(state.singleItem.result);

  //запустить прослушку событий 
  //1. открытие модального окна 
  document.querySelector('.button-order').addEventListener('click', () => {
    view.showModal();
  })

  //2. закрытие модального окна - клик по кнопке 
  document.querySelector('.modal__close').addEventListener('click', () => {
    view.hideModal();
  })

  //2. закрытие модального окна - клик по оверлею
  document.querySelector('.modal-wrapper').addEventListener('click', (e) => {
    if (e.target.closest('.modal')) {
      return null;
    } else {
      view.hideModal();

    }
  })

  //отправка формы
  document.querySelector('.modal__form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = view.getInput();
    state.singleItem.submitForm(formData);
  });


}