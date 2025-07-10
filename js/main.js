document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.grid');
  var msnry = null;

  if (grid) {
    // Get the gutter value from CSS variable
    const gutterSize = getComputedStyle(document.documentElement)
      .getPropertyValue('--gutter-size')
      .trim();
    const gutter = parseInt(gutterSize);

    imagesLoaded(grid, function() {
      msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: gutter,
        percentPosition: true
      });
    });

    // As a fallback, trigger a layout after all images are loaded (in case some are missed)
    window.addEventListener('load', function() {
      if (msnry) {
        msnry.layout();
      }
    });
  }

  // Intersection Observer for lazy loading videos
  const videos = document.querySelectorAll('.lazy-video');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (!video.src) {
            const source = document.createElement('source');
            source.src = video.dataset.src;
            source.type = 'video/mp4';
            video.appendChild(source);
            video.load();
          }
          obs.unobserve(video);
        }
      });
    });
    videos.forEach(video => observer.observe(video));
  }
});