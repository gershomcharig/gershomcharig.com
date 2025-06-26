console.log('Simple website loaded.');

document.addEventListener('DOMContentLoaded', function() {
  var grid = document.querySelector('.grid');
  if (grid) {
    new Masonry(grid, {
      itemSelector: '.grid-item',
      columnWidth: 300,
      gutter: 16,
      fitWidth: true
    });
  }
}); 