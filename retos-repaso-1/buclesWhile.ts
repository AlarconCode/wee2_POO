// Retos Bucles While

function hasEven(myNums:number[]){

    let i:number=0
    while (i<myNums.length) {
        if (myNums[i] % 2 == 0) return 'There is some Even Number'
        i++
    }

    return 'There is no Even Number'

}

console.log(hasEven([1,3,5,7,9]));


function startWithM(myNames:string[]) {

    let i:number=0
    let count = 0
    while (i<myNames.length) {
        if (myNames[i].charCodeAt(0) == 77) {
            count++
        }
        i++
    }

    return  count == myNames.length ? 'All names start with M' : 'No all names start with M'

}

console.log(startWithM(['Megan', 'Mary', 'Manuel', 'John']));

