import React from 'react'
import './unit-display.css'

export class UnitDisplay extends React.Component {
    handleWalkingMusic = () => {
        this.props.runWalkingMusic(this.props.item.id, this.props.item.type)
    }


    render() {
        if (!this.props.item) {
            return null
        }
        return (
            <div onClick={this.handleWalkingMusic} className='unit-container'>
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

