import React, { useEffect, useState } from "react";
import {
  BalApp,
  BalFooter,
  BalHeading,
  BalNavbar,
  BalNavbarBrand,
  BalLogo,
  BalText,
  BalStage,
  BalStageBody,
  BalStageImage,
  BalCard,
  BalCardTitle,
  BalCardSubtitle,
  BalCardContent,
} from "@baloise/design-system-components-react";
import {
  onBalConfigChange,
  BalConfigState,
  BalSwissLanguage,
} from "@baloise/design-system-components";
import PropertyComponent from "./components/PropertyComponent";
import EventComponent from "./components/EventComponent";
import MethodComponent from "./components/MethodComponent";

function App() {
  const [title, setTitle] = useState("Welcome");

  useEffect(() => {
    onBalConfigChange((config: BalConfigState) => {
      const language = config.language as BalSwissLanguage;
      switch (language) {
        case "de":
          setTitle("Willkommen");
          break;
        case "it":
          setTitle("Benvenuta");
          break;
        case "fr":
          setTitle("Bienvenue");
          break;
        default:
          setTitle("Welcome");
          break;
      }
    });
  });

  return (
    <BalApp class="has-sticky-footer has-background">
      <header>
        <BalNavbar>
          <BalNavbarBrand>
            <BalLogo color="white"></BalLogo>
            <BalText bold>Demo</BalText>
          </BalNavbarBrand>
        </BalNavbar>
        <BalStage color="blue" size="medium">
          <BalStageImage src="https://www.baloise.com/.imaging/mte/baloise-theme/2880/dam/baloise-com/images/ueber-uns/wer-wir-sind/bilder-logos/frau-fotoapparat.jpg/jcr:content/frau-fotoapparat.jpg"></BalStageImage>
          <BalStageBody>
            <div className="container is-compact">
              <BalHeading space="none" data-testid="welcome-title">
                {title}
              </BalHeading>
              <BalHeading space="none" subtitle level="h2">
                To the Baloise Design System
              </BalHeading>
            </div>
          </BalStageBody>
        </BalStage>
      </header>
      <main className="container is-compact">
        <BalCard class="mt-6">
          <BalCardTitle>Property example</BalCardTitle>
          <BalCardSubtitle>
            A little demonstration how to change properties of our components
          </BalCardSubtitle>
          <BalCardContent>
            <PropertyComponent />
          </BalCardContent>
        </BalCard>

        <BalCard class="mt-6">
          <BalCardTitle>Event example</BalCardTitle>
          <BalCardSubtitle>
            A short example how to use the events of our components
          </BalCardSubtitle>
          <BalCardContent>
            <EventComponent />
          </BalCardContent>
        </BalCard>

        <BalCard class="mt-6">
          <BalCardTitle>Method example</BalCardTitle>
          <BalCardSubtitle>
            A tiny use case of how to call the components methods
          </BalCardSubtitle>
          <BalCardContent>
            <MethodComponent />
          </BalCardContent>
        </BalCard>
      </main>
      <BalFooter></BalFooter>
    </BalApp>
  );
}

export default App;
