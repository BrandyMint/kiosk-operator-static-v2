// Here we listen globally emitted update events and reinit some libs

$(document).on('ready page:update', function() {
  $('[data-toggle="popover"]').popover();
  $('.input-group.date').datetimepicker({ format: 'YYYY-MM-DDTHH:mm:ssZ' });
});