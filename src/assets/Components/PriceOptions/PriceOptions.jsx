import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            id: 1,
            name: "Basic Membership",
            price: "$50",
            features: [
                "Access to cardio machines",
                "Access to weight training area",
                "Locker room access",
                "Unlimited gym access during operating hours",
                "Discounts on personal training sessions"
            ]
        },
        {
            id: 2,
            name: "Standard Membership",
            price: "$75",
            features: [
                "All features of Basic Membership",
                "Access to group fitness classes",
                "Personal trainer consultation (once a month)",
                "Access to swimming pool",
                "Discounts on merchandise"
            ]
        },
        {
            id: 3,
            name: "Premium Membership",
            price: "$100",
            features: [
                "All features of Standard Membership",
                "Access to sauna and steam room",
                "Towel service",
                "Free guest passes (limited per month)",
                "Nutritional counseling sessions"
            ]
        }
    ];

    return (
        <div className="mt-12">
            <h1 className="text-6xl font-bold text-center my-10">Best prices in the town</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;