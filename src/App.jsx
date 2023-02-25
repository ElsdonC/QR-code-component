import qrImg from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="container">
          <img className="qr-image" src={qrImg} alt="qr-code image" />
          <p className="cta">
            Improve your front-end
            <br />
            skills by building projects
          </p>
          <p className="description">
            Scan the QR code to visit Frontend
            <br />
            Mentor and take your coding skills to
            <br />
            the next level
          </p>
        </div>
        <div class="attribution">
          <p>
            <span>Challenge by </span>
            <span><a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">Frontend Mentor</a>. </span>
            <span>Coded by <a href="https://www.frontendmentor.io/profile/ElsdonC" target="_blank">Elsdon Chang</a>.</span>
          </p>
          
            
           
        </div>
      </div>
    </div>
  );
}

export default App;
