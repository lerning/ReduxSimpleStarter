import React, { Component } from 'react'
//^ same as const Component = React.Component

//create class so we can use the value of the input
//this is a class component
class SearchBar extends Component {
   constructor(props){
      super(props)

      this.state = { term: ''}
   }

    render(){
        return (
          <div>
           <input
           value={this.state.term}
           onChange = {(event) => this.setState({ term: event.target.value })} />
          </div>
     )
   }

   // modular option (above is sleaker for smaller funcs)
   // onInputChange(event){
   //    console.log(event.target.value);
   // }
}



//this is a funcational component
// const SearchBar = () => {
//    return <input />
// }

//this exports the SB class so index.js can use it
export default SearchBar
