"use client";

import InputField from "@/components/ui/Input";
import CustomButton from "@/components/ui/Button";

const ReminderForm = ({ modalData, onChange, onSave, error }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Time</label>
        <div className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm text-gray-600">
          {modalData.start
            ? (() => {
                let hours = modalData.start.getHours();
                const minutes = modalData.start.getMinutes();
                const ampm = hours >= 12 ? "PM" : "AM";
                hours = hours % 12 || 12;
                return `${hours.toString().padStart(2, "0")}:${minutes
                  .toString()
                  .padStart(2, "0")} ${ampm}`;
              })()
            : "--:--"}
        </div>
      </div>

      <InputField
        type="text"
        name="title"
        placeholder="Enter title"
        className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
        value={modalData.title}
        onChange={onChange}
      />

      <InputField
        type="text"
        name="subtitle"
        placeholder="Enter subtitle (optional)"
        className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
        value={modalData.subtitle}
        onChange={onChange}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">End Time (optional)</label>
        <input
          type="time"
          step="60"
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={modalData.endTime || ""}
          onChange={onChange}
          name="endTime"
        />
        <p className="mt-1 text-xs text-gray-500">Leave empty to create a 1-hour reminder.</p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-end">
        <CustomButton label="Add Reminder" onClick={onSave} />
      </div>
    </div>
  );
};

export default ReminderForm;
