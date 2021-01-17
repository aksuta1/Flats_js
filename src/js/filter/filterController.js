import Filter from './filterModel';

import * as view from './filterView';

export default async function (state) {

  //создание обьекта фильтра
  if (!state.filter) state.filter = new Filter;

  //получение параметров для фильтра 
  await state.filter.getParams();

  view.render(state.filter.params);

  // делаем запрос на сервер 
  await state.filter.getResults();

  //обновляем счетчик на кнопке 
  view.changeButtonText(state.filter.result.length);

  // Прослушка событий формы
  const form = document.querySelector('#filter-form');

  form.addEventListener('change', async function (e) {
    e.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
  })

  //сброс формы
  form.addEventListener('reset', async function () {
    state.filter.query = '';
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
  })


    //отправка формы
form.addEventListener('submit',   function (e) {
  e.preventDefault();
  console.log("submit!!!")
    
  })



}
