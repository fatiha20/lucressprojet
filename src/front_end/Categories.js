import react from "react";

function ClickMe(){
  console.log('ici');
}

function  Categories() {
    return (
      <div>
        <button onClick={ClickMe} >
        Categories
        </button>
        
        <strong> 
        <ul> PRODUITS ELECTRONIQUES  </ul>
        <ul>PRODUITS ELECTROMENAGERS</ul>
        <ul> VETEMENTS POUR ALDULTE</ul>
        <ul> VETEMENTS POUR ENFANTS</ul>
        <ul> CHAUSSURES MIXTES</ul>
        </strong>
      </div>
    );
  }
  export default  Categories;