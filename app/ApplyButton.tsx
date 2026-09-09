"use client";

import React, { useState } from "react";
import BookingModal from "./BookingModal";

interface ApplyButtonProps {
  className?: string;
  children: React.ReactNode;
  programName?: string;
}

export default function ApplyButton({ className, children, programName }: ApplyButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        className={className} 
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        style={{ border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        {children}
      </button>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        programName={programName}
      />
    </>
  );
}
