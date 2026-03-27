"use client";

import { Providers } from "./providers";
import ThemeRegistry from "./ThemeRegistry";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeRegistry>
      <Providers>
        <div style={{ display: "flex" }}>
        
          {/* ===== Main content ===== */}
          <main
            style={{
              flex: 1,
            }}
          >
            {children}
          </main>
        </div>
      </Providers>
    </ThemeRegistry>
  );
}
