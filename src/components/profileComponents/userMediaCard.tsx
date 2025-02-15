import Image from "next/image";
import Link from "next/link";

export default function UserMediaCard({userId}:{userId:String}) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-sm">See All</Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
        <div className="relative w-1/5 h-24">
          <Image src="https://i.pinimg.com/736x/90/f1/47/90f1478ca33cc9c9131a885f15eae8f6.jpg" alt="" fill className="object-cover rounded-md"/>
        </div>
      </div>
    </div>
  )
}
