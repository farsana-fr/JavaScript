//1
/*const r1_Dolphins=85;
const r2_Dolphins=54;
const r3_Dolphins=41;
const r1_Koalas=23;
const r2_Koalas=34;
const r3_Koalas=27;

const calcAverage= (a,b,c)=> {
    return (a+b+c)/3;
};

let avg_Dolphins=calcAverage(r1_Dolphins,r2_Dolphins,r3_Dolphins);
let avg_Koalas=calcAverage(r1_Koalas,r2_Koalas,r3_Koalas);

function checkWinner(avgDolphins,avgKoalas){
    console.log(avgDolphins, avgKoalas);
    if(avgDolphins>=2*avgKoalas)
        console.log(`Dolphins win(${avgDolphins} vs. ${avgKoalas})`);
    else if(avgKoalas>=2*avgDolphins)
        console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`);
    else {
        console.log('No WINNERS');
    }
}
checkWinner(avg_Dolphins, avg_Koalas);
*/

//2 
//FUNC EXP
/*
function calcTip(bill){
    if(bill>=50 && bill<=300)
        return bill*0.15;
    else
        return bill*0.2;
}
console.log(calcTip(100));

const bills=[125,555,44];
console.log(bills);
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
const total=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];

console.log(total);
*/
//3
/*
const markObj={
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBMI:function()
    {
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    }
};
const johnObj={
    fullName:"John Smith",
    mass:92,
    height:1.95,
    calcBMI:function()
    {
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    }
};
if(markObj.calcBMI()>johnObj.calcBMI())
    console.log(`${markObj.fullName}'s BMI(${markObj.BMI}) is higher than ${johnObj.fullName}'s BMI(${johnObj.BMI})`);
else
console.log(`${johnObj.fullName}'s BMI(${johnObj.BMI}) is higher than ${markObj.fullName}'s BMI(${markObj.BMI})`);
*/
//4
const bill=[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
let tips=[];
let total=new Array();
function calcTip(bill){
    if(bill>=50 && bill<=300)
        return bill*0.15;
    else
        return bill*0.2;
}

for(let i=0;i<bill.length;i++){
    tips.push(calcTip(bill[i]));
    total.push(tips[i]+bill[i]);
}
console.log(bill,tips,total);

//BONUS
function calcAverage(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
    return sum/arr.length;
}
const res=calcAverage(tips);
console.log(res);