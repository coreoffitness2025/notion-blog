"use client";

import { useEffect, useRef } from "react";

interface AdSenseProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle";
  layout?: string;
  className?: string;
}

export default function AdSense({
  slot,
  format = "auto",
  layout,
  className = "",
}: AdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded (ad blocker, etc.)
    }
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2952925573999681"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
