(function(){
  var burger=document.getElementById('burger'), nav=document.getElementById('nav');
  if(burger&&nav){burger.addEventListener('click',function(){nav.classList.toggle('is-open');});}
  var page=document.body.getAttribute('data-page');
  if(page){document.querySelectorAll('[data-nav="'+page+'"]').forEach(function(a){a.classList.add('is-active');});}
  var reveal=document.querySelectorAll('.card,.tariff,.review,.post,.stat,.panel,.author__photo,.program details');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}});
    },{threshold:.12});
    reveal.forEach(function(el){el.classList.add('reveal');io.observe(el);});
  }
})();