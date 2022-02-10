import java.util.Arrays;

public class Compute {
  public static void main(String[] args) {
    // System.out.println("empty:" + evaluateExpression(""));
    // System.out.println("111:" + evaluateExpression("111"));
    // System.out.println("222+:" + evaluateExpression("222+"));
    // System.out.println("333*:" + evaluateExpression("333*"));
    // System.out.println("444/:" + evaluateExpression("444/"));
    System.out.println("7+3*2-4/2=" + evaluateExpression("7+3*2-4/2"));
    System.out.println("7+3*2-4/2=" + evaluateExpression("7 + 3 * 2 - 4 /2 "));
    System.out.println("7+3*(6-4)/2=" + evaluateExpression("7+3*(6-4)/2"));
    System.out.println("6*(2+3)*8+5=" + evaluateExpression("6*(2+3)*8+5"));
  }

  public static int evaluateExpression(String expression) {
    ArrayStack<Integer> numberStack = new ArrayStack<>();
    ArrayStack<Character> operatorStack = new ArrayStack<>();

    String[] charArr = expression.split("");
    Arrays.toString(charArr);
    for (int i = 0; i < charArr.length; ++i) {
      String c = charArr[i];
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
    int number1 = numberStack.pop();
    int number2 = numberStack.pop();

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
}
