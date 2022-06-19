/*'use strict';
let ab=1;
let c=3;
if(ab===1) c=4;
if(c===4) console.log("C");
console.log("END");

const if= 'hi';

'use strict';
function sum(a,b)//param
{
    console.log(a,b);
    return a+b;
}
let res=sum(3,4);//argument
console.log(res);

//anonymous function expression
let sum1=function (a,b)//param
{    return a+b;};
console.log('SUM == '+sum1);
console.log('SUM == '+sum1(4,5));

//Arrow Function
const sum2=a=>a+5;
console.log(sum2(5));

const sum3= a=>{
    console.log("Inside func");
    return a+10;
}
console.log(sum3(8));


const sum4= (a,b)=>{
    console.log("Inside func");
    return a+b;
}
console.log(sum4(3,6));


//ARRAY FUNCTIONS
const fruits=['Apple','Mango','Grapes'];
console.log(fruits[0]);
console.log(fruits[-1]);
console.log(fruits.length);
console.log(fruits);

//We can mutate non-primitive datatypes
fruits[3]='Pineappple';
console.log(fruits.length);
console.log(fruits);

'use strict';
const calAge=function(birthYear){
    return 2022-birthYear;
}

const arr=[1997,2001,2006];
console.log(calAge(arr));
console.log(calAge(arr[0]));
console.log(calAge(arr[1]));
console.log(calAge(arr[2]));

console.log(arr.length);
arr.push(1972);//Insert at end
console.log(arr);
console.log(arr.length);
arr.pop();//delete from end
console.log(arr);
console.log(arr.length);
arr.unshift(1972);//Add at start
console.log(arr);
arr.shift();//Delete the start
console.log(arr);
console.log(arr.indexOf(1997));
console.log(arr.indexOf(17));

console.log(arr.includes(1997));//return true or false
console.log(arr.includes(1999));


const farsana={fname:"Farsana",lname:"Rahim",age:25,sisters:["Siyana","Hana"]};
console.log(farsana);
console.log(farsana[0]);
console.log(farsana['fname']);
console.log(farsana['f'+'name']);
console.log(farsana.fname);

const prop=prompt("Enter property");
//console.log(farsana.prop);//UNDEFINED
if(farsana[prop])
    console.log(farsana[prop]);
else
    console.log(`The property ${prop} does not exist`);
farsana.home="Adimali";
farsana['birthYear']=1997;
console.log(farsana);

//Challenge

//Farsana has three hobbies now and her best hobby is called "Crochet"

const myName=prompt("Enter the Name");

function myHobbies()
{
    let val=prompt("Enter the Hobby");
    return val;
}
const hobby=new Array();
hobby.push(myHobbies());
hobby.push(myHobbies());
hobby.push(myHobbies());
console.log(hobby);

const objName={
    name:myName,
    hobbies:hobby,
    birth:1997,
age:function()
{
    return 2022-this.birth;
}
};
console.log(objName);
console.log(`${objName.name} has ${objName.hobbies.length} hobbies now and her best hobby is ${objName.hobbies[0]+'ing'}`);
const name="FR";
console.log(objName);
console.log(name);

console.log(objName.age());
console.log(objName['age']());



const farsana={
    fname:"Farsana",
    lname:"Rahim",
    birthYear:1997,
    calAge:function(){
        this.age=2022-this.birthYear;
        return this.age;
    },
    hobbies:["Crochet","Embroidery","Learn"],
    conclude:function(){
        this.summary=`User is ${this.fname} ${this.lname} and born on ${this.birthYear}. Her age now is ${this.calAge()}. The following are her hobbies are:
    ${this.hobbies}.\n She has ${this.hasLicense?'a':'no'} Drivers License`;
        return this.summary;
    },
    hasLicense:true
};
console.log(farsana);

farsana.conclude();
console.log(farsana.summary);

const fruits=['Apple','Mango','Grapes',45,true];
const typeFruits=new Array();
console.log(typeFruits);
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i], typeof fruits[i]);
    typeFruits.push(typeof fruits[i]);
}
console.log(typeFruits);


const birth=[1997,2001,2006];
const age=[];
for(let i=0;i<birth.length;i++)
{
    if(2022-birth[i]>20)
        continue;
    age.push(2022-birth[i]);
}
console.log(age);
console.log(typeof NaN);
console.log(typeof (typeof null));
for(let i=birth.length-1;i>=0;i--)
{
    console.log(birth[i]);
}
let j=0;
while(j<birth.length)
{
    console.log(birth[j]);
    j++;
}


let r=Math.trunc(Math.random()*6)+1;


console.log(Math.trunc(1.97));
*/