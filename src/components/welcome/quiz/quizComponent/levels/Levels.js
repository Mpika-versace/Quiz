import React from 'react';

export default function Levels({goodAnswers}) 
{
    
    return (
        <div className="levels">
            <span>Débutant</span>
            <span className="levels-score">{goodAnswers}</span>
            
            
        </div>
    )
}
