import React, { useState } from 'react';
import { IonContent,IonButton,IonButtons,IonIcon, IonHeader, IonBackButton, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import ContactBg from "./contact-bg.png";
import './Contact.css';

const Contact: React.FC = () => {
    const [text, setText] = useState<string>();

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
                        <p>Lorem ipsum dolor sit amet consectetur adi<br />Lorem ipsum dolor sit amet consectetur adi hscnm sanm </p>
                        <div className="contact_form_details">
                            <div className="portion">
                                <p>Name</p>
                                <IonInput value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                            </div>
                            <div className="portion">
                                <p>Email</p>
                                <IonInput></IonInput>
                            </div>
                            <div className="portion">
                                <p>Message</p>
                                <textarea></textarea>
                            </div>
                            <div className="portion submit_button">
                                <IonButton  color="custom" shape="round">Submit</IonButton>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </IonContent>
        </IonPage>
    )
}

export default Contact;
