var removeDuplicates = function(nums) {
    const s = new Set(nums);
    const a = Array.from(s);
    return a;
};

const result = removeDuplicates([1,1,2]);

console.log(removeDuplicates([1,1,2]));

console.log(result);