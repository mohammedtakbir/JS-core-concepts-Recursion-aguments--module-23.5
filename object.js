const nayok = {
    name: 'saakib khan',
    id: 121,
    adderess: 'movie cinema',
    isSingle: true,
    friends: ['abul', 'babul', 'kabul', 'rabul'],
    movies: [{name: 'no. 1', year: 2015}, {name: 'king Khan', year: 2016}],
    act: function(){
        console.log('acting like sakib khan!')
    },
    car: {
        brand: 'Tesla',
        model: 'S',
        price: 5000000,
        made: 2025,
        manufucturer: {
            name: 'Tesla',
            ceo: 'Elon Musk',
            country: 'USA'
        }
    }
}
// console.log(Nayok.car);
console.log(nayok.act);
nayok.act()