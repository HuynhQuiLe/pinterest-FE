import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return isLoading ? (
    <div
      className=" fixed w-[100vw] h-[100vh] bg-white flex justify-center items-center top-0 left-0 z-50"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ClipLoader size={150} color="#FF5A5F" speedMultiplier={2} />
    </div>
  ) : (
    <></>
  );
}

// react spinners npm
