/* Search and filter for the services and blog list pages. */
(function () {
  const res = document.getElementById("res"), bres = document.getElementById("bres");
  const card = (x, kind) => `<a class="tile" href="${x.file}"><div class="pic"><img src="assets/images/${x.img}" alt="${x.title}" loading="lazy" width="640" height="480"></div><div class="t">${kind === "blog" ? `<span class="tag">${x.topic}</span>` : ""}<h3>${x.title}</h3><p>${kind === "blog" ? x.body.slice(0, 100) + "…" : x.summary}</p><span class="go">${kind === "blog" ? "Read article" : "Learn more"} →</span></div></a>`;
  const wire = (box, list, text, sel, key, kind, q, c) => {
    const draw = () => { const a = list.filter((x) => (!c.value || x[key] === c.value) && text(x).toLowerCase().includes(q.value.toLowerCase())); box.innerHTML = a.length ? `<div class="grid">${a.map((x) => card(x, kind)).join("")}</div>` : `<p class="note">Nothing matches your search. Try a different word or <a href="contact.html">contact us</a>.</p>`; };
    q.addEventListener("input", draw); c.addEventListener("change", draw); draw();
  };
  if (res) wire(res, SERVICES, (x) => x.title + x.summary, "cat", "category", "svc", document.getElementById("q"), document.getElementById("cat"));
  if (bres) wire(bres, ARTICLES, (x) => x.title + x.body, "bt", "topic", "blog", document.getElementById("bq"), document.getElementById("bt"));
})();
