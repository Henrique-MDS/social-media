import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function AddPost() {
  const { userId } = await auth();

  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* AVATAR */}
      <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full"/>
      {/* POST */}
      <div className="flex-1">
        {/* TEXT INPUT */}
        <form action="" className="flex gap-4">
          <textarea placeholder="What's on your mind?" name="desc" className="bg-slate-100 rounded-lg flex-1 p-2"/>
          <Image src="/emoji.png" alt="" width={20} height={20} className="w-5 h-5 cursor-pointer self-end"/>
          <button>Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-500 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} className=""/> Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} className=""/> Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} className=""/> Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} className=""/> Poll
          </div>
        </div>
      </div>
    </div>
  )
}

