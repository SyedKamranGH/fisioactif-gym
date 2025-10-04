"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DialogBox from "@/components/ui/DialogBox";

import "./calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", subtitle: "", endTime: "" });
  const [startTime, setStartTime] = useState(null);
  const [error, setError] = useState("");

  const handleDateClick = (arg) => {
    setStartTime(arg.date);
    setModalData({ title: "", subtitle: "", endTime: "" });
    setError("");
    setShowModal(true);
  };

  const handleConfirm = () => {
    const { title, subtitle, endTime } = modalData;
    if (!title) {
      setError("Title is required.");
      return;
    }

    const start = startTime;

    let end;
    if (!endTime) {
      end = new Date(start.getTime() + 60 * 60 * 1000); // default +1h
    } else {
      const [endHour, endMinute] = endTime.split(":").map(Number);
      end = new Date(start);
      end.setHours(endHour, endMinute, 0, 0);

      if (end <= start) {
        setError("End time must be after start time.");
        return;
      }
    }

    let mergedEvent = {
      id: String(Date.now()),
      title,
      start,
      end,
      extendedProps: { subtitle },
    };

    const updatedEvents = events.reduce((acc, ev) => {
      const sameDay = ev.start.toDateString() === start.toDateString();

      if (sameDay && ev.title === title && ev.extendedProps.subtitle === subtitle) {
        if (start < ev.end && end > ev.start) {
          mergedEvent = {
            ...ev,
            start: new Date(Math.min(ev.start.getTime(), start.getTime())),
            end: new Date(Math.max(ev.end.getTime(), end.getTime())),
          };
          return acc;
        }
      }

      acc.push(ev);
      return acc;
    }, []);

    updatedEvents.push(mergedEvent);
    setEvents(updatedEvents);
    setShowModal(false);
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
        expandRows={true}
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
            <div className="fc-reminder-title ">{arg.event.title}</div>
            <div className="fc-reminder-subtitle ">{arg.event.extendedProps.subtitle}</div>
          </div>
        )}
      />

      {/* Modal */}
      <DialogBox
        open={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
        title="Add Reminder"
        confirmButtonText="Add"
        cancelButtonText="Cancel"
        variant="primary"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              value={modalData.title}
              onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subtitle</label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm "
              value={modalData.subtitle}
              onChange={(e) => setModalData({ ...modalData, subtitle: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Start Time</label>
            <input
              type="time"
              className="mt-1 w-full cursor-not-allowed rounded-md border bg-gray-100 px-3 py-2 text-sm text-gray-600"
              value={
                startTime
                  ? `${String(startTime.getHours()).padStart(2, "0")}:${String(
                      startTime.getMinutes()
                    ).padStart(2, "0")}`
                  : ""
              }
              disabled
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">End Time (optional)</label>
            <input
              type="time"
              step="60"
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm "
              value={modalData.endTime}
              onChange={(e) => setModalData({ ...modalData, endTime: e.target.value })}
            />
            <p className="mt-1 text-xs text-gray-500">Leave empty to create a 1-hour reminder.</p>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
      </DialogBox>
    </div>
  );
};

export default Calendar;
