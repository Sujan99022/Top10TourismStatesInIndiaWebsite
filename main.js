var mapManipulate = document.querySelector('.map1');
var mapManipulate3 = document.querySelector('.map3');
var mapManipulate5 = document.querySelector('.map5');
var mapManipulate7 = document.querySelector('.map7');
var mapManipulate9 = document.querySelector('.map9');
var mapManipulate11 = document.querySelector('.map11');
var mapManipulate13 = document.querySelector('.map13');
var mapManipulate15 = document.querySelector('.map15');
var mapManipulate17 = document.querySelector('.map17');
var mapManipulate19 = document.querySelector('.map19');
var mapManipulate2 = document.querySelector('.map2');
var mapManipulate4 = document.querySelector('.map4');
var mapManipulate6 = document.querySelector('.map6');
var mapManipulate8 = document.querySelector('.map8');
var mapManipulate10 = document.querySelector('.map10');
var mapManipulate12 = document.querySelector('.map12');
var mapManipulate14 = document.querySelector('.map14');
var mapManipulate16 = document.querySelector('.map16');
var mapManipulate18 = document.querySelector('.map18');
var mapManipulate20 = document.querySelector('.map20');
var first = document.querySelector('.first')
var first1 = document.querySelector('.first1')
var first2 = document.querySelector('.first2')
var first3 = document.querySelector('.first3')
var first4 = document.querySelector('.first4')
var first5 = document.querySelector('.first5')
var first6 = document.querySelector('.first6')
var first7 = document.querySelector('.first7')
var first8 = document.querySelector('.first8')
var first9 = document.querySelector('.first9')
var second = document.querySelector('.second')
var second1 = document.querySelector('.second1')
var second2 = document.querySelector('.second2')
var second3 = document.querySelector('.second3')
var second4 = document.querySelector('.second4')
var second5 = document.querySelector('.second5')
var second6 = document.querySelector('.second6')
var second7 = document.querySelector('.second7')
var second8 = document.querySelector('.second8')
var second9 = document.querySelector('.second9')
mapManipulate.addEventListener('click', function () {
    first.style.display = 'none';
    second.style.display = 'block';
    mapManipulate.style.display='none'
    mapManipulate2.style.display='block'
})
mapManipulate3.addEventListener('click', function () {
    first1.style.display = 'none';
    second1.style.display = 'block';
    mapManipulate3.style.display='none'
    mapManipulate4.style.display='block'
})
mapManipulate5.addEventListener('click', function () {
    first2.style.display = 'none';
    second2.style.display = 'block';
    mapManipulate5.style.display='none'
    mapManipulate6.style.display='block'
})
mapManipulate7.addEventListener('click', function () {
    first3.style.display = 'none';
    second3.style.display = 'block';
    mapManipulate7.style.display='none'
    mapManipulate8.style.display='block'
})
mapManipulate9.addEventListener('click', function () {
    first4.style.display = 'none';
    second4.style.display = 'block';
    mapManipulate9.style.display='none'
    mapManipulate10.style.display='block'
})
mapManipulate11.addEventListener('click', function () {
    first5.style.display = 'none';
    second5.style.display = 'block';
    mapManipulate11.style.display='none'
    mapManipulate12.style.display='block'
})
mapManipulate13.addEventListener('click', function () {
    first6.style.display = 'none';
    second6.style.display = 'block';
    mapManipulate13.style.display='none'
    mapManipulate14.style.display='block'
})
mapManipulate15.addEventListener('click', function () {
    first7.style.display = 'none';
    second7.style.display = 'block';
    mapManipulate15.style.display='none'
    mapManipulate16.style.display='block'
})
mapManipulate17.addEventListener('click', function () {
    first8.style.display = 'none';
    second8.style.display = 'block';
    mapManipulate17.style.display='none'
    mapManipulate18.style.display='block'
})
mapManipulate19.addEventListener('click', function () {
    first9.style.display = 'none';
    second9.style.display = 'block';
    mapManipulate19.style.display='none'
    mapManipulate20.style.display='block'
})
mapManipulate2.addEventListener('click', function () {
    first.style.display = 'block';
    second.style.display = 'none';
    mapManipulate.style.display='block'
    mapManipulate2.style.display='none'
})
mapManipulate4.addEventListener('click', function () {
    first1.style.display = 'block';
    second1.style.display = 'none';
    mapManipulate3.style.display='block'
    mapManipulate4.style.display='none'
})
mapManipulate6.addEventListener('click', function () {
    first2.style.display = 'block';
    second2.style.display = 'none';
    mapManipulate5.style.display='block'
    mapManipulate6.style.display='none'
})
mapManipulate8.addEventListener('click', function () {
    first3.style.display = 'block';
    second3.style.display = 'none';
    mapManipulate7.style.display='block'
    mapManipulate8.style.display='none'
})
mapManipulate10.addEventListener('click', function () {
    first4.style.display = 'block';
    second4.style.display = 'none';
    mapManipulate9.style.display='block'
    mapManipulate10.style.display='none'
})
mapManipulate12.addEventListener('click', function () {
    first5.style.display = 'block';
    second5.style.display = 'none';
    mapManipulate11.style.display='block'
    mapManipulate12.style.display='none'
})
mapManipulate14.addEventListener('click', function () {
    first6.style.display = 'block';
    second6.style.display = 'none';
    mapManipulate13.style.display='block'
    mapManipulate14.style.display='none'
})
mapManipulate16.addEventListener('click', function () {
    first7.style.display = 'block';
    second7.style.display = 'none';
    mapManipulate15.style.display='block'
    mapManipulate16.style.display='none'
})
mapManipulate18.addEventListener('click', function () {
    first8.style.display = 'block';
    second8.style.display = 'none';
    mapManipulate17.style.display='block'
    mapManipulate18.style.display='none'
})
mapManipulate20.addEventListener('click', function () {
    first9.style.display = 'block';
    second9.style.display = 'none';
    mapManipulate19.style.display='block'
    mapManipulate20.style.display='none'
})




function search(event) {
    var searchValue = document.getElementById("searchInput").value.toUpperCase();
    var productListing = document.getElementById("statetListing");
    var products = productListing.getElementsByClassName("cardd");
    for (var i = 0; i < products.length; i++) {
      var title = products[i].querySelector(".card-titlee").textContent.toUpperCase();
      if (title.indexOf(searchValue) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
    event.preventDefault();
  }
  var searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { 
      search(event);
    }
  });