
const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-4">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h5 className="font-bold mb-2">Sell on Amazon</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">How to register as a seller</a></li>
            <li><a href="#" className="hover:underline">How to sell on Amazon</a></li>
            <li><a href="#" className="hover:underline">Sell online</a></li>
            <li><a href="#" className="hover:underline">Offers for new sellers</a></li>
            <li><a href="#" className="hover:underline">Launch your brand</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Grow your Business</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Tools to grow your business</a></li>
            <li><a href="#" className="hover:underline">Fulfillment by Amazon</a></li>
            <li><a href="#" className="hover:underline">Amazon Advertising</a></li>
            <li><a href="#" className="hover:underline">Global selling</a></li>
            <li><a href="#" className="hover:underline">More selling programs</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Seller Blog</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">What is ecommerce?</a></li>
            <li><a href="#" className="hover:underline">Launching your online business in India</a></li>
            <li><a href="#" className="hover:underline">Budget-friendly business ideas</a></li>
            <li><a href="#" className="hover:underline">Amazon online business ideas</a></li>
            <li><a href="#" className="hover:underline">Digital business ideas in 2023</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Resources</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Seller University</a></li>
            <li><a href="#" className="hover:underline">Service Provider Network</a></li>
            <li><a href="#" className="hover:underline">Selling online FAQ</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-2">Social Media</h5>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Seller community on Facebook</a></li>
          </ul>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </footer>
  );
};

export default Footer;
