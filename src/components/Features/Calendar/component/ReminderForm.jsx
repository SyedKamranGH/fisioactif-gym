"use client";

import InputField from "@/components/ui/Input";
import CustomButton from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const reminderSchema = z.object({
  title: z.string().min(1, "Title is required."),
  subtitle: z.string().optional(),
  endTime: z
    .string()
    .optional()
    .refine((val) => !val || /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(val), "Invalid time format"),
});

const ReminderForm = ({ modalData, onChange, onSave, error }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reminderSchema),
    defaultValues: modalData,
  });

  const handleSubmitForm = (data) => {
    Object.keys(data).forEach((key) => {
      const fakeEvent = { target: { name: key, value: data[key] } };
      onChange(fakeEvent);
    });

    onSave();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
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
        {...register("title")}
        value={modalData.title}
        onChange={(e) => {
          setValue("title", e.target.value);
          onChange(e);
        }}
      />
      {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

      <InputField
        type="text"
        name="subtitle"
        placeholder="Enter subtitle (optional)"
        className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
        {...register("subtitle")}
        value={modalData.subtitle}
        onChange={(e) => {
          setValue("subtitle", e.target.value);
          onChange(e);
        }}
      />
      {errors.subtitle && <p className="text-sm text-red-600">{errors.subtitle.message}</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700">End Time (optional)</label>
        <input
          type="time"
          step="60"
          name="endTime"
          {...register("endTime")}
          className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          value={modalData.endTime || ""}
          onChange={(e) => {
            setValue("endTime", e.target.value);
            onChange(e);
          }}
        />
        {errors.endTime && <p className="text-sm text-red-600">{errors.endTime.message}</p>}
        <p className="mt-1 text-xs text-gray-500">Leave empty to create a 1-hour reminder.</p>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex justify-end">
        <CustomButton type="submit" label="Add Reminder" />
      </div>
    </form>
  );
};

export default ReminderForm;
