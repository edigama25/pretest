function fib(num1,num2,value)
{
    let i=0;
    let arr = [num1,num2]
    while(arr[i]+arr[i+1]!=value)
    {
        arr.push(arr[i] + arr[i+1])
        i++;        
    }
    return `location of ${value} in this array is ${arr.length+1}`
}
console.log(fib(2,5,19));