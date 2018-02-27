(function ( $ ) {
  $.fn.akFormBucket = function(options) {
    return this.each(function() {

      var settings = $.extend({
        //deafult settings
        "successClass": ".success", 
        "errorClass": ".error" ,
        "validate": null
      }, options);

      $(this).submit(function(event) {
        console.log('submit form')
        event.preventDefault();

        if (settings.validate && !settings.validate(this)) {
            return;
        }

        var subscribeForm = $(this);
        var subscribeButton = $('input[type=submit],button[type=submit]', subscribeForm);
        subscribeButton.prop('disabled', false);
        var classSuccess = '.success';
        var classError = '.error';
          
        subscribeButton.prop('disabled', 'disabled');
        $.ajax({
          url: subscribeForm.prop('action'),
          type: 'POST',
          crossDomain: true,
          headers : {
            'accept' : 'application/javascript',
          },
          data: $($(this)).serialize(),
          beforeSend: function() {
        }
        })

        .done(function(response) {
          subscribeForm.hide();
          $(settings.successClass).show();
        })

        .fail(function(response) {
          $(settings.errorClass).show();
          subscribeButton.prop('disabled', false);
        })

       });
    });
  };
}( jQuery ));