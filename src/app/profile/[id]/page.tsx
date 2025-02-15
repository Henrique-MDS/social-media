import Feed from "@/components/homeComponents/feed";
import LeftMenu from "@/components/homeComponents/leftMenu";
import RightMenu from "@/components/homeComponents/rightMenu";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image src="https://i.pinimg.com/736x/58/8a/e1/588ae16399021d819930991914c69717.jpg" alt="" fill className="object-cover rounded-md"/>
              <Image src="https://i.pinimg.com/736x/5e/a5/85/5ea5850a412a90d7bfad2acf4b5ecc77.jpg" alt="" width={128} height={128} className="w-32 h-32 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-16 ring-4 ring-gray-400"/>
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">Delta</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">12.3K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.1K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId={"test"}/>
      </div>
    </div>
  )
}
