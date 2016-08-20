/**
 * Created by fuhuixiang on 16-8-19.
 */
import React from 'react';
import {Link} from 'react-router';

export default class inlineBlockLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            link: '',
            icon: false
        };
    }

    componentDidMount() {
        let {toContent, toLink, icon} = this.props;
        this.setState({
            content: toContent,
            link: toLink,
            icon: icon
        });
    }

    render() {
        return (
            <Link to={`/${this.state.link}/`} className="inline-block-components">
                {this.state.icon ? <i className="left-icon">{this.state.icon}</i> : ''}
                <span className="list-content">{this.state.content}</span>
                <i className="right-icon">&#xe607;</i>
            </Link>
        )
    }
}
