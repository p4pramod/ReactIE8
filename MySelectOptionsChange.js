const React = require('react');

class MySelectOptionsChange extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <option value={this.props.data.id}>{this.props.data.value}</option>
    }

}

export default MySelectOptionsChange;