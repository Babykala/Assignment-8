var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all')

request.send();

request.onload=function(){
var data=JSON.parse(this.response);
let result=[];

for(i=0;i<data.length;i++){
   result.push(data[i])
}

// Get all the countries from Asia continent /region using Filter function
let AsianRegion= result.filter(value=>value.region=='Asia')
console.log(AsianRegion)

// Get all the countries with a population of less than 2 lakhs using Filter function
let pop= result.filter(value=>value.population<200000)
console.log(pop)

// Print the following details name, capital, flag using forEach function
result.forEach(value=>{
    console.log("name: "+value.name,"\n"+"capital: "+value.capital,"\n"+"flag: "+value.flag)
})

// Print the total population of countries using reduce function
let totalPop=result.reduce((acc,value)=>acc+=value.population,0)
console.log("Total Population: "+totalPop)

// Print the country which uses US Dollars as currency.
let curr=result.filter(value=>value.currencies!=undefined).filter(value=>{
    if(value.currencies[0].name=='United States dollar')
    return value.name
})
console.log(curr)
}