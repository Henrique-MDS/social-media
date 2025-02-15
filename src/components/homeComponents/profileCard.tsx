import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image src="https://i.pinimg.com/736x/11/d3/89/11d38939de49d61889e1dfb34c8df5e8.jpg" alt="" fill className="rounded-md object-cover"/>
        <Image src="https://i.pinimg.com/736x/76/a5/74/76a574245601f57259132f1edbc412ae.jpg" alt="" width={48} height={48} className="rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"/>
      </div>
      <div className="h-20 flex flex-col items-center gap-2">
        <span className="font-semibold">Delta</span>
        <div className="flex items-center gap-4">
            <div className="flex">
                <Image src="https://i.pinimg.com/736x/11/d3/89/11d38939de49d61889e1dfb34c8df5e8.jpg" alt="" width={12} height={12} className="w-3 h-3 rounded-full object-cover"/>
                <Image src="https://i.pinimg.com/736x/11/d3/89/11d38939de49d61889e1dfb34c8df5e8.jpg" alt="" width={12} height={12} className="w-3 h-3 rounded-full object-cover"/>
                <Image src="https://i.pinimg.com/736x/11/d3/89/11d38939de49d61889e1dfb34c8df5e8.jpg" alt="" width={12} height={12} className="w-3 h-3 rounded-full object-cover"/>
            </div>
            <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">My Profile</button>
      </div>
    </div>
  )
}
