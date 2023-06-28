function summation(...numbers) {
    let result = 1;
    for(i in numbers) {
        result*=numbers [i];
    }

    return result;
}

summation(1,2,3,4,5,6,7,8,9);