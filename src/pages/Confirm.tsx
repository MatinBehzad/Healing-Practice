import { RouteComponentProps } from 'react-router';


import React, { useState } from 'react';
import { IonContent,IonTextarea,IonButton,IonButtons,IonIcon, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import ContactBg from "./contact-bg.png";
import './Contact.css';

import { register } from '../serviceWorkerRegistration';


interface ConfirmProps extends RouteComponentProps<{
    date: string;
    time: string;
  }> {}

  
  const Confirm: React.FC<ConfirmProps> = ({match}) => {
    const [text, setText] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [msg, setMsg] = useState<string>();
    const [success, setSuccess] = useState<string>();
    const [remaining, setRemaining] = useState(0);


    

    function sendData(){
      console.log(match.params.date)
      console.log(match.params.time)
      console.log(text)
      console.log(email)
      console.log(msg)

      const recipeUrl = 'https://millionerbychoice.in/send-contact.php';
      const postBody = {
        name: text,
        email: email,
        msg:msg,
        date:match.params.date,
        time:match.params.time
    };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);
            setRemaining(1);
            setSuccess(recipes)
        });

    }

    return(
        <IonPage>        
            <IonContent fullscreen class="main">
            <IonHeader>
                <header>
                    <IonToolbar>
                        <IonButtons slot="start"  >
                        <IonBackButton text="Contact us" defaultHref="/">
                        </IonBackButton>
                        </IonButtons>
                    </IonToolbar>
                </header>          
            </IonHeader>
                <div className="contact_details">
                    <div className="contact_bg">
                        <img src={ContactBg} alt=""/>
                    </div>
                    <div className="body_area">
                        <h1>Contact Us</h1>
                        <p>lynda@lyndaheyden.com <br /> 613-296-5567</p>
                        {remaining === 0 ? (
                         <div className="contact_form_details">
                         <div className="portion">
                             <p>Name</p>
                             <IonInput value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                         </div>
                         <div className="portion">
                             <p>Email</p>
                             <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                         </div>
                         <div className="portion">
                             <p>Message</p>
                             <IonTextarea  value={msg} onIonChange={e => setMsg(e.detail.value!)}></IonTextarea>
                         </div>
                         <div className="portion submit_button">
                             <IonButton  color="custom" shape="round" onClick={sendData}>Submit</IonButton>
                         </div>
                     </div>
                        ) : (
                          <div>{success}</div>
                        )}
                        
                        
                    </div>
                    
                </div>
                
                
            </IonContent>
        </IonPage>
    )
}

  
  


  
  export default Confirm;