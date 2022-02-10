

public class BrowserStack {

    BaseStack nextStack = new BaseStack(10);
    BaseStack prevStack = new BaseStack(10);


    public boolean next(String value){
      if(nextStack.getSize() == nextStack.getCapacity()) return false;
      nextStack.push(value);
      prevStack.clean();
      return true;
    }

    public boolean prev(){
      if(nextStack.peek() == null) return false;
      prevStack.push(nextStack.pop());
      return true;
    }


    public static void main(String[] args) {
      BrowserStack browserStack  = new BrowserStack();
      browserStack.next("a");
      browserStack.next("b");
      browserStack.next("c");

      browserStack.prev();
      browserStack.prev();
      browserStack.next("d");

    }







}
