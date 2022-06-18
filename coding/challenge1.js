//1 and 2
/*let mass_Mark=95;
let mass_John=85;
let hgt_Mark=1.88;
let hgt_John=1.76;
let bmi_Mark=mass_Mark/ (hgt_Mark ** 2);
let bmi_John=mass_John/ (hgt_John ** 2);
console.log(bmi_Mark,bmi_John);
let markHigherBMI = bmi_Mark > bmi_John;
console.log(markHigherBMI);
let result;
if(markHigherBMI) {
    result=`Mark's BMI (${bmi_Mark}) is higher than John's (${bmi_John})!`;
} else {
    result=`John's BMI (${bmi_John}) is higher than Mark's (${bmi_Mark})!`;
}
console.log(result);
*/
/*
const r1_Dolphins=96;
const r2_Dolphins=108;
const r3_Dolphins=89;
const r1_Koalas=88;
const r2_Koalas=91;
const r3_Koalas=110;
const avg_Dolphins=(r1_Dolphins+r2_Dolphins+r3_Dolphins)/3;
const avg_Koalas=(r1_Koalas+r2_Koalas+r3_Koalas)/3;
console.log(`Average Score of Dolphins is ${avg_Dolphins} and that of Koalas is ${avg_Koalas}`);
let winner;
if(avg_Dolphins>avg_Koalas)
{
    winner="Dolphins";
} else if(avg_Dolphins<avg_Koalas) {
    winner="Koalas";
}  else if(avg_Dolphins === avg_Koalas) {
    winner="It's a draw";
}
console.log(`And THe WInner issss 
${winner}`);


//BONUS

const r1_Dolphins=86;
const r2_Dolphins=112;
const r3_Dolphins=101;
const r1_Koalas=98;
const r2_Koalas=95;
const r3_Koalas=106;
const avg_Dolphins=(r1_Dolphins+r2_Dolphins+r3_Dolphins)/3;
const avg_Koalas=(r1_Koalas+r2_Koalas+r3_Koalas)/3;
console.log(`Average Score of Dolphins is ${avg_Dolphins} and that of Koalas is ${avg_Koalas}`);
let winner;
if(avg_Dolphins>avg_Koalas && avg_Dolphins>=100)
{
    winner="Dolphins";
} else if(avg_Dolphins<avg_Koalas && avg_Koalas>=100) {
    winner="Koalas";
}  else if(avg_Dolphins === avg_Koalas && avg_Dolphins>=100) {
    winner="It's a draw";
} else{
    winner =":( No One Wins the trophy!!"
}
console.log(`And THe WInner issss 
${winner}`);
*/
//4
let tip;
const bill=Number(prompt("Enter Bill Amount"));
tip=bill>=50&&bill<=300?bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);