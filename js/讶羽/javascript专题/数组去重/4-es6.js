var array = [1, 2, 1, 1, '1'];

// 1
function unique(array) {
    return Array.from(new Set(array));
 }

// 2
function unique(array) {
    return [...new Set(array)];
}

// 3
var unique = (a) => [...new Set(a)]

// 4  map
function unique (arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}


console.log(unique(array)); // [1, 2, "1"]