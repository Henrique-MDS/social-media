import Image from "next/image";
import Link from "next/link";

export default function UserInforCard({userId}:{userId:String}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">User Information</span>
            <Link href="/" className="text-blue-500 text-sm">See All</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className="text-xl text-black">ヘンリー</span>
                <span className="text-sm">@Delta</span>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum earum, necessitatibus officia veniam repellat sed.
            </p>
            <div className="flex items-center gap-2">
                <Image src="/map.png" alt="" width={16} height={16} className=""/>
                <span>Living in <strong>Brazil</strong></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/school.png" alt="" width={16} height={16} className=""/>
                <span>Went to <strong>Edgar High School</strong></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src="/work.png" alt="" width={16} height={16} className=""/>
                <span>Works at <strong>Apple Inc.</strong></span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <Image src="/link.png" alt="" width={16} height={16}/>
                    <Link href={"/"} className="text-blue-500 font-medium">delta.dev</Link>
                </div>
                <div className="flex items-center gap-1">
                    <Image src="/date.png" alt="" width={16} height={16}/>
                    <span>Joined november 2024</span>
                </div>
            </div>
            <button className="bg-blue-500 text-white text-sm rounded-md p-2 hover:bg-blue-600">Follow</button>
            <span className="text-red-400 self-end text-sm cursor-pointer">Block User</span>
        </div>
    </div>
  )
}
