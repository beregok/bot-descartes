---
layout: page
title: API сайту
---

<p>
  <picture>
    <source srcset="assets/images/api-poroh.webp" type="image/webp">
    <img src="assets/images/api-poroh.jpg" alt="Дзвонiть! Пишiть!" class="rounded mx-auto d-block">
  </picture>
</p>

# <i class="fab fa-quinscape"></i> API сайту

Ось деяка інформація, з якою я можу поділитися у формі API JSON.

API зараз повертає лише один формат: json (короткий для JavaScript Object Notation). Це, безумовно, найбільш бажаний формат для розробників.

##  Статті

<https://bot-descartes.netlify.com/api/articles.json>

Заголовки з даними
 * назва
 * дата
 * файл

## Запит javascript
{% highlight javascript %}
fetch('https://bot-descartes.netlify.com/api/articles.json')
 .then(res => res.json())
 .then(res => res.articles)
 .then(articles => {
   articles.forEach(({
     title,
     file,
     img,
     date
   }) => {
     console.log(title, file, img, date);
   })
 })
{% endhighlight %}

## Bідповідь JSON
{% highlight json %}
{
  "articles": [
    {
      "title": "Спецвипуск. Кольорова версія журналу «Педагогічна майстерня»",
      "file": "http://localhost:4000/articles/18-10-10_94/42-94-70625.pdf",
      "img": "http://localhost:4000/articles/18-10-10_94/42-94-70625-01.jpg",
      "date": "Wed, 10 Oct 2018 11:00:00 +0300"
      },
{% endhighlight %}

##  Каталог журналів

<https://bot-descartes.netlify.com/api/journals.json>
