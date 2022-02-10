public class Mouse {

  public static void printArr(int[][] house) {
    for (int i = 0; i < house.length; i++) {
      for (int j = 0; j < house[i].length; j++) {
        System.out.print(house[i][j] + " ");
      }
      System.out.println();
    }

    System.out.println("===================");

  }

  public boolean findWay(int[][] house, int i, int j) {

    if (house[8][8] == 2) { // 说明已经找到
      return true;
    } else {
      if (house[i][j] == 0) { // 当前这个位置0,说明表示可以走
        house[i][j] = 2;
        // 使用找路策略，来确定该位置是否真的可以走通
        // 下->右->上->左
        if (findWay(house, i + 1, j)) { // 先走下
          return true;
        } else if (findWay(house, i, j + 1)) { // 右
          return true;
        } else if (findWay(house, i - 1, j)) { // 上
          return true;
        } else if (findWay(house, i, j - 1)) { // 左
          return true;
        } else {
          house[i][j] = 3;
          return false;
        }
      } else { 
        return false;
      }
    }
  }

  public static void main(String[] args) {
    // 创建迷宫
    int[][] house = new int[10][10];
    // 设置迷宫形状
    for (int i = 0; i < house.length; i++) { 
      for (int j = 0; j < house[i].length; j++) {
        house[0][j] = 1;
        house[9][j] = 1;

      }
      house[i][0] = 1;
      house[i][9] = 1;
    }

    // 设置障碍物 0 表示可以走 1 表示障碍物 
    house[0][3] = 1;
    house[3][0] = 1;
    house[3][1] = 1;
    house[4][1] = 1;
    printArr(house);

    Mouse m = new Mouse();
    m.findWay(house, 1, 1);
    printArr(house);

  }
}
