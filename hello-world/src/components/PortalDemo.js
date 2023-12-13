//React Portals illustration
import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>
            PortalsDemo
        </h1>,
        document.getElementById('portal-root')//we want that in index.html file, our code must not 
                                            //come under the root attribute of div, but it should come
                                            //come under the portal-root attribute of the dic tag
                                            //,so use the ReactDOM.createPortal method of the ReactDOM
    )
}

export default PortalDemo