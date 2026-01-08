var testArr=["background-color", "list-style-image", "-webkit-transition"]
function camelize(str){

    newStr=str.split('-')
    .map((val,index)=>{
        if(index==0 || val.length==0)
            return val;
        const first=val.charAt(0).toUpperCase();
        const rest=val.slice(1);
        return first+rest;
    })
    .filter((v)=>{return v.length>0})
    .reduce((acc,curr)=>{
        return acc+curr
    })
    return newStr;
}

function filterRange(arr, a, b){
    return arr.filter( (v)=>  (v>=a && v<=b))
}

function copySorted(arr){
    var copied=arr.slice();
    return copied.sort();

}

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5);
}

function unique(arr) {
    result=[];
    arr.forEach(element => {
       if(result.indexOf(element) >=0) return;
       result.push(element);

    });

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
