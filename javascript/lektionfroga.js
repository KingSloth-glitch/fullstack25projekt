const lista=[1,4,2,5,7,9,6,14];
let jamnaTal=[];
for(let tal of lista) {
    if(tal % 2 === 0) {
        jamnaTal.push(tal);
    }
}



console.log("jämna tal är:", jamnaTal);