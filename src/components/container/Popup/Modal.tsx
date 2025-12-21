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
        className="relative w-[353px] min-h-[374px] max-w-[90vw] md:w-[518px] md:h-[479px] lg:w-[518px] lg:h-[479px] rounded-2xl shadow-lg overflow-hidden animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()} // prevent overlay close
      >
        {/* ICON */}
        <div className="bg-neutral-100 dark:bg-neutral-950 p-3 text-center h-[160px] md:h-[225px] lg:h-[225px]">
          <img
            src={
              isError
                ? "/assets/images/message-failed.png"
                : "/assets/images/message-success.png"
            }
            alt={isError ? "Error" : "Success"}
            className="w-[140px] h-[140px] md:w-[180px] md:min-h-[180px] lg:w-[225px] lg:min-h-[225px] mx-auto"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-white dark:bg-black lg:p-8 md:p-8 p-4 text-center h-[214px] lg:h-[254px] md:h-[254px]">
          <p className="text-lg font-semibold text-neutral-25 dark:text-dark-neutral-25 lg:mb-4">
            {isError ? "Oops! Something went wrong." : "Message Received!"}
          </p>

          <p className="text-neutral-400 p-4 text-sm dark:text-dark-neutral-25 mb-4 lg:text-md">
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
