$(document).ready(function () {

  //model
  var calc = {
    screen: function () {
      return $('#mainScreen')[0].innerText;
    },
    subScreen: $('.subScreen')[0].innerText,
    evaluate: function (screen) {
      try {
        return eval(screen);
      } catch (err) {
        if (err) return "Error!";
      }
        
    }
  }

  var screen = $('#mainScreen'),
    key = $('.key'),
    inp = $('.inp'),
    ops = $('.ops'),
    mem = "";


  //inputs for user operation
  inp.click(function () {
    input = this.innerHTML;
    var val  = input;
    //basic input.
    if (input == "÷") {
      screen.append(input);
      mem = mem.concat("/")
    } else if (input == "×") {
      screen.append(input);
      mem = mem.concat("*")
    } else if (input == "log"){
      screen.append(input + "(");
      mem = mem.concat("Math.log10(")
    } else if (input == "ln") {
      screen.append(input + "(");
      mem = mem.concat("Math.log(")
    } else if (input == "e") {
      let exp = ''
      exp = exp.concat("*" + input);
      console.log(exp);
      screen.append(input);
      mem = mem.concat(`Math.exp(${exp})`);
    } else {
      screen.append(input);
      mem = mem.concat(val);
      console.log(mem);
    }
  });

  //Calculator operations
  ops.click(function () {
    input = this.innerHTML;
    //Clear and Clear All Handling.
    if (input == "CE" || input == "C") {
      screen.html('');
      mem = "";
    }

    if (input == "=") {
      console.log(mem);
      const answer = calc.evaluate(mem);
      console.log(answer, typeof answer);

      screen.html('');
      screen.append(answer);
      
    }
  });

  console.log("ready!");
});