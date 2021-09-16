public class BST<E extends Comparable<E>> {
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

  public BST() {
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
    if (root == null) {
      root = new Node(e);
      ++size;
    } else {
      add(root, e);
    }
  }

  private void add(Node node, E e) {

    if (e.equals(node.e)) {
      return;
    } else if (e.compareTo(node.e) < 0) {
      if (node.left == null) {
        node.left = new Node(e);
        ++size;
        return;
      } else {
        add(node.left, e);
      }

    } else if (e.compareTo(node.e) > 0) {
      if (node.rigth == null) {
        node.rigth = new Node(e);
        ++size;
        return;
      } else {
        add(node.rigth, e);
      }

    }

  }
}
