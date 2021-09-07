/**
 * @author Martin
 */
public class LinkedListStack<E> implements Stack<E>{
    private LinkedList<E> linkedList;

    public LinkedListStack(){
        linkedList =  new LinkedList<>();
    }

    @Override
    public E peek() {
        return linkedList.getFirst();
    }

    @Override
    public E pop() {
        return linkedList.removeFirst();
    }

    @Override
    public void push(E value) {
        linkedList.unshift(value);
    }

    @Override
    public int getSize() {
        return linkedList.getSize();
    }

    @Override
    public boolean isEmpty() {
        return linkedList.getSize() == 0;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Stack:top ");
        sb.append(linkedList);
        return sb.toString();
    }

    public static void main(String[] args) {

        LinkedListStack<Integer> stack = new LinkedListStack<>();

        for(int i = 0 ; i < 10 ; i ++){
            stack.push(i);
            System.out.println(stack);
        }

        stack.pop();
        System.out.println(stack);
    }

}
