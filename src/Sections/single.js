import React, { Component } from 'react';

export class Single extends Component {

    constructor() {
        super();
        this.state = {
            data: { items: [{ content: '' }] }
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params

        //get blogs
        const API_KEY = "?key=AIzaSyC5LMQseX-rxSLjys4oHTk4dpRD6U6uKA4"
        const Base_URL = "https://www.googleapis.com/blogger/v3/blogs/4492098106120259453/posts/" + id + API_KEY;

        fetch(Base_URL)
            .then(res => res.json())
            .then(result => {
                this.setState({ data: result });
                console.log(this.state.data);
            });

        window.scrollTo(0, 0)
    }


    render() {
        return (
            <section id='single' className='min-height'>
                <div align='left' className='container' dangerouslySetInnerHTML={{ __html: this.state.data.content }}>
                </div>
            </section>
        );
    }
}

