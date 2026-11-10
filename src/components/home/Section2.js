import image from '../../assets/images/image3.png';
import './section2.css';
function Section2 (){
    return(
        <div className="section2">
             <div>
                <img src={image} alt="Section2" />
            </div>
            <div>
                <h1>Text-to-Image Search</h1>
                <p>Find any photo instantly just by describing it. 
                    Search your library using natural language and 
                    let AI locate the exact memory you're looking for
                </p>
            </div>
           

        </div>

    );
}
export default Section2;