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
import { useState } from 'react';

function PhotoLibrary() {
  const[selectPhoto,setSelectPhoto]=useState(null);
  const[showDetails,setShowDetails]=useState(false);
  function handlePhotoClick(photo){
    setSelectPhoto(photo);
    setShowDetails(false);
  }
  function handleDetailsClick(photo) {
  setSelectPhoto(photo);
  setShowDetails(true);
}
  const photos = [
    { id:1,
      thumbnail:photo1,
      original:photo1,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:2,
      thumbnail:photo2,
      original:photo2,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:3,
      thumbnail:photo3,
      original:photo3,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:4,
      thumbnail:photo4,
      original:photo4,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:5,
      thumbnail:photo5,
      original:photo5,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:6,
     thumbnail:photo6,
      original:photo6,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:7,
      thumbnail:photo7,
      original:photo7,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:8,
      thumbnail:photo8,
      original:photo8,
      date:"1-1-2025",
      location:"Homs"
    },
    { id:9,
      thumbnail:photo9,
      original:photo9,
      date:'1-1-2025',
      location:"Homs"
    },
    { id:10,
      thumbnail:photo10,
      original:photo10,
      date:"1-1-2025",
      location:"Homs"
    }
  ];

  return (
    <div className="photo-library" id="Image">

      <div className="library-heading">
        <div>
          <h2>My Photo Library</h2>
          <p>Your memories, organized in one place.</p>
        </div>
        <span>{photos.length} Photos</span>
      </div>
      

      <div className="photo-grid">
        
        {photos.map((photo, index) => (
          <div className="photo-card" key={photo.id}>
            <img
              src={photo.thumbnail}
              alt={`Photo ${index + 1}`}
              onClick={()=>handlePhotoClick(photo)}
              
            />
            <button  className="details-btn"
            onClick={() => handleDetailsClick(photo)}> ⓘ</button>
            {showDetails && selectPhoto && selectPhoto.id === photo.id && (
  <div className="details-modal">
    <p>{selectPhoto.date}</p>
    <p>{selectPhoto.location}</p>
  </div>
)}
          </div> 
        ))}
      </div>
               {selectPhoto && !showDetails&& (
                     <div className="image-modal">
                  <img src={selectPhoto.original} alt="Selected photo" />
                  <button className="close-modal" onClick={()=>setSelectPhoto(null)}>Exit</button>
                       </div>
)}

    </div>
  );
}

export default PhotoLibrary;