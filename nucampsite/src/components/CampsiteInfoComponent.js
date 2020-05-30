import React, { Component } from 'react'

export default class CampsiteInfo extends Component {
    
    render() {
        return this.props.campsite ? <div clasName="row" /> : <div />
    }
}



