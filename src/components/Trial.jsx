import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './trial.css';
import Title from './Title';

const Contact = () => {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_bw2n9eb', 'template_xtiip3s', form.current, 'BwghweI3p9vdKVyyE')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  };
  return (
    <div>
     

<div className="contact py-5" id="contact">
   	 <div class="container">
		<div class="scn__title text-center">
		<Title value="contact" />
		        	
		         </div>
   	 	     <div class="row  big-row">
   	 	 	

   	 	 	  <div class="col-lg-6 mb-4">
   	 	 	  	 <div class="contact__form" data-aos='fade-right' data-aos-duration='1500'>
   	 	 	  	 	  {/* <h3 class="primary__color my-4 heading__font">Contact</h3> */}

							  <form ref={form} onSubmit={sendEmail}>
   	 	 	  	 	  	  <div class="row">
   	 	 	  	 	  	  	 <div class="col-lg-6">
   	 	 	  	 	  	  	 	  <input type="name" name="name" class="w-100" placeholder="First Name" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-6">
   	 	 	  	 	  	  	 	  <input type="name" name="name" class="w-100" placeholder="Second Name" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="email" name="email" class="w-100" placeholder="Your Email" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="number" name="number" class="w-100" placeholder="Your Phone Number" />
   	 	 	  	 	  	  	 </div>
   	 	 	  	 	  	  	 <div class="col-lg-12">
   	 	 	  	 	  	  	 	  <input type="text" name="text" class="w-100" placeholder="Your City" />
   	 	 	  	 	  	  	 </div>

   	 	 	  	 	  	  	 <div class="fome__btn text-center my-3">
   	 	 	  	 	  	  	 	  <button class="btn_submit">Submit</button>
   	 	 	  	 	  	  	 	   
   	 	 	  	 	  	  	 </div>

   	 	 	  	 	  	  </div>
   	 	 	  	 	  </form>
   	 	 	  	 </div>
   	 	 	  </div>

             
                   <div class="col-lg-6 mb-4" data-aos='fade-left' data-aos-duration='1500'>
				   <div className="contact__data__description">
            <h4>Join with us!!</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
           
            <div>
              <p>
                <strong>Address:</strong> 33, Flyover Road,
              </p>
              <p>
                <strong>Email:</strong> Amruthavarshini@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.Amruthavarshini.com
              </p>
            </div>
          </div>   	 	 	  </div>
					
                   </div>
   	 	 	  </div>


                   </div>



    
    </div>
  )
}

export default Contact
