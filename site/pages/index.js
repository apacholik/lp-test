import styled from 'styled-components';
import Head from 'next/head';

const Test = styled.div`
  color: ${({theme}) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>This is landingpage from S3</title>
      </Head>
      <section>
        <Test>
          Test!
        </Test>
      </section>
    </>
  )
}

