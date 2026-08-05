import '../styles/Sidebar.css'

export default function SearchBar({ searchQuery, setSearchQuery }){
    return(
        <div className="search-bar-div">
            <input 
                type='text'
                placeholder="Search notes..." 
                className='search-bar'
                value={searchQuery}
                onChange={(event)=> setSearchQuery(event.target.value)}
            />
            
        </div>
    )
}