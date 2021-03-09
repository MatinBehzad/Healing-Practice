import { IonContent,IonButton,IonIcon, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

import { IonBackButton, IonButtons, IonMenuButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import ComfirmBg from './confrim_bg.png';



import React, { useState } from 'react';
import Calendar from 'react-calendar';




/*import 'react-calendar/dist/Calendar.css';*/
import './MeetLynda.css';
import moment from 'moment';

const Home: React.FC = () => {

  const [date, onChange] = useState(new Date());

  const [date2, demoFn] = useState(0);
 
  const [time, onTime] = useState('12.00am');
  const [openpop,setOpenpop] = useState(false);

  let dateData ='';
  const getDate = () => {
    
    let dateData = date;
    console.log(dateData)
    setOpenpop(true);
  }
  const bookAgain = ()=> setOpenpop(false);
  const [buttonvalue, buttonValue] = useState(0);
  const [buttonvalue1, buttonValue1] = useState(0);
  const [buttonvalue2, buttonValue2] = useState(0);
  const [buttonvalue3, buttonValue3] = useState(0);

  // function getDate(){
  //   console.log(value);
  //   console.log(time);
    
  // }

  return ( 
    <IonPage>
        
      <IonContent fullscreen class="main">

        
        <IonHeader>
        <header>
            <IonToolbar>
                <IonButtons slot="start"  >
                <IonTitle>Appopinment Details</IonTitle> 
                
                </IonButtons>
            </IonToolbar>
        </header>           
        </IonHeader>
        <Calendar className="calender"  onClickDay={(value)=>{onChange(value);}} value={date}/>
        
        <h2 className="calender_h2">Select available time</h2>
        <div className="button_back">
          <ul>
            <li><IonButton size="small" fill="clear"  shape="round" color={buttonvalue > 0 ? 'success' : ''} onClick={(e)=>
              
              {onTime('12.00am'); 
              
              buttonValue(1);
              buttonValue1(0);
              buttonValue2(0);
              buttonValue3(0);
              
              }}>12.00am</IonButton></li>

            <li><IonButton size="small" fill="clear" shape="round" color={buttonvalue1 > 0 ? 'success' : ''} onClick={(e)=>{onTime('6.00am'); 
            buttonValue1(1);
            buttonValue(0);
            buttonValue2(0);
            buttonValue3(0);
            
            
            }}>6.00am</IonButton></li>
            <li><IonButton size="small" fill="clear" shape="round" color={buttonvalue2 > 0 ? 'success' : ''} onClick={()=>{onTime('12.00pm'); 
            buttonValue2(1);
            buttonValue(0);
            buttonValue1(0);
            buttonValue3(0);
            
            
            }}>12.00pm</IonButton></li>
            <li><IonButton size="small" fill="clear" shape="round" color={buttonvalue3 > 0 ? 'success' : ''} onClick={()=>{onTime('6.00pm'); 
            
            buttonValue3(1);
            buttonValue2(0);
              buttonValue1(0);
              buttonValue(0);
          
          
           }}>6.00pm</IonButton></li>
          </ul>         
            

            
        </div>

        <div className={openpop ? 'checkpopup open' : 'checkpopup'}>
          <div className="details">
            <div className="del_back">
                <img src={ComfirmBg} alt=""/>
                <p>You have added your appoinment on</p>
                <h2>{moment(date).format('dd D MM-YYYY')}<br />{time}</h2>
                <div className="confirm">
                  <IonButton  color="custom" routerLink={`/confirm/${moment(date).format('dd D MM-YYYY')}/${time}`}  expand="block">Confirm</IonButton>
                </div>
              </div>
              <IonButton onClick={bookAgain}  color="custom" class="another_button" fill="clear" expand="block">Book another appoinment</IonButton>
            </div>

            
        </div>
        
        <IonButton class="last_button" expand="block" color="primary" shape="round" onClick={getDate} /*routerLink={`/confirm/2/${time}`}*/>Check Schedule</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
