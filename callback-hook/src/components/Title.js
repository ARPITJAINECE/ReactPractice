import React from 'react'

function Title() {
    console.log('Rendering the Title');
    return (
        <h2>
            useCallBack Hook
        </h2>
    )
}

// export default Title

export default React.memo(Title)