const React = require('react');

class MyOutputChange extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (<div>
            <h3>Output</h3>
            <p>Id: <b>{this.props.item.id}</b> Value: <b>{this.props.item.value}</b></p>
        </div>)
    }

}

export default MyOutputChange;