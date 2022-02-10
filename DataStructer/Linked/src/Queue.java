public interface Queue<E> {
    int getSize();
    boolean isEmpty();

    void enqueue(E value);
    E dequeue();
    E getFront();
}
