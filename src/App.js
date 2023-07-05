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
  return (
    <div className="main-bg">
      <sub
        style={{
          position: "absolute",
          bottom: "0",
          fontSize: "5px",
        }}
      >
        by baria_srw
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
          สิ่งที่น้องตามหาอยู่ข้างล่างนี้!!!
        </p>
        <h1 className="title">Good Luck</h1>

        <div className="input-box">
          <input
            type="text"
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGVwIjoiZ29CYWNrKCk9PiBhYnNvbHV0ZSA9PiBib3R0b20gPSAwICAifQ.CeLIoEsOgFxV1IucvaoIwB7slV6L7a0ja4WTrNCFd4c"
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
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGVwIjoiZ29CYWNrKCk9PiBhYnNvbHV0ZSA9PiBib3R0b20gPSAwICAifQ.CeLIoEsOgFxV1IucvaoIwB7slV6L7a0ja4WTrNCFd4c"
                )
              }
            >
              Copy
            </button>
            <button
              className="btn-solve"
              onClick={() => {
                //link
                window.location.href = "https://www.instagram.com/saacsos/";
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
