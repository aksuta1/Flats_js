import * as view from './listingView';

export default function (state) {
 
	// Рендер контейнера для карточек
	view.render();

	// Рендер карточек
	state.results.forEach(function (item) {
		view.renderCard(item, state.favourites.isFav(item.id));

	});

		//функция для работы иконок "добавить в избранное"
		addToFavsListener();

	// запускаем прослушку клика на иконки 
	state.emitter.subscribe('event:render-listing', () => {

		// Очистить контейнер с карточками
		view.clearListingContainer();

		// Отрендерить карточки
		state.results.forEach(function (item) {
			view.renderCard(item, state.favourites.isFav(item.id));
		});
			//запускаем прослушку клика на иконку "добавить в избранное"
		addToFavsListener();

	});

	//функция для работы иконок "добавить в избранное"
	function addToFavsListener(){
		Array.from(document.getElementsByClassName('card__like')).forEach((item)=>{
			item.addEventListener('click', (e)=>{
				e.preventDefault();
			 
				// Находим ID объекта по которому кликнули
				const currentId = e.target.closest('.card').dataset.id;
				 
				// Добвляем/Убираем элемент из избранного
				state.favourites.toggleFav(currentId);
	
				// Включаем/Выключаем иконку с избранным
				view.toggleFavouriteIcon(e.target.closest('.card__like'), state.favourites.isFav(currentId));
			})
		});
	}

}
