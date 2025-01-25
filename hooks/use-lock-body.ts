import * as React from "react";

// The useLockBody hook prevents scrolling on the body element.
export function useLockBody(): void {
  React.useLayoutEffect(() => {
    // Get the original style of overflow from the computed styles of the document's body.
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Set the overflow to 'hidden' to lock scrolling on the body.
    document.body.style.overflow = "hidden";
    
    // Cleanup function: Restore the original overflow style when the component unmounts or rerenders.
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty dependency array ensures this effect runs once after initial render.
}