import { useState, type Key } from "react";
import "./App.css";
import { ROOM_DATA_STRUCTURE } from "./data/rooms";
import { type Entrance } from "./data/types";
import {
  Select,
  ListBoxItem,
  Card,
  CardBody,
  CardHeader,
  Button,
  ButtonGroup,
  Text,
  ComboBox,
  Modal,
  DialogTrigger,
} from "@midas-ds/components";
import { Header } from "./components/Header";
import { Flag } from "lucide-react";

const ENTRANCES: Entrance[] = ["Personalingång lastkajen", "Personalingång"];

const App = () => {
  // State för vald ingång, rum och nuvarande steg i vägbeskrivningen
  const [selectedEntrance, setSelectedEntrance] = useState<Entrance | null>(
    null,
  );
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Hämta tillgängliga rum baserat på vald ingång
  const availableRooms = selectedEntrance
    ? Object.entries(ROOM_DATA_STRUCTURE)
        .filter(
          ([, room]) => room.routesByEntrance[selectedEntrance] !== undefined,
        )
        .map(([roomName]) => roomName)
    : [];

  // Hämta vägbeskrivning för det valda rummet och ingången
  const selectedRoomData = selectedRoom
    ? ROOM_DATA_STRUCTURE[selectedRoom]
    : undefined;

  // Hämta stegen i vägbeskrivningen för den valda ingången
  const routeSteps =
    selectedEntrance && selectedRoomData
      ? (selectedRoomData.routesByEntrance[selectedEntrance]?.steps ?? [])
      : [];

  // Visa vägbeskrivningen om det finns steg att visa
  const showRoute = routeSteps.length > 0;
  // const selectedFloor = selectedRoomData?.floor; --for later use

  const handleEntranceChange = (key: Key | null) => {
    setSelectedEntrance(key === null ? null : (String(key) as Entrance));
    setSelectedRoom(null);
    setCurrentStep(0);
  };

  const handleRoomChange = (key: Key | null) => {
    setSelectedRoom(key === null ? null : String(key));
    setCurrentStep(0);
  };

  return (
    <div className="mainContainer">
      <Header />

      <Select
        label="Var startar du?"
        placeholder="Välj en ingång"
        value={selectedEntrance}
        onChange={handleEntranceChange}
      >
        {ENTRANCES.map((entrance) => (
          <ListBoxItem key={entrance} id={entrance} textValue={entrance}>
            {entrance}
          </ListBoxItem>
        ))}
      </Select>

      <ComboBox
        label="Vart ska du?"
        placeholder="Välj ett mötesrum"
        value={selectedRoom}
        onChange={handleRoomChange}
        isDisabled={!selectedEntrance}
      >
        {availableRooms.map((roomName) => (
          <ListBoxItem key={roomName} id={roomName} textValue={roomName}>
            {roomName}
          </ListBoxItem>
        ))}
      </ComboBox>

      {showRoute && (
        <div className="routeContainer">
          <Card>
            <CardHeader
              heading={`Steg ${currentStep + 1} av ${routeSteps.length}`}
            >
              <DialogTrigger>
                <Button variant="icon">
                  <Flag size={20} />
                </Button>
                <Modal title="Rapportera fel">
                  Har du hittat ett fel i detta steg?
                  <a href="mailto:philip.hjalmrud.ekstromer@migrationsverket.se">
                    Maila till Philip
                  </a>
                  <Button slot={"close"}>Ok!</Button>
                </Modal>
              </DialogTrigger>
            </CardHeader>
            <CardBody>
              <Text>{routeSteps[currentStep]}</Text>
            </CardBody>
          </Card>

          <div className="buttonRow">
            <ButtonGroup>
              {currentStep < routeSteps.length - 1 && (
                <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
                  Nästa steg
                </Button>
              )}

              {currentStep > 0 && (
                <Button
                  variant="secondary"
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  Föregående steg
                </Button>
              )}
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
