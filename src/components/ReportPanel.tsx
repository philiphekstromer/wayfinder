import { Panel } from "@midas-ds/layout";
import { Text, Button } from "@midas-ds/components";
import { Mail } from "lucide-react";

interface ReportPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReportPanel = ({ isOpen, onOpenChange }: ReportPanelProps) => {
  return (
    <Panel
      id="rapportera"
      title="Rapportera fel"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <Text>
        Har du hittat ett fel i detta steg? Låt oss veta så att vi kan förbättra
        vägbeskrivningarna!
      </Text>

      <Button
        icon={Mail}
        onPress={() => {
          window.location.href =
            "mailto:philip.hjalmrud.ekstromer@migrationsverket.se";
        }}
      >
        Skicka ett mail
      </Button>
    </Panel>
  );
};
