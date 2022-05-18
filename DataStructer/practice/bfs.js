

// 

const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const bfs = (root) =>{
  let queue = [root];
  while(queue.length > 0) {
    let child = queue.shift();
    console.log(child.val);

    child?.children?.forEach(val=>{
      queue.push(val)
    })

  }

 
}

bfs(tree);