import { io } from "socket.io-client";
const socket = io(socketUrl);
const socketUrl = import.meta.env.VITE_SOCKET_URL;

// export const socket = io("http://localhost:5050");
