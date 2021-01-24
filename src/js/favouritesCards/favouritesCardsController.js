import FavouritesCards from "./favouritesCardsModel";
import * as view from './favouritesCardsView';

export default async function (state) {
    // Получить список объектов которые находятся в избранном
    const favsList = state.favourites.favs;

    //получение данных с сервера
    const favouriteCards = new FavouritesCards(favsList);
    await favouriteCards.getFavs();

    // отображаем контейнер и карточки
    view.renderPage(favouriteCards.cards);

    //запускаем прослушку клика на иконку "добавить в избранное"
    addToFavsListener();
    
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