// DEUKRO Cyber: Schalter "Weniger Effekte" (merkt sich die Wahl im Browser)
(function () {
  var root = document.documentElement;
  var KEY = 'dk-fx-low';
  function read() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function write(v) { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} }
  var low = read();
  root.classList.toggle('fx-low', low);
  function mount() {
    var b = document.createElement('button');
    b.id = 'dk-fx';
    b.type = 'button';
    function label() { b.textContent = low ? 'Effekte: aus' : 'Weniger Effekte'; }
    label();
    b.addEventListener('click', function () {
      low = !low; root.classList.toggle('fx-low', low); write(low); label();
    });
    document.body.appendChild(b);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();

// Zurück-Button zur Startseite (nicht auf der Startseite selbst)
(function () {
  if (/(^|\/)(index\.html)?$/.test(location.pathname)) return;
  function mount() {
    var a = document.createElement('a');
    a.id = 'dk-back';
    a.href = 'index.html';
    a.textContent = '← Zurück';
    var h = document.querySelector('header');
    if (h) { h.appendChild(a); } else { a.className = 'float'; document.body.appendChild(a); }
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
