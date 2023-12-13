//illustration for ErrorBoundaries
//linked to the ErrorBoundary.js
import React from 'react'
//it will be accepting the heroName as the props
function Hero({ heroName }) {
    if (heroName == 'joker') {
        throw new Error('Not a Hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero