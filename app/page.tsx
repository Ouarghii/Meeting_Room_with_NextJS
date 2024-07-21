"use client";

import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import for useRouter
import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid"
export default function Home() {
  const { fullName, setFullName } = useUser();
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  useEffect(() => {
    setFullName("");
  }, []);

  return (
    <div className="w-full h-screen">
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 flex-col gap-24 flex h-screen items-center">
          {/* Title */}
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {`Have a Special Meeting`}
            </h1>
            <h1 className="text-6xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              <span className="block">with team members</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl sm:text-xl/relaxed">
              Working with ZegoCloud API & SDK to make a global Communication Service
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 w-full">
              <input
                type="text"
                id="name"
                onChange={(e) => setFullName(e.target.value)}
                className="text-black border rounded-md focus:border-transparent focus:outline-none focus:ring-0 w-full p-4 text-lg"
                placeholder="Your name ?"
              />
              </div>
           {fullName && fullName.length>=3 && (<>
            <div className="flex items-center space-x-4 mt-8 w-full">
              <input
                type="text"
                id="roomId"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="border rounded-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 p-4 text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-black flex-grow w-4"
                placeholder="RoomId to join a meeting"
              />
              <button
                className={`rounded-md bg-blue-600 px-10 py-5 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 focus:outline-none  ${
                  !roomId ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => roomId && router.push(`/room/${roomId}`)}
                disabled={!roomId}
              >
                Join
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
             
              <button
                className="text-lg font-medium hover:text-blue-400 hover:underline"
                onClick={() =>  router.push(`/room/${uuid()}`)}
    
              >
                Or create a new meeting
              </button>
            </div>
            </>
           )}
          </div>
          
        </div>
      </section>
    </div>
  );
}
