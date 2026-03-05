import { Suspense } from "react";
import TrackingPage from "./TrackingPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackingPage />
    </Suspense>
  );
}