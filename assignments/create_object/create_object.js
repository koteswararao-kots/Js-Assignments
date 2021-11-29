function CreateObject(arr) {
    // Write your code here
    const result = {}
    for(let i = 0;i<arr.length-1;i+=2){
        result[arr[i]] = arr[i+1];
        

    }
    return result

}

module.exports = CreateObject;
