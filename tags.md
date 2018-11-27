---
layout: page
title: Tags

---

<div class="page-content wc-container">
	<div class="post" id="tagcloud">
		<h1><i class="fas fa-tags"></i> Мітки</h1>  

		{% assign tags = site.tags | sort %}
	  {% assign maxsize = site.tags | size %}
	  <script type="text/javascript">
	    function tagcloud(dom,tag) {
	      var elements = dom.getElementsByTagName(tag);
	    	var minFont = 11; /* мінімальний розмір шрифту */
	    	var maxFont = 24; /* максимальний розмір шрифту */
	    	var size = 0;
	    	var i = 0;
	    	var data = 0;
	      /* Знаходимо всі елементи з заданим парaметром*/
	    	for(i = 0; i < elements.length; ++i) {
	    		data = parseInt(elements[i].getAttribute('title'),10);
	        /* Лінійна залежність, розмір шрифту розподілиться в залежності
	        частоти розподілу міток від їх загальної кількості при чому,
	        загальна кількість міток >= частоті входжень, інакше неможливо */
	    		size = ((data - 1) * (maxFont - minFont)) / ({{ maxsize }} - 1) + minFont;
	    		elements[i].style.fontSize = size + "pt"; /* додаєм атрибут стилю*/
	    	}
	    }
	  </script>
	  {% for tag in tags %}
		{% assign colors = 'FF5852|FF9000|FFD300|3DCD49|0089D7|9E44C4|cebc88|1E88E5|00897B|7CB342|FFB300|F4511E' | split: '|' %}
				<a href="{{ '/tag/' | append: tag[0] | relative_url }}" class="btn bttag" style="color: #{{ forloop.index | random_item: colors }};" data-toggle="tooltip" data-placement="right" title="{{ tag[1].size }}">
	        {{ tag[0] | replace:'-', ' ' }}
				</a>
	  {% endfor %}
	  <script type="text/javascript">
	    var tc = document.getElementById('tagcloud'); /* Підключаємо функцію пошуку лементів у батьківському*/
	    tagcloud(tc,'a'); /* Змінюємо атрибути */
	  </script>
		<style>

		</style>
	</div>
</div>
