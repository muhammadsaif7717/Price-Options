import Proptypes from 'prop-types'
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 rounded-xl mb-5 p-10 flex flex-col'>
            <h2 className='text-2xl text-white text-center'>
                <span className='text-6xl font-extrabold'>{price}</span>
                /mon
            </h2>
            <h4 className='text-3xl font-bold my-5 text-white text-center'>{name}</h4>
            {
                features.map((feature,index) =>
                    <div className='flex-grow' key={index}>
                        <p className='pl-5 text-white'><FaCheckCircle className='text-green-400 inline mr-2'></FaCheckCircle> {feature}</p>
                    </div>
                )
            }
            <button className="btn ml-5 mt-5">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: Proptypes.object.isRequired,
    name: Proptypes.string.isRequired,
    price: Proptypes.string.isRequired,
    features: Proptypes.string.isRequired,
}
export default PriceOption;