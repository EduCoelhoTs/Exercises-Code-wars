const uniqueInOrder = (iterable) => {
    let splitedData = [];
    
    if (typeof iterable === "string") {
        splitedData = iterable.split('');
    } else {
        splitedData = iterable;
    }

    const arrayData = [];

    for (let i = 0; i < splitedData.length; i++) {
        if( splitedData[i] !== splitedData[i+1] ) {
            arrayData.push(splitedData[i]);
    }
}

return arrayData;
}


uniqueInOrder('AAABBBCCCCDDAADDD111');
uniqueInOrder(1,2,3,3,4,5);