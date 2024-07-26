import React from 'react';

const OrderHistory = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Order 1 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">Electronics</span>
              <span className="mt-1 text-gray-500 text-sm">15 Jul 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Smartphone XYZ Pro</h2>
              <p className="leading-relaxed">A high-end smartphone with an impressive camera, long battery life, and cutting-edge performance. Ideal for tech enthusiasts and professionals.</p>
              <a className="text-blue-500 inline-flex items-center mt-4" href="#">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Order 2 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">Electronics</span>
              <span className="mt-1 text-gray-500 text-sm">20 Jul 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">4K Ultra HD Television</h2>
              <p className="leading-relaxed">Experience cinematic quality with this 4K Ultra HD TV. It features stunning picture clarity, vibrant colors, and smart features for seamless streaming.</p>
              <a className="text-blue-500 inline-flex items-center mt-4" href="#">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* Order 3 */}
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-700">Electronics</span>
              <span className="text-sm text-gray-500">25 Jul 2024</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Wireless Earbuds</h2>
              <p className="leading-relaxed">Enjoy high-quality sound and noise cancellation with these wireless earbuds. They offer comfort and convenience for all your listening needs.</p>
              <a className="text-blue-500 inline-flex items-center mt-4" href="#">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;