import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';



export default function CarsCarousel(props) {

    
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img:'https://source.unsplash.com/random'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:'https://source.unsplash.com/random'
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img:'https://source.unsplash.com/random'
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img:'https://source.unsplash.com/random'
        }
    ]

    return (
        <Carousel animation="slide">
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.img} width="100%"></img>
            

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}