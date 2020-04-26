import React from 'react'

export class UnitDisplay extends React.Component {
    render () {
        if (!this.props.item) {
            return null
        }
       return (
       <div className='unit-container'>
            <img src={this.props.item.coverImageURL} alt=''/>
            <h1>{this.props.item.primary}</h1>
            <h2>{this.props.item.secondary}</h2>
            <h3>{this.props.item.tertiary}</h3>
        </div>
       )
    }
}

