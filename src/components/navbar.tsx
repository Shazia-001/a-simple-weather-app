import { CloudSunRain, Search, TextAlignJustify } from "lucide-react"


type Props = {
  searchInput: string;

  setSearchInput: React.Dispatch<
    React.SetStateAction<string>
  >;

  searchWeather: () => void;
};

export default function Navbar({
  searchInput,
  setSearchInput,
  searchWeather
} : Props) {

  return(
    <header className="nav">

      <div className="logo">
        <CloudSunRain className="cloudslogo"/>
        <div>Weatherly</div>
      </div>

      <div className="searchbar">

         <label htmlFor="searchBox"></label>
          <input 
          className="searchbox"
          type="search" 
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => {setSearchInput(e.target.value)}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {searchWeather();}
          }}
          />
          <Search className="searchicon" onClick={searchWeather}/>
      </div>

      <div className="menu">
        <TextAlignJustify className="menubtn"/>
      </div>

    </header>
  )
}