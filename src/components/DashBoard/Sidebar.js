import {
    Home,
    Images,
    Heart,
    LayoutGrid,
    Upload,
    LogOut
}from 'lucide-react';
 import './Sidebar.css'
function Sidebar()
{
    return(
        <div className="myNav">
            <ul>
                <li><a href="#Home"><Home size={20}/>Home</a></li>
                <li><a href="#Image"><Images size={20}/>Image Library</a></li>
                <li><a href="#Favorites"><Heart size={20}/>Favorites</a></li>
                <li><a href="#Upload"><Upload size={20}/>Upload</a></li>
                <li><a href="Aluboms"><LayoutGrid size={20}/>Albums</a></li>
                <li><a href="#LogOut"><LogOut size={20}/>Log Out</a></li>
            </ul>
        </div>

    );
}
export default Sidebar; 