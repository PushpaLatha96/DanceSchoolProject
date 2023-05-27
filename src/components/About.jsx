import "./About.css";
import Title from './Title';


function ResponsiveAutoExample() {
  return (
   
    <div id='about'>
           <Title value="About Us" />

      <section>
        <div className="circle circle1" >
            <img src="https://i.etsystatic.com/22611874/r/il/3ac7c5/3235888183/il_fullxfull.3235888183_q6nz.jpg" alt="img" />
        </div>
        <div className="circle circle2" >
            <img src="https://i.pinimg.com/736x/ab/83/38/ab8338bcdcd7c71d60859fbc6fe3c789--dance-images-asana.jpg" alt="img" />
        </div>
        <div id='careers'>
            
            <p>
          Welcome to Amrutha Sri Varshini School Of Dance, a leading dance school
          that specializes in Bharatanatyam and
          Kuchipudi.
        </p>
        
        <p>
        What is the full form of Bharatanatyam?
Bharathanatyam meaning : Bha meaning emotion (Bhava), Ra meaning music (Raaga) , Ta meaning rhythm (Taal) and Natyam meaning dance. Thus Bharatanatyam is the dance that encompasses music, rhythm and expression and strictly adheres to the Natyashastra (the scripture of classical Indian dance).
        </p>
        <p>
        It gives a wonderful cardio workout, improves blood circulation, tones muscles and is good for bone density as it is a contact exercise,” says danseuse Alarmel Valli. Dancer and choreographer Anita Ratnam says Bharatanatyam has both physical and mental benefits
        </p>
       
       
        <p>
          Thank you for considering Amrutha Sri Varshini School Of Dance. We look forward for you!
        </p>
        </div>
      </section>
    </div>
  );
}

export default ResponsiveAutoExample;
