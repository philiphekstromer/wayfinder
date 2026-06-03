import { useState, type Key } from "react";
import { FLOOR_MAP_URLS, ROOM_DATA_STRUCTURE } from "./data/rooms";
import { type Entrance } from "./data/types";
import {
  Select,
  ListBoxItem,
  ComboBox,
  Heading,
  Button,
  Modal,
  DialogTrigger,
} from "@midas-ds/components";
import { Header } from "./components/Header";
import { RouteSteps } from "./components/RouteSteps";
import { ReportPanel } from "./components/ReportPanel";
import styles from "./App.module.css";
import { Map } from "lucide-react";

const ENTRANCES: Entrance[] = ["Personalingång lastkajen", "Personalingång"];

const App = () => {
  // State för vald ingång, rum och nuvarande steg i vägbeskrivningen
  const [selectedEntrance, setSelectedEntrance] = useState<Entrance | null>(
    null,
  );
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showAllSteps, setShowAllSteps] = useState(false);

  //State för panel
  const [isReportOpen, setIsReportOpen] = useState(false);

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
  const selectedFloor = selectedRoomData?.floor;
  const floorMapUrl = selectedFloor ? FLOOR_MAP_URLS[selectedFloor] : null;

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
    <div className={styles.mainContainer}>
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
        <>
          <div className={styles.routeHeadingContainer}>
            <Heading level={3}>Vägbeskrivning</Heading>
            <DialogTrigger>
              <Button variant="icon" icon={Map}></Button>
              <Modal title={`Karta för plan ${selectedFloor}`}>
                <img
                  src={floorMapUrl!}
                  alt={`Karta för plan ${selectedFloor}`}
                />
              </Modal>
            </DialogTrigger>
          </div>
          <RouteSteps
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            routeSteps={routeSteps}
            showAllSteps={showAllSteps}
            onShowAllStepsChange={setShowAllSteps}
            onOpenReport={() => setIsReportOpen(true)}
          />
        </>
      )}
      <ReportPanel isOpen={isReportOpen} onOpenChange={setIsReportOpen} />
    </div>
  );
};

export default App;
