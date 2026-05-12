import styles from "./Header.module.css";
import { Heading } from "@midas-ds/components";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Heading level={3} elementType="h1" isExpressive>
        Hitta rätt i Presidenten
      </Heading>
    </div>
  );
};
