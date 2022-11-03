// Retos Bucles For

function eveNumbers(num:number) {
    for (let i=0;i<=num;i++) {
        if (i % 2 != 0) console.log(i)
    }
}

eveNumbers(523)

function myRevert(myArr:any[]) {

    let myRevertArray:any[] = []
    for (let i=0;i<myArr.length;i++) {
        myRevertArray.unshift(myArr[i])
    }
    return myRevertArray
}

console.log(myRevert(['Pedro', 'Juan', 'Felix']));


function isRainbow(colors:string[]) {

    let rainbowColors:string[] = ['Red', 'Orange', 'Yellow', 'Green', 'Indigo', 'Blue', 'Violet'] 
    for (let i=0;i<colors.length;i++){
        let colorCompare = false
        for (let j=0;j<rainbowColors.length;j++) {
            if (colors[i] == rainbowColors[j])  colorCompare = true            
        }
        colorCompare ? console.log(`The color ${colors[i]} is in the Rainbow`) : console.log(`The color ${colors[i]} is NOT in the Rainbow`)
    }   
}

isRainbow(['Green', 'Black', 'Purple', 'Yellow', 'Blue', 'Brown', 'Pink', 'Cyan', 'Violet'])


function add(myWords:string[]):number {

    let add:number = 0
    for (let word of myWords) {
        add += word.length
    }
    return add
}

console.log(add(['Yo', 'Tu', 'El']));
