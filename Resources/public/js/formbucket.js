$(function() {
  $('form[data-formbucket]').each(function(){
    var $this = $(this);
    var options = $this.data('options');

    $($this).submit(function(event) {
    event.preventDefault();

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
      data: $($this).serialize(),
      beforeSend: function() {
      subscribeButton.prop('disabled', 'disabled');
    }
    })

    
    .done(function(response) {
      //alert('Thanks for subscribing!');
      subscribeForm.hide();
      $(options.successClass).show();
    })

    .fail(function(response) {
      //alert('Dang, something went wrong!');
      $(options.errorClass).show();
      subscribeButton.prop('disabled', false);
    })

  });
  });
});

   