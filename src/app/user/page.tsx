"use client";

import { useSession } from "next-auth/react";

const UserPage = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      <section>
        <h1 className="text-4xl font-semibold text-white">User Page</h1>
        <pre className="text-xl font-semibold text-white">
          {JSON.stringify(session,null,4)}
        </pre>
      </section>
    </div>
  );
};

export default UserPage;
