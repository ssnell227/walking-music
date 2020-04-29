import React from 'react'
import './unit-display.css'

export class UnitDisplay extends React.Component {
    render() {
        if (!this.props.item) {
            return null
        }
        console.log(this.props.item.coverImageSRC)
        return (
            <div className='unit-container'>
                <div className='image-container'>
                    <img src={this.props.item.coverImageSRC} alt='' />
                </div>
                <div className='title-container'>
                    <h1>{this.props.item.primary}</h1>
                    <h2>{this.props.item.secondary}</h2>
                    <h3>{this.props.item.tertiary}</h3>
                </div>
            </div >
        )
    }
}

