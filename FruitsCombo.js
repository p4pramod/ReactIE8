const React = require('react');
const MySelectChange = require('./MySelectChange');
const MyOutputChange = require('./MyOutputChange');

// App.js
class Fruits extends React.Component {

    constructor(props) {
        super(props);

        this.state = { data: [], value: {}, showOutput: false };

        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount() {
        this.loadData().bind(this);
    }

    loadData(){
        $.get(this.props.source, { "i": this.props.param.id }, function (result) {
            this.setState({
                data: result,
                value: result[0]
            });
        }.bind(this));

    }

    componentDidUpdate(prevProps){
        if (prevProps.param.id !== this.props.param.id) {
           this.loadData().bind(this);
          }
    }
    render() {
        return (
            <div onChange={this.changeHandler}>
                <MySelectChange data={this.state.data} />
               <MyOutputChange item={this.state.value} />
            </div>
        )
    }

    changeHandler(childComponent) {
        this.state.data.forEach(function (item) {
            if (parseInt(item.id) === parseInt(childComponent.target.value)) {
                this.setState({ showOutput: item.id > 0 });
                this.setState({ value: item });
            }
        }.bind(this));
    }

}

export default Fruits;
