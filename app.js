// TODO
var GrocceryList = () => (
		<span>
		  <GrocceryListItems items = {['this', 'that', 'the other']}/>
		</span>
)

var Kittens = () => (
  <ul>kittens</ul>
)
var Pumpkins = () => (
  <ul>pumpkin</ul>
)

var GrocceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>

);


ReactDOM.render(<GrocceryList />, document.getElementById("app"));