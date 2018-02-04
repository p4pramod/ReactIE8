const React = require('react');
const MySelectChange = require('./MySelectChange');
const MyOutputChange = require('./MyOutputChange');
const Fruits = require('./FruitsCombo');

// App.js
class MyParentChange extends React.Component {

  constructor(props) {
    super(props);

    this.state= {data: [], value: {}, showOutput: false};
    this.changeHandler = this.changeHandler.bind(this);
  }

 
  componentDidMount() {
    $.get(this.props.source, function (result) {
      this.setState({
        data: result
      });
    }.bind(this));
  }

  render() {
    return (
      <div>
      <div onChange={this.changeHandler}>
        <MySelectChange data={this.state.data} />
        {this.state.showOutput ? <MyOutputChange item={this.state.value} /> : null}
      </div>
      <div>
         {this.state.showOutput ? <Fruits source="api/WebApi/GetList" param={this.state.value}  /> : null}
      </div>
      </div>
    )
  }
""
  changeHandler(childComponent) {
    this.state.data.forEach(function (item) {
      if (parseInt(item.id) === parseInt(childComponent.target.value)) {
        this.setState({ showOutput: item.id > 0 });
        this.setState({ value: item });
      }
    }.bind(this));
  }

}

export default MyParentChange;
