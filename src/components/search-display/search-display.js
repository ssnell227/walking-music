import React from 'react'
import './search-display.css'
import {UnitDisplay} from '../unit-display/unit-display'




//leaving key values for UnitDisplay out for now
export class SearchDisplay extends React.Component {
    render () {
        return (
            <div className='display-container'>
                {
                    this.props.returnedList.map(item => {
                        return <UnitDisplay key={item.id} item={item}/>
                    })
                }
            </div>
        )
    }
}

