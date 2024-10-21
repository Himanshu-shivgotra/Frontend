import { useState } from 'react';

const DisclaimerSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-center py-4">
    
      <div
        onClick={toggleAccordion}
        className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-300"
      >
        Disclaimer <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </div>

      
      {isOpen && (
        <div className="m-4 text-left text-gray-600 px-10 font-medium">
          <p>*Selling fee here refers to referral fee.</p>
          <p className="my-4">
            **This change in referral fee is applicable for select categories
            and for products falling under the Average Selling Price Band of INR
            0-500.
          </p>
          <p className="my-4">
            Amazon Seller Services Private Limited ("Amazon") reserves the right to determine, in its sole and absolute discretion, the selling fees payable on each product category listed and sold on the marketplace www.amazon.in. Amazon further reserves the right to modify/ reduce/ increase the selling fees including the referral fees being charged by Amazon on the different categories of products.
          </p>
          <p className="my-4">
            Amazon hereby disclaims any and all liability and assumes no responsibility whatsoever for consequences resulting from use of the above information. Amazon shall in no event be liable for any special, direct, indirect, consequential or incidental damages (including but not limited to damages for loss of business profits, business interruption, loss of business information, and the like) arising out of the use of the above information.
          </p>
        </div>
      )}
    </div>
    
  );
};

export default DisclaimerSection;
