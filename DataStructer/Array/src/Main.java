/**
 * @author Martin
 */


public class Main {

    public static void main(String[] args) {

        // int[] arr = new int[10];
        // for (int k = 0; k < arr.length; k++) {
        //     arr[k] = k;
        // }

        // for (int k = 0; k < arr.length; k++) {
        //     System.out.println(arr[k]);
        // }


        // // create scores
        // int[] scores = new int[]{100, 96, 98};
        // for (int i = 0; i < scores.length; ++i) {
        //     System.out.println(scores[i]);
        // }

        // for (int score : scores) {
        //     System.out.println(score);
        // }

        Array<Integer> arr = new Array<>();

        System.out.println(arr);

        for (int i = 0; i < 10; ++i) {
            arr.append(i);
        }


        System.out.println(arr);
        arr.unshift(-1);

        System.out.println(arr);
        arr.insert(3, 3);

        System.out.println(arr);

        System.out.println(arr.getSize());
        System.out.println(arr.isEmpty());
        System.out.println(arr.getCapacity());
        arr.setValue(6, 30);

        System.out.println(arr.getValue(3));

        // indexOf
        System.out.println(arr.indexOf(3));

        // indexOf
        System.out.println(arr.indexOf(3,4));
        // has
        System.out.println(arr.contains(4));

        // delete
        System.out.println(arr.remove(arr.getSize()-1));

        System.out.println(arr);

        System.out.println(arr.removeElement(5));

        System.out.println(arr);

        arr.removeAllElement(3);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);
        arr.remove(0);

        System.out.println(arr);



    }
}
