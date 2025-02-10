import { useState, useEffect } from 'react'
import './App.css'

const Card = ({title, description}) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect( seeEffect => {
    console.log(`{title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  useEffect(effect => {
    console.log('Card rendered correctly');
  }, [])

  return(
    <div className="card" onClick = {() => setCount((prevState) => prevState + 1)}>
      <h2>{title} - {count}</h2>
      <p>{description}</p>
      <button onClick = {() => setHasLiked((prevState) => !prevState)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <>
    <Card title = "The Lion King" description = "Card"/>
    <Card title = "Some other movie" description = "Card"/>
    <Card title = "Star Wars" description = "Card"/>
      <div>
        <h1>Hello World!</h1>
      </div>
    </>
    
  )

}
export default App
