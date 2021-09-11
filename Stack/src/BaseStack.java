import java.util.Arrays;

public class BaseStack {

  private String[] items;
  private int size;
  private int capacity;

  public BaseStack(int capacity){
    this.items = new String[capacity];
    this.size = 0;
    this.capacity = capacity;
  }

  public BaseStack(){
    this(10);
  }

  public boolean push(String value){
    if(size == capacity) {
      return false;
    }
    items[size] = value;
    ++size;
    return true;
  }

  public String pop(){
    if(size == 0) {
      return null;
    }
    String value = items[size - 1];
    --size;
    items[size] = null;
    return value;
  }


  public static void main(String[] args) {
      BaseStack baseStack = new BaseStack(5);
      baseStack.push("a");
      baseStack.push("b");
      baseStack.push("c");
      baseStack.push("d");
      System.out.println("bottom" + Arrays.toString(baseStack.items) + "top");
      baseStack.pop();
      baseStack.pop();
      System.out.println("bottom" + Arrays.toString(baseStack.items) + "top");
  }


  
}
