import cat from "./images/catImage.jpg"
import movie from "./images/movie.mp4"
import "./style.css"
import './App.css'
function App() {
  let str=`
  `
  return (
    <div className="App" >
      <div className="box" style={{border:"solid 1px black",maxWidth:"100vw"}}>
          <h1 className="title red">My name is wafa</h1>
          <div>{str}</div>
          <h2> this is image from src</h2>
          <img src={cat}  alt="cat picture"></img>
          <div>{str}</div>
          <h2> this is image from public</h2>
          <img src="/papion.jpg"  alt="papion"></img>
      </div>
      <h2> this is a video </h2>
      <video  controls>
        <source src={movie} type="video/mp4"/>
      </video>
      
    </div>  );
}

export default App;
