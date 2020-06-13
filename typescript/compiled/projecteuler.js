"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectEular {
    one() {
        let sum = 0;
        for (let i = 1; i < 1000; i++) {
            if (!(i % 3) || !(i % 5)) {
                sum += i;
            }
        }
        console.log(sum);
    }
    two() {
        let totalSum = 2;
        let lastnum = 1, beforelastnum = 2;
        while (lastnum < 100) {
            let temp = beforelastnum;
            beforelastnum = lastnum;
            lastnum = temp + lastnum;
            if (lastnum % 2 == 0) {
                totalSum += lastnum;
            }
        }
        console.log(totalSum);
    }
    three() {
        let myNum = 600851475143;
        let ans = 0;
        function isPrime(num) {
            for (let i = 2, s = Math.floor(Math.sqrt(num)); i <= s; i++)
                if (num % i === 0)
                    return false;
            return num > 1;
        }
        Loop: for (let i = myNum; i > 1; i--) {
            ans++;
            // console.log(i);
            if (isPrime(i)) {
                ans = i;
                break Loop;
            }
        }
        console.log("Ans:", ans);
    }
    four() {
        let ans = 0;
        function checkPalindrome(number) {
            return (number.toString().split("").reverse().join("") === number.toString());
        }
        // console.log(palindrome(121121));
        for (let i = 999; i >= 100; i--)
            for (let j = 999; j >= 100; j--)
                if (checkPalindrome(i * j) && ans < i * j)
                    ans = i * j;
        console.log(ans);
    }
}
exports.default = ProjectEular;
