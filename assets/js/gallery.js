(function () {
  var thumbs = document.querySelectorAll('.gallery-thumb');
  if (!thumbs.length) return;

  var lb = document.getElementById('lightbox');
  if (!lb) return;

  var images = Array.from(thumbs).map(function (el) {
    return {
      src: el.querySelector('img').src,
      caption: el.getAttribute('data-caption') || ''
    };
  });

  var current = 0;
  var img = document.getElementById('lightbox-img');
  var counter = lb.querySelector('.lightbox-counter');

  // Add caption element to lightbox if not already present
  var captionEl = lb.querySelector('.lightbox-caption');
  if (!captionEl) {
    captionEl = document.createElement('div');
    captionEl.className = 'lightbox-caption';
    lb.querySelector('.lightbox-img-wrap').after(captionEl);
  }

  function open(i) {
    current = i;
    img.src = images[i].src;
    counter.textContent = (i + 1) + ' / ' + images.length;
    captionEl.textContent = images[i].caption;
    lb.setAttribute('aria-hidden', 'false');
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.setAttribute('aria-hidden', 'true');
    lb.classList.remove('active');
    document.body.style.overflow = '';
  }

  thumbs.forEach(function (el, i) {
    el.addEventListener('click', function () { open(i); });
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', function () {
    open((current - 1 + images.length) % images.length);
  });
  lb.querySelector('.lightbox-next').addEventListener('click', function () {
    open((current + 1) % images.length);
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open((current - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') open((current + 1) % images.length);
  });
})();
