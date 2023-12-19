//this will be for illustration of why we need the useContext hooks, but in this we will be
//using the props way to pass the data
//from C to E to F
import React from 'react';
import { CourseName, UserContext } from '../App';

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => (
                    <CourseName.Consumer>
                        {course => (
                            <div>

                                <div>User context value is: {user}</div>
                                Course Name is: {course}
                            </div>
                        )}
                    </CourseName.Consumer>
                )}
            </UserContext.Consumer>
        </div>
    );
}

export default ComponentF;
