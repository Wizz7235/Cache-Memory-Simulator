function associativeMapping(){
    let {cacheSize, blockSize, addresses, totalCacheLines, cache} = getValues();
    let hit = 0;
    let miss = 0;
    let accessOrder = [];

    let table = document.getElementById("memoryAddressResult");
    table.innerHTML = "";

   addresses.forEach(address => {
    let blockNumber = Math.floor(address / blockSize);
    //find index with null values
    let availableIndex = cache.map((value, index) => value === null ? index: -1)
                        .filter(index => index !== -1);
    //randomly select from the result of availableIndex
    let selectedIndex = availableIndex[Math.floor(Math.random() * availableIndex.length)];

    if(cache.includes(blockNumber)){
        hit++;
        table.innerHTML += `
            <tr>
                <td>${address}</td>
                <td>Cache Hit</td>
            </tr>
        `;
        let index = cache.indexOf(blockNumber);
        accessOrder.splice(accessOrder.indexOf(index),1);
        accessOrder.push(index);

    }else{
        miss++;
        let index;
        table.innerHTML += `
            <tr>
                <td>${address}</td>
                <td>Cache Miss</td>
            </tr>
        `;
        if(availableIndex.length > 0){
            index = selectedIndex;
        }else{
            index = accessOrder.shift();
        }
        cache[index] = blockNumber; 
        accessOrder.push(index); 
    }
   
   });
    calculateResult(hit, miss);
};
