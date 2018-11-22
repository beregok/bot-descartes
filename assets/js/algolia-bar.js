const search = instantsearch({
  appId: 'JW3EBI2XYO',
  apiKey: '7153d43fba3a2319ca8ba31f915b9454',
  indexName: 'bot-descartes',
  searchParameters: {
    restrictSearchableAttributes: [
      'title',
      'content'
    ]
  }
});
const hitTemplate = function(hit) {
  let date = '';
  if (hit.date) {
    date = moment.unix(hit.date).format('MMM D, YYYY');
  }
  const url = hit.url;
  const title = hit._highlightResult.title.value;
  const content = hit._highlightResult.html.value;

  return `
    <i class="far fa-lightbulb"></i> <a href="${url}">${title}</a>
  `;
}
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-searchbar',
    placeholder: 'Яку статтю ви шукаєте?'
  })
);
search.addWidget(
  instantsearch.widgets.hits({
    container: '#search-hits',
    templates: {
      item: hitTemplate
    }
  })
);
search.start();
