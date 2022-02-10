public class Arr {
  private int[] data;
  private int size;

  // 构造函数
  public Arr(int capacity) {
    data = new int[capacity];
    size = 0;
  }

  public Arr() {
    this(20);
  }

  // length
  public int getSize() {
    return size;
  }

  // capacity
  public int getCapacity() {
    return data.length;
  }

  // isEmpty
  public boolean isEmpty() {
    return size == 0;
  }

  // 增 append insert unshift
  public void append(int value) {
    // if (size == getCapacity()) {
    //   throw new IllegalArgumentException("append failed. size is small.");
    // }
    // data[size] = value;
    // ++size;
    insert(size, value);
  }

  public void unshift(int value) {
    insert(0,value);
  }

  public void insert(int index,int value) {
    if (index < 0 || index > size) {
      throw new IllegalArgumentException("insert failed. index is error.");
    }

    if (size == getCapacity()) {
      throw new IllegalArgumentException("insert failed. size is small.");
    }

    // move element
    for (int i = size; i > index; --i) {
      data[i] = data[i - 1];
    }
    // insert
    data[index] = value;
    ++size;
  }

  // 删 remove removeElement removeAllElement
  public int remove(int index) {
    if (index < 0 || index >= size) {
       throw new IllegalArgumentException("remove failed. index is error.");
    }

    int value = data[index];
    
    for (int i = index; i < size - 1; ++i) {
      data[i] = data[i + 1];
    }

    --size;

    return value;
  }

  public boolean removeElement(int value) {
    int index = indexOf(value);
    if(index != -1){
      return remove(index) == value;
    }
    
    return false;
    
    
  }

  public void removeAllElement(int value) {
    int index = 0;
    while (index < size) {
      index = indexOf(value, index);
      if(index != -1) {
        remove(index);
      }else{
        break;
      }
    }
  }


  // 改 setValue
  void setValue(int index, int value) {
    if (index < 0 || index > size) {
      throw new IllegalArgumentException("setValue function failed. index is error");
    }
    data[index] = value;
  }

  // 查 getValue indexOf indexOf() contains
  int getValue(int index) {
    if (index < 0 || index > size) {
      throw new IllegalArgumentException("setValue function failed. index is error");
    }
    return data[index];
  }

  public int indexOf(int value) {
    for (int i = 0; i < size; ++i) {
      if (data[i] == value) {
        return i;
      }
    }
    return -1;
  }

  public int indexOf(int value, int index) {
    for (int i = index; i < size; ++i) {
      if (data[i] == value) {
        return i;
      }
    }
    return -1;
  }

  public boolean contains(int value) {
    return indexOf(value) != -1;
  }

  // toString
  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(String.format("Array: size = %d, capacity = %d \n", size, getCapacity()));
    sb.append("[");
    for (int i = 0; i < size; ++i) {
      sb.append(data[i]);
      if (i < size - 1) {
        sb.append(", ");
      }
    }
    sb.append("]");
    return sb.toString();
  }

}
