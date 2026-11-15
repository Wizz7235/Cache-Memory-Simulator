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

    document.getElementById("cacheHits").innerHTML = "Cache Hits: " + hit;
    document.getElementById("cacheMisses").innerHTML = "Cache Misses: " + miss;
    document.getElementById("hitRate").innerHTML = "Hit Rate: " + hitRate.toFixed(2) + "%";
    document.getElementById("missRate").innerHTML = "Miss Rate: " + missRate.toFixed(2) + "%";
}