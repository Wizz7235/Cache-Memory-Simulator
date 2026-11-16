function getValues(){
    let cacheSize = parseInt(document.getElementById("cacheSize").value);
    let blockSize = parseInt(document.getElementById("blockSize").value);
    let memoryAddress = document.getElementById("memoryAddress").value;
    let addresses = memoryAddress.split(",").map(value => Number(value.trim()));
    let totalCacheLines = Math.floor(cacheSize / blockSize);
    let cache = Array(totalCacheLines).fill(null);

    return {
        cacheSize,
        blockSize,
        addresses,
        totalCacheLines,
        cache
    };
}

function calculateResult(hit, miss){
    let totalAccess = hit + miss;
    let hitRate = (hit / totalAccess) * 100;
    let missRate = (miss / totalAccess) * 100;

    document.getElementById("cacheHits").innerHTML = hit;
    document.getElementById("cacheMisses").innerHTML = miss;
    document.getElementById("hitRate").innerHTML = hitRate.toFixed(2) + "%";
    document.getElementById("missRate").innerHTML = missRate.toFixed(2) + "%";
}