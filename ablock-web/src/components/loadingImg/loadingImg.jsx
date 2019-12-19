import React, {Component} from 'react';
import {Spin} from 'antd';
import './loadingIng.scss';


export default class LoadingImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alt: this.props.alt,
            src: this.props.src,
            width: this.props.width + "px",
            height: this.props.height + "px",
            loading: true
        }
    }

    imgLoaded() {
        let loading = this.state.loading;
        this.setState({
            loading: !loading
        });
    }

    render() {
        return (
            <Spin spinning={this.state.loading}>
                <div className="loadingImg" {...this.props}>
                    <img
                        alt={this.state.alt}
                        src={this.state.src}
                        onLoad={this.imgLoaded.bind(this)}
                        width="100%"
                        height="100%"
                    />
                </div>
            </Spin>
        )
    }
}