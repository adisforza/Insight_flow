export const clientScript: string = `
  // ── Mobile Hamburger ──
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('nav-drawer');
  const drawerClose = document.getElementById('drawer-close');

  function openDrawer() { drawer && drawer.classList.add('open'); }
  function closeDrawer() { drawer && drawer.classList.remove('open'); }

  hamburger && hamburger.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawer && drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  // ── Scroll Reveal ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ── Stats Counter Animation ──
  const statNums = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent || '';
        const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
        const suffix = raw.replace(/[0-9.]/g, '');
        if (isNaN(num)) return;
        let start = 0;
        const duration = 1800;
        const step = (timestamp, startTime) => {
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = (num < 10
            ? (ease * num).toFixed(1)
            : Math.floor(ease * num)) + suffix;
          if (progress < 1) requestAnimationFrame(ts => step(ts, startTime));
        };
        requestAnimationFrame(ts => step(ts, ts));
        statsObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statsObserver.observe(el));

  // ── Contact Form Validation & Submission ──
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  function showError(id, show) {
    const el = document.getElementById(id);
    const input = document.getElementById(id.replace('-error', ''));
    if (el) el.classList.toggle('show', show);
    if (input) input.classList.toggle('error', show);
  }

  function validateForm(data) {
    let valid = true;
    if (!data.get('name')?.toString().trim()) { showError('name-error', true); valid = false; }
    else showError('name-error', false);
    if (!data.get('business')?.toString().trim()) { showError('business-error', true); valid = false; }
    else showError('business-error', false);
    const email = data.get('email')?.toString().trim() || '';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) { showError('email-error', true); valid = false; }
    else showError('email-error', false);
    if (!data.get('message')?.toString().trim()) { showError('message-error', true); valid = false; }
    else showError('message-error', false);
    return valid;
  }

  form && form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (!validateForm(data)) return;

    if (submitBtn) { submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        form.style.display = 'none';
        if (successMsg) successMsg.classList.add('show');
      } else {
        throw new Error('Server error');
      }
    } catch {
      if (submitBtn) { submitBtn.textContent = 'Send Message →'; submitBtn.disabled = false; }
      alert('Something went wrong. Please try again.');
    }
  });
`;