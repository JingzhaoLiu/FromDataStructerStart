public class EatPear {

  // 猴子吃梨 
  // 猴子第一天摘了若干个梨子，当即吃了一半，还不解馋，又多吃了一个；
  // 第二天，吃剩下的梨子的一半，还不过瘾，又多吃了一个；以后每天都吃前一天剩下的一半多一个，
  // 到第10天想再吃时，只剩下一个梨子了。问第一天共摘了多少个梨子
  private int pearNumber(int n) {
      if(n < 1 || n > 10) {
        return -1;
      }
      if( n == 10){
        return 1;
      }
      return (pearNumber(n + 1) + 1 ) * 2;
    }

  public static void main(String[] args) {
      EatPear r =  new EatPear();
      int n9 = r.pearNumber(9);
      int n8 = r.pearNumber(8);
      int n7 = r.pearNumber(7);
      int n1 = r.pearNumber(1);

      System.out.println(n9);
      System.out.println(n8);
      System.out.println(n7);
      System.out.println(n1);
      
    }
}