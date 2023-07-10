const SearchBox = (props) => {
   const {Handler,placeholder,className} = props
      return (
         <div className={`search-box ${className} flex flex-col items-center`}>
            <input placeholder={placeholder} type='search' 
             onChange={Handler} className='border-4 rounded-md border-blue-900 text-center h-10 mb-7'
            />
         </div>
      )
}

export default SearchBox