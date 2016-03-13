(function($) {
  var app = {
    init: function() {
      $('#sidebar li a').on('click', this.selectPhoto);
    },

    selectPhoto: function(e) {
      var $this = $(this),
          imgContainer = $('#photos img'),
          newImageUrl = $this.data('url'),
          newImageName = $this.data('name');

      if ($this.hasClass('active')) {
        return;
      }

      $this.closest('#sidebar').find('a.active').removeClass('active');
      $this.addClass('active');

      imgContainer.attr({
        src: newImageUrl,
        alt: newImageName,
        title: newImageName
      });
    }
  };

  window.app = app;
  app.init();
}($));
