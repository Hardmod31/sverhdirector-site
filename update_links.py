from pathlib import Path

root = Path(r"C:\Users\Администратор\Documents\deepseek-harness\default-workspace\site")

# --- Telegram ---
for name in ("build_site.py", "content_home.py", "content_pages.py"):
    p = root / name
    t = p.read_text(encoding="utf-8")
    t = t.replace("https://t.me/sverhdirector", "https://t.me/sverhdirector_bot")
    p.write_text(t, encoding="utf-8")

# --- Метрика ---
b = root / "build_site.py"
t = b.read_text(encoding="utf-8")
start = t.find("<!-- Yandex.Metrika")
end = t.find("-->", start)
if start != -1 and end != -1:
    end += len("-->")
    metrika = """<script type="text/javascript">
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(114694891, "init", {clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/114694891" style="position:absolute; left:-9999px;" alt="" /></div></noscript>"""
    t = t[:start] + metrika + t[end:]
    b.write_text(t, encoding="utf-8")
    print("метрика вставлена")
else:
    print("блок метрики не найден")

print("телеграм обновлён")
