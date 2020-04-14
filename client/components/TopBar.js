import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export const TopBar = () => {
    return (
        <div className="top-bar">
            <h2>Personal Blog</h2>
            
            <Link to="/">Home</Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(null, null)(TopBar)
