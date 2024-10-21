import vogelico from './Vogel-ico.module.css'
import logo from "./logo.png"
const Vogelico = () => {
  return (
    <div className={vogelico.ico}>
      <a href = "/Content"><button><img src = {logo}></img></button></a>
    </div>
  );
}

export default Vogelico;