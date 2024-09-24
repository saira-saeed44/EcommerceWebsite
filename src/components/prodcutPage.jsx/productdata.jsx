import React from 'react';
function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <nav className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold">MyStore</div>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Shop</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://via.placeholder.com/500" alt="Asgaard Sofa" className="w-full h-auto rounded-lg"/>
          <h1 className="text-3xl font-bold mt-4">Asgaard Sofa</h1>
          <p className="text-lg font-semibold mt-2">Outdoor Sofa Set</p>
          <p className="text-xl font-semibold mt-2">Rs. 250,000.00 <span className="text-gray-500 line-through">Rs. 224,000.00</span></p>
          <div className="mt-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-600 ml-2">(204 Reviews)</span>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">Add to Cart</button>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">General</h3>
              <ul className="mt-2 space-y-2">
                <li><span className="font-medium">Sales Package:</span> 1 sectional sofa, 1 Three Seater, 2 Single Seater</li>
                <li><span className="font-medium">Model Number:</span> TFCBLIGRBL6SRHS</li>
                <li><span className="font-medium">Secondary Material:</span> Solid Wood</li>
                <li><span className="font-medium">Configuration:</span> L-shaped</li>
                <li><span className="font-medium">Upholstery Material:</span> Fabric + Cotton</li>
                <li><span className="font-medium">Upholstery Color:</span> Bright Grey & Lion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Product</h3>
              <ul className="mt-2 space-y-2">
                <li><span className="font-medium">Filling Material:</span> Foam</li>
                <li><span className="font-medium">Finish Type:</span> Matte</li>
                <li><span className="font-medium">Adjustable Headrest:</span> No</li>
                <li><span className="font-medium">Maximum Load Capacity:</span> 280 KG</li>
                <li><span className="font-medium">Origin of Manufacture:</span> India</li>
                <li><span className="font-medium">Dimensions:</span></li>
                <ul className="list-disc pl-5">
                  <li><span className="font-medium">Width:</span> 265.32 cm</li>
                  <li><span className="font-medium">Height:</span> 76 cm</li>
                  <li><span className="font-medium">Depth:</span> 167.76 cm</li>
                  <li><span className="font-medium">Weight:</span> 45 KG</li>
                  <li><span className="font-medium">Seat Height:</span> 41.52 cm</li>
                  <li><span className="font-medium">Leg Height:</span> 5.46 cm</li>
                </ul>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-semibold mt-6">Warranty</h3>
          <ul className="mt-2 space-y-2">
            <li><span className="font-medium">Warranty Summary:</span> 1 Year Manufacturing Warranty</li>
            <li><span className="font-medium">Warranty Service Type:</span> For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</li>
            <li><span className="font-medium">Covered in Warranty:</span> Warranty Against Manufacturing Defect</li>
            <li><span className="font-medium">Not Covered in Warranty:</span> The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
            <li><span className="font-medium">Domestic Warranty:</span> 1 Year</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
