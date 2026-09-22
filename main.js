(() => {
  const form = document.querySelector(".waitlist-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const role = String(data.get("role") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const subject = encodeURIComponent(`TruckTalk early access — ${role}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, `Role: ${role}`, notes ? `Notes: ${notes}` : ""]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:hello@trucktalk.app?subject=${subject}&body=${body}`;
  });
})();
