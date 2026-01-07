export default function Mascot({ mood = "happy", className = "" }: { mood?: "happy" | "calm" | "concerned", className?: string }) {
  // Placeholder for Heere the Toucan
  // In a real app, this would be an SVG or Image
  
  const colors = {
    happy: "bg-secondary",
    calm: "bg-calm",
    concerned: "bg-sos"
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`w-24 h-24 rounded-full ${colors[mood]} flex items-center justify-center shadow-lg border-4 border-white`}>
        <span className="text-4xl">🦜</span>
      </div>
      {/* Speech bubble tail would go here */}
    </div>
  );
}
