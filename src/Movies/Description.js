
const desc = (movie) => {
    return (
    <div className='descrip'>
        <div className='det'></div>
        <h1>{movie.title}</h1>
        <img src={movie.posterURL} alt={movie.alt} />
        <span className='date'><span>{movie.description}</span><span>{movie.rating}</span></span>
        <p>{movie.desc}</p>
        <video width="320" height="240" controls>
  <source src={movie.trialer} />
</video>
  </div>
)
  }