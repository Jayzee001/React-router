import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Filter from './Movies/Filter';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Modal from './Movies/Modal';

const App = () => {
  const navigate = useNavigate() 
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [movies, setMovies] = useState([
    {
      title: 'Hiddn strike',
      description: '2023',
      posterURL: 'https://i.pinimg.com/236x/51/eb/3a/51eb3a6566697dcd346135355a5498b8.jpg',
      rating: 4.5,
      trialer: '',
      desc:' follows two elite fighters with opposing missions who work together to take down an evil oil monger and save the everyday people affected by his tyranny.'
    },
    {
            title: "Star Wars: Episode IV - A New Hope",
            description: "1977",
            posterURL: "https://i.pinimg.com/236x/bb/29/49/bb2949699f2fb63a09a1dc234989657a.jpg",
      rating: 2.2,
      trialer: '',
      desc:'THE STORY. A farm boy dreams of adventure and a princess rebels against an evil Empire. The fate of the galaxy is forever changed when Luke Skywalker discovers his powerful connection to a mysterious Force, and blasts into space to rescue Princess Leia.'
    },
        {
            title: "Star Wars: Episode V - The Empire Strikes Back",
            description: "1980",
            posterURL: "https://i.pinimg.com/236x/ab/16/13/ab1613c9cd9ca80a2f0ecb2b925b7959.jpg",
          rating: 5,
      trialer: '',
      desc:' Set three years after the events of Star Wars, the film recounts the battle between the malevolent Galactic Empire, led by the Emperor, and the Rebel Alliance, led by Princess Leia. Luke Skywalker trains to master the Force so he can confront the powerful Sith lord, Darth Vader.'
    },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      description: "1983",
      posterURL: "https://i.pinimg.com/236x/4c/eb/13/4ceb13342061a75bc822355908f75555.jpg",
      rating: 3.2,
  trialer: '',
      desc:'Luke Skywalker (Mark Hamill) returns to his home planet to rescue Han Solo (Harrison Ford) from the monstrous Jabba the Hut (voice of Larry Ward). Han Solo is still frozen in carbonite. Meanwhile Princess Leia (Carrie Fisher) and Lando (Billy Dee Williams) also mount their own rescue plan.'
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = event => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = event => {
    setFilterRating(event.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    return (
movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRating || movie.rating >= filterRating)
    );
  });

    //the onClick action that will trigger the openign for the movie description and trialer
  const handleMovieCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  




  return (
    <div className="App">
      <h1>Movie Library</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleTitleChange={handleTitleChange}
        handleRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} onMovieCardClick={handleMovieCardClick} />
      

    {selectedMovie && (
        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      )}

    </div>
  );
};

export default App;