public class ArrayQueue<E> implements Queue<E> {
    private Array<E> array;

    public ArrayQueue(int capacity) {
        array = new Array<>(capacity);
    }

    public ArrayQueue() {
        array = new Array<>();
    }

    @Override
    public int getSize() {
        return array.getSize();
    }

    @Override
    public boolean isEmpty() {
        return array.isEmpty();
    }

    @Override
    public void enqueue(E value) {
        array.append(value);
    }

    @Override
    public E dequeue() {
       return array.remove(0);
    }

    @Override
    public E getFront() {
       return array.getValue(0);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("ArrayQueue:");
        sb.append("front [");
        for(int i =0; i< array.getSize();++i){
            sb.append(array.getValue(i));
            if(i < array.getSize() - 1){
                sb.append(", ");
            }
        }
        sb.append("] tail");

        return sb.toString();
    }

}
