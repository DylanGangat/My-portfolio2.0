import Image from "next/image";

export default function EasybankWebStack() {
  return (
    <section className="web-stack">
      <div className="container">
        <h2 className="section-title text-accent">Web Stack and explanation</h2>
        <div className="info spacer split">
          <p>
            I needed the bare basics to create this static website.{" "}
            <strong>Semantic HTML</strong> for the markup, <strong>SASS</strong>{" "}
            to keep my CSS well organized, and a little bit of
            <strong>Javascript</strong> for the navigation toggle. To deploy on
            this website, I used <strong>Netlify</strong> which is free and easy
            to use.
          </p>
          <div className="badges">
            <div className="badge">
              <svg
                width="66.71"
                height="50"
                viewBox="0 0 50 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.0436 21.5188C41.2951 21.529 39.7818 21.9485 38.5122 22.5735C38.0434 21.6454 37.5747 20.8352 37.4965 20.2297C37.4083 19.5266 37.3012 19.0969 37.4083 18.257C37.5153 17.4171 38.0044 16.2257 38.0044 16.128C37.995 16.0397 37.8965 15.61 36.891 15.6007C35.8855 15.5913 35.016 15.796 34.9183 16.0601C34.7439 16.5479 34.6034 17.0473 34.498 17.5546C34.3222 18.4726 32.4862 21.7251 31.4409 23.4345C31.0987 22.7704 30.8057 22.1845 30.7471 21.7157C30.6588 21.0126 30.5518 20.5829 30.6588 19.743C30.7659 18.9031 31.2549 17.7117 31.2549 17.614C31.2456 17.5257 31.1471 17.096 30.1416 17.0867C29.1361 17.0773 28.2666 17.282 28.1689 17.546C28.0712 17.8101 27.9634 18.4351 27.7486 19.0406C27.5431 19.6461 25.1016 25.0767 24.4672 26.4924C24.1446 27.2151 23.8617 27.7917 23.6563 28.1823C23.4508 28.5729 23.6469 28.212 23.6274 28.2511L23.3539 28.769V28.7784C23.2172 29.023 23.0703 29.2573 23.0023 29.2573C22.9539 29.2573 22.8555 28.6026 23.0219 27.7042C23.3836 25.8189 24.2625 22.879 24.2524 22.772C24.2524 22.7235 24.4188 22.2056 23.686 21.9415C22.9727 21.6774 22.7187 22.1173 22.6601 22.1173C22.6016 22.1173 22.5523 22.2735 22.5523 22.2735C22.5523 22.2735 23.3438 18.9625 21.0382 18.9625C19.5929 18.9625 17.6006 20.5352 16.6139 21.9704L11.6325 24.6955L11.5247 24.5783C8.73316 21.5969 3.5666 19.4875 3.78145 15.4835C3.85958 14.028 4.3674 10.1896 13.7036 5.54099C21.3507 1.73228 27.4751 2.77685 28.54 5.10113C30.0541 8.42155 25.268 14.5936 17.3178 15.4843C14.2904 15.8265 12.6981 14.6538 12.2973 14.2147C11.877 13.7553 11.8184 13.7358 11.6622 13.8241C11.4082 13.9608 11.5645 14.3709 11.6622 14.6155C11.8965 15.2311 12.8731 16.3249 14.5333 16.8718C15.9888 17.3507 19.5436 17.614 23.8414 15.9538C28.6564 14.0881 32.4167 8.91219 31.3128 4.58628C30.1893 0.181454 22.8844 -1.2639 15.9787 1.18773C11.8676 2.65106 7.42218 4.93551 4.21896 7.93403C0.402439 11.4888 -0.203048 14.5952 0.0500843 15.8843C0.939174 20.4844 7.27687 23.4829 9.81601 25.7002L9.46443 25.8955C8.19486 26.5205 3.36034 29.0503 2.14937 31.7262C0.782138 34.7536 2.36422 36.9318 3.41894 37.2248C6.68075 38.1334 10.0207 36.5021 11.8278 33.8161C13.6247 31.13 13.4099 27.644 12.5802 26.0518L12.5505 25.9932L13.5466 25.4072C14.1911 25.026 14.8263 24.6744 15.3826 24.372C15.0701 25.2221 14.8451 26.2276 14.7279 27.6924C14.5912 29.4112 15.2943 31.6379 16.2225 32.5176C16.6326 32.8989 17.1209 32.9082 17.4241 32.9082C18.4983 32.9082 18.9866 32.0191 19.5241 30.955C20.1882 29.6558 20.7742 28.1518 20.7742 28.1518C20.7742 28.1518 20.0413 32.2246 22.0437 32.2246C22.7766 32.2246 23.5086 31.2769 23.8407 30.7886V30.798C23.8407 30.798 23.8602 30.7683 23.8992 30.7003C23.9774 30.5832 24.0164 30.5144 24.0164 30.5144V30.4949C24.3094 29.987 24.9641 28.8245 25.9407 26.901C27.2009 24.4205 28.4119 21.3149 28.4119 21.3149C28.4119 21.3149 28.5291 22.0766 28.8908 23.3267C29.1057 24.0689 29.5744 24.8799 29.9361 25.6705L29.4674 26.3151L29.4768 26.3252C29.2268 26.6565 28.9694 26.9821 28.7049 27.3018C27.7087 28.4932 26.5173 29.8511 26.361 30.2417C26.1751 30.7011 26.2142 31.0425 26.5759 31.316C26.84 31.5113 27.3087 31.5504 27.8064 31.5113C28.7049 31.4527 29.3299 31.2277 29.6424 31.091C30.2062 30.89 30.7388 30.6104 31.2245 30.2605C32.2011 29.5378 32.7972 28.512 32.7386 27.1448C32.7089 26.3924 32.4651 25.6502 32.162 24.947L32.4261 24.5564C33.9691 22.3001 35.1605 19.8195 35.1605 19.8195C35.1605 19.8195 35.2777 20.5813 35.6394 21.8313C35.8254 22.4665 36.1965 23.1595 36.5285 23.8431C35.0832 25.0252 34.1746 26.3924 33.862 27.2909C33.2855 28.9511 33.7347 29.7034 34.5847 29.8792C34.966 29.9574 35.5129 29.7816 35.923 29.6058C36.4309 29.4394 37.0465 29.1566 37.6129 28.7362C38.5895 28.0135 39.5271 27.0073 39.4786 25.6502C39.4489 25.0252 39.2833 24.4095 39.0583 23.8236C40.2888 23.3157 41.881 23.0228 43.9022 23.2665C48.2484 23.7744 49.1078 26.4893 48.9414 27.6221C48.775 28.755 47.8672 29.38 47.564 29.5753C47.2609 29.7613 47.1632 29.8292 47.1929 29.966C47.232 30.1714 47.3687 30.1613 47.6328 30.1222C47.9945 30.0636 49.918 29.1941 49.9961 27.1041C50.1133 24.4181 47.564 21.4883 43.0428 21.518L43.0436 21.5188ZM9.52381 32.8199C8.08783 34.3926 6.06667 34.988 5.20727 34.4801C4.27912 33.9426 4.64085 31.6285 6.40887 29.9581C7.48312 28.9425 8.88004 28.005 9.79804 27.4284L10.6871 26.8909C10.7457 26.8518 10.7848 26.8323 10.7848 26.8323C10.8535 26.7932 10.9317 26.744 11.0098 26.6955C11.6645 29.0784 11.0395 31.1683 9.52537 32.8192L9.52381 32.8199ZM20.0241 25.6807C19.5257 26.9018 18.471 30.0363 17.8366 29.8605C17.2897 29.7136 16.9576 27.3409 17.7287 24.9963C18.1194 23.8142 18.9499 22.4079 19.4382 21.861C20.2296 20.9821 21.089 20.6891 21.3039 21.0501C21.5578 21.5188 20.3366 24.9174 20.0241 25.6799V25.6807ZM28.6869 29.8214C28.472 29.9292 28.2767 30.0074 28.1884 29.9488C28.1197 29.9097 28.2767 29.7628 28.2767 29.7628C28.2767 29.7628 29.3611 28.6003 29.7908 28.0635L30.6409 26.9791V27.0963C30.6409 28.5026 29.2932 29.4402 28.6877 29.8214H28.6869ZM35.3668 28.2979C35.2105 28.1807 35.2301 27.819 35.7574 26.6862C35.9629 26.2369 36.4317 25.4846 37.2418 24.772C37.3395 25.065 37.3981 25.3486 37.3887 25.6119C37.3786 27.3698 36.1285 28.0245 35.3668 28.2979Z"
                  fill="#CF649A"
                />
              </svg>
              <span className="name">Sass</span>
            </div>

            <div className="badge">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 9C0 4.02944 4.02944 0 9 0H41C45.9706 0 50 4.02944 50 9V41C50 45.9706 45.9706 50 41 50H9C4.02944 50 0 45.9706 0 41V9Z"
                  fill="#F7DF1E"
                />
                <path
                  d="M13.1466 41.7836L13.4626 41.5924C15.3836 40.4298 17.7479 41.8842 19.9933 41.8842V41.8842C21.5373 41.8842 22.5107 41.2802 22.5107 38.931V25.3042C22.5107 24.0067 23.5625 22.9548 24.8601 22.9548V22.9548C26.1576 22.9548 27.2094 24.0067 27.2094 25.3042V38.9975C27.2094 43.8641 24.3567 46.0793 20.1947 46.0793C16.4359 46.0793 14.254 44.1325 13.1465 41.7833"
                  fill="black"
                />
                <path
                  d="M29.7627 41.2802V41.2802C31.8907 40.0481 34.5321 41.2049 36.9243 41.7741C37.3185 41.8679 37.7486 41.918 38.2204 41.918C40.1673 41.918 41.4088 40.9446 41.4088 39.6021C41.4088 37.991 40.1335 37.4204 37.9854 36.481L36.811 35.9771C33.4209 34.5342 31.1721 32.7218 31.1721 28.8956C31.1721 25.3714 33.8571 22.6863 38.0527 22.6863C40.3339 22.6863 42.1257 23.2931 43.5327 24.7907C44.3191 25.6277 43.9749 26.9314 43.0085 27.552V27.552C41.9595 28.2256 40.646 27.7042 39.5465 27.1167C39.1134 26.8852 38.6259 26.7812 38.0528 26.7812C36.6767 26.7812 35.804 27.6538 35.804 28.7948C35.804 30.2045 36.6767 30.7752 38.6902 31.6479L39.8648 32.1513C43.8589 33.8631 46.1077 35.6082 46.1077 39.5349C46.1077 43.7641 42.785 46.0798 38.3212 46.0798C33.958 46.0798 31.1386 43.999 29.7628 41.2802"
                  fill="black"
                />
              </svg>
              <span className="name">Javascript</span>
            </div>

            <div className="badge">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.2366 17.3513L36.2185 17.3436C36.2079 17.3396 36.1976 17.336 36.1884 17.3266C36.1581 17.2941 36.1446 17.2493 36.1519 17.2054L37.161 11.0426L41.8933 15.7709L36.9717 17.8626C36.9583 17.8681 36.9434 17.8709 36.9286 17.8702H36.909C36.9025 17.8662 36.8961 17.8611 36.883 17.8481C36.6998 17.6444 36.4807 17.476 36.2366 17.3513ZM43.1007 16.9757L48.1606 22.0301C49.2115 23.0811 49.7376 23.6054 49.9295 24.213C49.9582 24.303 49.9817 24.393 50 24.4856L37.9076 19.3699C37.9011 19.3672 37.8947 19.3645 37.888 19.3623C37.8398 19.3427 37.7836 19.3206 37.7836 19.271C37.7836 19.2214 37.841 19.1979 37.8893 19.1784L37.905 19.1719L43.1007 16.9757ZM49.7937 26.1078C49.5326 26.5981 49.0235 27.1066 48.1619 27.9686L42.4571 33.6658L35.0787 32.131L35.0396 32.1234C34.9743 32.1128 34.9051 32.1012 34.9051 32.0425C34.8484 31.4279 34.5388 30.8644 34.05 30.4868C34.02 30.4568 34.0278 30.4099 34.0371 30.3669C34.0371 30.3604 34.0371 30.3539 34.0397 30.3485L35.4274 21.8385L35.4324 21.8098C35.4401 21.7446 35.452 21.669 35.5108 21.669C36.1115 21.5943 36.6571 21.2819 37.0251 20.8018C37.0368 20.7889 37.0447 20.7744 37.0603 20.7666C37.1021 20.747 37.1517 20.7666 37.1948 20.7849L49.7924 26.1079L49.7937 26.1078ZM41.1451 34.9764L31.7642 44.347L33.3699 34.4887L33.3725 34.4757C33.3738 34.4628 33.3765 34.4497 33.3801 34.4379C33.3931 34.4066 33.4271 34.3936 33.4598 34.3805L33.4755 34.3741C33.827 34.2242 34.138 33.9932 34.3827 33.6999C34.4141 33.6634 34.4519 33.6282 34.5002 33.6216C34.5127 33.6195 34.5255 33.6195 34.5381 33.6216L41.1437 34.9778L41.1451 34.9764ZM29.7786 46.3304L28.7212 47.3867L17.0309 30.5101C17.0267 30.5039 17.0223 30.4979 17.0179 30.4918C16.9997 30.467 16.9801 30.4422 16.984 30.4135C16.984 30.3927 16.9984 30.3744 17.0127 30.3588L17.0257 30.3418C17.0609 30.2896 17.091 30.2375 17.1236 30.1814L17.1497 30.1357L17.1537 30.1317C17.1721 30.1004 17.189 30.0704 17.2203 30.0534C17.2477 30.0405 17.2856 30.0458 17.3156 30.0521L30.267 32.7201C30.3032 32.7257 30.3373 32.7406 30.3662 32.7632C30.3832 32.7801 30.3871 32.7984 30.391 32.8192C30.5741 33.5114 31.0706 34.0782 31.733 34.3515C31.7695 34.3698 31.7539 34.4101 31.7371 34.4532C31.7286 34.4721 31.722 34.4917 31.7175 34.5119C31.5543 35.5029 30.1546 44.0288 29.7786 46.3304ZM27.5698 48.5355C26.7904 49.3062 26.3309 49.7143 25.8113 49.8786C25.299 50.0405 24.7493 50.0405 24.237 49.8786C23.6286 49.6856 23.1025 49.1614 22.0516 48.1104L10.3117 36.3834L13.3782 31.6329C13.3927 31.6094 13.407 31.5885 13.4305 31.5716C13.4631 31.5481 13.5101 31.5586 13.5492 31.5716C14.2531 31.7837 15.0088 31.7454 15.6876 31.4633C15.7228 31.4504 15.7581 31.4412 15.7855 31.4659C15.7993 31.4782 15.8114 31.4924 15.822 31.5076L27.5698 48.5368L27.5698 48.5355ZM9.17992 35.2528L6.48678 32.5626L11.8052 30.2963C11.8187 30.2902 11.8334 30.2872 11.8483 30.2871C11.8926 30.2871 11.9188 30.3314 11.9423 30.3718C11.9957 30.454 12.0523 30.534 12.112 30.6118L12.129 30.6326C12.1447 30.6548 12.1341 30.677 12.1184 30.6979L9.18118 35.2528L9.17992 35.2528ZM5.2949 31.3721L1.88768 27.9686C1.30806 27.3896 0.887704 26.9697 0.595284 26.6085L10.9553 28.7549C10.9683 28.7573 10.9814 28.7596 10.9945 28.7614C11.0585 28.7719 11.1289 28.7836 11.1289 28.8436C11.1289 28.9088 11.0519 28.9387 10.9866 28.9635L10.9566 28.9764L5.2949 31.3721ZM0 24.8585C0.0118558 24.6393 0.0512877 24.4224 0.117482 24.213C0.310689 23.6054 0.83548 23.0811 1.88767 22.0301L6.24787 17.6747C8.25543 20.5851 10.2684 23.4918 12.2869 26.3946C12.3221 26.4416 12.3613 26.4938 12.3208 26.5329C12.1302 26.7428 11.9396 26.9723 11.8052 27.2214C11.7906 27.2534 11.7681 27.2812 11.7399 27.3022C11.7229 27.3128 11.7046 27.3087 11.6851 27.3048H11.6825L0 24.8572V24.8585ZM7.41495 16.5089L13.2751 10.6526C13.8273 10.8938 15.8338 11.7401 17.6262 12.4965C18.9838 13.0702 20.2214 13.5918 20.6104 13.7614C20.6496 13.777 20.6848 13.7926 20.7018 13.8318C20.7123 13.8552 20.7069 13.8852 20.7018 13.91C20.5133 14.7687 20.7699 15.6646 21.3846 16.2938C21.4237 16.3329 21.3846 16.3889 21.3506 16.4372L21.3324 16.4646L15.3796 25.6749C15.3639 25.7009 15.3496 25.7231 15.3234 25.7401C15.2921 25.7596 15.2477 25.7506 15.2112 25.7414C14.9796 25.6808 14.7416 25.6484 14.5023 25.6449C14.2882 25.6449 14.0558 25.684 13.8209 25.727H13.8195C13.7934 25.7311 13.7699 25.7362 13.749 25.7206C13.726 25.7017 13.7061 25.6793 13.6903 25.6541L7.41371 16.509L7.41495 16.5089ZM14.4618 9.46984L22.0516 1.8883C23.1025 0.838569 23.6286 0.313051 24.237 0.12136C24.7493 -0.0404533 25.299 -0.0404533 25.8113 0.12136C26.4197 0.313051 26.9458 0.838569 27.9967 1.8883L29.6415 3.53136L24.2435 11.8823C24.2302 11.9066 24.2119 11.9279 24.19 11.9449C24.1573 11.967 24.1116 11.9578 24.0725 11.9449C23.2084 11.6829 22.2707 11.8634 21.566 12.4273C21.5307 12.4639 21.4786 12.443 21.4342 12.4233C20.7292 12.1168 15.2463 9.80236 14.4618 9.46984ZM30.7877 4.67628L35.7719 9.65501L34.5709 17.0853V17.1048C34.5699 17.1218 34.5662 17.1385 34.5604 17.1544C34.5474 17.1805 34.5212 17.1857 34.4951 17.1935C34.2383 17.2712 33.9964 17.3916 33.7797 17.5495C33.7703 17.5563 33.7617 17.5636 33.7536 17.5717C33.7391 17.5873 33.7248 17.6017 33.7014 17.6043C33.6822 17.6049 33.6632 17.6019 33.6452 17.5951L26.0501 14.3716L26.0357 14.3651C25.9874 14.3456 25.9299 14.3221 25.9299 14.2725C25.8853 13.8498 25.747 13.4422 25.5252 13.0794C25.4887 13.0194 25.4482 12.9568 25.4795 12.8955L30.7877 4.67628ZM25.6547 15.8986L32.7746 18.9109C32.8138 18.9292 32.8568 18.9461 32.8738 18.9865C32.8807 19.0109 32.8807 19.0365 32.8738 19.0609C32.8529 19.1652 32.8347 19.2839 32.8347 19.4038V19.6033C32.8347 19.6529 32.7837 19.6738 32.7368 19.6933L32.7223 19.6984C31.5944 20.1796 16.8872 26.4441 16.865 26.4441C16.8428 26.4441 16.8193 26.4441 16.7971 26.4219C16.758 26.3828 16.7971 26.328 16.8324 26.2785C16.8387 26.2699 16.8446 26.2611 16.8506 26.2524L22.7016 17.2026L22.7121 17.1869C22.7461 17.1322 22.7852 17.0709 22.8479 17.0709L22.9066 17.08C23.0398 17.0983 23.1573 17.1152 23.2761 17.1152C24.1638 17.1152 24.9862 16.6836 25.4823 15.9455C25.4942 15.9258 25.5091 15.9082 25.5267 15.8933C25.5619 15.8672 25.6142 15.8806 25.6547 15.8986ZM17.5008 27.876L33.5318 21.0469C33.5318 21.0469 33.5552 21.0469 33.5774 21.069C33.6649 21.1564 33.7393 21.2151 33.8111 21.2699L33.8464 21.292C33.879 21.3104 33.9117 21.3311 33.9142 21.3651C33.9142 21.378 33.9142 21.3859 33.9115 21.3977L32.5382 29.8242L32.5331 29.8581C32.5239 29.9233 32.5149 29.9977 32.4534 29.9977C31.7101 30.0478 31.0394 30.4611 30.6611 31.1022L30.6546 31.1127C30.6364 31.1427 30.6193 31.1714 30.5893 31.187C30.5619 31.1999 30.5266 31.1947 30.4979 31.1883L17.7137 28.5542C17.7007 28.5516 17.5152 27.8773 17.5008 27.876Z"
                  fill="url(#paint0_radial_980:1049)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_980:1049"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25 -25) scale(50.1269)"
                  >
                    <stop stop-color="#20C6B7" />
                    <stop offset="1" stop-color="#4D9ABF" />
                  </radialGradient>
                </defs>
              </svg>
              <span className="name">Netlify</span>
            </div>
          </div>
        </div>

        <div className="showcase spacer">
          <Image
            src="/images/mockups/showcase/easybank-showcase.webp"
            alt="showcases desktop and mobile views of the easybank landing page"
            height="3408"
            width="2000"
          />
        </div>
      </div>
    </section>
  );
}
