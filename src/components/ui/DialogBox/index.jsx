"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const DialogBox = ({
  open,
  onCancel,
  onConfirm,
  title,
  children,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  variant = "primary",
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onCancel}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-grey-900/70 backdrop-blur-xs fixed inset-0 z-[1000]" />

        <Dialog.Content
          data-radix-dialog-content
          className="fixed left-1/2 top-1/2 z-[1100] max-w-4xl 
     -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 
     shadow-lg focus:outline-none focus-visible:outline-none"
        >
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold text-gray-900">{title}</Dialog.Title>
            <Dialog.Close
              asChild
              onClick={onCancel}
              className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100"
            >
              <X size={20} />
            </Dialog.Close>
          </div>

          <div className="mb-6">{children}</div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onConfirm}
              className={`rounded-md px-4 py-2 text-sm font-medium text-white ${
                variant === "btn-secondary"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-600 hover:bg-gray-700"
              } focus:outline-none`}
            >
              {confirmButtonText}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogBox;
