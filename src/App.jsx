import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import MonsterText from './components/monster-text/monster-text.component';

import './App.css';

const App = () => {

  const [Monsters, setMonsters] = useState([])
  const [SearchMonsters, setSearchMonsters] = useState([])
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => {
      setMonsters(monster)
      setSearchMonsters(monster)
    })
    }
    fetchData()
  },[])

  const onChangeHandler = (searched) => {
    const searchmonstersV = Monsters.filter(search => search.name.toLowerCase().includes(searched.target.value.toLowerCase()))
    setSearchMonsters(searchmonstersV) 
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  console.log('render')
  return (
    <div className='App font-light  '>
      <h1>{title}</h1>
      <MonsterText />
      <SearchBox 
        Handler={onChangeHandler}
        placeholder='search monsters'
        className='search-monsters font-medium' 
      />
      <SearchBox 
        Handler={onChangeTitle}
        placeholder='title'
        className='search-monsters font-medium' 
      />


      <CardList searchmonsters={SearchMonsters}/>
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       monsters: [],
//       searchmonsters: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(monster => {
//       this.setState(() => {
//         return {monsters: monster, searchmonsters : monster}
//       })
//     }) 
//   }

//   onChangeHandler = (searched) => {
//     const searchmonstersV = this.state.monsters.filter(search => search.name.toLowerCase().includes(searched.target.value.toLowerCase()))
//     this.setState(() => {
//       return ({searchmonsters : searchmonstersV})
//     })
    
//   }
//   render() {
//     const {searchmonsters} = this.state
//     const {onChangeHandler} = this

//     return (
//     <div className='App font-light  '>
//       <MonsterText />
//       <SearchBox 
//         Handler={onChangeHandler}
//         placeholder='search monsters'
//         className='search-monsters font-medium' 
//       />      
//       <CardList searchmonsters={searchmonsters}/>
//     </div>
//     )
//   }
// }