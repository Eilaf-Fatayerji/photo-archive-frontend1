 import './Header.css';
 import photo from "../../assets/images/p.png";
 function Header()
{
    return(
        <div className="MyHeader">
            <div className="my">
            <h3>Artify AI</h3>
            <img src={photo}
            className="mylogo" alt="Artify AI logo"></img>
            </div>
            <div className="Mysearch">
                <div className="serach-input">
                <span>🔍</span>
                <input type="search" placeholder="Search your images..."/>
                </div>
            
            <button className="search">
                search</button>
            </div>
        </div>

    );
}
export default Header;