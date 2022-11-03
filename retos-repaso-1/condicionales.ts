// Function Zodiac Sign

export {}

function zodiac(day:number, month:number):string {
    
    let aries = {sign:'Aries', start: [21,3], end: [19,4]}
    let tauro = {sign:'Tauro', start: [20,4], end: [20,5]}
    let geminis = {sign:'Géminis', start: [21,5], end: [20,6]}
    let cancer = {sign:'Cáncer', start: [21,6], end: [22,7]}
    let leo = {sign:'Leo', start: [23,7], end: [22,8]}
    let virgo = {sign:'Virgo', start: [23,8], end: [22,9]}
    let libra = {sign:'Libra', start: [23,9], end: [22,10]}
    let escorpio = {sign:'Escorpio', start: [23,10], end: [21,11]}
    let sagitario = {sign:'Sagitario', start: [22,11], end: [21,12]}
    let capricornio = {sign:'Capricornio', start: [22,12], end: [19,1]}
    let acuario = {sign:'Acuario', start: [20,1], end: [18,2]}
    let piscis = {sign:'Piscis', start: [19,2], end: [20,3]}
    
    let zodiacSigns = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis]
            
    let result = ''

    for (let i=0;i<zodiacSigns.length;i++){
              

        if (day >= zodiacSigns[i].start[0] && day <= 31 && month == zodiacSigns[i].start[1] || day <= zodiacSigns[i].end[0] && day >= 1 && month == zodiacSigns[i].end[1]) {
            
            result = zodiacSigns[i].sign
               
        } 
        
    }
    
    
    return `Tu signo zodiacal es ${result}`

}

console.log(zodiac(1,5));


function continent(country:string):string {

    let continentes = [
        
        {
            name: 'Europa',
            paises: ['Portugal', 'España', 'Francia', 'Alemania', 'Italia']
        },
        {
            name: 'Asia',
            paises: ['China', 'Japon', 'Corea del Sur', 'Taiwan', 'India']
        },
        {
            name: 'Oceania',
            paises: ['Australia', 'Nueva Zelanda']
        },
        {
            name: 'America',
            paises: ['USA', 'Mexico', 'Canada', 'Cuba', 'Colombia']
        }

    ]
    let result = ''
    for (let continente of continentes) {
        for (let i=0;i<continente.paises.length;i++) {

            if (country == continente.paises[i]) {
                result = `Estas en ${continente.name}`
            }
        }
    }
    return result
}

console.log(continent('India'));

function isEven(number:number) {

    number % 2 == 0 ? console.log('El número es par') : console.log('El número es impar');
    

}


isEven(11)

