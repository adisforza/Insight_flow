export const clientScript: string = `
  // ══════════════════════════════════════════
  // CUSTOM CURSOR + TRAIL
  // ══════════════════════════════════════════
  (function() {
    // Create cursor elements
    const dot   = document.createElement('div'); dot.id   = 'cursor-dot';
    const ring  = document.createElement('div'); ring.id  = 'cursor-ring';
    const trail = document.createElement('div'); trail.id = 'cursor-trail';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.appendChild(trail);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;
    let raf;

    // Trail dots pool
    const TRAIL_COUNT = 10;
    const trailDots = [];
    const trailPositions = Array.from({ length: TRAIL_COUNT }, () => ({ x: mouseX, y: mouseY }));
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const d = document.createElement('div');
      d.className = 'cursor-trail-dot';
      const size = 3 - (i * 0.18);
      const opacity = 0.5 - (i * 0.045);
      d.style.cssText = 'width:' + size + 'px;height:' + size + 'px;opacity:' + opacity;
      trail.appendChild(d);
      trailDots.push(d);
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

    // Hover detection
    const hoverTargets = 'a, button, [role="button"], input, textarea, select, label, .feat-card, .pricing-card, .workflow-step';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest(hoverTargets)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest && e.target.closest(hoverTargets)) {
        document.body.classList.remove('cursor-hover');
      }
    });

    function animate() {
      // Dot: instant
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';

      // Ring: lerp
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';

      // Trail: each follows the previous
      trailPositions.unshift({ x: mouseX, y: mouseY });
      trailPositions.pop();
      trailDots.forEach((d, i) => {
        const pos = trailPositions[i];
        d.style.left = pos.x + 'px';
        d.style.top  = pos.y + 'px';
      });

      raf = requestAnimationFrame(animate);
    }
    animate();

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    });
  })();

  // ══════════════════════════════════════════
  // RIPPLE ON CLICK
  // ══════════════════════════════════════════
  document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.style.cssText = [
      'position:fixed',
      'border-radius:50%',
      'pointer-events:none',
      'z-index:9996',
      'width:8px',
      'height:8px',
      'background:rgba(248,123,27,.5)',
      'left:' + e.clientX + 'px',
      'top:'  + e.clientY + 'px',
      'transform:translate(-50%,-50%) scale(1)',
      'transition:transform .6s ease, opacity .6s ease',
      'opacity:1',
    ].join(';');
    document.body.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = 'translate(-50%,-50%) scale(18)';
      ripple.style.opacity   = '0';
    });
    setTimeout(() => ripple.remove(), 700);
  });

  // ══════════════════════════════════════════
  // MAGNETIC BUTTONS
  // ══════════════════════════════════════════
  (function() {
    const els = document.querySelectorAll('.btn-primary, .btn-ghost, .nav-cta, .btn-plan, .btn-submit');
    els.forEach(el => {
      el.addEventListener('mousemove', function(e) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = (e.clientX - cx) * 0.28;
        const dy = (e.clientY - cy) * 0.28;
        el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      });
      el.addEventListener('mouseleave', function() {
        el.style.transform = '';
        el.style.transition = 'transform .4s cubic-bezier(.25,.46,.45,.94)';
        setTimeout(() => el.style.transition = '', 400);
      });
    });
  })();

  // ══════════════════════════════════════════
  // PARALLAX HERO ORBS ON MOUSEMOVE
  // ══════════════════════════════════════════
  (function() {
    const orb1 = document.querySelector('.orb-1');
    const orb2 = document.querySelector('.orb-2');
    const orb3 = document.querySelector('.orb-3');
    if (!orb1) return;
    document.addEventListener('mousemove', function(e) {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      const tx1 = 'translateX(calc(-50% + ' + (dx * -18) + 'px)) translateY(' + (dy * -12) + 'px)';
      const tx2 = 'translate('  + (dx * 14) + 'px,' + (dy * 10) + 'px)';
      const tx3 = 'translate('  + (dx * -22) + 'px,' + (dy * 16) + 'px)';
      if (orb1) orb1.style.transform = tx1;
      if (orb2) orb2.style.transform = tx2;
      if (orb3) orb3.style.transform = tx3;
    });
  })();

  // ══════════════════════════════════════════
  // MOBILE HAMBURGER
  // ══════════════════════════════════════════
  const hamburger  = document.getElementById('hamburger');
  const drawer     = document.getElementById('nav-drawer');
  const drawerClose = document.getElementById('drawer-close');

  function openDrawer()  { drawer && drawer.classList.add('open'); }
  function closeDrawer() { drawer && drawer.classList.remove('open'); }

  hamburger  && hamburger.addEventListener('click', openDrawer);
  drawerClose && drawerClose.addEventListener('click', closeDrawer);
  drawer     && drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });

  // ══════════════════════════════════════════
  // SCROLL REVEAL
  // ══════════════════════════════════════════
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ══════════════════════════════════════════
  // STATS COUNTER ANIMATION
  // ══════════════════════════════════════════
  const statNums = document.querySelectorAll('.stat-num');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent || '';
        const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
        const suffix = raw.replace(/[0-9.]/g, '');
        if (isNaN(num)) return;
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

  // ══════════════════════════════════════════
  // CONTACT FORM
  // ══════════════════════════════════════════
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('form-success');

  function showError(id, show) {
    const el    = document.getElementById(id);
    const input = document.getElementById(id.replace('-error', ''));
    if (el)    el.classList.toggle('show', show);
    if (input) input.classList.toggle('error', show);
  }

  function validateForm(data) {
    let valid = true;
    if (!data.get('name')?.toString().trim())     { showError('name-error',     true); valid = false; }
    else showError('name-error', false);
    if (!data.get('business')?.toString().trim()) { showError('business-error', true); valid = false; }
    else showError('business-error', false);
    const email = data.get('email')?.toString().trim() || '';
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) { showError('email-error', true); valid = false; }
    else showError('email-error', false);
    if (!data.get('message')?.toString().trim())  { showError('message-error',  true); valid = false; }
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
