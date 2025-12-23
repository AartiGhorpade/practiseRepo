import java.util.Scanner;

public class simplePractise {
    public static int addSum(int a, int b) {
        int add = a + b;
        return add;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter value of a: ");
        int a = sc.nextInt();
        System.out.println("enter value of b: ");
        int b = sc.nextInt();

        System.out.println("the sum of a and b is: " + addSum(a, b));

        sc.close();
    }
}
