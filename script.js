const hexa = function(num){
    if(num === 10) num = 'A';
    else if(num === 11) num = 'B';
    else if(num === 12) num = 'C';
    else if(num === 13) num = 'D';
    else if(num === 14) num = 'E';
    else if(num === 15) num = 'F';
    return num;
}
const hexaNUm = [];
const hexaRem = [];
const res = [];

const [...color] = prompt('Enter color in rgb foam (& enter dot after every color)').split('.');

color.forEach(col => {
    const number = Math.floor(col/16);
    const reminder = col%16;
    const hexaNUmber = hexa(number).toString();
    const hexaReminder = hexa(reminder);
    // const result = hexaNUmber + hexaReminder;
    // console.log(result);
    hexaNUm.push(hexaNUmber);
    hexaRem.push(hexaReminder);
})


for(let i=0; i<=2; i++){
    const result = hexaNUm[i] + hexaRem[i];
    res.push(result);
}
console.log(`#${res.join('')}`);
