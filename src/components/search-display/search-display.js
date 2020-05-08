import React from 'react'
import './search-display.css'
import { UnitDisplay } from '../unit-display/unit-display'




//leaving key values for UnitDisplay out for now
export class SearchDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.handleWalkingMusic = this.handleWalkingMusic.bind(this)
    }
    handleWalkingMusic(e) {
            if (e.target.value) {
                //does e.target.key point to the key of the UnitDisplay item? i hope thats the spotify ID that the api talks about
                //get the selector from the state in app?
                this.props.runWalkingMusic(e.target.key, this.props.returnedList.selector)
            }
    }
    render() {
        return (
            <div className='display-container'>
                {
                    this.props.returnedList.map(item => {
                        return <UnitDisplay onclick={this.handleWalkingMusic} key={item.id} item={item} />
                    })
                }
            </div>
        )
    }
}

