import { NextResponse } from "next/server";

export function GET() {
  const css = `
.owbird-credit-link {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.owbird-credit-card {
  background-color: #ffffff; /* bg-white */
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1); /* shadow-2xl */
  border-radius: 0.5rem; /* rounded-lg */
  overflow: hidden;
  transition: all 0.3s ease-in-out; /* transition-all, duration-300 */
}

.owbird-credit-card:hover {
  box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.15); /* hover:shadow-3xl */
  transform: scale(1.02); /* hover:scale-[1.02] */
}

.owbird-credit-gradient-border {
  background: linear-gradient(to right, #6b46c1, #4299e1); /* from-purple-600 to-blue-500 */
  padding: 0.25rem; /* p-1 */
}

.owbird-credit-inner-content {
  background-color: #ffffff; /* bg-white */
  padding: 0.5rem; /* p-2 */
}

.owbird-credit-title {
  font-size: 1rem; /* text-2xl */
  font-weight: 800; /* font-extrabold */
  color: #2d3748; /* text-gray-800 */
  text-align: center; /* text-center */
  margin-bottom: 0.5rem; /* mb-2 */
}

.owbird-credit-name {
  font-size: 1.25rem; /* text-4xl */
  font-weight: 900; /* font-black */
  background: linear-gradient(to right, #6b46c1, #4299e1); /* from-purple-600 to-blue-500 */
  background-clip: text; /* bg-clip-text */
  -webkit-background-clip: text; /* Safari */
  color: transparent; /* text-transparent */
  text-align: center; /* text-center */
}
`;

  return new NextResponse(css, {
    headers: {
      "Content-Type": "text/css",
    },
  });
}
