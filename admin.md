---
layout: page
---

Запустіть скрипт **тегів**, щоб створити сторінку для кожного тегу. Якщо ви додали новий тег вам потрібно перейти на цю сторінку скопіювати скрипт та запустити його.

{% highlight bash %}
{% for tag in site.tags %}
echo -e '---\nlayout: tag_index\ntag: {{ tag[0] }} \n---' > '{{ tag[0] }}.md' &{% endfor %}
{% endhighlight %}
