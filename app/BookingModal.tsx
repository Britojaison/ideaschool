import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import "./BookingModal.css";

type Step = 1 | 2;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
}

export default function BookingModal({ isOpen, onClose, programName = "Industry Experience Program" }: BookingModalProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [reason, setReason] = useState("");
  const [canAttend, setCanAttend] = useState("");
  const [goal, setGoal] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedDate(null);
      setSelectedSlot(null);
      setIsSuccess(false);
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setAge("");
      setProfession("");
      setReason("");
      setCanAttend("");
      setGoal("");
    }
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const currentMonth = new Date();
  currentMonth.setDate(1); // Set to start of month for simplicity in mock

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const startDay = currentMonth.getDay();

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    setSelectedSlot(null);
  };

  const timeSlots = [
    "09:30 am - 10:15 am",
    "10:15 am - 11:00 am",
    "11:00 am - 11:45 am",
    "11:45 am - 12:30 pm",
    "12:30 pm - 01:15 pm",
    "02:30 pm - 03:15 pm",
    "03:15 pm - 04:00 pm"
  ];

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const proceedToForm = () => {
    if (selectedDate && selectedSlot) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingDate = selectedDate
      ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
      : null;
    
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          program: programName,
          date: bookingDate,
          slot: selectedSlot,
          name,
          email,
          phone,
          city,
          age,
          profession,
          reason,
          canAttend,
          goal
        })
      });

      const result = await response.json().catch(() => null) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "Unable to schedule the appointment. Please try again.");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCalendar = () => {
    const blanks = Array.from({ length: startDay }, (_, i) => <div key={`blank-${i}`} className="day blank"></div>);
    const days = Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const isSelected = selectedDate?.getDate() === day;
      const isPast = day < new Date().getDate() && currentMonth.getMonth() === new Date().getMonth();

      return (
        <button 
          key={`day-${day}`} 
          className={`day ${isSelected ? "selected" : ""} ${isPast ? "disabled" : ""}`}
          onClick={() => !isPast && handleDateSelect(day)}
          disabled={isPast}
        >
          {day}
        </button>
      );
    });

    return (
      <div className="calendarGrid">
        <div className="dayName">Su</div>
        <div className="dayName">Mo</div>
        <div className="dayName">Tu</div>
        <div className="dayName">We</div>
        <div className="dayName">Th</div>
        <div className="dayName">Fr</div>
        <div className="dayName">Sa</div>
        {blanks}
        {days}
      </div>
    );
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const modalContent = (
    <div className="bookingModalOverlay" onClick={onClose}>
      <div className="bookingModalContent" onClick={e => e.stopPropagation()}>
        
        <div className="bookingHeader">
          {step === 2 && (
            <button className="backBtn" onClick={() => setStep(1)}>
              &lt;
            </button>
          )}
          <span className="poweredBy">Powered by <strong>Idea School</strong></span>
          <button className="closeBtn" onClick={onClose}>&times;</button>
        </div>

        {isSuccess ? (
          <div className="successView">
            <h2>Booking Confirmed!</h2>
            <p>Thank you, {name}. We will see you on {selectedDate?.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} at {selectedSlot}.</p>
            <button className="doneBtn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className="bookingBody">
            <div className="leftPanel">
              <div className="logoWrapper">
                <Image src="/images/idea logo.webp" alt="Idea School" width={60} height={32} />
              </div>
              <h2 className="eventTitle">Expert Call - {programName}</h2>
              <p className="eventDesc">
                In this Call, get complete clarity about your Roadmap, How much you can earn, Course Details, and more. Please be on time.
              </p>
              
              <div className="eventMeta">
                <div className="metaItem">
                  <span className="metaIcon">👤</span> Host to be assigned
                </div>
                <div className="metaItem">
                  <span className="metaIcon">⏱️</span> 45 min
                </div>
                <div className="metaItem">
                  <span className="metaIcon">📹</span> Zoom
                </div>
                <div className="metaItem">
                  <span className="metaIcon">🌐</span> Asia/Kolkata ( {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} )
                </div>
              </div>
            </div>

            <div className="rightPanel">
              {step === 1 && (
                <div className="step1Container">
                  <div className="calendarSection">
                    <h3 className="sectionSubtitle">Select Date</h3>
                    <h2 className="monthTitle">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
                    {renderCalendar()}
                    <div className="timezoneSelector">
                      🌐 Asia/Kolkata ( {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} ) <span>▼</span>
                    </div>
                  </div>

                  <div className="slotsSection">
                    {selectedDate ? (
                      <>
                        <h3 className="sectionSubtitle">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
                        <div className="slotsList">
                          {timeSlots.map(slot => (
                            <div key={slot} className="slotRow">
                              <button 
                                className={`slotBtn ${selectedSlot === slot ? 'selected' : ''}`}
                                onClick={() => handleSlotSelect(slot)}
                              >
                                {slot}
                              </button>
                              {selectedSlot === slot && (
                                <button className="nextBtn" onClick={proceedToForm}>
                                  Next
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <div className="noDateSelected">
                        <p>Select a date to see available time slots.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="step2Container">
                  <h3 className="selectedDateTime">
                    {selectedDate?.toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}, {selectedSlot}
                  </h3>
                  
                  <form className="bookingForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                      <label>Name *</label>
                      <input type="text" required placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    
                    <div className="formGroup">
                      <label>Email *</label>
                      <input type="email" required placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="formGroup">
                      <label>Phone Number *</label>
                      <div className="phoneInputWrap">
                        <span className="countryCode">🇮🇳 +91</span>
                        <input type="tel" required placeholder="Enter phone number" value={phone} onChange={e => setPhone(e.target.value)} />
                      </div>
                    </div>

                    <div className="formGroup">
                      <label>City *</label>
                      <input type="text" required placeholder="Enter your city" value={city} onChange={e => setCity(e.target.value)} />
                    </div>

                    <div className="formGroup">
                      <label>How old are you? *</label>
                      <input type="text" required placeholder="Enter your age" value={age} onChange={e => setAge(e.target.value)} />
                    </div>

                    <div className="formGroup">
                      <label>What is your current Profession/Business? *</label>
                      <input type="text" required placeholder="E.g. Student, Video Editor, etc." value={profession} onChange={e => setProfession(e.target.value)} />
                    </div>

                    <div className="formGroup fullWidth">
                      <label>Why do you want to learn Video Editing? *</label>
                      <textarea required placeholder="Briefly explain your reason" value={reason} onChange={e => setReason(e.target.value)} />
                    </div>

                    <div className="formGroup fullWidth">
                      <label>Confirm if you can attend Zoom Video Call on Time? *</label>
                      <select required value={canAttend} onChange={e => setCanAttend(e.target.value)}>
                        <option value="" disabled>Select an option</option>
                        <option value="Yes, I promise">Yes, I promise</option>
                        <option value="No, I can't attend the call">No, I can't attend the call</option>
                      </select>
                    </div>

                    <div className="formGroup fullWidth">
                      <label>What is your main goal from this course? *</label>
                      <textarea required placeholder="Your main goal" value={goal} onChange={e => setGoal(e.target.value)} />
                    </div>

                    <div className="formActions">
                      <button type="submit" className="submitBtn" disabled={isSubmitting}>
                        {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
