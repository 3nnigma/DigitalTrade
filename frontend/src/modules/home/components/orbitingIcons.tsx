import OrbitingCircles from "./orbiting";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-500 to-gray-200 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Coins
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.litecoin />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.bitcoin />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.solana />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.dot />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  dot: () => (
    <svg
      stroke="currentColor"
      fill="#e60079"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12,0c2.39,0,4.328,1.127,4.328,2.517S14.39,5.034,12,5.034,7.672,3.907,7.672,2.517,9.61,0,12,0Zm0,18.966c2.39,0,4.328,1.127,4.328,2.517S14.39,24,12,24s-4.328-1.127-4.328-2.517S9.61,18.966,12,18.966ZM1.606,6C2.8,3.93,4.747,2.816,5.952,3.511s1.212,2.937.017,5.007S2.828,11.7,1.624,11.007.411,8.07,1.606,6Zm16.427,9.483c1.2-2.07,3.139-3.184,4.343-2.489s1.211,2.936.016,5.006-3.14,3.185-4.344,2.49S16.837,17.553,18.033,15.483ZM1.624,12.993c1.205-.7,3.15.419,4.346,2.489s1.187,4.311-.018,5.007S2.8,20.07,1.607,18,.42,13.689,1.624,12.993ZM18.049,3.512c1.2-.695,3.149.419,4.344,2.489s1.188,4.311-.016,5.007-3.148-.42-4.343-2.49S16.846,4.207,18.049,3.512Z"></path>
    </svg>
  ),
  bitcoin: () => (
    <svg
      stroke="currentColor"
      fill="#f7931a"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.648 14.423l.003-.004a1.34 1.34 0 0 1-.498.659c-.269.189-.647.338-1.188.364l-1.99.004v-2.93c.288.008 1.565-.013 2.119.015.722.035 1.171.321 1.41.668.262.351.293.82.144 1.224zm-2.129-3.261c.503-.024.852-.162 1.101-.336.214-.146.375-.367.46-.611.134-.375.107-.81-.136-1.135-.223-.319-.638-.584-1.306-.616-.495-.026-1.413-.003-1.664-.01v2.709c.025.004 1.539-.001 1.545-.001zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.65 2.142c.022-1.477-1.24-2.332-1.908-2.572.715-.491 1.206-1.043 1.206-2.085 0-1.655-1.646-2.43-2.647-2.529-.082-.009-.31-.013-.31-.013V5.361h-1.633l.004 1.583H10.97V5.367H9.31v1.569c-.292.007-2.049.006-2.049.006v1.401h.571c.601.016.822.362.798.677v6.041a.408.408 0 0 1-.371.391c-.249.011-.621 0-.621 0l-.32 1.588h1.996v1.6h1.661v-1.591h1.091v1.594h1.624v-1.588c1.899.05 3.643-1.071 3.66-2.913z"></path>
    </svg>
  ),

  litecoin: () => (
    <svg
      stroke="currentColor"
      fill="#729bc4"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="200px"
      width="200px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm-.2617 3.6777h2.584a.3425.3425 0 01.33.4356l-2.0312 6.918 1.9062-.582-.4082 1.3847-1.9238.5605-1.248 4.213h6.6757a.3425.3425 0 01.3282.4374l-.582 2a.4586.4586 0 01-.4395.3301H6.7324l1.7227-5.8223-1.9063.5801.42-1.3613 1.9101-.58 2.4219-8.1798a.4557.4557 0 01.4375-.334Z"></path>
    </svg>
  ),
  solana: () => (
    <svg
      width="200"
      height="200"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="none"
    >
      <defs>
        <linearGradient id="solanaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#31e0ba" />
          <stop offset="100%" stopColor="#8e59f5" />
        </linearGradient>
      </defs>
      <path
        d="m23.8764 18.0313-3.962 4.1393a.9201.9201 0 0 1-.306.2106.9407.9407 0 0 1-.367.0742H.4599a.4689.4689 0 0 1-.2522-.0733.4513.4513 0 0 1-.1696-.1962.4375.4375 0 0 1-.0314-.2545.4438.4438 0 0 1 .117-.2298l3.9649-4.1393a.92.92 0 0 1 .3052-.2102.9407.9407 0 0 1 .3658-.0746H23.54a.4692.4692 0 0 1 .2523.0734.4531.4531 0 0 1 .1697.196.438.438 0 0 1 .0313.2547.4442.4442 0 0 1-.1169.2297zm-3.962-8.3355a.9202.9202 0 0 0-.306-.2106.941.941 0 0 0-.367-.0742H.4599a.4687.4687 0 0 0-.2522.0734.4513.4513 0 0 0-.1696.1961.4376.4376 0 0 0-.0314.2546.444.444 0 0 0 .117.2297l3.9649 4.1394a.9204.9204 0 0 0 .3052.2102c.1154.049.24.0744.3658.0746H23.54a.469.469 0 0 0 .2523-.0734.453.453 0 0 0 .1697-.1961.4382.4382 0 0 0 .0313-.2546.4444.4444 0 0 0-.1169-.2297zM.46 6.7225h18.7815a.9411.9411 0 0 0 .367-.0742.9202.9202 0 0 0 .306-.2106l3.962-4.1394a.4442.4442 0 0 0 .117-.2297.4378.4378 0 0 0-.0314-.2546.453.453 0 0 0-.1697-.196.469.469 0 0 0-.2523-.0734H4.7596a.941.941 0 0 0-.3658.0745.9203.9203 0 0 0-.3052.2102L.1246 5.9687a.4438.4438 0 0 0-.1169.2295.4375.4375 0 0 0 .0312.2544.4512.4512 0 0 0 .1692.196.4689.4689 0 0 0 .2518.0739z"
        fill="url(#solanaGradient)"
      />
    </svg>
  ),
};
