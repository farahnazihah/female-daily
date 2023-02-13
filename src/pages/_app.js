import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <div className="flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
