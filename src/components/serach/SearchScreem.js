import { useLocation, useNavigate } from "react-router-dom";
import React, { useMemo } from 'react'


import { useForm } from "../../hook/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'




export const SearchScreem = () => {



  const navigate =useNavigate();
  const location =useLocation();
 
  const {q=''} = queryString.parse(location.search);


  const [formValue,handleInputChange] = useForm({
    BuscarText:q

  });

  const {BuscarText} =formValue;

  const heroesFileted =useMemo(()=>  getHeroesByName(q),[q]);

  const handleSearch = (e) => {
    e.preventDefault();
   
    navigate(`?q=${BuscarText}`);

  };


  return (
    <>
      <h1>Busqueda</h1>
      <hr/>
     

      <div className="row">
       

          <div className="col-5">
              <h4>Buscar</h4>
              <hr/>
              

              <form onSubmit={handleSearch}>
                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Burcar un Heroe"
                  name="BuscarText"
                  autoComplete="off"
                  value={BuscarText}
                  onChange={handleInputChange}
                />
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-outline-primary mt-2"
                  >
                      Buscar...
                  </button>

                </div>
                
              </form>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr/>
            {
                (q==='')
                ? <div className="alert alert-info">Buscar un heroe</div>
                 : (heroesFileted.length ===0) 
                  && <div className="alert alert-danger">No hay resultados: {q}</div>

            }


            {
              heroesFileted.map(hero=>(
                <HeroCard
                  key={hero.id}
                  {...hero}
                
                />
              ))
            }



          </div>
       </div>    
  
    </>
  )
}
