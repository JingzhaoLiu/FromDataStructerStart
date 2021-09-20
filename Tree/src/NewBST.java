public class NewBST<E extends Comparable<E>> {
  private class Node {
    public E e;
    public Node left, right;

    public Node(E e) {
      this.e = e;
      left = null;
      right = null;
    }
  }

  private Node root;
  private int size;

  public NewBST() {
    root = null;
    size = 0;
  }

  public int getSize() {
    return size;
  }

  public boolean isEmpty() {
    return size == 0;
  }

  public void add(E e) {
    root = add(root, e);
  }

  private Node add(Node node, E e) {
    if (node == null) {
      ++size;
      return new Node(e);
    }

    if (e.compareTo(node.e) < 0) {
      node.left = add(node.left, e);
    } else if (e.compareTo(node.e) > 0) {
      node.right = add(node.right, e);
    }
    return node;

  }

  public boolean contains(E e) {
    return contains(root, e);
  }

  private boolean contains(Node node, E e) {
    if (node == null) {
      return false;
    }

    if (e.compareTo(node.e) == 0) {
      return true;
    } else if (e.compareTo(node.e) < 0) {
      return contains(node.left, e);
    } else {
      return contains(node.right, e);
    }

  }

  public void preOrder() {
    preOrder(root);
  }

  private void preOrder(Node node) {
    if (node == null) {
      return;
    }

    System.out.println(node.e);
    preOrder(node.left);
    preOrder(node.right);
  }

  public static void main(String[] args) {
    NewBST<Integer> bst = new NewBST<>();
    int[] items = { 3, 1, 5, 2, 6, 7, 4 };
    for (int i = 0; i < items.length; ++i) {
      bst.add(items[i]);
    }

    bst.preOrder();

  }

}
