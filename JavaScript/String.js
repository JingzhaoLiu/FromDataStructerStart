let obj1 = {
  a:{
    b:1
  }
}

function deepClone(target){
  let cloneObj = Array.isArray(target) ? [] : {};

  for(let prop in target) {
    if(typeof target[prop] === 'object' && target[prop] !== null) {
      cloneObj[prop] = deepClone(target[prop]);
    } else{
      cloneObj[prop] = target[prop];
    }
  }
  return cloneObj;
}

let obj2 = deepClone(obj1);
obj1.a.b = 2;
console.log(obj2);   //  {a:{b:1}}