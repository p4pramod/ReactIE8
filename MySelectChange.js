const React = require('react');
const MySelectOptionsChange = require('./MySelectOptionsChange');


class MySelectChange extends React.Component {

    constructor(props) {
        super(props);

    }

    mySelectOptions(result) {
        return <MySelectOptionsChange
            key={result.id}
            data={result} />
    }

    render() {

        return (
            <select
                className="form-control">
                {this.props.data.map((d) => this.mySelectOptions(d))}
            </select>
        )
    }
}

export default MySelectChange;