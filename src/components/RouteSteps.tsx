import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Text,
} from "@midas-ds/components";
import { Flag } from "lucide-react";
import styles from "./RouteSteps.module.css";

interface RouteStepsprops {
  currentStep: number;
  onStepChange: (step: number) => void;
  routeSteps: string[];
  showAllSteps?: boolean;
  onShowAllStepsChange?: (value: boolean) => void;
  onOpenReport?: () => void;
}

export const RouteSteps = ({
  currentStep,
  onStepChange,
  routeSteps,
  showAllSteps = false,
  onShowAllStepsChange,
  onOpenReport,
}: RouteStepsprops) => {
  if (showAllSteps) {
    return (
      <>
        <div className={styles.routeStepsContainer}>
          {routeSteps.map((step, index) => (
            <Card key={index}>
              <CardHeader heading={`Steg ${index + 1} av ${routeSteps.length}`}>
                <Button variant="icon" onPress={onOpenReport}>
                  <Flag size={20} />
                </Button>
              </CardHeader>
              <CardBody>
                <Text>{step}</Text>
              </CardBody>
            </Card>
          ))}
          <Button
            variant="tertiary"
            onClick={() => onShowAllStepsChange?.(!showAllSteps)}
          >
            {showAllSteps ? "Visa ett steg" : "Visa alla steg"}
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.routeStepsContainer}>
        <Card>
          <CardHeader
            heading={`Steg ${currentStep + 1} av ${routeSteps.length}`}
          >
            <Button variant="icon" onPress={onOpenReport}>
              <Flag size={20} />
            </Button>
          </CardHeader>
          <CardBody>
            <Text>{routeSteps[currentStep]}</Text>
          </CardBody>
        </Card>
        <Button
          variant="tertiary"
          onClick={() => onShowAllStepsChange?.(!showAllSteps)}
        >
          {showAllSteps ? "Visa ett steg" : "Visa alla steg"}
        </Button>
      </div>

      <div className={styles.buttonRow}>
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
