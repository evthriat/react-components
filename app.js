//TODO
var GrocceryList = () => (
		<span>
		  <GrocceryListItems items = {['this', 'that', 'the other']}/>
		</span>
)

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
  }
  render() {
    return (
      <li>{this.props.items}</li>
    );
  }
}
// var GrocceryListItems = (props) => (
//   <ul>
//     {props.items.map(item =>
//       <GrocceryListItems items = {items} />
//     )}
//   </ul>
// )

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.todo}</li>
//     );
//   }
// }

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );




ReactDOM.render(<GrocceryList />, document.getElementById("app"));

// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );