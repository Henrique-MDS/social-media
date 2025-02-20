import Image from "next/image";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORIES */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image src="https://i.pinimg.com/736x/b4/05/73/b40573bac57efb5a0e44da0666535365.jpg" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span className="font-medium">Delta</span>
        </div>
      </div>
    </div>
  )
}
