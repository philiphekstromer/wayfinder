import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  DialogTrigger,
  Modal,
  Text,
} from "@midas-ds/components";
import { Flag } from "lucide-react";
import styles from "./RouteSteps.module.css";

interface RouteStepsprops {
  currentStep: number;
  onStepChange: (step: number) => void;
  routeSteps: string[];
}

export const RouteSteps = ({
  currentStep,
  onStepChange,
  routeSteps,
}: RouteStepsprops) => {
  return (
    <>
      <div className={styles.routeStepsContainer}>
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
      </div>

      <div className="buttonRow">
        <ButtonGroup>
          {currentStep < routeSteps.length - 1 && (
            <Button onClick={() => onStepChange(currentStep + 1)}>
              Nästa steg
            </Button>
          )}

          {currentStep > 0 && (
            <Button
              variant="secondary"
              onClick={() => onStepChange(currentStep - 1)}
            >
              Föregående steg
            </Button>
          )}
        </ButtonGroup>
      </div>
    </>
  );
};
