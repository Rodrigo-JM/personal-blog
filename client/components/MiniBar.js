import React, { Component } from 'react'
import { connect } from 'react-redux'

export const MiniBar = (props) => {
    console.log(props)
    return (
        <div className="mini-bar">
            <h2>MiniBar PlaceHolder</h2>
            <button onClick={() => props.history.push(`blog/new`)} >New</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniBar)
