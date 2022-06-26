// Remember, we're gonna use strict mode in all scripts now!
/*"use strict";
const temp=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];

let maxTemp= (arr)=>{
    let res=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        console.log(typeof arr[i],arr[i]);
        if(typeof arr[i] !== 'number')
            continue;
        else if(res<arr[i])
            res=arr[i];
    }
    return res;
};

let minTemp= (arr)=>{
    let res=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i] !== 'number')
            continue;
        else if(res>arr[i])
            res=arr[i];
    }
    return res;
};

let tempAmplitude=(a,b)=>{
    console.log(a);
    console.log(b);
    console.log(a-b);
};
tempAmplitude(maxTemp(temp),minTemp(temp));
*/
'use strict';
function convertKelvin()
{
    const objTest={
        type:'Temp',
        unit:'C',
        value:prompt('Enter the value in C')
    };
    console.table(objTest);
    const kelvin=Number(objTest.value)+273;
    console.log(kelvin);
}

convertKelvin();