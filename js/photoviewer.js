$('[data-gallery=cloudlaw]').click(function (e) {
  e.preventDefault();

  var items = [],
    // get index of element clicked
    options = {
      index: $(this).index(),
    };

  // looping to create images array
  $('[data-gallery=cloudlaw]').each(function () {
    let src = $(this).attr('href');
    items.push({
      src: src,
    });
  });

  new PhotoViewer(items, options);
});

$('[data-gallery=lawai]').click(function (e) {
  e.preventDefault();

  var items = [],
    // get index of element clicked
    options = {
      index: $(this).index(),
    };

  // looping to create images array
  $('[data-gallery=lawai]').each(function () {
    let src = $(this).attr('href');
    items.push({
      src: src,
    });
  });

  new PhotoViewer(items, options);
});
