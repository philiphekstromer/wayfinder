import { Panel } from "@midas-ds/layout";
import { Text } from "@midas-ds/components";

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
        vägbeskrivningarna!{" "}
      </Text>
      <Text>
        <a href="mailto:philip.hjalmrud.ekstromer@migrationsverket.se">
          Maila till Philip
        </a>
      </Text>
    </Panel>
  );
};
