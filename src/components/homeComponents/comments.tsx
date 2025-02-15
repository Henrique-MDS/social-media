import Image from "next/image";

export default function Comments() {
  return (
    <div>
      {/* WRITE YOUR COMMENT */}
        <div className="flex-1 flex items-center gap-4">
            <Image src="https://i.pinimg.com/736x/2a/dd/27/2add27712f87d3dbe68aa5466b899750.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
            <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" placeholder="write a comment..." className="bg-transparent outline-none flex-1" />
                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
            </div>
        </div>
      {/* COMMENTS SECTION */}
        <div>
            <div className="flex gap-4 justify-between mt-6">
                {/* AVATAR */}
                <Image src="https://i.pinimg.com/736x/2a/dd/27/2add27712f87d3dbe68aa5466b899750.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                {/* COMMENT CONTENT */}
                <div className="flex flex-col gap-2 flex-1">
                    <span className="font-medium">Delta</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odio neque natus ut, repellendus earum aliquam quo dignissimos dolore expedita vel in nulla est ipsam magnam tempora veritatis. Alias, enim!</p>
                    <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
                        <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="" width={12} height={12} className="cursor-pointer w-3 h-3"/>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">123 likes</span>
                        </div>
                        <div>Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image src="/more.png" alt="" width={16} height={16} className="cursor-pointer w-4 h-4"/>
            </div>
        </div>
    </div>
  )
}
