import React, { Component } from 'react';



class AddStudent extends Component {

    render() {
        const { match } = this.props
        console.log(match.url)
        return (
            <h1>AddStudent

            </h1>

        );
    }
}

export default AddStudent;