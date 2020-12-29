import React,{useState,useEffect} from "react";
import pet,{ANIMALS} from '@frontendmasters/pet';//Parsel Install for us

import useDropdown from './useDropdown';
import Results from './Results';



const SearchParams = () =>{
    //// Declare a new state variable, which we'll call "setLocation"
    const [location,setLocation] = useState("California,CA")// California default
    // ANIMALS API : map Liste string To <options>... 
    // using Key have to be unique
    //const [animal,setAnimal] = useState("dog")
    //const[breed,setBreed] = useState("")
    const[breeds,setBreeds] = useState([]);
    const [animal,AnimalDropdown] = useDropdown("Animal","dog",ANIMALS);
    const [breed, BreedDropdown,setBreed] = useDropdown("Breed","",breeds)
    const [pets, setPets] = useState([])// empty fisrt then add with API

    //async functions
    async function requestPets(){
        const {animals} = await pet.animals({
            location,
            breed,
            type : animal


        });
        console.log("animals",animals)
        setPets(animals || []);


    }

    useEffect(()=>{
        //pet.breeds("dog").then(console.log)
        setBreeds([]);
        setBreed("");//Clear

        //retrieve from api
        pet.breeds(animal).then(({ breeds : apiBreeds }) => {
            const breedString = apiBreeds.map(({name})=>name);
            setBreeds(breedString);

        },error =>console.error(error));
    },//when effect apply answer when this thing change
    [animal,setBreed,setBreeds]);

    return(
        <div className="search-params">
            <form onSubmit = {e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    <input id="location" 
                     value={location}
                     placeholder="Location"
                     onChange= {e => setLocation(e.target.value)
                     }
                     />
                </label>
                <AnimalDropdown />
                <BreedDropdown />

              
                <button>Sumbit</button>
            </form>
            <Results pets ={pets}/>

        </div>
    );
};
export default SearchParams;