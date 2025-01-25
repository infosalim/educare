"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

// Define the type for the props
interface PreviewProps {
  value: string; // Assuming `value` is a string. Adjust this if it's another type, such as an object.
}

export const Preview = ({ value }: PreviewProps) => {
  // Type annotation for dynamic import result
  const ReactQuill = useMemo<React.ComponentType<any>>(
    () =>
      dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="bubble" readOnly value={value} />;
};