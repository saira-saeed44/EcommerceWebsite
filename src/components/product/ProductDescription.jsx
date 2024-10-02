import img1 from '../../assests/svg/Descriptionimage.svg';
function ProductDescription() {
  return (
    <div className="flex flex-col px-1 md:px-4 lg:px-16 py-6"> 
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col lg:flex-row justify-center gap-6 mb-4">
          <h1 className="text-2xl font-medium mb-4 mr-6">Description</h1>
          <h1 className="text-2xl text-[#9F9F9F] font-medium mb-4 mr-6">Additional Information</h1>
          <h1 className="text-2xl text-[#9F9F9F] font-medium mb-4">Reviews {"[5]"}</h1>
        </div>
        <p className="max-w-3xl mx-auto text-[#9F9F9F] mb-4">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes 
          the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="max-w-3xl mx-auto text-[#9F9F9F] mb-4">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the 
          bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced 
          audio that boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. 
          The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced 
          leather strap enables easy and stylish travel.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
        <img
          src={img1}
          alt="Kilburn Speaker 1"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[605px] h-[348px] object-cover rounded-lg shadow-lg"
        />
        <img
          src={img1}
          alt="Kilburn Speaker 2"
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[605px] h-[348px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
export default ProductDescription;
