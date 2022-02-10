

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

  public String peek() {
    if(size == 0) return null;
    return this.items[size-1];
  }

  public void clean(){
    size = 0;
  }

  public int getSize() {
    return size;
  }

  public int getCapacity() {
    return capacity;
  }
  
  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("BaseArrayStack: ");
    sb.append("bottom [");

    for (int i = 0; i < getSize(); ++i) {
      sb.append(items[i]);
      if (i < getSize() - 1) {
        sb.append(", ");
      }
    }

    sb.append("] top");

    return sb.toString();
  }


  public static void main(String[] args) {
      BaseStack baseStack = new BaseStack(5);
      baseStack.push("a");
      baseStack.push("b");
      baseStack.push("c");
      baseStack.push("d");
      System.out.println(baseStack.toString());
      baseStack.pop();
      baseStack.pop();
      System.out.println(baseStack.toString());
  }


  
}
