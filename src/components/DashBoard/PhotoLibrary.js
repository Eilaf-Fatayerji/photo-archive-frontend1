import './PhotoLibrary.css';

import photo1 from '../../assets/images/photo1.png';
import photo2 from '../../assets/images/photo2.png';
import photo3 from '../../assets/images/photo3.png';
import photo4 from '../../assets/images/photo4.png';
import photo5 from '../../assets/images/photo5.png';
import photo6 from '../../assets/images/photo6.png';
import photo7 from '../../assets/images/photo7.png';
import photo8 from '../../assets/images/photo8.png';
import photo9 from '../../assets/images/photo9.png';
import photo10 from '../../assets/images/photo10.png';

function PhotoLibrary() {
  const photos = [
    photo1, photo2, photo3, photo4, photo5,
    photo6, photo7, photo8, photo9, photo10
  ];

  return (
    <div className="photo-library">

      <div className="library-heading">
        <div>
          <h2>My Photo Library</h2>
          <p>Your memories, organized in one place.</p>
        </div>
        <span>{photos.length} Photos</span>
      </div>
      

      <div className="photo-grid">
        
        {photos.map((photo, index) => (
          <div className="photo-card" key={index}>
            <img
              src={photo}
              alt={'Photo ${index + 1}'}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default PhotoLibrary;