
const MonsterContainer = (props) => {
   const {searchmonsters} = props
      return(
         <div className="grid grid-cols-3 gap-4 ml-2 mr-2 ">
            
            {
            searchmonsters.map((monster) => {
              const {name, email, id} = monster
              return (
               <div className="monster-container border-2 rounded-lg bg-blue-300 flex flex-col items-center" key={id}>
                  <img src={`https://robohash.org/${id}?size=150x150`} alt={`monster ${name}`}/>
                  
                  <h1 className=' font-extrabold text-sky-500'>{name}</h1>
                  <p>{email}</p>
                  
               </div>
             )
            })
          }
        </div>
      )
}


export default MonsterContainer