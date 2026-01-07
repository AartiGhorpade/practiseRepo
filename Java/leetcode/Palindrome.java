
public class Palindrome {
    public static void main(String[] args) {
        int num = -1521;
        System.out.println(findPalindrome(num));
    }

    public static boolean findPalindrome(int num) {
        int rev = 0;
        int org = num;
        if (num < 0) {
            return false;
        }

        while (num > 0) {
            rev = rev * 10 + num % 10;
            num /= 10;
        }

        return rev == org;
    }
}
