# Sort 排序

![](../img/sort.png)

## 如何分析一个“排序算法”？

`排序算法的执行效率`

对于排序算法执行效率的分析，我们一般会从这几个方面来衡量：

`1. 最好情况、最坏情况、平均情况时间复杂度`

我们在分析排序算法的时间复杂度时，要分别给出最好情况、最坏情况、平均情况下的时间复杂度。除此之外，你还要说出最好、最坏时间复杂度对应的要排序的原始数据是什么样的。

为什么要区分这三种时间复杂度呢？第一，有些排序算法会区分，为了好对比，所以我们最好都做一下区分。第二，对于要排序的数据，有的接近有序，有的完全无序。有序度不同的数据，对于排序的执行时间肯定是有影响的，我们要知道排序算法在不同数据下的性能表现。

`2. 时间复杂度的系数、常数 、低阶`

我们知道，时间复杂度反应的是数据规模 n 很大的时候的一个增长趋势，所以它表示的时候会忽略系数、常数、低阶。但是实际的软件开发中，我们排序的可能是 10 个、100 个、1000 个这样规模很小的数据，所以，在对同一阶时间复杂度的排序算法性能对比的时候，我们就要把系数、常数、低阶也考虑进来。

`3. 比较次数和交换（或移动）次数`

这一节和下一节讲的都是基于比较的排序算法。基于比较的排序算法的执行过程，会涉及两种操作，一种是元素比较大小，另一种是元素交换或移动。所以，如果我们在分析排序算法的执行效率的时候，应该把比较次数和交换（或移动）次数也考虑进去。


`排序算法的内存消耗`

我们前面讲过，算法的内存消耗可以通过空间复杂度来衡量，排序算法也不例外。不过，针对排序算法的空间复杂度，我们还引入了一个新的概念，`原地排序（Sorted in place）`。原地排序算法，就是特指空间复杂度是 O(1) 的排序算法。我们今天讲的三种排序算法，都是原地排序算法。

`排序算法的稳定性`
如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变,叫稳定排序，否则就是不稳定排序

例子：电商交易系统中的“订单”排序。订单有两个属性，一个是下单时间，另一个是订单金额。如果我们现在有 10 万条订单数据，我们希望按照金额从小到大对订单数据排序。对于金额相同的订单，我们希望按照下单时间从早到晚有序。对于这样一个排序需求，我们怎么来做呢

先按照下单时间排序，然后使用稳定排序给金额排序

稳定排序算法可以保持金额相同的两个对象，在排序之后的前后顺序不变。第一次排序之后，所有的订单按照下单时间从早到晚有序了。在第二次排序中，我们用的是稳定的排序算法，所以经过第二次排序之后，相同金额的订单仍然保持下单时间从早到晚有序。

![](../img/sort_fixed.jpg)


## 冒泡排序（Bubble Sort）



``` js
let arr = [4,5,6,3,2,1];

for (var i = 0; i < arr.length; i++) { // 轮数  
  for (var j = 0; j < arr.length - i - 1 ) { // 
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
      }
  }
}

console.log(arr);


```


``` java 
public void bubbleSort(int[] arr, int n) {
  if (n <= 1) return;
  for (int i = 1; i < arr.length; ++ i) {  // 循环轮数从1开始 最后一轮不用循环
    for (int j = 0; j < arr.length - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


```

优化：已经排好序的不用再排了

``` java

public void bubbleSort(int[] arr, int n) {
  if (n <= 1) return;
  for (var i = 0; i < n; ++i) {
    boolean flag = false;// 循环每一轮的时候标记
    for (var j = 0; j < n - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = true; // 数据未交换
      }
      if (!flag) break;
    }
  }

}


```


第一，冒泡排序是原地排序算法吗？

冒泡的过程只涉及相邻数据的交换操作，只需要常量级的临时空间，所以它的空间复杂度为 O(1)，是一个原地排序算法。

第二，冒泡排序是稳定的排序算法吗？

在冒泡排序中，只有交换才可以改变两个元素的前后顺序。为了保证冒泡排序算法的稳定性，当有相邻的两个元素大小相等的时候，我们不做交换，相同大小的数据在排序前后不会改变顺序，所以冒泡排序是稳定的排序算法。

第三，冒泡排序的时间复杂度是多少？

最好情况下，要排序的数据已经是有序的了，我们只需要进行一次冒泡操作，就可以结束了，所以最好情况时间复杂度是 O(n)。而最坏的情况是，要排序的数据刚好是倒序排列的，我们需要进行 n 次冒泡操作，所以最坏情况时间复杂度为 O(n2)。


有序度、逆序度、满有序度


## 插入排序（Insertion Sort）

``` java
public void insertSort(int[] arr, int n) {
  if(n <= 1) return;
  for(int i = 1; i < n; ++i) {
    int value = arr[i];
    
    for(int j = i - 1; j >= 0 ;--j) {
      if(arr[j] > value) {
          arr[j + 1] = arr[j];
      }else{
        break;
      }
    }
    arr[j + 1] = value;
  }
}


```


``` java 
import java.util.Arrays;

public class InsertSort {

    public static void main(String[] args) {
        //初始化需要排序的数组
        int[] array = {9, 2, 11, 7, 12, 5};

        //初始化一个与待排序数组大小相同的数组，用来存放排序好的序列
        int[] sortArray = new int[array.length];

        //步骤1：待排序数组中选择第一个元素作为已经排序好的元素（数组的下标0表示第一个元素）
        sortArray[0] = array[0];

        //步骤2：依次遍历未排序的元素，将其插入已排序序列中
        for (int i = 1; i < array.length; i++) {
            //待排序元素
            int temp = array[i];
            //记录待排序元素需要插入已排序数组中的位置
            int index = i;
            //从已排序好的数组右边依次遍历数组，直到找到待排序元素需要插入的位置
            while( index > 0  && temp < sortArray[index-1] ){
                sortArray[index] = sortArray[index-1];
                index--;
            }
            //插入待排序元素
            sortArray[index] = temp;
        }

        //打印出排序好的序列
        System.out.println(Arrays.toString(sortArray));
    }

}

```


第一，插入排序是原地排序算法吗？

从实现过程可以很明显地看出，插入排序算法的运行并不需要额外的存储空间，所以空间复杂度是 O(1)，也就是说，这是一个原地排序算法。

第二，插入排序是稳定的排序算法吗？

在插入排序中，对于值相同的元素，我们可以选择将后面出现的元素，插入到前面出现元素的后面，这样就可以保持原有的前后顺序不变，所以插入排序是稳定的排序算法。

第三，插入排序的时间复杂度是多少？

如果要排序的数据已经是有序的，我们并不需要搬移任何数据。如果我们从尾到头在有序数据组里面查找插入位置，每次只需要比较一个数据就能确定插入的位置。所以这种情况下，最好是时间复杂度为 O(n)。注意，这里是从尾到头遍历已经有序的数据。

如果数组是倒序的，每次插入都相当于在数组的第一个位置插入新的数据，所以需要移动大量的数据，所以最坏情况时间复杂度为 O(n2)。

还记得我们在数组中插入一个数据的平均时间复杂度是多少吗？没错，是 O(n)。所以，对于插入排序来说，每次插入操作都相当于在数组中插入一个数据，循环执行 n 次插入操作，所以平均时间复杂度为 O(n2)。



`冒泡排序和插入排序的时间复杂度都是 O(n2)，都是原地排序算法，为什么插入排序要比冒泡排序更受欢迎呢？`

我们前面分析冒泡排序和插入排序的时候讲到，冒泡排序不管怎么优化，元素交换的次数是一个固定值，是原始数据的逆序度。插入排序是同样的，不管怎么优化，元素移动的次数也等于原始数据的逆序度。

``` java
// 冒泡排序中数据的交换操作：
if (a[j] > a[j+1]) { // 交换
   int tmp = a[j];
   a[j] = a[j+1];
   a[j+1] = tmp;
   flag = true;
}
 
// 插入排序中数据的移动操作：
if (a[j] > value) {
  a[j+1] = a[j];  // 数据移动
} else {
  break;
}
```

冒泡排序中数据的交换比插入排序中复杂，所以相同条件下多使用插入排序, 插入排序可以继续优化就是希尔排序


## 选择排序(Selection Sort)
选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾

1. 原地排序
2. n^2
3. 不稳定

5，8，5，2，9 这样一组数据，使用选择排序算法来排序的话，第一次找到最小元素 2，与第一个 5 交换位置，那第一个 5 和中间的 5 顺序就变了

``` java
import java.util.Arrays;

public class SelectSort {

    public static void main(String[] args) {
        //初始化需要排序的数组
        int[] array = {9, 2, 11, 7, 12, 5};

        //依次进行选择排序，每次找出最小的元素，放入待排序的序列中
        for(int i=0;i<array.length;i++){
            
            //记录最小元素min和最小元素的数组下标索引minIndex
            int min = array[i];
            int minIndex = i;

            //在未排序的序列中找出最小的元素和对应数组中的位置
            for(int j=i+1;j<array.length;j++){
                if(array[j] < min){
                    min = array[j];
                    minIndex = j;
                }
            }
            
            //交换位置
            int temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }

        //打印出排序好的序列
        System.out.println(Arrays.toString(array));
    }

}


```

``` java 
public void selectionSort(){

  int [] arr = { 9, 2, 11, 7, 12, 5};
  for(int i = 0; i < arr.length; ++i) {
    int min = arr[i];
    int minIndex = i;
    for(int j = i + 1; j < arr.length;++j) {
      if(arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }

    int temp = arr[i];
    arr[i] = min;
    arr[minIndex] = temp;

  }

}
```



## 希尔排序（Shell Sort）

希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本。但希尔排序是非稳定排序算法。

希尔排序是基于插入排序的以下两点性质而提出改进方法的：

插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率；
但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位；
希尔排序的基本思想是：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，再对全体记录进行依次直接插入排序。

1. 算法步骤
选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；

按增量序列个数 k，对序列进行 k 趟排序；

每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

``` java

import java.util.Arrays;

public class ShellSort {

    public static void main(String[] args) {

        //初始化需要排序的数组
        int[] array = {9, 2, 11, 7, 12, 5};
        //初始化希尔排序的增量为数组长度
        int gap = array.length;
        //不断地进行插入排序，直至增量为1
        while (true) {
            //增量每次减半
            gap = gap/2;
            for (int i = 0; i < gap; i++) {
                //内部循环是一个插入排序
                for (int j = i + gap; j < array.length; j += gap) {
                    int temp = array[j];
                    int k = j - gap;
                    while (k >= 0 && array[k] > temp) {
                        array[k + gap] = array[k];
                        k -= gap;
                    }
                    array[k + gap] = temp;
                }
            }
            //增量为1之后，希尔排序结束，退出循环
            if (gap == 1)
                break;
        }
        //打印出排序好的序列
        System.out.println(Arrays.toString(array));
    }

}



```

## 快速排序(Quick Sort)

``` java
import java.util.Arrays;

public class QuickSort {

    public static void main(String[] args) {
        //初始化需要排序的数组
        int []array = {9, 2, 11, 7, 12, 5};
        //快速排序
        quickSort(array,0,array.length-1);
        //打印出排序好的序列
        System.out.println(Arrays.toString(array));
    }

    //快速排序
   private static void quickSort(int[] array,int low, int high){
        if(low < high){
            //找到分区的位置，左边右边分别进行快速排序
            int index = partition(array,low,high);
            quickSort(array,0,index-1);
            quickSort(array,index+1,high);
        }
   }

   //快速排序分区操作
   private static int partition(int[] array, int low, int high){
        //选择基准
        int pivot = array[low];
        //当左指针小于右指针时，重复操作
        while (low < high){
            while(low < high && array[high] >= pivot){
                high = high - 1;
            }
            array[low] = array[high];
            while (low < high && array[low] <= pivot){
                low = low + 1;
            }
            array[high] = array[low];
        }
        //最后赋值基准
        array[low] = pivot;
        //返回基准所在位置，基准位置已经排序好
        return low;
   }


}

```

## 