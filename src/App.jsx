import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const backgroundColor = format(now, "HHmmss");

  return (
    <div
      className="clock-container"
      style={{ backgroundColor: `#${backgroundColor}` }}
    >
      <div className="clock-card">
        <h1>Color Clock</h1>

        <p className="date">{format(now, "MMMM do, yyyy")}</p>

        <p className="time">{format(now, "hh:mm:ss a")}</p>

       
      </div>
    </div>
  );
}

export default App;