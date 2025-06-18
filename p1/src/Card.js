import React from "react";
import {motion} from 'framer-motion';
import './Card.css';

const Card = ({card,flipped, onclick}) =>{
    return (
        <motion.div
            className='{card ${flipped ? flipped : }}'
            onclick={onclick}
            whileTap={{scale:0.95}}
            >
                <div className="cerd-inner">
                    <div className="card-font">?</div>
                    <div className="card-back">{card.name}</div>
                </div>
            </motion.div>
    );
};
export default Card;