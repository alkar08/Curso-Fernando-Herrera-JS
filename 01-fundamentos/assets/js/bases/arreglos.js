 
let arregloCosas = [
    true,
    123,
    'Alejo',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]
];

console.log(arregloCosas[7][3]); // Retotna 'Dr Light'
console.log(arregloCosas[7][4][1]); // Retorna Woodman

