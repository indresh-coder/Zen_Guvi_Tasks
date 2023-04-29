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
