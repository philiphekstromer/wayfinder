import {
  Button,
  Card,
  CardBody,
  CardHeader,
  DialogTrigger,
  Modal,
  Text,
} from "@midas-ds/components";
import { Flag } from "lucide-react";

interface RouteStepsprops {
  currentStep: number;
  routeSteps: string[];
}

export const RouteSteps = ({ currentStep, routeSteps }: RouteStepsprops) => {
  return (
    <div className="routeContainer">
      <Card>
        <CardHeader heading={`Steg ${currentStep + 1} av ${routeSteps.length}`}>
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
  );
};
