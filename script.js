
      const operator = prompt(
        "Enter operator to perform the calculation ( either +, -, * or / ): "
      );

      const number1 = parseFloat(prompt("Enter the first number: "));
      const number2 = parseFloat(prompt("Enter the second number: "));

      let result;
      if (operator == "+") {
        result = number1 + number2;
        window.alert(" Result is " + result);
        document.write(
          "You added " +
            number1 +
            " to " +
            number2 +
            "\n" +
            " and your result is " +
            result
        );
      } else if (operator == "-") {
        result = number1 - number2;
        window.alert(" Result is " + result);
        document.write(
          "You subtracted " +
            number2 +
            " from " +
            number1 +
            " and your result is " +
            result
        );
      } else if (operator == "*") {
        result = number1 * number2;
        window.alert(" Result is " + result);
        document.write(
          "You multiplied " +
            number1 +
            " by " +
            number2 +
            " and your result is " +
            result
        );
      } else if (operator == "/") {
        result = number1 / number2;
        window.alert(" Result is " + result);

        document.write(
          "You divided " +
            number1 +
            " by " +
            number2 +
            " and your result is " +
            result
        );
      } else {
        window.alert("Not a Valid Input");
        document.write("You didn't enter a valid input");
      }
    