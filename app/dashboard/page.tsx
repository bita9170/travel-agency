import Avatar from "@/components/elements/Avatar";
import Image from "next/image";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SaveLocationsCount } from "@/components/elements/SaveLocation";

async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <div className="relative h-[200px]">
        <Image
          src={"/hero.jpeg"}
          alt=""
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div>
        {user?.picture && user?.given_name && user.family_name && (
          <div className="w-full -mt-16 text-center flex flex-col items-center space-y-2">
            <Avatar
              src={user?.picture}
              alt={user?.given_name}
              fallBack={
                user?.given_name[0].toUpperCase() +
                user?.family_name[0].toUpperCase()
              }
              className="w-32 h-32"
            />
            <h3>
              {user?.given_name} {user.family_name}
            </h3>
            <p className="text-base">{user?.email}</p>
          </div>
        )}
      </div>
      <SaveLocationsCount userId={user?.id} />
    </div>
  );
}

export default Page;
