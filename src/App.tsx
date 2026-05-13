import { useState, type Key } from "react";
import "./App.css";
import { ROOM_DATA_STRUCTURE } from "./data/rooms";
import {
  Select,
  ListBoxItem,
  Card,
  CardBody,
  CardHeader,
  Button,
  ButtonGroup,
  Text,
} from "@midas-ds/components";
import { Header } from "./components/Header";

const App = () => {
  // State för att hålla reda på användarens val och nuvarande steg i vägbeskrivningen
  const [startPoint, setStartPoint] = useState<string | null>(null); // T.ex. "Huvudentré"
  const [destination, setDestination] = useState<string | null>(null); // T.ex. "Spinnhuset"
  const [currentStep, setCurrentStep] = useState(0);
  // const [viewAll, setViewAll] = useState(false);
  // const [showMap, setShowMap] = useState(false);

  // Hämta tillgängliga mötesrum baserat på vald startpunkt
  const availableRooms =
    startPoint && ROOM_DATA_STRUCTURE[startPoint]
      ? Object.keys(ROOM_DATA_STRUCTURE[startPoint])
      : [];

  // Hämta vägbeskrivning baserat på startpunkt och mötesryum
  const routeSteps =
    startPoint && destination && ROOM_DATA_STRUCTURE[startPoint]
      ? (ROOM_DATA_STRUCTURE[startPoint][destination] ?? [])
      : [];

  // Visa vägbeskrivning endast om både startpunkt och destination är valda
  const showRoute = routeSteps.length > 0;

  // Funktioner för att hantera när användaren väljer startpunkt och mötesrum

  const handleStartingPoint = (key: Key | null) => {
    setStartPoint(key === null ? null : String(key));
    setDestination(null);
  };
  const handleDestination = (key: Key | null) => {
    setDestination(key === null ? null : String(key));
    setCurrentStep(0);
    // setViewAll(false);
  };

  return (
    <div className="mainContainer">
      <Header />

      {/* Dropdown för att välja startpunkt */}
      <Select
        label="Var startar du?"
        placeholder="Välj en ingång"
        value={startPoint}
        onChange={handleStartingPoint}
      >
        {Object.keys(ROOM_DATA_STRUCTURE).map((startpoint) => (
          <ListBoxItem key={startpoint} id={startpoint} textValue={startpoint}>
            {startpoint}
          </ListBoxItem>
        ))}
      </Select>

      {/* Dropdown för att välja mötesrum */}
      <Select
        label="Vart ska du?"
        placeholder="Välj ett mötesrum"
        value={destination}
        onChange={handleDestination}
      >
        {availableRooms.map((roomName) => (
          <ListBoxItem key={roomName} id={roomName} textValue={roomName}>
            {roomName}
          </ListBoxItem>
        ))}
      </Select>

      {showRoute && (
        <div className="routeContainer">
          <Card>
            <CardHeader
              heading={`Steg ${currentStep + 1} av ${routeSteps.length}`}
            />
            <CardBody>
              <div className="stepIndicator">
                <Text slot="description"></Text>
                <Text>{routeSteps[currentStep]} </Text>
              </div>
            </CardBody>
          </Card>

          <div className="buttonRow">
            <ButtonGroup>
              <Button
                onClick={() =>
                  currentStep < routeSteps.length - 1
                    ? setCurrentStep((prev) => prev + 1)
                    : alert("Du är framme!")
                }
              >
                {currentStep === routeSteps.length - 1 ? "Klar!" : "Nästa steg"}
              </Button>
              <Button
                variant="secondary"
                isDisabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => prev - 1)}
              >
                Föregående steg
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
