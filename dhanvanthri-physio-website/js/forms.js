/* Form validation and demonstration-mode submit. Set CFG.api in config.js to send to a real endpoint. */
(function () {
  const f = document.getElementById("f"); if (!f) return;
  const today = new Date().toISOString().slice(0, 10), dateEl = document.getElementById("date"); if (dateEl) dateEl.min = today;
  const V = {
    tel: (v) => /^(\+?91[\s-]?)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, "").replace(/^\+/, "")) || "Enter a valid 10-digit Indian mobile number.",
    email: (v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
    date: (v) => (v && v >= today) || "Choose today or a future date.",
  };
  f.addEventListener("submit", async (e) => {
    e.preventDefault(); let ok = true;
    for (const el of f.querySelectorAll("input:not([name=website]),select,textarea")) {
      const msg = document.getElementById("e-" + el.id); if (!msg) continue; let r = true;
      if (el.id === "consent") r = el.checked || "Please tick to continue.";
      else if (el.required && !el.value.trim()) r = "This field is required.";
      else if (el.value && V[el.type]) r = V[el.type](el.value);
      msg.textContent = r === true ? "" : r; el.setAttribute("aria-invalid", r !== true);
      if (r !== true && ok) { el.focus(); ok = false; }
    }
    if (!ok) return;
    const o = Object.fromEntries(new FormData(f)), st = document.getElementById("status"), k = f.dataset.kind, sb = document.getElementById("sb");
    if (o.website) return;
    sb.disabled = true; st.className = "load"; st.textContent = "Sending your request…";
    try {
      if (CFG.api) {
        const r = await fetch(CFG.api, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ kind: k, ...o }) }); if (!r.ok) throw 0;
        st.className = "ok"; st.textContent = k === "book" ? "Request received. This is not a confirmed appointment until the clinic confirms it with you." : "Thank you. Your details have been received."; f.reset();
      } else {
        const wa = k === "register" ? "" : ` or <a target="_blank" rel="noopener" href="https://wa.me/${CFG.phone}?text=${encodeURIComponent("Hello, I would like to " + (k === "book" ? "request an appointment" : "contact the clinic") + ". Name: " + o.name + ", Phone: " + o.phone + (o.service ? ", Concern: " + o.service : "") + (o.message ? ", " + o.message : ""))}">message us on WhatsApp</a>`;
        st.className = "ok"; st.innerHTML = `<strong>Demonstration mode:</strong> this website is not yet connected to a booking system, so nothing was saved or sent and no appointment is confirmed. Please call <a href="tel:+917373466622">+91 73734 66622</a>${wa}.`;
      }
    } catch { st.className = "bad"; st.textContent = "We could not send your request. Please call +91 73734 66622 or try again."; }
    sb.disabled = false;
  });
})();
