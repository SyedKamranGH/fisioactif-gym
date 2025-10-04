"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CustomDialogBox from "@/components/ui/CustomDialogBox";
import ReminderForm from "./component/ReminderForm";

import "./calendar.css";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", subtitle: "", endTime: "" });
  const [startTime, setStartTime] = useState(null);
  const [error, setError] = useState("");

  const handleDateClick = (arg) => {
    setStartTime(arg.date);
    setModalData({ title: "", subtitle: "", endTime: "" });
    setError("");
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveReminder = () => {
    const { title, subtitle, endTime } = modalData;
    if (!title) {
      setError("Title is required.");
      return;
    }

    const start = startTime;

    let end;
    if (!endTime) {
      end = new Date(start.getTime() + 60 * 60 * 1000);
    } else {
      const [hours, minutes] = endTime.split(":").map(Number);
      end = new Date(start);
      end.setHours(hours, minutes, 0, 0);

      if (end <= start) {
        setError("End time must be after start time.");
        return;
      }
    }

    let mergedEvent = { id: String(Date.now()), title, start, end, extendedProps: { subtitle } };

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
    setIsOpen(false);
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
        editable
        selectable
        height="auto"
        eventContent={(arg) => (
          <div className="fc-reminder">
            <div className="fc-reminder-title">{arg.event.title}</div>
            <div className="fc-reminder-subtitle">{arg.event.extendedProps.subtitle}</div>
          </div>
        )}
      />

      <CustomDialogBox open={isOpen} onCancel={() => setIsOpen(false)} title="Add Reminder">
        <ReminderForm
          modalData={{ ...modalData, start: startTime }}
          onChange={handleChange}
          onSave={handleSaveReminder}
          error={error}
        />
      </CustomDialogBox>
    </div>
  );
};

export default Calendar;
