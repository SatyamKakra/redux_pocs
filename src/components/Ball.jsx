import React, { useState } from 'react'
import {connect} from "react-redux";

//all the changes that are possible to the current state

 function Ball(props) {

    return (
        <>
            <h1>Balls</h1>
            <h2>NO of Balls: {props.store}</h2>
            <button>+</button>
            <button>-</button>
        </>
    )

 }

 // to get your state variable from redux store

 const mapStateToProps = (store) => {
    return store;
 }
export default connect(mapStateToProps)(Ball);