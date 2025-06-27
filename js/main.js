document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.grid');
  if (grid) {
    // Get the gutter value from CSS variable
    const gutterSize = getComputedStyle(document.documentElement)
      .getPropertyValue('--gutter-size')
      .trim();
    
    // Convert to number (remove 'px' and parse)
    const gutter = parseInt(gutterSize);

    imagesLoaded(grid, function() {
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: gutter,
        percentPosition: true
      });
    });
  }
}); 