import { BiLoaderAlt } from "react-icons/bi";

function Loader() {
    return (
        <div className="min-h-screen flex justify-center items-center -mt-28">
            <BiLoaderAlt className="animate-spin h-10 w-10 text-primaryOrange" />
        </div>
    )
}

export default Loader;