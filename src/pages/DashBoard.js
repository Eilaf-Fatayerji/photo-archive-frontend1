import Header from "../components/DashBoard/Header";
import Sidebar from "../components/DashBoard/Sidebar";
import DashboardContent from "../components/DashBoard/DashboardContent";
import PhotoLibrary from "../components/DashBoard/PhotoLibrary";
 function DashBoard(){
    return(
        <div>
           <Sidebar/>
           <div>
            <Header/>
            <DashboardContent/>
            <PhotoLibrary/>
           </div>
        </div>
       

    );
 }
 export default DashBoard;