import { IonContent, IonHeader } from "@ionic/react";
import 'tailwindcss/tailwind.css';
import { Button } from "../../components/Buttons/Button";


const HomePage = () => {
  return (
    <>
      <IonHeader>
        <h1>Home Page</h1>
      </IonHeader>
      <IonContent>
      <section className="flex lg:flex-row flex-col w-screen justify-center items-center">

          <div className="flex w-1/2 flex-col justify-center items-center">
            <h1>¿Cómo te sientes hoy?</h1>
            <Button onClick={() => console.log('Click')}>Descubrir</Button>
          </div>
          <div className="flex w-1/3 justify-center items-center">
            <img className="w-100" src="/assets/boy_relax.jpeg" alt="A guy chill" />
          </div>
        </section>
      </IonContent>
    </>
  );
};

export default HomePage;
