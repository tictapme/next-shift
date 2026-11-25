{
  const video = document.querySelector('.hero-office video');
  const control = document.querySelector('.hero-motion');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');

  function updateControl() {
    const state = video.ended ? 'replay' : !video.paused ? 'pause' : video.currentTime ? 'resume' : 'play';
    control.textContent = control.dataset[state];
  }

  function playScene() {
    if (!video.hasAttribute('src')) video.src = video.dataset.src;
    video.play().catch(updateControl);
  }

  video.addEventListener('playing', () => {
    video.parentElement.classList.add('is-playing-video');
    updateControl();
  });
  video.addEventListener('pause', updateControl);
  video.addEventListener('ended', updateControl);
  video.addEventListener('error', () => {
    video.parentElement.classList.remove('is-playing-video');
    control.hidden = true;
  });
  control.addEventListener('click', () => {
    if (video.paused || video.ended) playScene();
    else video.pause();
  });
  motion.addEventListener('change', ({ matches }) => {
    if (matches) video.pause();
  });
  control.hidden = false;
  if (!motion.matches) playScene();
}
