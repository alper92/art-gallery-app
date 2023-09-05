import Link from "next/link";
import { styled } from "styled-components";
import { FacebookIcon, WhatsappIcon, WhatsappShareButton, FacebookShareButton } from "react-share";

export default function FooterComponent() {
  return (
    <StyledFooter>
      <ShareButtons>
        <FacebookShareButton
          windowWidth={1000}
          windowHeight={400}
          url={`https://capstone-project-lt3yhzqyj-alper92.vercel.app`}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <li>
          <WhatsappShareButton
            windowWidth={1000}
            windowHeight={1000}
            url={`https://capstone-project-lt3yhzqyj-alper92.vercel.app`}
            title={`I found this beautiful art gallery! Click the link for more: `}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </li>
      </ShareButtons>
      <ul>
        <DataItem>
          <Link href="/imprint">Imprint</Link>
        </DataItem>
        <DataItem>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </DataItem>
      </ul>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  font-size: 0.7rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.5rem;
  border-top: 1px solid var(--border-color);
  background-color: var(--active-color);
`;

const ShareButtons = styled.ul`
  display: flex;
  gap: 1rem;
`;

const DataItem = styled.li`
  margin: 5px;
`;
