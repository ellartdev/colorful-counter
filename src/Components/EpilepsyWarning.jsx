import React, { Component } from 'react';
import warningIcon from './warning.svg';

class EpilepsyWarning extends Component {
    render() {
        return (
            <div className="EpilepsyWarning">
                <img src={warningIcon} alt="warn-icon" className="Icon" />
                <h1>SEIZURE WARNING</h1>
                <p>This page contains fast flashing colors when slider input is set to fast speed.
                    It may cause discomfort and trigger seizures for people with photosensitive epilepsy.
                </p>
                <p>Viewer discretion is advised. Be safe!</p>
            </div>
        )
    }
}

export default EpilepsyWarning;