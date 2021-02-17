import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import React from "react";


export const Menu = () => {
  return (
    <IonMenu side="end" contentId="main">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle>MENU</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/home"} routerDirection="none">
              <IonLabel>Meet Lynda</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle auto-hide="false">
            <IonItem button routerLink={"/page-1"} routerDirection="none">
              <IonLabel >Services</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/page-2"} routerDirection="none">
              <IonLabel>Rates and Packages</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/page-3"} routerDirection="none">
              <IonLabel>Contact Lynda</IonLabel>
            </IonItem>
            <IonItem button routerLink={"/page-4"} routerDirection="none">
              <IonLabel>Testimonials</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
