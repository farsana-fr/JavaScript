'use strict';
const temp=[17,21,23];
const temp2=[12, 5, -5, 0, 4];
let printForest=(arr)=>
{
    let res="...";
    for(let i=0;i<arr.length;i++)
    {
        res=res+`${arr[i]}ºC in ${i+1} days...`;
    }
    return res;
};

let str=printForest(temp2);
console.log(str);