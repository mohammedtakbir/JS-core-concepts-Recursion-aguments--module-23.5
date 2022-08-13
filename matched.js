const numbers = [34, 45, 56, 67, 78];
/* for(let i = 0; i< numbers.length; i++){
    let number = numbers[i];
    console.log(number);
} */
// ! another way to do this
// * for...of loop
/* for(const number of numbers){
    console.log(number);
} */
// * search phone from this array
const products = [
    {id: 01, name: 'Apple macbook air laptop', price: 19000},
    {id: 02, name: 'Xiaomi mi 12s ultra', price: 19000},
    {id: 03, name: 'Samsung phone note 20 ulta', price: 19000},
    {id: 04, name: 'Dell XPS 13+', price: 19000},
    {id: 05, name: 'lenovo Yoga Laptop', price: 19000},
    {id: 06, name: 'Nokia 1204 mobile phone', price: 19000},
    {id: 07, name: 'Nothing phone', price: 19000},
    {id: 08, name: 'Phone pixel 6a', price: 19000}
]
/* for(const element of products){
    console.log(element);
} */
function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'laptop');
console.log(result);