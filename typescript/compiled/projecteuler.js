"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProjectEular {
    isPrime(num) {
        for (let i = 2, s = Math.floor(Math.sqrt(num)); i <= s; i++)
            if (num % i === 0)
                return false;
        return num > 1;
    }
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
        Loop: for (let i = myNum; i > 1; i--) {
            ans++;
            if (this.isPrime(i)) {
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
        for (let i = 999; i >= 100; i--)
            for (let j = 999; j >= 100; j--)
                if (checkPalindrome(i * j) && ans < i * j)
                    ans = i * j;
        console.log(ans);
    }
    five() {
        console.log("I can't Understand");
    }
    six() {
        function sumOfSquares(count) {
            let ans = 0;
            for (let i = 1; i <= count; i++)
                ans += i * i;
            return ans;
        }
        function squaresOfSum(count) {
            let ans = 0;
            for (let i = 1; i <= count; i++)
                ans += i;
            return ans * ans;
        }
        console.log(squaresOfSum(100) - sumOfSquares(100));
    }
    seven() {
        let flag = 0;
        let num = 0;
        while (flag < 10001) {
            num++;
            if (this.isPrime(num))
                flag++;
        }
        console.log("Ans:", num);
    }
    eight() {
        console.log("I can't Understand");
    }
    nine() {
        let c = 2;
        Loop1: while (c < 1000) {
            c++;
            Loop2: for (let b = 2; b < c; b++) {
                Loop3: for (let a = 1; a < b; a++) {
                    if (a * a + b * b == c * c) {
                        if (a + b + c == 1000) {
                            console.log("ANS:", a, b, c);
                            break Loop1;
                        }
                    }
                }
            }
        }
    }
    ten() {
        let sum = 0;
        for (let i = 0; i < 2000000; i++)
            if (this.isPrime(i))
                sum += i;
        console.log(sum);
    }
}
exports.default = ProjectEular;
