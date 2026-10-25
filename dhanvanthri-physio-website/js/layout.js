/* Shared header, navigation, footer and mobile bar. Edit links here once; every page updates. */
(function () {
  const TEL = "tel:+917373466622", MAPQ = "Dhanvanthri+Physiotherapy+Center+Thiruppakula+Street+Kottai+Road+Namakkal+637001";
  const page = document.body.dataset.page || "";
  const sv = (p) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
  const IC = { ph: sv('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>'), ck: sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'), pn: sv('<path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>'), cal: sv('<path d="M4 5h16v15H4zM4 9h16M8 3v4M16 3v4"/>'), ch: sv('<path d="M6 9l6 6 6-6"/>'), menu: sv('<path d="M4 7h16M4 12h16M4 17h16"/>') };
  const base = (f) => f.replace(".html", "");
  const TREAT = [["All Services", "services.html"], ...SERVICES.map((s) => [s.title, s.file])];
  const RES = [["Why Choose Us", "why-choose-us.html"], ["Patient Guide", "patient-guide.html"], ["Registration", "registration.html"], ["Testimonials", "testimonials.html"], ["FAQ", "faq.html"]];
  const LEGAL = [["Privacy Policy", "privacy-policy.html"], ["Terms & Conditions", "terms.html"], ["Medical Disclaimer", "medical-disclaimer.html"], ["Accessibility", "accessibility.html"]];
  const TAGS = ["Move Better. Live Better.", "Personalized physiotherapy and rehabilitation in Namakkal", "Open 24 Hours · Call +91 73734 66622", "Care designed around your movement, comfort and recovery"];
  const grp = (h) => `<div class="tg"${h ? ' aria-hidden="true"' : ""}>${[...TAGS, ...TAGS].map((t) => `<span>${t}</span>`).join("")}</div>`;
  const cur = (f) => (base(f) === page ? ' aria-current="page"' : "");
  const li = (l, f) => `<li><a class="nl" href="${f}"${cur(f)}>${l}</a></li>`;
  let n = 0;
  const dd = (l, a, extra) => { const id = "sub" + ++n, act = a.some((x) => base(x[1]) === page) || (extra && base(extra) === page); return `<li class="dd${act ? " act" : ""}"><button class="nl" type="button" aria-expanded="false" aria-controls="${id}">${l}${IC.ch}</button><ul class="sub" id="${id}">${a.map((x) => `<li><a href="${x[1]}"${cur(x[1])}>${x[0]}</a></li>`).join("")}</ul></li>`; };
  const links = (a) => `<ul>${a.map((x) => `<li><a href="${x[1]}">${x[0]}</a></li>`).join("")}</ul>`;
  const col = (h, b) => `<details class="fc" open><summary>${h}</summary>${b}</details>`;

  document.getElementById("site-top").innerHTML =
    `<div class="ticker" aria-label="Clinic tagline"><div class="tk">${grp()}${grp(1)}</div></div>
<div class="topbar"><ul class="tb"><li>${IC.ph}<a href="${TEL}">+91 73734 66622</a></li><li>${IC.ck}<span>Open 24 Hours</span></li><li class="t3">${IC.pn}<span>Kottai Road, Namakkal</span></li><li class="t4">${IC.cal}<a href="appointment.html">Appointment enquiries</a></li></ul></div>
<header id="site-header"><div id="scrim" hidden></div><div class="w hbar">
<a class="logo" href="index.html"><i aria-hidden="true">✚</i><span><b>Dhanvanthri</b><small>Physiotherapy Center</small></span></a>
<nav id="nav" aria-label="Main"><div class="dhead"><span>Menu</span><button type="button" id="close" aria-label="Close menu">✕</button></div><ul>
${li("Home", "index.html")}${li("About", "about.html")}${li("Doctor", "doctor.html")}${dd("Treatments", TREAT, "services.html")}${li("Facilities", "facilities.html")}${dd("Patient Resources", RES)}${li("Blog", "blog.html")}${li("Contact", "contact.html")}<li class="mob"><a class="btn" href="appointment.html">Book Appointment</a></li></ul></nav>
<div class="hact"><a class="btn sm" href="appointment.html">Book Appointment</a><button class="menu" type="button" id="menu" aria-label="Open menu" aria-expanded="false" aria-controls="nav">${IC.menu}</button></div></div></header>`;

  document.getElementById("site-bottom").innerHTML =
    `<footer><div class="w"><div class="fg">
<div class="fc brand"><a class="logo" href="index.html"><i aria-hidden="true">✚</i><span><b>Dhanvanthri</b><small>Physiotherapy Center</small></span></a><p>Professional physiotherapy and rehabilitation care focused on better movement and better living.</p><a class="btn g sm" href="appointment.html">Book Appointment</a></div>
${col("Explore", links([["Home", "index.html"], ["About", "about.html"], ["Doctor", "doctor.html"], ["Facilities", "facilities.html"], ["Blog", "blog.html"], ["Contact", "contact.html"]]))}
${col("Treatments", links(TREAT))}
${col("Patient Resources", links(RES) + `<ul class="visit"><li>${IC.pn}<span>No. 5, Thiruppakula Street, Kottai Road, Namakkal – 637001</span></li><li>${IC.ph}<a href="${TEL}">+91 73734 66622</a></li><li>${IC.ck}<span>Open 24 Hours</span></li><li><a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=${MAPQ}">Get directions</a></li></ul>`)}
</div></div><div class="fbot"><div class="w"><nav class="legal" aria-label="Legal">${LEGAL.map((x) => `<a href="${x[1]}">${x[0]}</a>`).join("")}</nav><p>© 2026 Dhanvanthri Physiotherapy Center. All Rights Reserved.</p><p>Information provided on this website is for general informational purposes and is not a substitute for professional medical advice, diagnosis or treatment.</p></div></div></footer>
<div class="bar"><a href="${TEL}">📞 Call</a><a href="https://wa.me/${CFG.phone}" target="_blank" rel="noopener">💬 WhatsApp</a><a href="appointment.html">📅 Appointment</a></div>`;

  /* footer accordions on phones */
  const mqF = matchMedia("(min-width:701px)"), FC = [...document.querySelectorAll("details.fc")];
  const syncF = () => FC.forEach((d) => (d.open = mqF.matches)); syncF(); mqF.addEventListener("change", syncF);
  FC.forEach((d) => d.querySelector("summary").addEventListener("click", (e) => { if (mqF.matches) e.preventDefault(); }));

  /* dropdowns: one open at a time (hover, click, keyboard); drawer on small screens */
  const nav = document.getElementById("nav"), menuBtn = document.getElementById("menu"), scrim = document.getElementById("scrim"), mqD = matchMedia("(min-width:1181px)"), DD = [...document.querySelectorAll(".dd")];
  const setDD = (d, o) => { d.classList.toggle("open", o); d.querySelector("button").setAttribute("aria-expanded", o); const s = d.querySelector(".sub"); s.classList.remove("end"); if (o && mqD.matches && s.getBoundingClientRect().right > innerWidth - 12) s.classList.add("end"); };
  const closeDD = (x) => DD.forEach((d) => { if (d !== x && d.classList.contains("open")) setDD(d, false); });
  DD.forEach((d) => {
    const b = d.querySelector("button"); let t, hov = 0;
    d.addEventListener("pointerenter", (e) => { if (e.pointerType !== "mouse" || !mqD.matches) return; clearTimeout(t); closeDD(d); if (!d.classList.contains("open")) { setDD(d, true); hov = Date.now(); } });
    d.addEventListener("pointerleave", (e) => { if (e.pointerType !== "mouse" || !mqD.matches) return; t = setTimeout(() => setDD(d, false), 160); });
    b.addEventListener("click", (e) => { e.stopPropagation(); if (mqD.matches && Date.now() - hov < 400) return; const o = !d.classList.contains("open"); closeDD(d); setDD(d, o); });
    d.addEventListener("keydown", (e) => {
      const L = [...d.querySelectorAll(".sub a")], i = L.indexOf(e.target);
      if (e.key === "Escape" && mqD.matches && d.classList.contains("open")) { setDD(d, false); b.focus(); e.stopPropagation(); }
      else if (e.key === "ArrowDown" && e.target === b) { e.preventDefault(); closeDD(d); setDD(d, true); L[0].focus(); }
      else if (i > -1 && e.key === "ArrowDown") { e.preventDefault(); L[(i + 1) % L.length].focus(); }
      else if (i > -1 && e.key === "ArrowUp") { e.preventDefault(); (L[i - 1] || b).focus(); }
    });
    d.addEventListener("focusout", (e) => { if (mqD.matches && e.relatedTarget && !d.contains(e.relatedTarget)) setDD(d, false); });
  });
  function drawer(o, quiet) { nav.classList.toggle("open", o); scrim.hidden = !o; menuBtn.setAttribute("aria-expanded", o); document.documentElement.classList.toggle("lock", o); if (o) document.getElementById("close").focus(); else { closeDD(); if (!quiet && !mqD.matches) menuBtn.focus(); } }
  menuBtn.onclick = () => drawer(!nav.classList.contains("open"));
  document.getElementById("close").onclick = () => drawer(false); scrim.onclick = () => drawer(false);
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) drawer(false, true); });
  document.addEventListener("click", (e) => { if (!e.target.closest(".dd")) closeDD(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (nav.classList.contains("open")) drawer(false); closeDD(); }
    if (e.key === "Tab" && nav.classList.contains("open")) { const f = [...nav.querySelectorAll("a,button")].filter((x) => x.offsetParent); if (!f.length) return; const a = f[0], z = f[f.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } }
  });
  mqD.addEventListener("change", () => { drawer(false, true); closeDD(); });
})();
