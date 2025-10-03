"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import "./calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [modalData, setModalData] = useState({
    title: "",
    subtitle: "",
    start: null,
    end: null,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = (arg) => {
    const startDate = arg.date;
    const defaultEnd = new Date(startDate.getTime() + 60 * 60 * 1000);
    setModalData({ title: "", subtitle: "", start: startDate, end: defaultEnd });
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setModalData({ ...modalData, [e.target.name]: e.target.value });
  };

  const handleSaveReminder = () => {
    const { title, subtitle, start, end } = modalData;

    if (!title || !end) return alert("Please fill all fields.");

    if (end <= start) return alert("End time must be after start time.");

    const startDate = start;
    const endDate = new Date(end);

    let mergedEvent = {
      id: String(Date.now()),
      title,
      start: startDate,
      end: endDate,
      extendedProps: { subtitle },
    };

    const updatedEvents = events.reduce((acc, ev) => {
      if (
        ev.title === title &&
        ev.extendedProps.subtitle === subtitle &&
        ev.start.getDay() === startDate.getDay()
      ) {
        if (
          (startDate <= ev.end && endDate >= ev.start) ||
          ev.end.getTime() === startDate.getTime() ||
          ev.start.getTime() === endDate.getTime()
        ) {
          mergedEvent = {
            ...ev,
            start: new Date(Math.min(ev.start.getTime(), startDate.getTime())),
            end: new Date(Math.max(ev.end.getTime(), endDate.getTime())),
          };
          return acc;
        }
      }
      acc.push(ev);
      return acc;
    }, []);

    updatedEvents.push(mergedEvent);
    setEvents(updatedEvents);
    closeModal();
  };

  const handleEventClick = (arg) => {
    if (window.confirm(`Delete reminder "${arg.event.title}"?`)) {
      setEvents(events.filter((e) => e.id !== arg.event.id));
    }
  };

  const slotLabelContent = (arg) => {
    const startHour = arg.date.getHours();
    const endHour = (startHour + 1) % 24;
    return `${startHour}:00 - ${endHour}:00`;
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem" }}>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={false}
        allDaySlot={false}
        slotDuration="01:00:00"
        slotLabelContent={slotLabelContent}
        dayHeaderFormat={{ weekday: "long" }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
        height="auto"
        eventContent={(arg) => (
          <div className="fc-reminder">
            <div className="fc-reminder-title">{arg.event.title}</div>
            <div className="fc-reminder-subtitle">{arg.event.extendedProps.subtitle}</div>
          </div>
        )}
      />

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <div className="dialog-header">
              <h2 className="dialog-title">New Reminder</h2>
              <button onClick={closeModal} className="dialog-close-button">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="modal-start-time">
                Start:{" "}
                {modalData.start?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={modalData.title}
                onChange={handleChange}
                className="dialog-input"
              />
              <input
                type="text"
                name="subtitle"
                placeholder="Subtitle"
                value={modalData.subtitle}
                onChange={handleChange}
                className="dialog-input"
              />
              <label className="dialog-label">End Time</label>
              <input
                type="time"
                name="end"
                value={modalData.end ? modalData.end.toTimeString().slice(0, 5) : ""}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(":");
                  const newEnd = new Date(modalData.start);
                  newEnd.setHours(hours, minutes);
                  setModalData({ ...modalData, end: newEnd });
                }}
                className="dialog-input"
              />
            </div>

            <div className="dialog-footer">
              <button onClick={closeModal} className="dialog-button cancel">
                Cancel
              </button>
              <button onClick={handleSaveReminder} className="dialog-button save">
                Save
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Calendar;
