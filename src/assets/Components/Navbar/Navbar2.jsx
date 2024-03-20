import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar2 = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { name: 'Home', path: '/', id: 'home' },
        { name: 'About', path: '/about', id: 'about' },
        { name: 'Products', path: '/products', id: 'products' },
        { name: 'Product Details', path: '/products/:id', id: 'productDetails' },
        { name: 'Contact', path: '/contact', id: 'contact' }
    ];


    return (
        <nav>
            <div className="md:hidden text-3xl p-4" onClick={() => setOpen(!open)}>
                {
                    open === true ? <RiMenu2Fill></RiMenu2Fill> : <RxCross2></RxCross2>
                }
            </div>
            <ul className={`md:flex duration-1000 bg-gray-200 md:bg-transparent absolute md:static left-[80px] text-lg ${open?'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar2;