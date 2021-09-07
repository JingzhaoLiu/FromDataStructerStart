/**
 * @author Martin
 */
public class LinkedList<E> {

    private class Node {
        public E e;
        public Node next;

        public Node(E e, Node next) {
            this.e = e;
            this.next = next;
        }

        public Node(E e) {
            this(e, null);
        }

        public Node() {
            this(null, null);
        }

        @Override
        public String toString() {
            return e.toString();
        }

    }


    private Node dummyHead;
    private int size;

    public LinkedList() {
        dummyHead = new Node();
        size = 0;
    }


    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public void insert(int index, E e) {
        if (index < 0 || index > size) {
            throw new IllegalArgumentException("Insert failed.index is error.");
        }

        Node prev = dummyHead;
        for (int i = 0; i < index; ++i) {
            prev = prev.next;
        }

        prev.next = new Node(e, prev.next);
        ++size;
    }

    /**
     * 在链表头添加新的元素e
     */
    public void unshift(E e) {
        insert(0, e);
    }

    /**
     * 在链表末尾添加新的元素e
     */
    public void push(E e) {
        insert(size, e);
    }

    public E get(int index) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed. index is error.");
        }

        Node cur = dummyHead.next;

        for (int i = 0; i < index; ++i) {
            cur = cur.next;
        }

        return cur.e;
    }


    public E getFirst() {
        return get(0);
    }

    public E getLast() {
        return get(size - 1);
    }

    public void set(int index, E e) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Set failed. index is error.");
        }
        Node cur = dummyHead.next;
        for (int i = 0; i < index; ++i) {
            cur = cur.next;
        }

        cur.e = e;

    }

    public boolean contains(E e) {
        Node cur = dummyHead.next;
        while (cur != null) {
            if (cur.e == e) {
                return true;
            } else {
                cur = cur.next;
            }
        }
        return false;
    }

    public E remove(int index) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Remove failed. index is error.");
        }
        Node prev = dummyHead;
        for (int i = 0; i < index;++i){
            prev = prev.next;
        }

        Node removedNode = prev.next;
        prev.next = removedNode.next;
        removedNode.next = null;
        --size;

        return removedNode.e;
    }

    public E removeFirst() {
        return remove(0);
    }

    public E removeLast() {
        return remove(size - 1);
    }

    public void removeElement(E e) {
        Node prev = dummyHead;

        while(prev.next != null) {
            if(prev.next.e == e) {
                break;
            }else{
               prev = prev.next;
            }
        }

        if(prev.next != null) {
            Node removedNode = prev.next;
            prev.next = removedNode.next;
            removedNode.next = null;
            --size;
        }

    }


    @Override
    public String toString() {

        StringBuilder sb = new StringBuilder();

//        Node cur = dummyHead.next;
//        while (cur != null) {
//            sb.append(cur.e + "->");
//            cur = cur.next;
//        }

        for (Node cur = dummyHead.next; cur != null; cur = cur.next) {
            sb.append(cur.e + "->");
        }

        sb.append("NULL");

        return sb.toString();
    }


}
