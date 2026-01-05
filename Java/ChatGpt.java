import java.util.Arrays;

public class ChatGpt {

    public static void main(String[] args) {

        // find max number from an array
        // int[] arr;
        // arr = new int[] { 20, 56, 85, 47, 58, 63, 25 };

        // int max_no = arr[0];

        // for (int i = 1; i < arr.length; i++) {
        // if (arr[i] > max_no) {
        // max_no = arr[i];
        // }
        // }

        // System.out.println("the max no from an array is " + max_no);

        // count even numbers
        // int[] arr;
        // arr = new int[] { 20, 56, 85, 47, 58, 63, 25 };

        // int count = 0;

        // for (int i = 0; i < arr.length; i++) {
        // if (arr[i] % 2 == 0) {
        // count++;
        // }
        // }

        // System.out.println("the count of even numbers from an array is " + count);

        // reverse array with two pointers
        int[] arr;
        arr = new int[] { 20, 56, 85, 47, 58, 63, 25 };
        // for (int start = 0, end = arr.length - 1; start < end; start++, end--) {
        // int temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp;
        // }  

        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        System.out.println(Arrays.toString(arr));

    }
}
