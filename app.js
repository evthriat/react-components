//TODO


// var Kittens = () => (
//   <ul>kittens</ul>
// )
// var Pumpkins = () => (
//   <ul>pumpkin</ul>
// )

// var GrocceryListItems = (props) => {
//   var ItemClickedOn = (event) => {
//     console.log('He clicked me!')
//   };
//   return(
//   <ul>
//     <li onClick={ItemClickedOn}>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );
// };



class GrocceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onHoverListItem() {
    this.setState({
      done: !this.state.done
    })
  }      


  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
          <li style={style} onMouseOver={this.onHoverListItem.bind(this)}>{this.props.item}</li>
      
    );
  }
}

var GrocceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GrocceryListItems item={item} />
    )}
  </ul>
);

var App = () => (
    <span>
      <GrocceryList items = {['this', 'that', 'the other']}/>
    </span>
)
ReactDOM.render(<App />, document.getElementById("app"));
