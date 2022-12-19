import { useEffect, useState } from 'react';
import style from './card.module.css';


// const Data_link = "https://www.omdbapi.com/?apikey=45f0782a&s=war";
const data_link2 ="https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
let all_data = [];

function Createcard() {
    const [movies, Setmovies] = useState(null);
    const [err,sError] =useState(null);
    useEffect(() => {
        fetch(data_link2)
            .then(Response => Response.json())
            .then(data => {
                all_data = data.results;
                Setmovies(data.results)
            });

    }, []);
    console.log(movies);

    const handlesearch = Searchte => {
        let ernum=/^\d+$/.test(Searchte);
        if(ernum){
            sError("need at least 1 letter ");
        } else{
            sError(null);
        }
        
        Setmovies(
        all_data.filter(movie => movie.original_title.toLowerCase().includes(Searchte.toLowerCase()))
        );
    };
    return (
        <>
            <div className=''>
                <input type="search" className={err? style.err:""} onChange ={e => handlesearch(e.target.value)} placeholder="search movies..."
                    ></input>
                    <h3 className={style.sherr}>{err ? err:""}</h3>
                <ul className={style.movies}>
                    {movies && movies.length > 0 ? (
                        movies.map(movie => (
                            <li>
                                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.original_title}></img>
                                <h4>{movie.original_title}</h4>
                            </li>
                        ))
                    ) : (
                        <li className={style.notfound}>movies not found</li>
                    )}

                </ul>
            </div>
           
            
        </>
    );

}
export default Createcard;