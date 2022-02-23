// 字典
var myMap = new Map();
myMap.get(key);

// 返回一个 Map 对象中与指定键相关联的值，如果找不到这个键则返回 undefined。


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