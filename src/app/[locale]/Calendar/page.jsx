"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  const handleDateClick = (arg) => {
    const title = prompt("Enter reminder title:");
    if (!title) return;

    const subtitle = prompt("Enter reminder subtitle:") || "";
    const start = arg.date;
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    let mergedEvent = { title, extendedProps: { subtitle }, start, end };
    let merged = false;

    const updatedEvents = events.reduce((acc, ev) => {
      if (ev.title === title && ev.extendedProps.subtitle === subtitle) {
        if (
          (start <= ev.end && end >= ev.start) ||
          ev.end.getTime() === start.getTime() ||
          ev.start.getTime() === end.getTime()
        ) {
          merged = true;
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
  };

  const handleEventClick = (arg) => {
    if (window.confirm(`Delete reminder "${arg.event.title}"?`)) {
      setEvents(events.filter((e) => e !== arg.event._def.extendedProps._rawEvent));
    }
  };

  const slotLabelContent = (arg) => {
    const startHour = arg.date.getHours();
    const endHour = (startHour + 1) % 24;
    return `${startHour}:00 - ${endHour}:00`;
  };

  const now = new Date();
  const currentHour = now.getHours();
  const minTime = `${currentHour.toString().padStart(2, "0")}:00:00`;
  const maxTime = `${((currentHour + 12) % 24).toString().padStart(2, "0")}:00:00`;

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        slotMinTime={minTime}
        slotMaxTime={maxTime}
        slotDuration="01:00:00"
        slotLabelContent={slotLabelContent}
        dayHeaderFormat={{ weekday: "long" }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
        height="auto"
        dayHeaderClassNames={() => "fc-custom-day-header"}
        slotLabelClassNames={() => "fc-custom-slot-label"}
        eventContent={(arg) => (
          <div className="fc-reminder">
            <div className="fc-reminder-title">{arg.event.title}</div>
            <div className="fc-reminder-subtitle">{arg.event.extendedProps.subtitle}</div>
          </div>
        )}
      />
    </div>
  );
};

export default CalendarPage;
