import React, {Component} from 'react';
import './title.scss';


export default class Title extends Component {


    render() {
        return (
            <div className="title">
                <h2>{this.props.title}</h2>
            </div>

        )
    }
}