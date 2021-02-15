// Script to pull data out of HTML on reference page
<script>
var search = document.querySelector('form')
console.log(search);
search.addEventListener('select', goAnchor);
search.addEventListener('submit', goAnchor);
console.log(search);

function goAnchor(event) {
  console.log(event.target.value);
  var targetAnchor = document.getElementById(event.target.value).offsetTop;
  console.log(targetAnchor);
  window.scrollTo(0, targetAnchor);
}

var elementsJSON = [];
var list = document.getElementById('elementList');
var articles = document.querySelectorAll('article');
articles.forEach(function (article) { 
  var elementID = article.id; 
  console.log(elementID); 
  var elementDescription = article.getElementsByClassName("description");
  console.log(elementDescription[0].innerText);
  try {
    var mdnURL = article.querySelector("a");
    var mdnURI = mdnURL.href
    console.log(mdnURL);
    console.log(mdnURI);
  } catch (error) {
    console.log("no a element found")
  }
  var tempElement = {
    "element": elementID,
    "description": elementDescription,
    "url": mdnURI
  }
  elementsJSON.push(tempElement);
}) 
console.log(elementsJSON);
</script>