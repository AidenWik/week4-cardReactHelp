import logo from './logo.svg';
import './App.css';

function App() {


    return (
      <div className="App">
 <head>
  <title>Homework IST 256 Sheetz</title>
</head>
 <div class="card-container">
  <div class="card-wrapper">
  <div class="Sheetz">
    <label class="sheetzLbl">Sheetz</label>
  </div>
  
<div class="directions">
  <label id="directionsLbl">Directions</label>
</div>
  
<div class="Favorites">
  <label id="Favoriteslbl">Favorites</label>
  </div>
  
<div class="btn-wrapper">
  <button>Hotdog</button>
  <button>Fries</button>
  <button>Shake</button>
</div>

<div class="images">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png" alt="A beautiful landscape"></img>

  <img src="https://media.istockphoto.com/id/496094410/photo/potatoes-fries-in-a-red-carton-box-isolated-fast-food.jpg?s=612x612&w=0&k=20&c=d7WnO6AW0C3A-xMSBa3Yb5rmSNelyY-jmxhW2efZq2Q="></img>

  <img 
src="https://gofericecream.com/wp-content/uploads/2021/06/shake-.png"></img>
  
</div>

 <div class="detailsBtn">
        <button class="toggle-details">Details</button>
    </div>
     
  
<div class="paragraphs">
  <p1>$1.99 <br></br>A food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun.</p1>
  <p2>$0.99 <br></br>Side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips.</p2>
  <p3>$5.99 <br></br>A sweet beverage made by blending milk, ice cream, and flavorings or sweeteners.</p3>
  </div>

 
  </div>

  </div>
  
  <div class ="duper">
   <button id="duper">Button for duplication</button>
    </div>   
  
  
   
  
  <div class ="background">
    <button id="background">Change Background</button>
  </div>
   
  
  <div class ="title">
    <button id="title">Change Title</button>
  </div>
  

  
    <div class="delete">
        <button id="deleteLastCard">Delete Last Card</button>
    </div>
    
   



   <button>Details</button>  </div>

    );
  }

export default App;
