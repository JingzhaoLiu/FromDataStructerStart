/**
 * @author Martin
 */
public class Main {

    public static void main(String[] args) {
	// write your code here
        LinkedList<Integer> linked =  new LinkedList<>();

        for (int i = 0; i < 5; ++i) {
           linked.unshift(i);
           System.out.println(linked);
        }

        linked.push(7);
        System.out.println(linked);

        linked.set(3, 33);
        System.out.println(linked);

        boolean bool = linked.contains(3);
        System.out.println("3 is Exist");
        System.out.println( bool);
    }
}
