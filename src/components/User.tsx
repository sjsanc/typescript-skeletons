import React, { useState, useEffect } from "react";
import { IUser } from "../types/APIInterfaces";
import { fetchApi } from "../services/apiCall";
import SkeletonProfile from "../components/SkeletonProfile";
import { Theme } from "../types/types";

export default function User(props: { theme: Theme }) {
  const [profile, setProfile] = useState<IUser | null>(null);

  useEffect(() => {
    // artificial async delay
    setTimeout(async () => {
      const data = await fetchApi("users");
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3> {profile.name} </h3>
          <p> {profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <SkeletonProfile theme={props.theme} />}
    </div>
  );
}
