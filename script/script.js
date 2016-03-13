(function($) {
  var app = {
    init: function() {
      $('#sidebar li a').on('click', this.selectPhoto);
    },

    selectPhoto: function(e) {
      var $this = $(this),
          img = $('#photos img');

      if ($this.hasClass('active')) {
        return;
      }

      $this.closest('#sidebar').find('a.active').removeClass('active');
      $this.addClass('active');


    }
  };

  window.app = app;
  app.init();
}($));
