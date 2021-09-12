public class Sum {

  public static int addOneToTen(int n){
    if(n == 1) {
      return 1;
    }
    // 1 + 2 + 3 + 4 + 5 + 6 + 7
    // (1 + 2 + 3 + 4 + 5 + 6) + 7
    // ((1 + 2 + 3 + 4 + 5) + 6) + 7
    // ((1 + 2 + 3 + 4) + 5) + 6) + 7
    // ((1 + 2 + 3) + 4) + 5) + 6) + 7
    // ((1 + 2) + 3) + 4) + 5) + 6) + 7
    // ((1) + 2) + 3) + 4) + 5) + 6) + 7
    // n之前所有数之和 + n = n的所有数之和
    return addOneToTen(n-1) + n;
  }
  

  public static void main(String[] args) {
    System.out.println("1 + 2 + ... + 10=" + addOneToTen(10));
    System.out.println("1 + 2 + ... + 10=" + addOneToTen(100));
  }
}
