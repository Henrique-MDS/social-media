import UserInforCard from "../profileComponents/userInforCard";
import UserMediaCard from "../profileComponents/userMediaCard";
import Ad from "./ad";
import BirthDays from "./birthDays";
import FriendRequests from "./friendRequests";

export default function RightMenu({userId}:{userId?:String}) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInforCard userId={userId}/>
          <UserMediaCard userId={userId}/>
        </>
      ) : null}
      <FriendRequests />
      <BirthDays />
      <Ad size="md"/>
    </div>
  )
}
