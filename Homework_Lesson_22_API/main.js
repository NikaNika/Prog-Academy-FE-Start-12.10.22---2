const apiKey = 'e0dce53e909d40b5b8ff77421dc31a93';
const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;
const news = document.querySelector('.news');

fetch(url)
	.then((response) => response.json())
	.then((json) => {
		onDataRender(json.articles);
	});

function onDataRender(data) {
	data.forEach(function (el, index) {
		let html = `<div class="news__item">
				<img class="news__item-img" src = ${el.urlToImage}>
        <div class="news__item-info">
				<h2 class="news__item-title">${el.title}</h2>
        <h3 class="news__item-subtitle">Author: <span>${el.author}</span></h3>
				<div class="news__item-description">${el.description}</div>
        <a class="news__item-link" href="${el.url}" target="_blank">Read more...</a>
        </div>				
				</div>`;
		if (index <= 30) {
			news.insertAdjacentHTML('beforeend', html);
		}
	});
}
