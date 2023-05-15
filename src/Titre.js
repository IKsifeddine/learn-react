import './Titre.css'
import photo from './IMG_8550.JPG'

function Titre() {
  return (
    <div>
      <div className='hed'>
        <h1 className='titre'>Cv</h1>
        <img src={photo} alt='indis' className='Photo'/>
        <pre className='cordoné'>
          <p>sifeddine ikbal</p>
          <p>sifddinhi@gmail.com</p>
          <p>06/08/2003</p>
          <p>célibataire</p>
          <p>0648616953</p>

        </pre>
      </div>



    </div>
  );
}
export default Titre;