"use client";

interface DownloadAPKButtonProps {
  className: string;
  children: React.ReactNode;
}

export default function DownloadAPKButton({ className, children }: DownloadAPKButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Downloading Lottmart APK. If download does not start, please check your network connection.");
  };

  return (
    <a href="#" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
