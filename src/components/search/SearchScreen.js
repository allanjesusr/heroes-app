import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

export const SearchScreen = () => {

    

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const  [ formValues, handleInputChange ] = useForm({
        searchText: q,
    })

    const { searchText } = formValues;
    
    const heroesFilter = useMemo( () => getHeroByName( q ), [q] ); 


    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                        type="text"
                        placeholder="Search a Hero"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={ searchText }
                        onChange={ handleInputChange }
                        />
                    </form>

                    <button type="submit" className="btn btn-outline-primary mt-1">
                        Search...
                    </button>

                </div>

            <div className="col-7">
                <h4>Results</h4>
                <hr />

                {
                    (q === '')
                        ? <div className="alert alert-info"> Search a hero </div>  
                        : ( heroesFilter.length === 0 ) 
                            && <div className="alert alert-danger"> No results found: { q } </div>
                }

                {
                    heroesFilter.map(hero => (
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