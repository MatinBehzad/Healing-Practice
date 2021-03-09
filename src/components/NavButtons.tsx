import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink={"/meetLyndaContact"}>Meet Lynda</IonButton>
          <IonButton routerLink={"/page-1"}>Services</IonButton>
          <IonButton routerLink={"/page-2"}>Rates and Packages</IonButton>
          <IonButton routerLink={"/page-4"}>Testimonials</IonButton>
        
        </>
      )}
    </div>
  );
};