import image from '../../assets/images/image2.png';
import './Section.css';
function Section() {
    return (
        <div className="section" id="about">
            <div className="section-content">
                 <h1> Facial Recognition</h1>
                 <p>Artify AI automatically detects and groups similar faces
                 together, providing another way to search,
                 organize, or browse your photos and videos.</p>
            </div>
            <div className="section-image">
                <img src={image} alt="Section" />
            </div>
            


        </div>

    );
}
export default Section;