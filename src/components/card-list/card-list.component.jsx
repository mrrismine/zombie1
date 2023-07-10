import MonsterContainer from "../monster-container/monster-container";

const CardList = (props) => {
   const {searchmonsters} = props
      return (
         <div className="monster-card">
            <MonsterContainer searchmonsters={searchmonsters}/>
         </div>
      )
}

export default CardList