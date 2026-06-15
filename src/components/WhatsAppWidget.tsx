"use client";

export default function WhatsAppWidget() {
  const handleClick = () => {
    const phoneNumber = "918126177819"; // India CC + number
    const message = encodeURIComponent(
      "Hello Team Lottmart,\nI would like to know more about your platform."
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-6 z-40 cursor-pointer transition-all duration-300 whatsapp-pulse"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.249 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.437 0 9.862-4.42 9.866-9.86.002-2.634-1.02-5.11-2.881-6.974-1.86-1.864-4.332-2.89-6.969-2.891-5.439 0-9.865 4.42-9.87 9.86-.001 1.77.468 3.498 1.36 5.041L1.9 20.8l4.747-1.246zm12.44-6.149c-.1-.166-.367-.265-.77-.466-.401-.2-2.373-1.171-2.74-1.305-.367-.133-.633-.2-.9.2-.266.4-.666 1.305-.817 1.472-.15.166-.3.183-.701-.017-.4-.2-1.691-.623-3.222-1.99-1.19-1.062-2.002-2.373-2.235-2.775-.233-.4-.024-.616.177-.815.18-.18.4-.467.6-.7.2-.233.266-.4.4-.667.133-.266.066-.5-.034-.7-.1-.2-.9-2.169-1.233-2.97-.327-.789-.66-.682-.9-.693-.232-.012-.499-.012-.765-.012-.266 0-.7.1-1.066.5-.366.4-1.4 1.368-1.4 3.332 0 1.964 1.433 3.861 1.633 4.128.2.266 2.819 4.305 6.83 6.035 2.766 1.196 3.766.961 5.1.841 1.012-.09 2.373-.77 2.707-1.505.333-.733.333-1.363.233-1.502z" />
      </svg>
    </button>
  );
}
