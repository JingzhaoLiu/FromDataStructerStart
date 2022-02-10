public class ArrayStack <E> implements Stack<E>{
    Array<E> array;
    public ArrayStack(int capacity) {
        array = new Array<>(capacity);
    }
    public ArrayStack(){
        array = new Array<>();
    }

    @Override
    public boolean isEmpty(){
        return array.isEmpty();
    }

    @Override
    public int getSize(){
        return array.getSize();
    }


    @Override
    public E pop() {
        return array.remove(getSize() - 1);
    }

    @Override
    public E peek(){
        return array.getValue(getSize() - 1);
    }

    @Override
    public void push(E value) {
        array.append(value);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("ArrayStack: ");
        sb.append("bottom [");

        for (int i = 0; i < getSize(); ++i) {
            sb.append(array.getValue(i));
            if (i < getSize() - 1) {
                sb.append(", ");
            }
        }

        sb.append("] top");

        return sb.toString();
    }


}
