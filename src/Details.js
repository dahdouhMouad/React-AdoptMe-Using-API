import React from "react";
import pet from "@frontendmasters/pet";
import {navigate} from '@reach/router'
import Modal from './Modal'
import Carousel from "./Carousel" ;
import ErrorBoundary from "./ErrorBoundary"

class Details extends React.Component{
    //state= { loading :true} valid because we configure babel with eslint
    constructor() {
        super();
        this.state = { loading: true,showModal:false };
      }
    //componentDidMount do one time then leave example ajax request  
    componentDidMount(){
        //pass it the id of the animals in the url 
        // this.props: can only read what inside can not change it
        pet.animal(this.props.id).then(({animal}) => {
            this.setState({
                url: animal.url,
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city}, ${
                  animal.contact.address.state
                }`,
                description: animal.description,
                media: animal.photos,
                breed: animal.breeds.primary,
                loading: false,
                
                
              });
        }, console.error);

    }

    toggleModal = () => this.setState({showModal : !this.state.showModal});
    adopt =() => navigate(this.state.url);
    //class in react must have render
    render(){
        if(this.state.loading){
            return <h1>Loading..</h1>;
        }

        const {name,animal,location,description,media,breed,showModal} = this.state;

        return(
            <div className="details">
                <Carousel media ={media} />
                <div>
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
                <button onClick={this.toggleModal}>Adopt {name}</button>
                <p>{description}</p>
                {showModal ? (
                    <Modal>
                        <div>
                        <h1>Would Like To adopt {name}?</h1>
                         <div className="buttons">
                            <button onClick={this.adopt}>Yes</button>
                            <button onClick={this.toggleModal}>No</button>
                         </div>
                        </div>
                    </Modal>

                ):null};

                </div>
            </div>
        );
    }
}
export default function DetailsWithErrorBoundary(props){
    return(
    <ErrorBoundary>
        <Details {...props}/>
    </ErrorBoundary>

) }


// <Details {...props}/> Solution Stack OverFlow
// we can use this.props = props in render 
