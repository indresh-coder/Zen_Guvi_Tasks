// import _ from 'lodash';
// how to compare the json have a same property without order
let obj1= {
    name:"person 1",
    age: 5
}
let obj2={
    age: 5,
    name: "person 1"
}
let flag=false
console.log(Object.keys(obj1).length)
if(Object.keys(obj1).length==Object.keys(obj1).length)
{
    for(key in obj1)
    {
        if(obj1.key==obj2.key)
        {
            flag=true;
        }
        else{
            break;
        }
    }
}
if(flag){
    console.log("Objects are equal")
}
else{
    console.log("Objects are not equal")
}

// using the rest call display all the country flag in the console
let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function(){
    let jres=JSON.parse(xhr.response)
    for(i in jres)
    {
        console.log(jres[i].flag)
    }
//     console.log(JSON.parse(xhr.response))
}

// Using the same rest call display country name, regions, sub regions and populations
let xhr= new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.send()
xhr.onload=function(){
    let jres=JSON.parse(xhr.response)
    for(i in jres)
    {
        console.log(jres[i].continents, jres[i].region, jres[i].subregion)
    }
    console.log(JSON.parse(xhr.response))
}
