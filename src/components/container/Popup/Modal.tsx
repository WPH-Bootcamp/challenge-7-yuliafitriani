import { useEffect } from "react";
import Button from "../../ui/Button";

type SubmitResultModalProps = {
  status: "success" | "error";
  loading?: boolean;
  onRetry: () => void;
  onClose: () => void;

  /** new optional props */
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
};

const Modal = ({
  status,
  loading = false,
  onRetry,
  onClose,
  closeOnOverlayClick = true,
  closeOnEsc = true,
}: SubmitResultModalProps) => {
  const isError = status === "error";

  /* 🔒 Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ⌨️ ESC key close */
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeOnEsc, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={closeOnOverlayClick ? onClose : undefined}
      role="dialog"
      aria-modal="true"
    >
      {/* MODAL CARD */}
      <div
        className="relative w-96 max-w-[90vw] rounded-2xl shadow-lg overflow-hidden
                   animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} // prevent overlay close
      >
        {/* ICON */}
        <div className="bg-neutral-100 dark:bg-neutral-900 p-8 text-center">
          <img
            src={
              isError
                ? "/assets/images/message-failed.png"
                : "/assets/images/message-success.png"
            }
            alt={isError ? "Error" : "Success"}
            className="w-16 h-16 mx-auto"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-white dark:bg-black p-8 text-center">
          <p className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
            {isError ? "Oops! Something went wrong." : "Message Received!"}
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {isError
              ? "We couldn’t send your message. Please try again or check your connection."
              : "Thanks for reaching out — we’ll get back to you as soon as possible."}
          </p>

          {isError ? (
            <Button size="md" loading={loading} onClick={onRetry}>
              Try Again
            </Button>
          ) : (
            <Button size="md" onClick={onClose}>
              Close
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
