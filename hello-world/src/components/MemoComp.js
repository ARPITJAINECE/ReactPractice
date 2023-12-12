//for memo, i.e. to use PureComponentsfor the functional coponents also....
//it is also to be linked to the ParentComp.js
import React from 'react'

function MemoComp({name}) {
    console.log("Rendering the Memo component....");
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)