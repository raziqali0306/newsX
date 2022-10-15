import { BiRightArrowAlt } from "react-icons/bi";

function ArticleCard({article}) {
    return (    
        <>
        {
            article.image_url && article.link && article.title && article.description ? 
            <>
                {/* Large screen */}
                <div className="bg-white rounded-md shadow-lg w-full md:grid grid-cols-11 gap-4 overflow-hidden hidden ">
                    <div className="col-span-3">
                        <img src={article.image_url} alt="image" className="h-full object-cover" />
                    </div>
                    <div className="col-span-7 my-4 h-full">
                        <p className="text-lg lg:text-xl xl:text-2xl mb-1.5 text-primaryText">{article.title}</p>
                        <p className="text-secondaryText">{article.description}</p>
                        <p className="text-secondaryText text-xs mt-2.5">Source: <span className="font-bold tracking-wide capitalize">{article.source_id}</span></p>
                    </div>
                    <div className="col-span-1 flex items-center cursor-pointer" onClick={() => {
                        window.location.href = article.link;
                    }}>
                        <BiRightArrowAlt className="h-8 w-8 text-darkBlue"/>
                    </div>
                </div>
                {/* Small screen */}
                <div className="md:hidden bg-white rounded-md overflow-hidden w-full shadow-lg hover:scale-101 duration-200 ease-in-out cursor-pointer" onClick={() => {
                    window.location.href = article.link;
                }}>
                    <div className="relative">
                        <img src={article.image_url} alt="" className="w-full" />
                        <div className="absolute bottom-0 h-1/2 pt-6 text-lg lg:text-xl xl:text-2xl text-white px-4 bg-gradient-to-b from-black/0 to-black flex items-end">
                            <p className="mb-2">{article.title}</p>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-secondaryText">{article.description}</p>
                        <p className="text-secondaryText text-xs mt-2.5">Source: <span className="font-bold tracking-wide capitalize">{article.source_id}</span></p>
                    </div>
                </div>
            </>
            : null
        }
        </>
    );
}

export default ArticleCard;