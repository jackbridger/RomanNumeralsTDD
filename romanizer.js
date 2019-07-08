if (typeof module !== 'undefined') {
    module.exports = romanizer;
}


const values = [
    {
        arabic: 1000,
        roman: 'M'
    },
    {
        arabic: 900,
        roman: 'CM'
    },
    {
        arabic: 500,
        roman: 'D'
    },
    {
        arabic: 400,
        roman: 'CD'
    },
    {
        arabic: 100,
        roman: 'C'
    },    
    {
        arabic: 90,
        roman: 'XC'
    },    
    {
        arabic: 50,
        roman: 'L'
    },   
    {
        arabic: 40,
        roman: 'XL'
    },   
    {
        arabic: 10,
        roman: 'X'
    },
    {
        arabic: 9,
        roman: 'IX'
    },
    {
        arabic: 5,
        roman: 'V'
    },
    {
        arabic: 4,
        roman: 'IV'
    },
    {
        arabic: 1,
        roman: 'I'        
    }
]

function romanizer(decimal) {
    let romNum = '';
    let remaining = decimal;
    if (decimal >= 5000) {
        return 'Oh no, 5000 is wrong';
    }
    else if (decimal === 0)
        return 'Oh no, zero hasn\'t been invented'

    while (remaining > 0) {
        for (let i = 0; i < values.length; i++) {
            if (values[i].arabic <= remaining) {
                romNum += values[i].roman;
                remaining -= values[i].arabic;
                break;
            }
        }
    }

    return romNum;
}