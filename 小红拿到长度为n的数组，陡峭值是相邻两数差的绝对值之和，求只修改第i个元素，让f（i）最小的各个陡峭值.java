 import java.util.Scanner;

 public class Main {
     public static void main(String[] args) {
         Scanner in = new Scanner(System.in);
         int n = in.nextInt();
         long[] nums = new long[n];
         for (int i = 0; i < n; i++) {
             nums[i] = in.nextLong();
         }
         if (n == 1) {
             System.out.print("0");
             return;
         }
         long count = 0; // 默认陡峭值
         for (int i = 1; i < n; i++) {
             count += Math.abs(nums[i] - nums[i - 1]);
         }
         long[] result = new long[n];
         for (int i = 0; i < n; i++) {
             if (i == 0) {
                 result[i] = count - Math.abs(nums[i + 1] - nums[i]);
             } else if (i == n - 1) {
                 result[i] = count - Math.abs(nums[i - 1] - nums[i]);
             } else {
                 long temp = Math.abs(nums[i] - nums[i - 1]) +
                         Math.abs(nums[i] - nums[i + 1]) -
                         Math.abs(nums[i - 1] - nums[i + 1]);
                 result[i] = count - temp;
             }
         }

         for (int i = 0; i < n; i++) {
             System.out.print(result[i] + " ");
         }
     }
 }