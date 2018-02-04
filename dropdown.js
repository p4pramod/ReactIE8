const React = require('react');

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            option: this.props.option
        }
    }
    componentDidMount() {
        // alert();
    }
    componentDidUpdate(prevProps, prevState) {
        //alert(this.props.option);
        //alert(prevProps.option);

        if (this.props.option != prevState.option) {

            this.setState({ option: '-' + prevProps.option + '-' });
        }


    }

    render() {

        return (
            <select>
                <option>{this.state.option}</option>
            </select>

        )
    }

}

export default DropDown;