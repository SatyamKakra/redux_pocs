import React, { useState } from 'react'
import { connect } from "react-redux";

//all the changes that are possible to the current state

function Ball(props) {
    console.log(props);

    return (
        <>
            <h1>Balls</h1>
            <h2>NO of Balls: {props.balls}</h2>
            <button onClick={props.buyBall}>+</button>
            <button onClick={props.sellBall}>-</button>
        </>
    )

}

// to get your state variable from redux store and  dispatch function bhi provide krata hai

const mapStateToProps = (store) => {
    return store;
}
const mapDispatchtoProps = (dispatch) => {
    return {
        sellBall: () => {
            dispatch({
                type: "decrement"
            })
        },
        buyBall: () => {
            dispatch({
                type: "increment"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Ball);