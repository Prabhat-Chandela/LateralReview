import { Button, Input } from "../index";
import { Linkedin, Facebook, Instagram, Twitter, Youtube, Handshake,ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="w-full mt-5 shadow-2xl shadow-white grid grid-cols-2 gap-3 sm:gap-0 p-5">

            <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 sm:px-5 py-3 lg:border-r border-r-red-600">
                <div className=" w-full  rounded-md sm:w-[60%] h-10">
                    <img className="w-full h-full" src="src/assets/images/Lateral-Review-Logo-withOut-Tagline.svg" alt="logo" />
                </div>
                <p className="hidden sm:block font-robotoMedium text-base bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny</p>

                <div className="flex gap-7 ">
                    <Link to={"/terms-condition"}>
                    <h3 className="font-robotoMedium text-red-600 hover:text-white flex items-center justify-center gap-2 text-xs sm:text-lg"><span><Handshake /></span>Terms & Conditions</h3>
                    </Link>

                    <Link to={"/privacy-policy"}>
                    <h3 className="font-robotoMedium text-red-600 hover:text-white flex items-center justify-center gap-2 text-xs sm:text-lg"><span><ReceiptText /></span>Privacy Policy</h3>
                    </Link>
                </div>

            </div>


            <div className="col-span-2 lg:col-span-1 flex flex-col gap-5 sm:pl-3 lg:pl-11 py-3 ">

                <h3 className="font-robotoBold text-[4vw] sm:text-[3vw] lg:text-[1.5vw] sm:tracking-widest bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent uppercase">Subscribe For Personalized Updates</h3>

                <div className="w-full flex flex-col gap-3">
                    <div className="w-full sm:w-[70%]">
                        <Input label="Email" />
                    </div>
                    <Button bgColor="bg-gradient-to-r from-red-700 to-red-500" textColor="text-black">Subscribe</Button>
                </div>

                <div className="flex gap-5 mt-2" >
                    <button className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Linkedin size={20} /></button>
                    <button className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Facebook size={20} /></button>
                    <button className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Instagram size={20} /></button>
                    <button className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Twitter size={20} /></button>
                    <button className="bg-black text-red-700 border border-red-700 rounded-full p-2 hover:text-white hover:border-white transition-all ease-out duration-100 "><Youtube size={20} /></button>
                </div>

            </div>

        </section>
    )
}

export default Footer;