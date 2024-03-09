import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../components'
import { useEffect } from 'react';
import error from '../assets/404.svg'
import './css/notFound.css'

const NotFound = () => {
    
        useEffect(() => {
            document.title = "404 | Page Not Found"
        }, [])
    
        return (
            <div className='notfound'>
                <div className='notfound__wrapper'>
                    <div className='notfound__text'>
                        <div className='texts'>
                            <h1>Ooops...</h1>
                            <h2>Page not found</h2>
                            <p>
                                The page you are looking for doesn't exist or an
                                other error occured, go back to home page
                            </p>
                        </div>
                        <Link to={`/`}>
                            <button>Go back</button>
                        </Link>
                    </div>
                    <div className='notfound__img'>
                        <img src={error} alt='' />
                    </div>
                </div>
            </div>
        );
    }

export default NotFound;