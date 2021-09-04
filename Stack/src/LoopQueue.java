public class LoopQueue <E> implements Queue<E>{
    private E[] data;
    private int front, tail;
    private int size;

    public LoopQueue(int capacity) {
        data = (E[])new Object[capacity + 1];
        front = 0;
        tail  = 0;
        size = 0;
    }
    public LoopQueue(){
        this(10);
    }

    public int getCapacity(){
        return data.length -1;
    }

    @Override
    public boolean isEmpty(){
        return front == tail;
    }

    @Override
    public int getSize(){
        return size;
    }

    @Override
    public void enqueue(E e) {
        // 判断错了 
        if((tail + 1) % data.length == front) {
            resize(getCapacity() * 2);
        }

        data[tail] = e;
        tail = (tail + 1) % data.length;
        ++size;
        // if((tail + 1) % data.length == front)
        //     resize(getCapacity() * 2);

        // data[tail] = e;
        // tail = (tail + 1) % data.length;
        // size ++;
    }

    @Override
    public E dequeue() {
        if(isEmpty()) {
            throw new IllegalArgumentException("is empty");
        }

        E value = data[front];
        data[front] = null;
        front = (front + 1) % data.length;
        --size;
        if(size == getCapacity() /4) {
         resize(getCapacity() / 2);
        }
        return value;
    }

    @Override
    public E getFront() {
        if(isEmpty()) {
            throw new IllegalArgumentException("is empty");
        }

        return data[front];
    }



    private void resize(int newCapacity) {
      if(newCapacity < 5) {
          return;
      }
      E[] newData  = (E[])new Object[newCapacity + 1];
      for (int i = 0; i < size; ++i) {
          newData[i] = data[(front + i) % data.length];
      }
      data = newData;
      front = 0;
      tail = size;
       
    }


    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(String.format("Array: size = %d, capacity = %d \n", size, getCapacity()));
        sb.append("front [");

        // for (int i = front; i < size; ++i) {
        //     sb.append(data[i]);
        //     if (i < size - 1) {
        //         sb.append(", ");
        //     }
        // }

        int i = front;
        while(i != tail) {
            sb.append(data[i]);
            i = (i + 1) % data.length;
            if(i != tail) {
                sb.append(", ");
            }
        }

        sb.append("] rear");

        return sb.toString();
    }

    public static void main(String[] args) {
        LoopQueue<Integer> queue = new LoopQueue<>();
        for (int i = 0; i < 5; ++i) {
            queue.enqueue(i);
            System.out.println(queue);
        }

        System.out.println(queue.dequeue());
        System.out.println(queue.getFront());

        System.out.println(queue);
    }
}
