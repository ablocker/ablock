import React, {Component} from 'react';
import './subtitle.scss';


export default class Title extends Component {

    render() {
        return (
            <div className="subtitle">
                <h2>{this.props.subtitle}</h2>
            </div>

        )
    }
}