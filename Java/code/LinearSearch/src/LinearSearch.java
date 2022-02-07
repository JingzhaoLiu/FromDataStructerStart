/**
 * @author Martin
 */
public class LinearSearch {
    private LinearSearch() {}

    public static int search(int[] data, int target) {
        for (int i = 0; i < data.length; i++) {
            if (data[i] == target) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int [] data = {23,1,2,34,16,56};
        int res = LinearSearch.search(data, 16);
        System.out.println(res);
    }
}
