"use client";

import React, { useEffect, useRef } from "react";

const Donation: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widget.js";
    script.setAttribute("paypalExpress", "false");
    script.async = true;
    document.body.appendChild(script);

    if (iframeRef.current) {
      iframeRef.current.setAttribute("seamless", "");
      iframeRef.current.setAttribute("allowpaymentrequest", "");
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="px-5 py-10">
      <iframe
        src="https://donorbox.org/embed/donate-to-baby-kitty-rescue-committee-1?default_interval=m"
        name="donorbox"
        allow="payment"
        title="Donate to Baby Kitty Rescue Committee"
        className="w-[400px] h-[900px] max-w-[500px] min-w-[250px] max-h-none"
      />
    </div>
  );
};

export default Donation;
