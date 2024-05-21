"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  //   if(!userMemberships.data) return null; //original code
  if (!userMemberships || !userMemberships.data) return null;

  return (
    <ul>
      {userMemberships.data.map((org) => (
        <Item 
        key={org.organization.id}
        id={org.organization.id}
        name={org.organization.name}
        imageUrl={org.organization.imageUrl}
        />
      ))}
    </ul>
  );
};


{/* <p key={}>
            {org.organization.name}
        </p> */}