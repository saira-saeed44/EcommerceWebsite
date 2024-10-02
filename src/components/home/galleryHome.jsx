import React from "react";
function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-8 lg:px-12 py-3">
      <div className="grid gap-4">
        <div>
        {/* className="object-cover max-w-[300px] h-full rounded-lg" */}

          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;


// import React from 'react';
// import img1 from "../../assests/svg/gallery2.svg";
// import img2 from "../../assests/svg/gallery3.svg";
// import img3 from "../../assests/svg/gallery4.svg";
// import img4 from "../../assests/svg/gallery8.svg";
// import img5 from "../../assests/svg/gallery11.svg";
// import img6 from "../../assests/svg/gallery10.svg";
// import img7 from "../../assests/svg/gallery6.svg";
// import img8 from "../../assests/svg/gallery9.svg";
// import img9 from "../../assests/svg/gallery7.svg";

// function Gallery() {
//   return (
//     <div className="text-center">
//       <h3 className="text-[#616161] text-lg md:text-xl">Share your setup with</h3>
//       <h1 className="text-[#3A3A3A] font-bold text-2xl md:text-4xl">#FuniroFurniture</h1>
//       <div className="mt-8">
//         <div className="grid grid-cols-3 gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
//           {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((image, index) => (
//             <div key={index} className="w-full h-72 relative">
//               <img
//                 className="object-cover w-full h-full rounded-lg"
//                 src={image}
//                 alt={`Gallery Image ${index + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;
