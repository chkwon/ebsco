javascript:(function(){
  var m = location.href.match(/10\.\d{4,9}\/[-._;()\/:A-Z0-9]+/i);
  if (!m) { alert("Could not find DOI on this page."); return; }
  location.href = "https://sfx-82kst-kaist.hosted.exlibrisgroup.com/kaist?sid=google&id=" + encodeURIComponent("doi:" + m[0]);
})();
