import React from "react";
import { db } from "./firebaseConfig";
import { getDatabase, ref, onValue} from "firebase/database";
/*
import './index.css';
*/

export class Crud extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cook_time: [],
      food_img: [],
      instructions: [],
      recipe_name: [],
      recipe_objs: []
    }
  }

  /* WORKING GOES THRU ALL OF CHILDREN */
  componentDidMount(){
    const db = getDatabase();
    const starCountRef = ref(db, 'Recipes');

    onValue(starCountRef, (snapshot) => {
      {/*Getting cook times*/}
      const list_cooktimes = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Cook_Time;
        list_cooktimes.push(childData);
      });
      this.setState({ cook_time : list_cooktimes });

      {/*Gettimg food images*/}
      const list_foodimgs = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Food_Img;
        list_foodimgs.push(childData);
      });
      this.setState({ food_img : list_foodimgs });

      {/*Getting instructions*/}
      const list_instructions = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Instructions;
        list_instructions.push(childData);
      });
      this.setState({ instructions : list_instructions });

      {/*Getting recipe names*/}
      const list_recipenames = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Recipe_Name;
        list_recipenames.push(childData);
      });
      this.setState({ recipe_name : list_recipenames });
    });    
  }


  render() {
    {/*Creating instances of a class for each recipe*/}
    const num = this.state.cook_time.length;
    var out_list = [];

    this.state.instructions.forEach((instruction, index) => {
      var dict_rec = {};
      dict_rec["recipe_name"] = this.state.recipe_name[index];
      dict_rec["instructions"] = this.state.instructions[index];
      dict_rec["food_img"] = this.state.food_img[index];
      out_list.push(dict_rec);
    });
    this.setState({ recipe_objs : out_list });

    {/*This is formatting of the recipe data - e.g. "card"*/}
    const Recipe = ({recipe_name,instructions,food_img}) => 
      <li key={recipe_name}>
        <h2>{instructions}</h2>
        <img alt={`cover of ${instructions}`} src={food_img} />
      </li>

    {/**Mapping each dictionary recipe entry to the format*/}
    const RecipeList = ({n}) =>
      <div>
        <h1>Recipes</h1>
        <ul>
          {this.state.recipe_objs.slice(0,n).map(Recipe)}
        </ul>
      </div>

    return (
      <div>
        <RecipeList n={4} />
      </div>
    )
  }
  
}