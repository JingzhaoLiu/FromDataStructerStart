/**
 * @author Martin
 */
public class Array<E> {
  // 私有变量 data size
  private E[] data;
  private int size;

  // 构造函数
  public Array(int capacity) {
    data = (E[])new Object[capacity];
    size = 0;
  }

  // 无参数构造函数
  public Array() {
    this(10);
  }

  // get size
  public int getSize() {
    return size;
  }

  // get capacity capacity
  public int getCapacity() {
    return data.length;
  }

  // isEmpty
  public boolean isEmpty() {
    return size == 0;
  }

  public void append(E value) {
    // if (size == getCapacity()) {
    //   // data = new int[getCapacity() * 2];
    //   throw new IllegalStateException("append failed; Capacity is fill");
    // }
    // data[size] = value;
    // ++size;

    insert(size, value);
  }

  public void insert(int index, E value) {
    // index 合法
    if(index < 0 || index > size){
      throw new IllegalStateException("insert failed; index is error index < 0 and index > size");
    }


    if (size == getCapacity()) {
      // data = new int[getCapacity() * 2];
      // throw new IllegalStateException("append  failed; Capacity is fill");
      resize(2 * getCapacity());
    }



    // move element
    for (int i = size; i > index; --i) {
      data[i] = data[i - 1];
    }

    // insert
    data[index] = value;
    ++size;
  }

  public void unshift(E value) {
    insert(0, value);
  }

  E getValue(int index){
    if (index < 0 || index > size) {
       throw new IllegalStateException("getValue function is failed. index is error.");
    }
    return data[index];
  }

  void setValue(int index, E value) {
    if (index < 0 || index > size) {
      throw new IllegalStateException("setValue function is failed. index is error.");
    }
    data[index] = value;
  }

  // indexOf
  public int indexOf(E value) {
    for (int i = 0; i < size; ++i) {
      if(data[i].equals(value)) {
        return i;
      }
    }

    return -1;
  }

  public int indexOf(E value, int index) {
    for (int i = index; i < size; ++i) {
      if (data[i].equals(value)) {
        return i;
      }
    }

    return -1;
  }

  // has
  public boolean contains(E value) {
    // for (int i = 0; i < size; ++i) {
    //   if (value == data[i]) {
    //     return true;
    //   }
    // }
    // return false;
    return indexOf(value) != -1;
  }

  // delete
  public E remove(int index) {
    if (index < 0 || index >= size) {
      throw new IllegalStateException("setValue function is failed. index is error.");
    }

    E value = data[index];

    for (int i = index; i < size - 1; ++i) {
      data[i] = data [i + 1];
    }
    // data[size] = 0;// 不需要 访问不到 添加会覆盖 一开始的想法是打印会打印出来 但是打印也是根据size判断的所以不会打印出来
    // 包装类值可以设置为null 让垃圾回收
    // 边界问题一定要想好
    --size;
    data[size] = null;

    if(size == getCapacity() / 4) {
      resize(getCapacity()/2);
    }

    return value;
  }

  public boolean removeElement(E value) {
    int index = indexOf(value);
    if(index != -1) {
      return remove(index).equals(value);
    }else{
      return false;
    }
  }

  public void removeAllElement(E value) {
    int index = 0;

    while(index < size) {
      index = indexOf(value, index);
      if(index != -1) {
        remove(index);
      }else{
        break;
      }
    }
  }

  private void resize(int newCapacity){
    // capacity
    if (newCapacity < 5) {
      return;
    }
    E[] newDate = (E[])new Object[newCapacity];
    for (int i = 0;i < size; ++i) {
      newDate[i] = data[i];
    }
    data = newDate;
  }



  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append(String.format("Array: size = %d, capacity = %d \n", size, getCapacity()));
    sb.append("[");

    for (int i = 0; i < size; ++i) {
      sb.append(data[i]);
      if( i < size - 1 ) {
        sb.append(", ");
      }
    }

    sb.append("]");

    return sb.toString();
  }

}
