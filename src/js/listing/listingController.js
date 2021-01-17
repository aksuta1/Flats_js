import * as view from './listingView';

export default function (state) {
	console.log('Component Listing started!');

	// Рендер контейнера для карточек
	view.render();

	// Рендер карточек
	state.results.forEach(function (item) {
		view.renderCard(item);
	});

	state.emitter.subscribe('event:render-listing', () => {
        // Очистить контейнер с карточками
        view.clearListingContainer();

        // Отрендерить карточки
        state.results.forEach(function (item) {
			view.renderCard(item);
		});
	});
}
