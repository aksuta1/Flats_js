import singleItem from './../singleItem/singleItemController';

export default function () {

	// Очищаем контейнер приложения
	document.querySelector('#app').innerHTML = "";

	// Запускаем компонент singleItem
	singleItem(state);
}