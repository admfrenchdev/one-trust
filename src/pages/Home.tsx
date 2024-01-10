import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useState } from "react";

declare var OneTrust: any;
OneTrust.startSDK(
  "cdn.cookielaw.org",
  " 5dbf6b9-4546-4651-ac8e-7aa1424bab16-test",
  "en",
  null,
  (downloadStatus: boolean) => {
    OneTrust.shouldShowBanner((result: boolean) => {
      if (result && downloadStatus) {
        OneTrust.showBannerUI();
      }
    });
    OneTrust.getConsentStatusFactory("C0004", (consentStatus: number) => {
      console.log("The quiered consent status for C0004 is " + consentStatus);
    });
  }
);

const Home: React.FC = () => {
  const [category4, update] = useState(-1);
  const updateC4Status = (listenerPayload: any) => {
    update(listenerPayload.consentStatus);
  };
  document.addEventListener("C0004", updateC4Status, false);

  console.log("ONETRUST", JSON.stringify(window?.OneTrust ?? {}));
  console.log("ONETRUST", JSON.stringify(OneTrust ?? {}));
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer c4Status={category4} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
