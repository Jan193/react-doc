import React from 'react'
import { Router, Route } from "react-router-dom";

const Wrap = ({match}) => {
    return <div>
        <Route path={`${match.url}/:p`} render={()=><h3>h3他</h3>} />
    </div>
}

export default Wrap