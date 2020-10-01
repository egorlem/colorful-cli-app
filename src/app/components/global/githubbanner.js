import React from "react";
import styled from "styled-components";
const BannerContainer = styled.a`
  position: absolute;
  z-index: 21011;
  right: -50px;
  top: calc(65% - 88px);
  display: flex;
  align-items: center;
  background: black;
  color: white;
  font-size: 1.3rem;
  padding: 4px;
  border: 1px solid #1f1f1f;
  transform: rotate(-90deg);
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
const BannerText = styled.div`
  padding-right: 6px;
`;
const GitHubLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// leave your feedback on

const ForkBanner = () => {
  return (
    <BannerContainer
      href="https://github.com/guesswhozzz/cli-color-app"
      target="_blank"
    >
      <BannerText>Leave feedback on</BannerText>
      <GitHubLogo>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="15">
          <path
            fill="#FFF"
            d="M10.387 6.512h-4.27c-.11 0-.199.089-.199.199v2.09c0 .109.089.197.199.197h1.665v2.592s-.374.131-1.407.131c-1.219 0-2.924-.447-2.924-4.195s1.773-4.24 3.439-4.24c1.44 0 2.062.254 2.459.376.124.038.24-.085.24-.195l.476-2.017c0-.053-.019-.114-.077-.158-.161-.113-1.139-.66-3.613-.66C3.525.632.602 1.843.602 7.673c0 5.826 3.347 6.697 6.166 6.697 2.335 0 3.752-.998 3.752-.998.059-.033.064-.113.064-.152V6.709c0-.108-.089-.197-.197-.197zM32.383 1.332c0-.112-.088-.203-.199-.203H29.78c-.108 0-.2.089-.2.203v4.643h-3.745V1.332c0-.112-.088-.203-.197-.203h-2.403c-.11 0-.199.089-.199.203v12.574c0 .111.089.203.199.203h2.403c.109 0 .197-.09.197-.203V8.527h3.745l-.006 5.379c0 .111.09.203.201.203h2.409c.108 0 .198-.09.199-.203V1.332z"
          />
          <g fill="#FFF">
            <ellipse cx="13.371" cy="2.98" rx="1.55" ry="1.565" />
            <path d="M14.75 11.256V5.447c0-.11-.088-.2-.2-.2h-2.396c-.11 0-.208.113-.208.224v8.318c0 .248.152.318.349.318h2.16c.236 0 .294-.117.294-.32.001-.445.001-2.195.001-2.531z" />
          </g>
          <path
            fill="#FFF"
            d="M41.518 5.266h-2.385c-.111 0-.199.091-.199.201v6.168s-.606.443-1.468.443c-.858 0-1.087-.393-1.087-1.234V5.466c0-.11-.089-.201-.199-.201h-2.419c-.109 0-.198.091-.198.201v5.785c0 2.504 1.393 3.115 3.309 3.115 1.575 0 2.843-.873 2.843-.873s.059.461.086.514c.029.055.101.107.177.107l1.54-.006c.108 0 .198-.09.198-.201l.003-8.439c-.001-.111-.092-.202-.201-.202zM48.036 4.984c-1.356 0-2.277.605-2.277.605V1.332c0-.112-.088-.203-.197-.203H43.15c-.109 0-.198.089-.198.203v12.574c0 .111.088.203.198.203h1.672c.076 0 .133-.037.174-.105.042-.066.103-.582.103-.582s.986.938 2.852.938c2.19 0 3.447-1.111 3.447-4.99 0-3.878-2.007-4.386-3.362-4.386zm-.941 7.086c-.828-.027-1.388-.402-1.388-.402V7.686s.552-.339 1.232-.401c.858-.076 1.687.183 1.687 2.232 0 2.161-.373 2.588-1.531 2.553zM21.655 5.247h-1.802l-.002-2.382c0-.089-.046-.135-.15-.135h-2.457c-.096 0-.146.042-.146.133v2.461s-1.232.296-1.314.321c-.082.024-.145.101-.145.193v1.545c0 .111.088.201.198.201h1.261v3.722c0 2.762 1.938 3.035 3.247 3.035.598 0 1.312-.193 1.432-.238.07-.025.111-.1.111-.18l.001-1.701c0-.109-.094-.199-.199-.199s-.374.043-.65.043c-.886 0-1.186-.414-1.186-.947V7.582h1.802c.11 0 .2-.089.2-.2V5.447c-.001-.111-.09-.2-.201-.2z"
          />
        </svg>
      </GitHubLogo>
    </BannerContainer>
  );
};

export default ForkBanner;