import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />{" "}
      <footer>
        <p>© Pixel Cyclops</p>
      </footer>
    </div>
  );
}
export default MyApp;
