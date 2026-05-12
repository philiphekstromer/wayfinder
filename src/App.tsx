import { useState, type Key } from "react";
import "./App.css";
import { OFFICE_ROOMS } from "./data/rooms";
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

const App = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  // const [viewAll, setViewAll] = useState(false);
  // const [showMap, setShowMap] = useState(false);

  const room = selectedKey ? OFFICE_ROOMS[selectedKey] : undefined;

  const handleSelect = (key: Key | null) => {
    setSelectedKey(key === null ? null : String(key));
    setCurrentStep(0);
    // setViewAll(false);
  };

  return (
    <div className="mainContainer">
      <h1>Hitta rätt i Presidenten</h1>

      <Select label="Vart ska du?" value={selectedKey} onChange={handleSelect}>
        {Object.keys(OFFICE_ROOMS).map((k) => (
          <ListBoxItem key={k} id={k} textValue={k}>
            {k}
          </ListBoxItem>
        ))}
      </Select>

      {room && (
        <div className="routeContainer">
          <Card>
            <CardHeader heading="Vägbeskrivning" />
            <CardBody>
              <div className="stepIndicator">
                <Text slot="description">
                  Steg {currentStep + 1} av {room.steps.length}
                </Text>
                <Text>{room.steps[currentStep]} </Text>
              </div>
            </CardBody>
          </Card>

          <div className="buttonRow">
            <ButtonGroup>
              <Button
                onClick={() =>
                  currentStep < room.steps.length - 1
                    ? setCurrentStep((prev) => prev + 1)
                    : alert("Du är framme!")
                }
              >
                {currentStep === room.steps.length - 1 ? "Klar!" : "Nästa steg"}
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
