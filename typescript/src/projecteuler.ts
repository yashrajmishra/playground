export default class ProjectEular {
  isPrime(num: number) {
    for (let i = 2, s = Math.floor(Math.sqrt(num)); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  one() {
    let sum: number = 0;
    for (let i = 1; i < 1000; i++) {
      if (!(i % 3) || !(i % 5)) {
        sum += i;
      }
    }
    console.log(sum);
  }
  two() {
    let totalSum: number = 2;
    let lastnum: number = 1,
      beforelastnum: number = 2;

    while (lastnum < 100) {
      let temp: number = beforelastnum;
      beforelastnum = lastnum;
      lastnum = temp + lastnum;
      if (lastnum % 2 == 0) {
        totalSum += lastnum;
      }
    }
    console.log(totalSum);
  }
  three() {
    let myNum: number = 600851475143;
    let ans: number = 0;

    Loop: for (let i = myNum; i > 1; i--) {
      ans++;
      // console.log(i);
      if (this.isPrime(i)) {
        ans = i;
        break Loop;
      }
    }
    console.log("Ans:", ans);
  }
  four() {
    let ans: number = 0;
    function checkPalindrome(number: number): boolean {
      return (
        number.toString().split("").reverse().join("") === number.toString()
      );
    }
    // console.log(palindrome(121121));
    for (let i = 999; i >= 100; i--)
      for (let j = 999; j >= 100; j--)
        if (checkPalindrome(i * j) && ans < i * j) ans = i * j;

    console.log(ans);
  }
  five() {
    console.log("I can't Understand");
  }
  six() {
    function sumOfSquares(count: number) {
      let ans: number = 0;
      for (let i = 1; i <= count; i++) ans += i * i;
      return ans;
    }
    function squaresOfSum(count: number) {
      let ans: number = 0;
      for (let i = 1; i <= count; i++) ans += i;
      return ans * ans;
    }
    console.log(squaresOfSum(100) - sumOfSquares(100));
  }
  seven() {
    let flag: number = 0;
    let num: number = 0;
    while (flag < 10001) {
      num++;
      if (this.isPrime(num)) flag++;
    }
    console.log("Ans:", num);
  }
  eight() {
    console.log("I can't Understand");
  }
  nine() {
    let c: number = 2;
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
    let sum: number = 0;
    for (let i = 0; i < 2000000; i++) if (this.isPrime(i)) sum += i;
    console.log(sum);
  }
}
