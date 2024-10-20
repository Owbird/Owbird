import { NextResponse } from "next/server";

export async function GET() {
  const jsContent = `document.addEventListener("DOMContentLoaded", () => {
  const footer = \`
  <a href="https://owbird.site/projects" class="flex items-center justify-center bg-gray-100 p-4">
      <div class="w-52 max-w-2xl bg-white shadow-2xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-[1.02]">
        <div class="bg-gradient-to-r from-purple-600 to-blue-500 p-1">
          <div class="bg-white p-2">
            <h2 class="text-2xl font-extrabold text-gray-800 text-center mb-2">
              more of
            </h2>
            <div class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center">
              Owbird
            </div>
          </div>
        </div>
      </div>
    </a>
  \`;
  document.body.insertAdjacentHTML('beforeend', footer);
})`;

  return new NextResponse(jsContent, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
