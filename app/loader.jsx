import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{ color: "white", fontSize: "18px" }}>
        Loading {progress.toFixed(0)} %
      </div>
    </Html>
  );
}
