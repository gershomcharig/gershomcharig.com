console.log('Simple website loaded.');

document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.grid');
  if (grid) {
    imagesLoaded(grid, function() {
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 16,
        percentPosition: true
      });
    });
  }
}); 