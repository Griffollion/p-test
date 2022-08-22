import Script from "next/script";

const ExternalScripts = () => {
    return (
        <>
            <Script id="google-tag-manager" strategy="afterInteractive"
                    onLoad={() => {
                        console.log('GTM LOADED')
                    }}

            >
                {`
(function (w, d, s, l, i) {
    w[l] = w[l] || []
    w[l].push({
      'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NSC7QN5');
                  `}
            </Script>
            <Script id="yandex-metrika" strategy="afterInteractive"
                    onLoad={() => {
                        console.log('YM LOADED')
                    }}
            >
                {`
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   var z = null;m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(90053236, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
                  `}
            </Script>

            <Script id="matomo" strategy="afterInteractive"
                    onLoad={() => {
                        console.log('MATOMO LOADED')
                    }}
            >

                {`
  var _paq = window._paq = window._paq || []
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['setDocumentTitle', document.domain + '/' + document.title])
  _paq.push(['setCookieDomain', '*.bankiros.ru'])
  _paq.push(['setDomains', ['*.bankiros.ru']])
  _paq.push(['setDoNotTrack', true])
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])
  _paq.push(['trackAllContentImpressions']);
  (function () {
    var u = 'https://rum.u-team.by/'
    _paq.push(['setTrackerUrl', u + 'matomo.php'])
    _paq.push(['setSiteId', '7'])
    var d = document, g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0]
    g.type = 'text/javascript'
    g.async = true
    g.src = u + 'matomo.js'
    s.parentNode.insertBefore(g, s)
  })()
                  `}
            </Script>


            <Script
                id="hb"
                src="https://yandex.ru/ads/system/header-bidding.js"
                strategy="lazyOnload"
                onLoad={() => {
                    console.log('HB LOADED')
                }}
            />
            <Script
                id="context"
                src="https://yandex.ru/ads/system/context.js"
                strategy="lazyOnload"
                onLoad={() => {

                    window.yaContextCb.push(()=>{
                        Ya.adfoxCode.create({
                            ownerId: 271489,
                            containerId: 'adfox_165687549281325444',
                            params: {
                                p1: 'cutwj',
                                p2: 'gjda',
                                pfc: 'eheox',
                                pfb: 'luiyo'
                            }
                        })
                    })
                    window.yaContextCb.push(()=>{
                        Ya.adfoxCode.create({
                            ownerId: 271489,
                            containerId: 'adfox_165687430954449519',
                            params: {
                                p1: 'cutwm',
                                p2: 'fxkk',
                                pfc: 'eheox',
                                pfb: 'luiyg'
                            }
                        })
                    })
                }}
            />
        </>
    );
};

export default ExternalScripts;