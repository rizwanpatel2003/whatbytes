import React, { useState } from 'react'
import Scorecontext from './Scorecontext'
function ContextScoreProvider({ children }) {
    const[modvid,setmodvis]=useState(false);
    const[rank,setrank]= useState(1);
    const [score,setscore]= useState(30);
    const[crct,setcrct]=useState(10);
    const[graph,setgraph]=useState([5,6,4,8,2,5,6,1,7,3,7]);

    return (
       
        <Scorecontext.Provider value={[{score,setscore},{rank,setrank},{crct,setcrct},{modvid,setmodvis},{graph,setgraph}]}>
        {children}
        </Scorecontext.Provider>
     )
}

export default ContextScoreProvider
