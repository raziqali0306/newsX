import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
    return (
        <div>
            <hr className="border md:-mx-6 border-lightBlue" />
            <div className="grid grid-cols-2 pt-10">
                <div className="flex items-center gap-2 text-sm tracking-widest">
                    <AiOutlineCopyright />
                    <p> <span className="text-xs mr-0.5">NEWS</span><span>X</span>, 2022</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <p className="capitalize">privary policy</p>
                    <p className="capitalize">terms and conditionns</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;