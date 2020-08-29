import Head from 'next/head';

import { CustomFiled } from 'components/CustomField';
import { CustomButton } from 'components/CustomButton';
import { IndexForm } from 'components/IndexForm';
import { IndexFormHero } from 'components/IndexFormHero';
import { IndexFormWrapper } from 'components/IndexFormWrapper';
import { IndexGraphics } from 'components/IndexGraphics';
import { IndexWrapper } from 'components/IndexWrapper';

const onSubmit = (e) => {
  if (e.cancelable) {
    e.preventDefault();
  }

  console.log('onSubmit', e);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>This is landing page from S3</title>
      </Head>
      <IndexWrapper>
        <IndexGraphics>
          <svg viewBox="0 0 900 350">
            <defs>
              <pattern id="svgPatternBaseOne" x="0" y="0" width=".1030" height="1">
                <image href="/icon/forest.svg" x="-5" y="-50" width="130" />
                <image href="/icon/forest.svg" x="-10" y="0" width="130" />
                <image href="/icon/grass-border.svg" x="-25" y="80" width="75" />
                <image href="/icon/grass-border.svg" x="35" y="85" width="75" />
                <image href="/icon/grass-border.svg" x="-12" y="105" width="100" />
                <image href="/icon/grass-border.svg" x="24" y="105" width="100" />
                <image href="/icon/grass-border.svg" x="-12" y="135" width="100" />
                <image href="/icon/grass-border.svg" x="24" y="135" width="100" />
                <image href="/icon/grass-border.svg" x="-12" y="155" width="125" />
                <image href="/icon/grass-border.svg" x="-12" y="190" width="125" />
              </pattern>
              <pattern id="svgPatternGrass" x="0" y="0" width=".1030" height="1">
                <image href="/icon/grass-border.svg" x="-15" y="-50" width="150" />
              </pattern>
            </defs>
            <rect fill="green" x="0" width="1000" height="350" />
            <rect fill="url(#svgPatternBaseOne)" x="0" width="1000" height="290"/>
            <image x="700px" y="165px" width="150px" href="/icon/log.svg" />
            <rect fill="url(#svgPatternGrass)" x="0" y="260" width="1000" height="54"/>
            <rect fill="url(#svgPatternGrass)" x="0" y="300" width="1000" height="54"/>
            <image x="150px" y="0px" width="200px" href="/icon/cabin.svg" />
            <image x="300px" y="50px" width="300px" href="/icon/lumberjack.svg" />
          </svg>
        </IndexGraphics>
        <IndexFormWrapper>
          <header>
            <IndexFormHero xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 210">
              <defs>
                <linearGradient id="svgGradPrim" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(231,56,39,1)"/>
                  <stop offset="81%" stopColor="rgba(76,91,176,1)"/>
                  <stop offset="100%" stopColor="rgba(89,105,212,1)"/>
                </linearGradient>
              </defs>
              <text x="0" y="-60" textAnchor="middle">
                <tspan className="greeting" x="53%" dy="1.2em">Hi!</tspan>
                <tspan x="50%" dy="1.0em">Answer</tspan>
                <tspan x="50%" dy="1.0em">the question</tspan>
              </text>
            </IndexFormHero>
          </header>
          <IndexForm onSubmit={onSubmit}>
            <CustomFiled name="customerName" placeholder="Your name"/>
            <CustomFiled name="customerName" placeholder="Your age"/>
            <CustomButton type="submit">save me !</CustomButton>
          </IndexForm>
        </IndexFormWrapper>
      </IndexWrapper>
    </>
  )
}

