"use strict";
// Function Zodiac Sign
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodiac = void 0;
function zodiac(day, month) {
    var aries = { sign: 'Aries', start: [21, 3], end: [19, 4] };
    var tauro = { sign: 'Tauro', start: [20, 4], end: [20, 5] };
    var geminis = { sign: 'Géminis', start: [21, 5], end: [20, 6] };
    var cancer = { sign: 'Cáncer', start: [21, 6], end: [22, 7] };
    var leo = { sign: 'Leo', start: [23, 7], end: [22, 8] };
    var virgo = { sign: 'Virgo', start: [23, 8], end: [22, 9] };
    var libra = { sign: 'Libra', start: [23, 9], end: [22, 10] };
    var escorpio = { sign: 'Escorpio', start: [23, 10], end: [21, 11] };
    var sagitario = { sign: 'Sagitario', start: [22, 11], end: [21, 12] };
    var capricornio = { sign: 'Capricornio', start: [22, 12], end: [19, 1] };
    var acuario = { sign: 'Acuario', start: [20, 1], end: [18, 2] };
    var piscis = { sign: 'Piscis', start: [19, 2], end: [20, 3] };
    var zodiacSigns = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, piscis];
    var result = '';
    for (var i = 0; i < zodiacSigns.length; i++) {
        if (day >= zodiacSigns[i].start[0] && day <= 31 && month == zodiacSigns[i].start[1] || day <= zodiacSigns[i].end[0] && day >= 1 && month == zodiacSigns[i].end[1]) {
            result = zodiacSigns[i].sign;
        }
    }
    return "Tu signo zodiacal es ".concat(result);
}
exports.zodiac = zodiac;
console.log(zodiac(1, 5));
function continent(country) {
    var continentes = [
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
    ];
    var result = '';
    for (var _i = 0, continentes_1 = continentes; _i < continentes_1.length; _i++) {
        var continente = continentes_1[_i];
        for (var i = 0; i < continente.paises.length; i++) {
            if (country == continente.paises[i]) {
                result = "Estas en ".concat(continente.name);
            }
        }
    }
    return result;
}
console.log(continent('India'));
function isEven(number) {
    number % 2 == 0 ? console.log('El número es par') : console.log('El número es impar');
}
isEven(11);
