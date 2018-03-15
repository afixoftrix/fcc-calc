$(document).ready(function() {

  //model
  var calc = {
      screen: function() {
        return $('#mainScreen')[0].innerText;
      },
      subScreen: $('.subScreen')[0].innerText,
      operators: ['+', '-', '÷', '&times;'],
      evaluate: function(screen) {
        try {
          return eval(screen);
        }
        catch (err) {
          screen.append("ERROR!");
        }
      }
    }

    var screen = $('#mainScreen'),
      key = $('.key'),
      inp = $('.inp'),
      ops = $('.ops');


    //inputs for user operation
    inp.click(function() {
      input = this.innerHTML;
      //basic input.
      console.log(input, typeof input);
      if (input == "÷"){
        input = "/"
      }
      if (input == "×"){
        input = "*"
      }
      console.log(input, typeof input);
      screen.append(input);

    });

    //Calculator operations
    ops.click(function() {
      input = this.innerHTML;
      //Clear and Clear All Handling.
      if (input == "CE" || input == "C") {
        screen.html('');
      }

      if (input == "=") {
        console.log(calc.evaluate(calc.screen()));
        const answer = calc.evaluate(calc.screen());
        console.log(answer);
        screen.html('');
        screen.append(answer)
      }

    });

    console.log("ready!");
  });
