// 字典

//349. 数组交集 
var intersection = function(nums1, nums2) {
    const map = new Map();
    nums1.forEach(e=>{
        map.set(e,true)
    })

    const result = [];
    nums2.forEach(e=>{
        if(map.get(e)){
            result.push(e)
            map.delete(e)
        }
    })
    return result
};