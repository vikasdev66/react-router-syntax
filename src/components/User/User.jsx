import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4">
      User id:{userId}
    </div>
  );
};

export default User;
