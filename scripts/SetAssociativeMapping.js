function setAssociativeMapping(){
    let linesPerSet = parseInt(document.getElementById("setInput").value);
    let {cacheSize, blockSize, addresses, totalCacheLines} = getValues();

    if(!linesPerSet || linesPerSet > totalCacheLines || totalCacheLines % linesPerSet !== 0){
        alert("Cache lines per set must divide the total number of cache lines.");
        return;
    }

    let numberOfSets = totalCacheLines / linesPerSet;

    // cache[setIndex] = the cache lines of that set (block numbers)
    // front = least recently used, back = most recently used
    let cache = Array.from({length: numberOfSets}, () => []);

    let hit = 0;
    let miss = 0;

    let table = document.getElementById("memoryAddressResult");
    table.innerHTML = "";

    addresses.forEach(address => {
        let blockNumber = Math.floor(address / blockSize);
        let setIndex = blockNumber % numberOfSets;
        let set = cache[setIndex];
        let position = set.indexOf(blockNumber);

        if(position !== -1){
            hit++;
            table.innerHTML += `
                <tr>
                    <td>${address}</td>
                    <td>Cache Hit</td>
                </tr>
            `;
        
            set.splice(position, 1);
            set.push(blockNumber);
        }else{
            miss++;
            table.innerHTML += `
                <tr>
                    <td>${address}</td>
                    <td>Cache Miss</td>
                </tr>
            `;
          
            if(set.length === linesPerSet){
                set.shift();
            }
            set.push(blockNumber);
        }
    });

   calculateResult(hit, miss);
}