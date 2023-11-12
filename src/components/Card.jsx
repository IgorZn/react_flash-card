import React, {useState} from 'react';

function Card(props) {
    const [state, setState] = useState(true);
    const handleState = () => {
        setTimeout(() => setState(true), 3000)
        setState(c => !c)
    }

    const handleStyle = () => {
        return state ? "card-body p-5" : "card-body p-5 active"
    }

    const {card} = props
    return (
        <>
            <div className="card m-1 text-center">
                <div className={handleStyle(state)}
                     onClick={handleState}
                >
                    {state ? card.question : card.answer}
                </div>
            </div>
        </>
    );
}

export default Card;