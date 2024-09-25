import React from "react";
import MyComponent from "../components/MyComponent";
import { Button } from "ultra-material-you-react";
import ElevatedButton from "@/components/Buttons/ElevatedButton/ElevatedButton";

export default function DefaultPage() {
  return (
    <div>
      <ElevatedButton icon="globe" disabled>
        <p>Value</p>
      </ElevatedButton>
    </div>
  );
}
