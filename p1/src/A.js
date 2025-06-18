import React,{useEffect,useState} from "react";
import Card from './Card';
import Data from './Data';
import './A.css';
import './Card.css';
import cardImages from "./Data";

function SetAllCards(){
    const [cards,setCards] = useState([]);
    const [flippedCards,setFlippedCards] = useState([]);
    const [matchedCards,setMatchedCards] = useState([]);

    useEffect(() => {
        const shuffled = [...Card.cardImages,...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card,index) => ({...card,key:index})); 
        setCards(shuffled);
    },[]);
    const handleCardClick = (index) => {
        if(flippedCards.length === 2 || flippedCards.includes(index)) return;
        setFlippedCards([...flippedCards,index]);
    };
    useEffect(()=> {
        if(flippedCards.length === 2){
            const [firstIndex,secondIndex] = flippedCards;
            if(cards[firstIndex].name === cards[secondIndex].name){
                setMatchedCards([...matchedCards,cards[firstIndex].name]);
            }
            setTimeout(() => {
                setFlippedCards([]);
            },1000);
        }
    },[flippedCards,cards,matchedCards]);
    const isFlipped = (index) => {
        flippedCards.includes(index) || matchedCards.includes(cards[index].name);
        return (
            <div className="app-container">
                <h1>Cards Game</h1>
                <div className="grid">
                    {cards.map((card,index) =>(
                        <Card
                        key={card.key}
                        card={card}
                        flipped={isFlipped(index)}
                        onClick={() => handleCardClick(index)}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default SetAllCards;