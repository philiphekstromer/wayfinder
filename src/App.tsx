import { useState } from "react";
import "./App.css";
import { OFFICE_ROOMS } from "./data/rooms"; //

const App = () => {
  const [selectedKey, setSelectedKey] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  // const [viewAll, setViewAll] = useState(false);
  // const [showMap, setShowMap] = useState(false);

  const room = OFFICE_ROOMS[selectedKey];

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKey(e.target.value);
    setCurrentStep(0);
    // setViewAll(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "1.5rem" }}>Rumsguide</h1>

      <select
        onChange={handleSelect}
        style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
      >
        <option value="">Vart ska du?</option>
        {Object.keys(OFFICE_ROOMS).map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>

      {room && (
        <div
          style={{
            border: "1px solid #eee",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          {/* LÄGE 1: ETT STEG I TAGET */}

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#888",
                  fontWeight: "bold",
                }}
              >
                STEG {currentStep + 1} AV {room.steps.length}
              </span>
              <button
                // onClick={() => setViewAll(true)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                }}
              >
                Visa alla steg
              </button>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.5",
                minHeight: "80px",
                fontWeight: "500",
              }}
            >
              {room.steps[currentStep]}
            </p>

            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((prev) => prev - 1)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                }}
              >
                Bakåt
              </button>
              <button
                onClick={() =>
                  currentStep < room.steps.length - 1
                    ? setCurrentStep((prev) => prev + 1)
                    : alert("Du är framme!")
                }
                style={{
                  flex: 2,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {currentStep === room.steps.length - 1 ? "Klar!" : "Nästa steg"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
