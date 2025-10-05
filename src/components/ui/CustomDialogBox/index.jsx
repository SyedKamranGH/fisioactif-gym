"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import CustomButton from "../Button";

const CustomDialogBox = ({
  open,
  onCancel,
  onConfirm,
  title,
  children,
  confirmButtonText = "Confirm",
  variant = "primary",
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onCancel}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-grey-900/70 backdrop-blur-xs fixed inset-0 z-[1000]" />

        <Dialog.Content className="fixed left-1/2 top-1/2 z-[1100] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-lg focus:outline-none focus-visible:outline-none">
          {title && (
            <div className="mb-4 flex items-center justify-between">
              <Dialog.Title className="text-lg font-semibold text-gray-900">{title}</Dialog.Title>
              <Dialog.Close asChild>
                <X
                  size={20}
                  className="cursor-pointer rounded-md p-1 text-gray-500 hover:bg-gray-100"
                />
              </Dialog.Close>
            </div>
          )}

          <div className="mb-6">{children}</div>

          {onConfirm && (
            <div className="flex justify-end space-x-3">
              <CustomButton label={confirmButtonText} onClick={onConfirm} />
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CustomDialogBox;
