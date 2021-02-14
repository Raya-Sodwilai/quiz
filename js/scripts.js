$(document).ready(function() {
  $("#formOne").submit(function() {

    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    let result;
    
    if (question1 === 'phoebe' && 
        question2 === 'phoebe' &&
        question3 === 'phoebe' &&
        question4 === 'phoebe') {
          result = 'You are Phoebe!!';

    } else if (question1 === 'rachel' &&
               question2 === 'rachel' &&
               question3 === 'rachel' &&
               question4 === 'rachel') {
                result = 'You are Rachel!!';
          
    } else if (question1 === 'monica' &&
               question2 === 'monica' &&
               question3 === 'monica' &&
               question4 === 'monica') {
                result = 'You are Monica!!';

    } else if (question1 === 'ross' &&
               question2 === 'ross' &&
               question3 === 'ross' &&
               question4 === 'ross') {
                result = 'You are Ross!!';

    } else if (question1 === 'joey' &&
               question2 === 'joey' &&
               question3 === 'joey' &&
               question4 === 'joey') {
                result = 'You are Joey!!';

    } else if (question1 === 'chandler' &&
               question2 === 'chandler' &&
               question3 === 'chandler' &&
               question4 === 'chandler') {
                result = 'You are Chandler!!';

    } else {
      result = 'You are a combination!';
    }

    $('#quiz h5').text(result);

    event.preventDefault();
  });
});