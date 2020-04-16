$('#submit-button').on('click', function(e) {
    // gather all checked radio-button values
    var choices = $("input[type='radio']:checked").map(function(i, radio) {
      return parseInt($(radio).val(), 10);
    }).toArray();

    let result = choices.reduce(function(a, b){
      return a + b;
    }, 0);

    if (result > 5){
      $('#result3').addClass('display');
      $('#result2').addClass('hide');
      $('#result1').addClass('hide');
    }

    else if (result > 3){
      $('#result2').addClass('display');
      $('#result1').addClass('hide');
      $('#result3').addClass('hide');
    }

    else{
      $('#result1').addClass('display');
      $('#result2').addClass('hide');
      $('#result3').addClass('hide');

    }

    
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