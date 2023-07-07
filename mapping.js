let data = [
    {id: 1, firstName: "kubi", age: 20},
    {id: 2, firstName: "tibi", age: 30},
    {id: 3, firstName: "smrity", age: 20}
];

// 1
function createDataCard(data){
    console.log(data);
    const {id, firstName, age} = data;
    console.log(firstName)
    let card = document.createElement('div');
    console.log(card)
    card.innerHTML = `
    <h2>ID: ${id}</h2>
    <h3>First Name: ${firstName}</h3>
    <h3>First Name: ${age}</h3>
    `;
    card.style.backgroundColor = 'teal'
    card.style.color = 'white'
    card.style.textAlign = 'center';
    card.style.maxWidth = '70%';
    card.style.margin= '10px auto';
    card.style.borderRadius = '10px'
    card.style.padding = '10px'
    return card;
};
//2 map
const allData = data.map(createDataCard);
console.log(allData);
//3 html reference data
let container = document.getElementById('data');

// as the data is in aray we cap apply forEach/map function
allData.forEach(a=>{
    console.log(a)
    container.appendChild(a);
})


