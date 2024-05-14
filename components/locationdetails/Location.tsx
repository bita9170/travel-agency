// import {
//   getLocationDetails,
//   getLocationPhotos,
// } from "@/controllers/tripadvisorController";
// import { LocationDetails, LocationPhotos } from "@/lib/class/location";
// import React from "react";

// async function page({ params }: any) {
//   const { locationid } = params;

//   // Fetch location details
//   const location: LocationDetails[] = await getLocationDetails(locationid);

//   // Fetch location photos
//   const photos: LocationPhotos[] = await getLocationPhotos(locationid);

//   return (
//     <div className="w-full p-8 md:flex md:items-center md:justify-between">
//       <div className="md:w-1/2">
//         <h2 className="text-3xl font-bold mb-4">{location[0].getName()}</h2>
//         <p className="mb-4">
//           Among our top 1% of places, stays, eats, and experiences - decided by
//           you.
//         </p>
//         <button className="bg-black text-white py-2 px-4 rounded">
//           See the winners
//         </button>
//       </div>
//       <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end transition-all duration-500">
//         {photos.length > 0 && (
//           <img
//             src={photos[0].url}
//             alt="Location photo"
//             className="block max-h-64 md:max-h-full w-full md:w-auto rounded-xl"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// export default page;
