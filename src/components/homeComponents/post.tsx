import Image from "next/image";
import Comments from "./comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Delta</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/* DESCRIPTION  */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://i.pinimg.com/736x/20/28/a7/2028a7a58f1f6e96b6f46323edd502ee.jpg" alt="" fill className="object-cover rounded-md"/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam et eius accusantium vitae recusandae excepturi adipisci tempora reiciendis nesciunt quam expedita assumenda necessitatibus animi, consequuntur dicta deserunt voluptates non.</p>
        </div>
        {/* INTERACTION */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Comments</span></span>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                    <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500">123 <span className="hidden md:inline">Shares</span></span>
                </div>
            </div>
        </div>
        <Comments />
    </div>
  )
}