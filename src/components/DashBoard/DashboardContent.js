 import './DashboardContent.css';
 import {Upload} from 'lucide-react';
 function DashboardContent()
{
    return(
        <div className="mySection">
            <h1>Welcom To Artify AI</h1>
            <p>Your smart photo library,all in one place.</p>
            <button className="myButton" type="button"> <Upload size={18}/>
                Upload photos</button>
        </div>

    );
}
export default DashboardContent;