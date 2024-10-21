import { NextResponse } from "next/server";

export async function GET() {
  const jsContent = `
  const footer = \`
  
<a href="https://owbird.site/projects" class="owbird-credit-link">
  <div class="owbird-credit-card">
    <div class="owbird-credit-gradient-border">
      <div class="owbird-credit-inner-content">
        <h2 class="owbird-credit-title">more of</h2>
        <div class="owbird-credit-name">Owbird</div>
      </div>
    </div>
  </div>
</a>
  \`;
  document.body.insertAdjacentHTML('afterend', footer);
`;

  return new NextResponse(jsContent, {
    headers: {
      "Content-Type": "text/javascript",
    },
  });
}
