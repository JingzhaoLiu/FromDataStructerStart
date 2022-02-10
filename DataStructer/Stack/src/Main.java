import java.util.Random;

public class Main {

    public static double testQueue(Queue<Integer> queue, int count) {
         long start = System.nanoTime();
         Random rnd = new Random();
         for (int i = 0; i < count; ++i) {
             queue.enqueue(rnd.nextInt(Integer.MAX_VALUE));
         }
         for (int i = 0; i < count; ++i) {
             queue.dequeue();
         }
         long end = System.nanoTime();

         return (end - start ) / 1000000000.0;
    }

    public static void main(String[] args) {

        int count = 100000;
        ArrayQueue<Integer> arrQueue = new ArrayQueue<>();
        double time1 = testQueue(arrQueue,count);
        System.out.println("ArrayQueue run time: " + time1);
        
        LoopQueue<Integer> loopQueue = new LoopQueue<>();
        double time2 = testQueue(loopQueue,count);
        System.out.println("LoopQueue run time: " + time2);
        

        // write your code here
    //     ArrayStack<Integer> stack = new ArrayStack<>();

    //     for (int i = 0; i < 5; ++i) {
    //         stack.push(i);
    //         System.out.println(stack);
    //     }

    //     stack.pop();
    //     System.out.println(stack);


    //     System.out.println("====================");


    //     ArrayQueue<Integer> queue = new ArrayQueue<>();
    //     for (int i = 0; i < 5; ++i) {
    //         queue.enqueue(i);
    //         System.out.println(queue);
    //     }

    //     System.out.println(queue.dequeue());
    //     System.out.println(queue.getFront());

    //     System.out.println(queue);


    }
}
