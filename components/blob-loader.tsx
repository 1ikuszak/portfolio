// "use client";

// import { useEffect } from "react";

// export function BlobLoader() {
//   useEffect(() => {
//     async function getLoader() {
//       const { square } = await import("ldrs");
//       square.register();
//     }
//     getLoader();
//   }, []);
//   return (
//     <div className="flex h-full w-full flex-1 items-center justify-center">
//       <l-square
//         size="16"
//         stroke="2"
//         stroke-length="0.25"
//         bg-opacity="0.1"
//         speed="1.2"
//         color="white"
//       ></l-square>
//     </div>
//   );
// }
