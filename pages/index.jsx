import Link from 'next/link'
import axios from "axios";
import {GetServerSideProps} from 'next'
// import Product from '../components/Product/Product'
import RequestForm from '../forms/RequestForm/RequestForm'
import styles from './index.module.css'

import {
    Container, Modal
} from "../components";

import {withLayout} from "../layout/Layout";
import {useEffect, useRef, useState} from "react";
import dynamic from 'next/dynamic'
import useOnScreen from "../hooks/useOnScreen";
import Script from "next/script";

const DynamicComponent1 = dynamic(() => import('../blocks/Pr/Pr'))


function Home({products, menu, social}) {
    const DynamicComponent2Ref = useRef();
    const DynamicComponent2RefValue = useOnScreen(DynamicComponent2Ref);
    const DynamicComponent3Ref = useRef();
    const DynamicComponent3RefValue = useOnScreen(DynamicComponent3Ref);
    const DynamicComponent4Ref = useRef();
    const DynamicComponent4RefValue = useOnScreen(DynamicComponent4Ref);
const xx= () => {
    setModalActive(true)
}

    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <div className={styles.wrapper}>
                <Container size="xl">
                    <DynamicComponent1 callback={xx} id="0" items={products.products}/>
                    <div ref={DynamicComponent2Ref}>
                        {DynamicComponent2RefValue && <DynamicComponent1 callback={xx} id="1" items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent3Ref}>
                        {DynamicComponent3RefValue && <DynamicComponent1 callback={xx} id="2" items={products.products}/>}
                    </div>
                    <div ref={DynamicComponent4Ref}>
                        {DynamicComponent4RefValue && <DynamicComponent1 callback={xx} id="3" items={products.products}/>}
                    </div>
                    {/*<DynamicComponent1 items={products.products}/>*/}
                    {/*{products.products.map(product => <Product key={product.id + 2} data={product} onClick={() => setModalActive(true)}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id + 3} data={product} onClick={() => setModalActive(true)}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+4} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+5} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+6} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+7} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+8} data={product}/>)}*/}
                    {/*{products.products.map(product => <Product key={product.id+9} data={product}/>)}*/}
                </Container>
            </div>

            <Modal size="m" active={modalActive} setActive={setModalActive}>
                <RequestForm/>
            </Modal>

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
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function () {
                try {
                    w.yaCounter31650469 = new Ya.Metrika({
                        id: 31650469,
                        clickmap: true,
                        trackLinks: true,
                        accurateTrackBounce: true,
                        webvisor: true,
                        triggerEvent:true,
                    });
                } catch (e) {
                }
            });
            var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () {
                n.parentNode.insertBefore(s, n);
            };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";
            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else {
                f();
            }
        })(document, window, "yandex_metrika_callbacks");
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
                    console.log('CONTEXT LOADED')
                }}
            />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {data: products} = await axios.get("https://dummyjson.com/products")
    const {data: menu} = await axios.get(process.env.API_URL + '/menu')
    const {data: social} = await axios.get(process.env.API_URL + '/social')
    return {props: {products, menu, social}}
}


export default withLayout(Home)