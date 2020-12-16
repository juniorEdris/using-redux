import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/index'

function CakeStore(props) {
    return (
        <div>
            <h1>Number of Cakes - { props.numOfCakes }</h1>
            <button type='button' onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        numOfCakes:state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:()=>dispatch(buyCake())
    }
 }
 export default connect(mapStateToProps,mapDispatchToProps)(CakeStore)