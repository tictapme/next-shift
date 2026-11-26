if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      target.querySelectorAll('[data-stage]').forEach((row, index) => row.style.setProperty('--stage', index));
      target.classList.add('is-sequenced');
      observer.unobserve(target);
    }
  }, { threshold: 0.25 });

  document.querySelectorAll('[data-demo]').forEach(demo => observer.observe(demo));
}
