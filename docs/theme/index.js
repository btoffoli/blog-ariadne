import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    onMounted(() => {
      // Adiciona o script do AdSense ao head
      if (!document.querySelector('script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6825416782900448";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
      }
    });
  },
};
