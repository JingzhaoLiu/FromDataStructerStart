public class ComputeAnything {
  public static void main(String[] args) {
    System.out.println("empty:" + evaluateExpression(""));
    System.out.println("111:" + evaluateExpression("111"));
    System.out.println("111:" + evaluateExpression("(111)"));
    System.out.println("7+3*2-4/2=" + evaluateExpression("17+3*2-4/2"));
    System.out.println("7+3*2-4/2=" + evaluateExpression("7 + 3 * 2 - 4 /2 "));
    System.out.println("7+3*(6-4)/2=" + evaluateExpression("7+3*(6-4)/2"));
    System.out.println("6*(2+3)*8+5=" + evaluateExpression("6*(2+3)*8+5"));

    // 不符合规范的 返回当前数字
    System.out.println("222+:" + evaluateExpression("222+"));
    System.out.println("333*:" + evaluateExpression("333*"));
    System.out.println("444/:" + evaluateExpression("444/"));
  }

  public static int evaluateExpression(String expression) {
    String str = expression.replaceAll("\\s*", "");
    if (str.length() == 0) {
      return 0;
    }
    ArrayStack<Integer> numberStack = new ArrayStack<>(10);
    ArrayStack<Character> operatorStack = new ArrayStack<>(10);

    Array<String> charArr = strCoverArray(str);
    for (int i = 0; i < charArr.getSize(); ++i) {
      String c = charArr.getValue(i);
      // 空字符串
      if (c.trim().equals("")) {
        continue;
      } else if (c.trim().equals("+") || c.trim().equals("-")) {
        while (!operatorStack.isEmpty() && (operatorStack.peek() == '+' || operatorStack.peek() == '-'
            || operatorStack.peek() == '*' || operatorStack.peek() == '/')) {
          processOneOperator(numberStack, operatorStack);
        }
        operatorStack.push(c.charAt(0));
      } else if (c.trim().equals("*") || c.trim().equals("/")) {
        while (!operatorStack.isEmpty() && (operatorStack.peek() == '*' || operatorStack.peek() == '/')) {
          processOneOperator(numberStack, operatorStack);
        }
        operatorStack.push(c.charAt(0));
      } else if (c.trim().equals("(")) {
        operatorStack.push('(');
      } else if (c.trim().equals(")")) {
        while (operatorStack.peek() != '(') {
          processOneOperator(numberStack, operatorStack);
        }
        operatorStack.pop();
      } else {
        numberStack.push(Integer.parseInt(c));
      }
    }

    while (!operatorStack.isEmpty()) {
      processOneOperator(numberStack, operatorStack);
    }

    return numberStack.pop();
  }

  public static void processOneOperator(ArrayStack<Integer> numberStack, ArrayStack<Character> operatorStack) {
    char op = operatorStack.pop();
    int number1, number2;
    if (!numberStack.isEmpty()) {
      number1 = numberStack.pop();
    } else {
      throw new IllegalArgumentException("processOneOperator is failed");
    }
    if (!numberStack.isEmpty()) {
      number2 = numberStack.pop();
    } else {
      numberStack.push(number1);
      return;
      // throw new IllegalArgumentException("processOneOperator is failed");
    }

    if (op == '+') {
      numberStack.push(number2 + number1);
    } else if (op == '-') {
      numberStack.push(number2 - number1);
    } else if (op == '*') {
      numberStack.push(number2 * number1);
    } else if (op == '/') {
      numberStack.push(number2 / number1);
    }
  }

  public static Array<String> strCoverArray(String str) {
    Array<String> arr = new Array<>(10);
    String s = "";
    for (int i = 0; i < str.length(); ++i) {
      String value = str.substring(i, i + 1);
      if (value.equals("+") || value.equals("-") || value.equals("*") || value.equals("/") || value.equals("(")
          || value.equals(")")) {
        arr.append(s);
        arr.append(value);
        s = "";
      } else {
        s += value;
      }
    }
    arr.append(s);
    return arr;
  }
}
