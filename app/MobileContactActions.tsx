"use client";

import Image from "next/image";
import { useState } from "react";

const PHONE_NUMBER = "8618894857";

export default function MobileContactActions() {
  const [activeAction, setActiveAction] = useState<"whatsapp" | null>(null);

  const handleActionClick =
    (action: "whatsapp") => (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (activeAction !== action) {
        event.preventDefault();
        setActiveAction(action);
      }
    };

  return (
    <div className="mobileHeaderActions" aria-label="Quick contact actions">
      <a
        className={`mobileHeaderAction whatsapp${activeAction === "whatsapp" ? " isVisible" : ""}`}
        href="https://wa.me/918618894857"
        aria-label="WhatsApp"
        onClick={handleActionClick("whatsapp")}
      >
        <span className="mobileHeaderActionLabel">{PHONE_NUMBER}</span>
        <Image
          src="/images/whatsapp.svg"
          alt=""
          width={26}
          height={26}
          style={{ width: "auto", height: "auto" }}
        />
      </a>
    </div>
  );
}
