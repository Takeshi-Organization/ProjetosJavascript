let s = "abcdefghhgfedecba";


let boolnumber=0;
let key_max;
let key_min;




const occurrences = {};

    for (const char of s) {
        if (typeof occurrences[char]==='undefined') {
            occurrences[char]=1;
        } else {
            occurrences[char]++
        }
    }

    console.log(occurrences);

    var obj= Object.values(occurrences).reduce((acc,val,index)=> {
        if (typeof acc[val]==='undefined'){
            acc[val]=1;
        } else {
            acc[val]++
        }
        return acc
    }, {})


console.log(obj);

if (Object.keys(obj).length==1){
    boolnumber=1;
} else {
    if (Object.keys(obj).length == 2) {
        key_max = Object.keys(obj).reduce((a, b) =>  +a > +b ? +a : +b)
        key_min = Object.keys(obj).reduce((a, b) =>  +a < +b ? +a : +b)
        console.log(key_max);
        console.log(key_min);
        if ((key_max - key_min) == 1 && (obj[key_max] == 1))
            boolnumber=1;
        else if (key_min == 1 && obj[key_min] == 1)
            boolnumber=1;
    }
        
}



if (boolnumber==1) {
    console.log("YES")
}
else
    console.log("NO")






/*


console.log(occurrences)

var obj= Object.values(occurrences).reduce((acc,val,index)=> {
    if (typeof acc[val]==='undefined'){
        acc[val]=1;
    } else {
        acc[val]++
    }
    return acc
}, {})

console.log(obj);

 Object.keys(obj).forEach(function(key){
    console.log(obj[key]);
 });


const keys= Object.keys(obj);

const keysInt = keys.map(function(v) {
    return parseInt(v, 10);
  });

const max = Object.keys(obj).reduce((a, v) => Math.max(a, obj[v]), -Infinity);
const result = Object.keys(obj).filter(v => obj[v] === max);

let moda=parseInt(result[0])

  
let boolnumber=0;

console.log(obj)
console.log(keysInt)

for (let i=0;i<keys.length;i++) {
    if (keysInt[i]!=moda) {
        if (keysInt[i]!=1) {
            if (keysInt[i]-1!=moda) {
                console.log(keysInt[i])
                console.log(moda)
                boolnumber=1;
                break;
            }
        }
    }
}



if (boolnumber==1) {
    console.log("NO")
}
else
    console.log("YES")




/*


if (keys.length == 1) 
        return "YES"
    else 
    
    if (keys.length == 3) {

        let key_max = Math.max(keys)
        let key_min = Math.min(keys)
        console.log(key_max)
        console.log(key_min)
        if (key_max - key_min == 1 && keys.length == 1)
            return "YES"
        else
            if (key_min == 1 && keys[key_min] == 1)
            return "YES"
    }
        
return "NO"*/
