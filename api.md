---
layout: page
title: API сайту
---

# <i class="fab fa-quinscape"></i> API сайту

Ось деяка інформація, з якою я можу поділитися у формі API JSON.

API зараз повертає лише один формат: json (короткий для JavaScript Object Notation). Це, безумовно, найбільш бажаний формат для розробників. Якщо ви користуєтеся Google Chrome, я настійно рекомендую використовувати JSON Formatter.

##  Статті

<https://bot-descartes.netlify.com/api/articles.json>

Заголовки з даними
 * назва
 * дата
 * файл

## Запит javascript
{% highlight javascript %}
fetch("https://bot-descartes.netlify.com/api/articles.json")
 .then(res => res.json())
 .then(res => res.articles)
 .then(articles => {
   articles.forEach(({
     url,
     title,
     file,
     date
   }) => {
     console.log(url, title, file, date);
   })
 })
{% endhighlight %}

## Bідповідь JSON
{% highlight json %}
  "articles": [
    {
      "url": "https://bot-descartes.netlify.com/2018/10/42-94-70625",
      "title": "Спецвипуск. Кольорова версія журналу «Педагогічна майстерня»",
      "file": "https://bot-descartes.netlify.com/18-10-10_94/42-94-70625.pdf",
      "date_published": "Wed, 10 Oct 2018 11:00:00 +0300"
      }
{% endhighlight %}

##  Каталог журналів

<https://bot-descartes.netlify.com/api/journals.json>

## Запит javascript
{% highlight javascript %}
fetch("https://bot-descartes.netlify.com/api/journals.json")
 .then(res => res.json())
 .then(res => res.journals)

 {% endhighlight %}

## Bідповідь JSON
{% highlight json %}
{
  "2018": {
    "10": {
      "2018-10-10-30-582": {
        "name": "Математика в школах України",
        "publisher": "Основа",
        "number": "30 (582)",
        "datetime": "2018-10-20 20:00:00 +0000",
        "img": "articles/18-10-30_582/9_582.jpg",
        "articles": [
          {
            "title": "Методи активізації пізнавальної діяльності учнів на уроках геометрії",
            "url": "articles/18-10-30_582/9-582-70433.pdf"
          },
          {
            "title": "Показникові та логарифмічні рівняння",
            "url": "articles/18-10-30_582/9-582-70434.pdf"
          },
          {
            "title": "Дії над многочленами. Урок алгебри та початків аналізу. 10 клас",
            "url": "articles/18-10-30_582/9-582-70435.pdf"
          },
          {
            "title": "Вивчаємо історію й математику. Листопад 2018 року",
            "url": "aarticles/18-10-30_582/9-582-70436.pdf"
          },
          {
            "title": "Розгадка таємниці доведення великої теореми Ферма»",
            "url": "articles/18-10-30_582/9-582-70437.pdf"
          },
          {
            "title": "Мiж аксiом i теорем. Календар вiд «Серенади Математицi»",
            "url": "articles/18-10-30_582/9-582-70438.pdf"
          },
          {
            "title": "Кольорова вкладка — Показникові та логаріфмічні рівняння",
            "url": "articles/18-10-30_582/9-582-70439.pdf"
          }
        ]
      }
    },
{% endhighlight %}
