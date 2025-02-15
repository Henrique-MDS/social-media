import Image from "next/image";
import Link from "next/link";

export default function FriendRequests() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className="text-gray-500">Friend Requests</span>
            <Link href="/" className="text-blue-500 text-sm">See All</Link>
        </div>
        {/* REQUESTS */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://i.pinimg.com/736x/07/a7/2f/07a72f2bb4d9df85c1e53e23f97276e7.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Hnrq</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://i.pinimg.com/736x/07/a7/2f/07a72f2bb4d9df85c1e53e23f97276e7.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Hnrq</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://i.pinimg.com/736x/07/a7/2f/07a72f2bb4d9df85c1e53e23f97276e7.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font-semibold">Hnrq</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}
