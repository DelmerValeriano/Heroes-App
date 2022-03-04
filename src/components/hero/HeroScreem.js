import React, { useMemo } from 'react';
import { useParams,Navigate, useNavigate} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/dc-batman.jpg';
const heroImages =require.context('../../assets',true);



export const HeroScreem = () => {

  const {heroeId} = useParams();

  const hero = useMemo(()=> getHeroById(heroeId),[heroeId]);

  const navigate = useNavigate();


  if (!hero) {
    return <Navigate to='/'/>
    
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  }=hero;
  
  const hadleReturn=()=>{
    navigate(-1);
  };

  // const imgPath = `/assets/${id}.jpg`;

  return (

      <div className="row mt-3">
        <div className="col-4">
          <img 
            src={heroImages(`./${id}.jpg`)}//de manera dinamica exportando las imagenes
            alt={superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8">
          <h3 className="list-group" >Informacion</h3>
          <ul>
            <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
            <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
            <li className="list-group-item"><b>first_appearance: </b>{first_appearance}</li>
          </ul>

          <h5 className="mt-3">Character</h5>
          <p>{characters}</p>

          <button 
            className="btn btn-outline-info"
            onClick={hadleReturn}
          >
              Regresar
          </button>

        </div>
      </div>
  )
}
