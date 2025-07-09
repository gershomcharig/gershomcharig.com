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

      msnry.on('layoutComplete', function() {
        lazysizes.trigger();
      });
    });

    // Debounce function to avoid excessive layout calls
    function debounce(fn, delay) {
      let timer = null;
      return function() {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
      };
    }

    // Helper to check if all images in the grid are loaded
    function allImagesLoaded() {
      var imgs = grid.querySelectorAll('img');
      return Array.from(imgs).every(img => img.complete && img.naturalHeight !== 0);
    }

    // Listen for lazyloaded event on the grid and debounce layout
    var debouncedLayout = debounce(function() {
      if (msnry) {
        msnry.layout();
      }
      // If all images are loaded, trigger imagesLoaded to ensure final layout
      if (allImagesLoaded() && msnry) {
        imagesLoaded(grid, function() {
          msnry.layout();
        });
      }
    }, 100);

    grid.addEventListener('lazyloaded', debouncedLayout);

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