import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Cover = () => {
    return (
        <div className="cover">
            <h1>CoverPlaceHolder</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover)
