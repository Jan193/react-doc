import React from 'react'
import { Route, Link } from "react-router-dom";


 const App = function(props) {
     let nodeList = props.articleNodeList
     console.log(nodeList)
    return <div className="menu">
        <ul className="menu-list">
            {
                nodeList.map((item, index) => {
                    return item.LanguageCode === 'cn' &&
                        <li key={index} className="menu-list-item">
                        <p>{item.NodeName}</p>
                    </li>
                })
            }
        </ul>
    </div>
}

export default App
