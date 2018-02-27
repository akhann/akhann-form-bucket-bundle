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
        event.preventDefault();

        if (settings.validate && !settings.validate(this)) {
            return;
        }

        var subscribeForm = $(this);
        var subscribeButton = $('input[type=submit]', subscribeForm);
        subscribeButton.prop('disabled', false);
        var classSuccess = '.success';
        var classError = '.error';
          
        $.ajax({
          url: subscribeForm.prop('action'),
          type: 'POST',
          crossDomain: true,
          headers : {
            'accept' : 'application/javascript',
          },
          data: $($(this)).serialize(),
          beforeSend: function() {
          subscribeButton.prop('disabled', 'disabled');
        }
        })

        .done(function(response) {
          //alert('Thanks for subscribing!');
          subscribeForm.hide();
          $(settings.successClass).show();
        })

        .fail(function(response) {
          //alert('Dang, something went wrong!');
          $(settings.errorClass).show();
          subscribeButton.prop('disabled', false);
        })

       });
    });
  };
}( jQuery ));
