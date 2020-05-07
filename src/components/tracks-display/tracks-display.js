import React from 'react'
import './tracks-display.css'


const returnedList = []


class ReturnedItem {
  constructor(id) {
    this.id = id
    this.primary = 'Primary Title'
    this.secondary = 'Secondary Title'
    this.tertiary = 'Tertiary Title'
  }
}

function populateList() {
  for (let i = 0; i < 7; i++) {
    returnedList.push(new ReturnedItem(i))
  }
}

populateList()



export class TracksDisplay extends React.Component {
    render () {
        return (
            <div id='tracks-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Track</th>
                            <th>Artist</th>
                            <th>Album</th>
                        </tr>
                    </thead>
                    <tbody>
                    {returnedList.map(item => {
                        return <tr key={item.id}>
                            <td>{item.primary}</td>
                            <td>{item.secondary}</td>
                            <td>{item.tertiary}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
