const test = require('tape');
const romanizer = require('./romanizer');

const values = [
    {
        arabic: 5000,
        roman: 'Oh no, 5000 is wrong'
    },
    {
        arabic: 4999,
        roman: 'MMMMCMXCIX'
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
        arabic: 392,
        roman: 'CCCXCII'
    }, 
    {
        arabic: 87,
        roman: 'LXXXVII'
    }, 
    {
        arabic: 14,
        roman: 'XIV'
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

test('tape is working', function(t) {
    t.pass('tape is alive');
    t.end();
})

test('Romanizer returns a string', function (t) {
    const actual = typeof romanizer(2);
    const expected = 'string';
    t.equal(actual, expected,'should be a string');
    t.end();
})

test('Romanizer returns correct result', function(t) {
    const actual = romanizer(1);
    const expected = 'I';
    t.equal(actual, expected, 'One should convert to I');
    t.end();
})

test('Romanizer returns correct for romanizer(2)', function(t) {
    const actual = romanizer(2);
    const expected = 'II';
    t.equal(actual, expected, 'Two should convert to II');
    t.end();
})

test('Romanizer returns III for romanizer(3)', function(t) {
    const actual = romanizer(3);
    const expected = 'III';
    t.equal(actual,expected,'3 should be III');
    t.end();
})

test('romanizer returns IV for 4', function(t) {
    const actual = 'IV';
    const expected = romanizer(4);
    t.equal(actual, expected)
    t.end();
})

test('Romanizer(5) should be V', function(t) {
    const actual = romanizer(5);
    const expected = 'V';
    t.equal(actual, expected, '5 should be V');
    t.end();
})

test('Romanizer(6) should be VI', function(t) {
    const actual = romanizer(6);
    const expected = 'VI';
    t.equal(actual, expected, '6 should be VI');
    t.end();
})

test('Romanizer(7) should be VII', function(t) {
    const actual = romanizer(7);
    const expected = 'VII';
    t.equal(actual, expected, '7 should be VII');
    t.end();
})

test('Romanizer(8) should be VIII', function(t) {
    const actual = romanizer(8);
    const expected = 'VIII';
    t.equal(actual, expected, '8 should be VIII');
    t.end();
})
test('Romanizer(9) should be IX', function(t) {
    const actual = romanizer(9);
    const expected = 'IX';
    t.equal(actual, expected, '9 should be IX');
    t.end();
})

test('Romanizer(10) should be X', function(t) {
    const actual = romanizer(10);
    const expected = 'X';
    t.equal(actual, expected, '10 should be X');
    t.end();
})

test('Romanizer(11) should be XI', function(t) {
    const actual = romanizer(11);
    const expected = 'XI';
    t.equal(actual, expected, '11 should be XI');
    t.end();
})

test('Romanizer(30) should be XXX', function(t) {
    const actual = romanizer(30);
    const expected = 'XXX';
    t.equal(actual, expected, '30 should be XXX');
    t.end();
})

test('Romanizer(104) should be CIV', function(t) {
    const actual = romanizer(104);
    const expected = 'CIV';
    t.equal(actual, expected, '104 should be CIV');
    t.end();
})

test('Romanizer(14) should be XIV', function(t) {
    const actual = romanizer(14);
    const expected = 'XIV';
    t.equal(actual, expected, '14 should be XIV');
    t.end();
})

values.forEach(function(value) {
    test('romanizer extra good', function(t) {
        const actual = romanizer(value.arabic);
        const expected = value.roman;
        t.equal(actual, expected,`${value.arabic} should convert to ${value.roman}`);
        t.end();
    });
    
});
