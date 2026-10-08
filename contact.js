// The contact link: this project's GitHub "Issues" page, worked out from the site's own address
// (https://<user>.github.io/<repo>/ → https://github.com/<user>/<repo>/issues). Nothing to edit by hand.
(() => {
  const m = /^([^.]+)\.github\.io$/i.exec(location.hostname);
  if (!m) return;
  const repo = location.pathname.split('/').filter(Boolean)[0];
  const url = `https://github.com/${m[1]}/${repo || `${m[1]}.github.io`}/issues`;
  for (const a of document.querySelectorAll('[data-issues], #contact')) { a.href = url; if (a.hasAttribute('data-issues')) a.textContent = url.replace(/^https:\/\//, ''); }
})();
