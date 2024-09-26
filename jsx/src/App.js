import 'bulma/css/bulma.css'
import ProfileCard from "./Profile";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){   
    return(
        <div>
          <section className='hero is-primary'>
            <div className='hero-body'>
                <p className='title'>Personal Digital Assistants</p>
            </div>
          </section>
          <div className='container'>
             <section className='section'>
                <div className='columns'>
                   <div className='column is-4'>
                     <ProfileCard title="Alexa" handle ="@alexa" image={AlexaImage} description="Alexa was designed by Amazon . its much good to use."/>
                   </div>
                   <div className='column is-4'>
                     <ProfileCard title="Cortona" handle ="@cortona" image={CortanaImage} description="Cortana was designed by Microsoft . its much good to use."/>
                   </div>
                   <div className='column is-4'>
                     <ProfileCard title="Siri" handle ="@siri" image={SiriImage} description="Siri was designed by Apple . its much good to use."/>
                   </div>       
                </div>
             </section>
          </div> 
        </div>
   )
    
}

export default App;