import ProcessCard from "../common-components/processCard";

const CardsSection = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 container mx-auto">
        <ProcessCard
          title="Become a Seller on Amazon"
          description="Make your products available to crores of customers & businesses 24x7"
          linkText="Register as an Amazon seller"
          icon="ℹ️"
        />
        <ProcessCard
          title="Step-by-step registration guide"
          description="A detailed walk-through of the new seller account creation process."
          linkText="How to Register as a Seller"
          icon="🚚"
        />
        <ProcessCard
          title="Beginner's guide to Selling on Amazon"
          description="A one-stop guide to help you begin your online selling journey with Amazon."
          linkText="Download beginner's guide"
          icon="💰"
        />
        <ProcessCard
          title="Guide to Amazon Seller Central"
          description="Learn about the dashboard to start and manage your business on Amazon.in"
          linkText="What is Amazon Seller Central"
          icon="ℹ️"
        />
        <ProcessCard
          title="Fulfillment by Amazon (FBA)"
          description="Fulfillment by Amazon (FBA) is an all-in-one solution for storage, packing, shipping, delivery, and customer support."
          linkText="Fulfillment by Amazon"
          icon="🚚"
        />
        <ProcessCard
          title="Refer & earn rewards"
          description="Refer new sellers on Amazon.in & earn rewards worth up to INR 25,000."
          linkText="Seller referral program"
          icon="💰"
        />
      </div>
    )
    };

export default CardsSection;