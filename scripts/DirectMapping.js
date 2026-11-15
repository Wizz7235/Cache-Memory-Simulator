function directMapping(){
    let {cacheSize, blockSize, addresses, totalCacheLines, cache} = getValues();

    let hit = 0;
    let miss = 0;

    let table = document.getElementById("memoryAddressResult");
    table.innerHTML = "";

   addresses.forEach(address => {
    let blockNumber = Math.floor(address / blockSize);
    let cacheLine = blockNumber % cache.length;

    if(cache[cacheLine] === blockNumber){
        hit++;
        table.innerHTML += `
            <tr>
                <td>${address}</td>
                <td>Cache Hit</td>
            </tr>
        `;
    }else{
        miss++;
        table.innerHTML += `
            <tr>
                <td>${address}</td>
                <td>Cache Miss</td>
            </tr>
        `;
        cache[cacheLine] = blockNumber;
    }

});
    calculateResult(hit, miss);
};