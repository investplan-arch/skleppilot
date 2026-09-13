const CONTACT_EMAIL = "kontakt@skleppilot.pl"; // Zmień po uruchomieniu skrzynki firmowej.

document.getElementById("leadForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name") || "";
  const email = form.get("email") || "";
  const company = form.get("company") || "";
  const url = form.get("url") || "";
  const message = form.get("message") || "";

  const subject = encodeURIComponent(`Wycena sklepu — ${company || name}`);
  const body = encodeURIComponent(
`Dzień dobry,

proszę o wycenę sklepu internetowego.

Imię i nazwisko: ${name}
E-mail: ${email}
Firma / marka: ${company}
Strona / social / marketplace: ${url}

Co chcę sprzedawać:
${message}

Pozdrawiam,
${name}`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
