import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-9 border-b border-gray-500/30 pb-7">
                <div>
                    <h2 className='font-bold text-3xl md:text-3xl text-indigo-600'><Link to="/">GoGrocey🛒</Link></h2>                
                    <p className="mt-6 font-bold">
                        Your trusted partner for daily essentials, We handpick every item to ensure only the best reaches your home.<br></br>
                        Premium groceries & effortless shopping, We bring the supermarket to your screen and the harvest to your home.<br></br>
                        Eat fresh. Live better. Shop GoGrocey🛒.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-25">
                    <div>
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2 font-bold">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact-us" className="whitespace-nowrap">Contact Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our Community</h2>
                        <div className="text-sm space-y-2 font-bold">
                            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                            <div className="flex items-center gap-2 pt-4">
                                <input className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-40 h-9 rounded px-2" type="email" placeholder="Enter your email" />
                                <button className="bg-blue-600 w-24 h-9 text-white rounded">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-2 text-center text-xs md:text-sm pb-5 font-bold">
                Copyright 2026 © <a href="/">GoGrocey🛒</a>. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
