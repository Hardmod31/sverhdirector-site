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

  // цели Метрики
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var h = a.getAttribute('href') || '';
    var goal = null;
    if (h.indexOf('t.me') >= 0) goal = 'telegram_click';
    else if (h.indexOf('mailto:') === 0) goal = 'email_click';
    else if (h.indexOf('course.html') >= 0) goal = 'course_click';
    if (goal && window.ym) window.ym(114694891, 'reachGoal', goal);
  }, true);

  // переключатель темы
  (function(){
    var KEY = 'sd-theme';
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var meta = document.getElementById('themeColor');
    function cur(){ return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
    function apply(t){
      root.setAttribute('data-theme', t);
      root.style.colorScheme = t;
      if (meta) meta.setAttribute('content', t === 'dark' ? '#0E1613' : '#F7FAF6');
      if (btn) {
        btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
        btn.title = t === 'dark' ? 'Светлая тема' : 'Тёмная тема';
      }
    }
    function flip(){
      var t = cur() === 'dark' ? 'light' : 'dark';
      apply(t);
      try { localStorage.setItem(KEY, t); } catch (e) {}
    }
    if (btn) btn.addEventListener('click', flip);
    window.addEventListener('storage', function (e) {
      if (e.key === KEY && (e.newValue === 'dark' || e.newValue === 'light')) apply(e.newValue);
    });
    apply(cur());
  })();
