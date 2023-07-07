import "./App.css";

function App() {
  function copyToClipboard(value) {
    //copy value to clipboard
    const el = document.createElement("textarea");
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    //show alert
    alert("Copied to clipboard");
  }

  // function if time between 0600 to 0800 return true
  function checkTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = hour * 100 + minute;
    if (time >= 600 && time <= 800) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="main-bg">
      <sub
        style={{
          position: "absolute",
          bottom: "0",
          fontSize: "10px",
          display: checkTime() ? "block" : "none",
        }}
      >
        baria_srw
      </sub>

      <div className="input-container">
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#501616",
            fontWeight: "bold",
          }}
        >
          เมื่อถึงเวลาที่เหมาะสมสิ่งที่น้องตามหาจะปรากฏ
        </p>

        <h1 className="title">Good Luck</h1>
        <p
          style={{
            fontSize: "20px",
          }}
          className="title"
        >
          กำลัง งง ใช่มั้ย พี่ใจดีมีคำใบ้เพิ่มเติมด้านล่างนี้
        </p>
        <div className="input-box">
          <input
            type="text"
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiMDYwMC0wODAwIiwibG9jYXRpb24iOiJib3R0b20gbGVmdCIsIuC4l-C4suC4h-C4peC4seC4lCI6IndlYiBkZXYg4LmD4LiZ4Lia4Liy4LiH4LiE4Lij4Lix4LmJ4LiH4LmC4LiE4LmJ4LiU4LmA4Lij4Liy4LiB4LmH4Lih4Li14Lib4Lix4LiN4Lir4LiyIn0.6HVb5E6xJ4KHHUDE_3tS5QGkCFZbss2DyKN3zxyNruw"
          />
          <div
            style={{
              display: "flex",
            }}
          >
            <button
              className="btn-copy"
              onClick={() =>
                copyToClipboard(
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiMDYwMC0wODAwIiwibG9jYXRpb24iOiJib3R0b20gbGVmdCIsIuC4l-C4suC4h-C4peC4seC4lCI6IndlYiBkZXYg4LmD4LiZ4Lia4Liy4LiH4LiE4Lij4Lix4LmJ4LiH4LmC4LiE4LmJ4LiU4LmA4Lij4Liy4LiB4LmH4Lih4Li14Lib4Lix4LiN4Lir4LiyIn0.6HVb5E6xJ4KHHUDE_3tS5QGkCFZbss2DyKN3zxyNruw"
                )
              }
            >
              Copy
            </button>
            <button
              className="btn-solve"
              onClick={() => {
                //link
                window.location.href =
                  "https://www.instagram.com/newjeans_official/";
              }}
            >
              เฉลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
