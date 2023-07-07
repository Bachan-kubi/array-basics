// Data retrieved from an API or any other source
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];
  //method 1
  // Function to create a user card element
//   function createUserCard(user) {
//     console.log(user)
//     const card = document.createElement('div');
//     card.innerHTML = `<h2>User ID: ${user.id}</h2><p>Name: ${user.name}</p>`;
//     console.log(card)
//     return card;
//   }
  
  //method-2 create a map fucntion to Map the users data to HTML elements
  const userCards = users.map((user)=>{
    console.log(user)
    const card = document.createElement('div');
    console.log("card", card)
    card.innerHTML = `<h2>User ID: ${user.id}</h2><p>Name: ${user.name}</p>`;
    return card;
  });
  console.log(userCards)
  
  // Get the container element in the DOM
  const m = document.getElementById('m');
//   console.log(m);
 
  
  // Append the user cards to the map container
  userCards.forEach((card) => {
    // console.log(card);
    m.appendChild(card)
  });
  