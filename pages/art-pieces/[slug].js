import Header from "@/components/Header/Header";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";

export default function ShowDetails({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const foundArtPiece = artPieces.find((artpiece) => artpiece.slug === slug);

  if (!slug) {
    return (
      <main>
        <StyledErrorMessage>Loading...</StyledErrorMessage>
      </main>
    );
  } else if (!foundArtPiece) {
    return (
      <main>
        <StyledErrorMessage>
          404 art piece not found. <Link href={`/`}>Go back!</Link>
        </StyledErrorMessage>
      </main>
    );
  }

  return (
    <>
      <Head>
        <meta property="og:title" content={foundArtPiece.name} />
        <meta name="og: description" content={foundArtPiece.description} />
      </Head>
      <Header />
      <main>
        <ArtPieceDetails
          imageUrl={foundArtPiece.imageUrl}
          name={foundArtPiece.name}
          date={foundArtPiece.date}
          description={foundArtPiece.description}
          category={foundArtPiece.category}
          technique={foundArtPiece.technique}
          widthReal={foundArtPiece.widthReal}
          heightReal={foundArtPiece.heightReal}
          slug={foundArtPiece.slug}
        />
      </main>
    </>
  );
}

const StyledErrorMessage = styled.h1`
  position: fixed;
  top: 50%;
  width: 100%;
  height: 100vh;
  display: inline-block;
  text-align: center;
`;
