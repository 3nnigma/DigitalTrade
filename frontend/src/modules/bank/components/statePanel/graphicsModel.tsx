
import Image from "next/image";

export default function GlowingImage() {
  return (
    <div
      className="flex justify-center items-center border-l border-r border-[rgba(75,85,99,0.36)] mx-12 mb-6"
      style={{
        filter: "drop-shadow(0px 15px 20px rgba(59,130,246,0.5))"
      }}
    >
      <Image
        src="/graphics3d.png"
        alt="card"
        width={280}
        height={280}
      />
    </div>
  );
}
