import styles from "./page.module.css";

export default function Home() {
  const customIframe = `<iframe 
    width="800px" 
    height="500px"
    uc-src="https://www.youtube.com/embed/FcTLMTyD2DU"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullScreen
    style="border:none;"
    >
  </iframe>`;
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>Test</p> */}
        <div
          dangerouslySetInnerHTML={{
            __html: customIframe,
          }}
        />
        {/* <iframe
          width="600px"
          height="400px"
          uc-src="https://www.youtube.com/embed/FcTLMTyD2DU"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe> */}
      </div>
    </main>
  );
}
