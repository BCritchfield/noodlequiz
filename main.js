$('#submit-button').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return $(radio).val();
    }).toArray();
    console.log('choices');
    console.log(choices);
    
    $('.result').fadeIn();
    // now you have an array of choices = ["valueofradiobox1", "valueofradiobox2", "valueofradiobox2"]
    // you'll need to do some calculations with this
    // a naive approach would be to just choose the most common option - seems reasonable
  });

$('.answer-div').on('click', function(e) {
  $(this).siblings().addClass('unchecked');
  $(this).removeClass('unchecked');
  $(this).addClass('checked');
})