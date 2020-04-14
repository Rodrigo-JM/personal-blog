import React, { Component } from 'react'
import { connect } from 'react-redux'

export const MiniBar = () => {
    return (
        <div className="mini-bar">
            <h2>MiniBar PlaceHolder</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniBar)
