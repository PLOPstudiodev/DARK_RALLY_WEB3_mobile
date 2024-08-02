import App from "./components/App";
import ConnectionWrapper from "./components/ConnectionWrapper";
import WagmiWrapper from "./components/WagmiWrapper";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <WagmiWrapper>
        <div className="min-h-screen flex flex-col">
          <App />
          <ConnectionWrapper>
            {children}
          </ConnectionWrapper>
        </div>
      </WagmiWrapper>
    </>
  )
}
