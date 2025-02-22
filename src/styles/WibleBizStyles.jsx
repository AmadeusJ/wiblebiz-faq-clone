import { css } from '@emotion/react';
// Logos
import logoAppstore from '@/assets/logos/logo_appstore.svg';
import logoGoogleplay from '@/assets/logos/logo_googleplay.svg';
import logoKia from '@/assets/logos/logo_kia.svg';
import logoWibleLg from '@/assets/logos/logo_wible_lg.svg';
import logoWibleSm from '@/assets/logos/logo_wible_sm.svg';

// Icons
import icArrow from '@/assets/icons/ic_arrow.svg';
import icDownload from '@/assets/icons/ic_download.svg';
import icProcess01 from '@/assets/icons/ic_process01.svg';
import icProcess02 from '@/assets/icons/ic_process02.svg';
import icProcess03 from '@/assets/icons/ic_process03.svg';
import icProcess04 from '@/assets/icons/ic_process04.svg';
import icSearch from '@/assets/icons/ic_search.svg';
import icStepArrow from '@/assets/icons/ic_step_arrow.svg';
import icTalk from '@/assets/icons/ic_talk.svg';
import icTop from '@/assets/icons/ic_top.svg';
import icWrite from '@/assets/icons/ic_write.svg';
const WibleBizStyles = css`
  @charset "UTF-8";
  /* Font ************************************************************ */
  @font-face {
    font-display: swap;
    font-family: Kia Signature Fix;
    src: url(/fonts/KiaSignatureFixLight.woff2) format('woff2');
    font-weight: 300;
  }
  @font-face {
    font-display: swap;
    font-family: Kia Signature Fix;
    src: url(/fonts/KiaSignatureFixRegular.woff2) format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-display: swap;
    font-family: Kia Signature Fix;
    src: url(/fonts/KiaSignatureFixBold.woff2) format('woff2');
    font-weight: 600;
  }

  /* Breakpoints & Var ************************************************************ */
  :root {
    --max-width: 1660px;
    --line-height-sm: 1.4;
    --line-height-md: 1.6;
    --line-height-lg: 1.8;
    --cubic-bezier-primary: cubic-bezier(1, 0, 0.2, 1);
    --mint-900: #70d7bf;
    --mint-700: #8ddfcc;
    --midnight-900: #05141f;
    --midnight-100: #cdd0d2;
    --red: #ff0900;
    --blue: #4296e4;
    --gray-700: #37434c;
    --gray-500: #697278;
    --gray-400: #82898f;
    --gray-300: #b4b9bc;
    --gray-200: #cdd0d2;
    --gray-100: #e6e8e9;
    --gray-50: #f6f6f9;
    --gray-10: #f8f8f8;
  }
  @media (max-width: 743px) {
    :root {
      font-size: 14px;
      --px-md: 16px;
      --px-lg: 24px;
      --px-xlg: 32px;
      --input-md: 40px;
      --input-md-fsize: 16px;
      --textarea-md: 140px;
      --space-xsm: 8px;
      --space-xsm2: 8px;
      --space-sm: 12px;
      --space-sm2: 12px;
      --space-md: 16px;
      --space-md2: 20px;
      --space-md3: 20px;
      --space-box: 48px;
      --space-box2: 120px;
      --heading-2: 20px;
      --heading-2-margin: 48px 0 16px;
      --heading-4: 16px;
      --heading-4-margin: 20px 0 4px;
      --heading-info: 16px;
      --heading-box: 18px;
      --btn-md: 36px;
      --btn-xlg: 48px;
      --btn-xlg2: 40px;
      --btn-xxlg: 72px;
      --btn-xxlg-size: 16px;
      --ic-sm: 20px;
      --ic-md: 24px;
      --ic-lg: 32px;
      --ic-xlg: 40px;
      --ic-xlg2: 32px;
      --ic-xxlg: 64px;
      --header-height: 56px;
      --footer-height: 284px;
      --side-padding: 24px;
      --bottom-padding: 80px;
      --h1-height: 124px;
      --h1-fsize: 24px;
      --h1-fsize-sm: 14px;
      --tab-fsize: var(--font-size);
      --search-bar-width: 100%;
      --gallery-list-length: 1;
      --gallery-list-space: 0;
      --gallery-list-title-space: 12px;
      --gallery-list-title-size: 16px;
      --list-more-size: 14px;
      --board-head-padding: 16px 0;
      --board-body-padding-v: var(--px-lg);
      --board-body-padding-h: 0;
      --board-heading-fsize: 16px;
      --board-media-max-width: 100%;
      --board-footer-col-indent: 12px;
      --faq-list-a-padding-v: 16px;
      --faq-list-a-padding-h: 0;
      --faq-list-a-size: 16px;
      --faq-list-q-padding: 16px 0;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    :root {
      font-size: 16px;
      --px-md: 16px;
      --px-lg: 32px;
      --px-xlg: 56px;
      --input-md: 48px;
      --input-md-fsize: 16px;
      --textarea-md: 140px;
      --space-xsm: 8px;
      --space-xsm2: 12px;
      --space-sm: 14px;
      --space-sm2: 16px;
      --space-md: 24px;
      --space-md2: 24px;
      --space-md3: 24px;
      --space-box: 64px;
      --space-box2: 120px;
      --heading-2: 24px;
      --heading-2-margin: 48px 0 24px;
      --heading-4: 18px;
      --heading-4-margin: 24px 0 8px;
      --heading-info: 18px;
      --heading-box: 20px;
      --btn-md: 44px;
      --btn-xlg: 52px;
      --btn-xlg2: 48px;
      --btn-xxlg: 80px;
      --btn-xxlg-size: 16px;
      --ic-sm: 24px;
      --ic-md: 28px;
      --ic-lg: 32px;
      --ic-xlg: 48px;
      --ic-xlg2: 48px;
      --ic-xxlg: 80px;
      --header-height: 56px;
      --footer-height: 296px;
      --side-padding: 48px;
      --bottom-padding: 80px;
      --h1-height: 160px;
      --h1-fsize: 40px;
      --h1-fsize-sm: 14px;
      --tab-fsize: var(--font-size);
      --search-bar-width: 400px;
      --gallery-list-length: 2;
      --gallery-list-space: var(--space-md);
      --gallery-list-title-space: 12px;
      --gallery-list-title-size: 16px;
      --list-more-size: 16px;
      --board-head-padding: 24px 24px;
      --board-body-padding-v: var(--px-lg);
      --board-body-padding-h: 24px;
      --board-heading-fsize: 20px;
      --board-media-max-width: 100%;
      --board-footer-col-indent: 24px;
      --faq-list-a-padding-v: 24px;
      --faq-list-a-padding-h: 24px;
      --faq-list-a-size: 20px;
      --faq-list-q-padding: 24px 24px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    :root {
      font-size: 18px;
      --px-md: 20px;
      --px-lg: 40px;
      --px-xlg: 64px;
      --input-md: 48px;
      --input-md-fsize: 14px;
      --textarea-md: 140px;
      --space-xsm: 12px;
      --space-xsm2: 16px;
      --space-sm: 20px;
      --space-sm2: 16px;
      --space-md: 24px;
      --space-md2: 24px;
      --space-md3: 32px;
      --space-box: 48px;
      --space-box2: 160px;
      --heading-2: 24px;
      --heading-2-margin: 48px 0 24px;
      --heading-4: 18px;
      --heading-4-margin: 24px 0 8px;
      --heading-info: 20px;
      --heading-box: 20px;
      --btn-md: 48px;
      --btn-xlg: 56px;
      --btn-xlg2: 56px;
      --btn-xxlg: 80px;
      --btn-xxlg-size: 18px;
      --ic-sm: 24px;
      --ic-md: 32px;
      --ic-lg: 48px;
      --ic-xlg: 48px;
      --ic-xlg2: 56px;
      --ic-xxlg: 80px;
      --header-height: 80px;
      --footer-height: 176px;
      --side-padding: 48px;
      --bottom-padding: 80px;
      --h1-height: 192px;
      --h1-fsize: 48px;
      --h1-fsize-sm: 16px;
      --tab-fsize: 20px;
      --search-bar-width: 480px;
      --gallery-list-length: 3;
      --gallery-list-space: var(--space-md);
      --gallery-list-title-space: 16px;
      --gallery-list-title-size: 18px;
      --list-more-size: 18px;
      --board-head-padding: 28px 32px;
      --board-body-padding-v: var(--px-lg);
      --board-body-padding-h: 32px;
      --board-heading-fsize: 24px;
      --board-media-max-width: 100%;
      --board-footer-col-indent: 32px;
      --faq-list-a-padding-v: 18px;
      --faq-list-a-padding-h: 20px;
      --faq-list-a-size: 18px;
      --faq-list-q-padding: 24px 32px;
    }
  }
  @media (min-width: 1440px) {
    :root {
      font-size: 18px;
      --px-md: 24px;
      --px-lg: 48px;
      --px-xlg: 76px;
      --input-md: 56px;
      --input-md-fsize: 18px;
      --textarea-md: 200px;
      --space-xsm: 16px;
      --space-xsm2: 16px;
      --space-sm: 20px;
      --space-sm2: 20px;
      --space-md: 32px;
      --space-md2: 28px;
      --space-md3: 32px;
      --space-box: 64px;
      --space-box2: 160px;
      --heading-2: 24px;
      --heading-2-margin: 64px 0 24px;
      --heading-4: 20px;
      --heading-4-margin: 28px 0 12px;
      --heading-info: 24px;
      --heading-box: 24px;
      --btn-md: 48px;
      --btn-xlg: 56px;
      --btn-xlg2: 56px;
      --btn-xxlg: 80px;
      --btn-xxlg-size: 18px;
      --ic-sm: 24px;
      --ic-md: 32px;
      --ic-lg: 48px;
      --ic-xlg: 56px;
      --ic-xlg2: 64px;
      --ic-xxlg: 96px;
      --header-height: 80px;
      --footer-height: 176px;
      --side-padding: 48px;
      --bottom-padding: 96px;
      --h1-height: 222px;
      --h1-fsize: 56px;
      --h1-fsize-sm: 18px;
      --tab-fsize: 20px;
      --search-bar-width: 480px;
      --gallery-list-length: 3;
      --gallery-list-space: var(--space-md);
      --gallery-list-title-space: 20px;
      --gallery-list-title-size: 20px;
      --list-more-size: 18px;
      --board-head-padding: 32px 40px;
      --board-body-padding-v: var(--px-lg);
      --board-body-padding-h: 40px;
      --board-heading-fsize: 28px;
      --board-media-max-width: 960px;
      --board-footer-col-indent: 32px;
      --faq-list-a-padding-v: 24px;
      --faq-list-a-padding-h: 24px;
      --faq-list-a-size: 20px;
      --faq-list-q-padding: 32px 40px;
    }
  }

  /* Init ************************************************************ */
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(112, 215, 191, 0.08);
  }
  html {
    height: 100%;
    /* background-color: var(--midnight-900); */
  }
  body {
    height: 100%;
    min-width: 360px;
    margin: 0;
    /* background-color: #fff; */
  }
  body.nav-opened,
  body.modal-opened {
    overflow: hidden;
  }
  body,
  button,
  input,
  select,
  textarea {
    font-family:
      Kia Signature Fix,
      Arial,
      sans-serif,
      Hevetica;
    color: var(--midnight-900);
  }
  input,
  select,
  textarea {
    font-size: var(--input-md-fsize);
    outline: none;
  }
  .sticky-checker {
    pointer-events: none;
  }
  .container .sticky-checker {
    display: block;
    height: var(--header-height);
    margin-top: calc(-1 * var(--header-height));
  }
  button {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
  a {
    color: var(--midnight-900);
    text-decoration: none;
    cursor: pointer;
  }
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  em,
  i,
  address {
    font-style: normal;
  }
  input::-webkit-input-placeholder {
    font-weight: 400;
    color: var(--gray-300);
    opacity: 1;
  }
  input::-moz-placeholder {
    font-weight: 400;
    color: var(--gray-300);
    opacity: 1;
  }
  textarea::-webkit-input-placeholder {
    font-weight: 400;
    color: var(--gray-300);
    opacity: 1;
  }
  textarea::-moz-placeholder {
    font-weight: 400;
    color: var(--gray-300);
    opacity: 1;
  }
  iframe {
    display: block;
    width: 100%;
    border: none;
  }

  /* Common ************************************************************ */
  .heading-2 {
    margin: var(--heading-2-margin);
    font-size: var(--heading-2);
    line-height: var(--line-height-sm);
  }
  .heading-4 {
    display: flex;
    align-items: center;
    margin: var(--heading-4-margin);
    font-size: var(--heading-4);
    line-height: var(--line-height-sm);
  }
  .heading-4 > .required {
    width: calc(var(--heading-4) + 6px);
    height: calc(var(--heading-4) + 6px);
    font-size: 0;
    background: url(../images/ic_required.svg) no-repeat;
    background-size: auto 100%;
  }
  .heading-info {
    margin: var(--px-md) 0;
    font-size: var(--heading-info);
    line-height: var(--line-height-sm);
  }
  .heading-info > em {
    color: var(--mint-900);
  }
  .btn-xlg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 8em;
    height: var(--btn-xlg);
    padding: 0 1em;
    font-size: calc(1rem + 2px);
    font-weight: 600;
  }
  .btn-xxlg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(--btn-xxlg);
    min-height: var(--btn-xxlg);
    padding: 0 1.4em;
    font-size: var(--btn-xxlg-size);
    font-weight: 600;
  }
  .btn-xxlg > .ic {
    width: var(--ic-lg);
    height: var(--ic-lg);
    margin-right: 8px;
  }
  .btn-xxlg > span {
    line-height: var(--line-height-sm);
  }
  .btn-xxlg > span > em {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-500);
  }
  .btn-primary {
    background-color: var(--mint-900);
    color: #fff;
  }
  .btn-secondary {
    background-color: var(--midnight-900);
    color: #fff;
  }
  .btn-tertiary {
    background-color: #fff;
    border: 1px solid var(--midnight-900);
  }
  button:disabled {
    opacity: 0.4;
  }
  @media (hover: hover) and (pointer: fine) {
    .btn-primary:not(:disabled):hover {
      background-color: var(--mint-700);
    }
    .btn-secondary:not(:disabled):hover {
      background-color: var(--gray-700);
    }
    .btn-tertiary:not(:disabled):hover {
      background-color: var(--gray-50);
    }
  }
  i.ic {
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  i.ic.download {
    background-image: url(${icDownload});
  }
  i.ic.write {
    background-image: url(${icWrite});
  }
  i.ic.talk {
    background-image: url(${icTalk});
  }
  i.ic.process-1 {
    background-image: url(${icProcess01});
  }
  i.ic.process-2 {
    background-image: url(${icProcess02});
  }
  i.ic.process-3 {
    background-image: url(${icProcess03});
  }
  i.ic.process-4 {
    background-image: url(${icProcess04});
  }
  i.ic.process-5 {
    background-image: url(../images/ic_process05.svg);
  }
  i.ic.process-6 {
    background-image: url(../images/ic_process06.svg);
  }
  i.ic.process-7 {
    background-image: url(../images/ic_process07.svg);
  }
  i.ic.service-1 {
    background-image: url(../images/ic_service01.svg);
  }
  i.ic.service-2 {
    background-image: url(../images/ic_service02.svg);
  }
  i.ic.service-3 {
    background-image: url(../images/ic_service03.svg);
  }
  i.ic.service-4 {
    background-image: url(../images/ic_service04.svg);
  }
  i.ic.service-5 {
    background-image: url(../images/ic_service05.svg);
  }
  i.ic.service-6 {
    background-image: url(../images/ic_service06.svg);
  }
  i.ic.service-7 {
    background-image: url(../images/ic_service07.svg);
  }
  i.ic.service-8 {
    background-image: url(../images/ic_service08.svg);
  }
  i.ic.package-1 {
    background-image: url(../images/img_package01.svg);
  }
  i.ic.package-2 {
    background-image: url(../images/img_package02.svg);
  }
  i.ic.package-3 {
    background-image: url(../images/img_package03.svg);
  }
  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='password'],
  select,
  textarea {
    appearance: none;
    padding: 0 var(--space-sm2);
    height: var(--input-md);
    border: 1px solid var(--gray-200);
    border-radius: 0;
  }
  input[type='text']:focus,
  input[type='email']:focus,
  input[type='tel']:focus,
  input[type='password']:focus,
  select:focus,
  textarea:focus {
    border: 1px solid var(--midnight-900);
  }
  select {
    padding-right: var(--input-md);
    background: url(${icArrow}) no-repeat right calc(var(--space-sm2) * 0.6) top
      50%;
    background-size: auto calc(var(--input-md) * 0.42);
  }
  textarea {
    display: block;
    width: 100%;
    height: var(--textarea-md);
    padding: var(--space-sm2);
    line-height: var(--line-height-lg);
    resize: none;
  }
  .input-wrap {
    position: relative;
    --clear-space: 16px;
  }
  @media (max-width: 743px) {
    .input-wrap {
      --clear-space: 8px;
    }
  }
  .input-wrap input {
    width: 100%;
    padding-right: calc(var(--ic-sm) + var(--clear-space));
  }
  .input-wrap input + .clear {
    position: absolute;
    right: 1px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--ic-sm) + var(--clear-space));
    height: calc(100% - 2px);
    font-size: 0;
  }
  .input-wrap input + .clear:before {
    content: '';
    width: var(--ic-sm);
    height: var(--ic-sm);
    background: url(../images/ic_clear.svg) no-repeat;
    background-size: auto 100%;
  }
  .input-wrap input:placeholder-shown + .clear {
    display: none;
  }
  label.checkbox,
  label.radio {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    font-size: var(--input-md-fsize);
    cursor: pointer;
  }
  label.checkbox > input,
  label.radio > input {
    position: absolute;
    left: -100%;
  }
  label.checkbox > i,
  label.radio > i {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    height: var(--input-md);
    overflow: hidden;
  }
  label.checkbox > i:before,
  label.radio > i:before {
    content: '';
    width: calc(var(--input-md-fsize) + 4px);
    height: calc(var(--input-md-fsize) + 4px);
    background-color: #fff;
    border: 1px solid var(--gray-300);
  }
  label.radio > i:before {
    border-radius: calc(var(--input-md-fsize) + 4px);
  }
  label.checkbox > input:checked + i:before,
  label.radio > input:checked + i:before {
    border-color: var(--midnight-900);
  }
  label.checkbox > input:checked + i:before {
    background-image: url(../images/ic_check.svg);
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  label.radio > input:checked + i:before {
    background: radial-gradient(circle at 50%, var(--mint-900) 40%, #fff 41%);
  }
  label.checkbox > i > em,
  label.radio > i > em {
    position: relative;
    margin-left: 8px;
    line-height: var(--input-md);
  }
  .check-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  .check-group > label:not(:last-of-type) {
    margin-right: var(--space-md);
  }
  .check-group.radio-summary > input {
    position: absolute;
    left: -100%;
  }
  .check-group.radio-summary .summary {
    display: none;
    min-width: 100%;
    margin-top: -1px;
    padding: var(--space-sm2);
    font-size: var(--input-md-fsize);
    line-height: var(--line-height-md);
    background-color: #fff;
    border: 1px solid var(--midnight-900);
  }
  .check-group.radio-summary > label .summary {
    margin-bottom: calc(var(--input-md) * 0.25);
  }
  .check-group.radio-summary
    > input:nth-of-type(1):checked
    ~ label:nth-of-type(1)
    > i:before,
  .check-group.radio-summary
    > input:nth-of-type(2):checked
    ~ label:nth-of-type(2)
    > i:before,
  .check-group.radio-summary
    > input:nth-of-type(3):checked
    ~ label:nth-of-type(3)
    > i:before,
  .check-group.radio-summary
    > input:nth-of-type(4):checked
    ~ label:nth-of-type(4)
    > i:before {
    background: radial-gradient(circle at 50%, var(--mint-900) 40%, #fff 41%);
    border-color: var(--midnight-900);
  }
  .check-group.radio-summary
    > input:nth-of-type(1):checked
    ~ label:nth-of-type(1)
    > i:not(:only-child),
  .check-group.radio-summary
    > input:nth-of-type(2):checked
    ~ label:nth-of-type(2)
    > i:not(:only-child),
  .check-group.radio-summary
    > input:nth-of-type(3):checked
    ~ label:nth-of-type(3)
    > i:not(:only-child),
  .check-group.radio-summary
    > input:nth-of-type(4):checked
    ~ label:nth-of-type(4)
    > i:not(:only-child) {
    padding-bottom: 8px;
  }
  .check-group.radio-summary
    > input:nth-of-type(1):checked
    ~ label:nth-of-type(1)
    > i:not(:only-child)
    > em:after,
  .check-group.radio-summary
    > input:nth-of-type(2):checked
    ~ label:nth-of-type(2)
    > i:not(:only-child)
    > em::after,
  .check-group.radio-summary
    > input:nth-of-type(3):checked
    ~ label:nth-of-type(3)
    > i:not(:only-child)
    > em::after,
  .check-group.radio-summary
    > input:nth-of-type(4):checked
    ~ label:nth-of-type(4)
    > i:not(:only-child)
    > em::after {
    content: '';
    position: absolute;
    top: calc(100% - 2px);
    left: 50%;
    width: 12px;
    height: 12px;
    background: #fff;
    border: 1px solid var(--midnight-900);
    border-width: 1px 0 0 1px;
    transform-origin: 0 0;
    transform: rotate(45deg);
  }
  .check-group.radio-summary
    > input:nth-of-type(1):checked
    ~ label:nth-of-type(1)
    > .summary:not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(1):checked
    ~ .summary:nth-of-type(1):not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(2):checked
    ~ label:nth-of-type(2)
    > .summary:not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(2):checked
    ~ .summary:nth-of-type(2):not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(3):checked
    ~ label:nth-of-type(3)
    > .summary:not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(3):checked
    ~ .summary:nth-of-type(3):not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(4):checked
    ~ label:nth-of-type(4)
    > .summary:not(:empty),
  .check-group.radio-summary
    > input:nth-of-type(4):checked
    ~ .summary:nth-of-type(4):not(:empty) {
    display: block;
  }
  @media (max-width: 743px) {
    .check-group.radio-summary {
      flex-direction: column;
      align-items: flex-start;
    }
    .check-group.radio-summary > label {
      margin-right: 0;
    }
    .check-group.radio-summary > label > i {
      height: calc(var(--input-md) - 8px);
    }
    .check-group.radio-summary > label > i > em {
      line-height: calc(var(--input-md) - 8px);
    }
    .check-group.radio-summary > .summary {
      display: none !important;
    }
  }
  @media (min-width: 744px) {
    .check-group.radio-summary > label > .summary {
      display: none !important;
    }
  }
  .dropdown-wrapper {
    position: relative;
    display: inline-block;
  }
  .dropdown-wrapper [data-ui-target] {
    z-index: 1000;
    position: absolute;
    min-width: 100%;
  }
  .dropdown-wrapper:not(.show):not(.ing) > [data-ui-target] {
    display: none;
  }
  .dropdown-wrapper.ing > [data-ui-target] {
    overflow: hidden;
    height: 0;
    transition: height 0.4s var(--cubic-bezier-primary);
  }

  /* Header ************************************************************ */
  header {
    z-index: 100;
    position: sticky;
    top: 0;
    padding: 0 var(--side-padding);
    background-color: #fff;
  }
  header > .inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: var(--max-width);
    height: var(--header-height);
    margin: 0 auto;
  }
  .is-pinned + header {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }
  header .logo {
    font-size: 0;
    background-repeat: no-repeat;
    background-position: 0 50%;
    background-size: 100% auto;
  }
  @media (max-width: 1023px) {
    header .logo {
      width: 120px;
      height: 40px;
      background-image: url(${logoWibleSm});
    }
    header nav {
      position: fixed;
      top: var(--header-height);
      bottom: 0;
      left: -100%;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 0;
      padding: 0 var(--side-padding);
      background-color: #fff;
      transition: margin-left 0.8s var(--cubic-bezier-primary);
    }
    .nav-opened header nav {
      margin-left: 100%;
    }
    header nav > ul {
      margin-top: 80px;
    }
    header nav > ul > li > a {
      display: block;
      margin-bottom: 8px;
      text-align: center;
      font-size: 24px;
      line-height: 56px;
      font-weight: 600;
      color: #000;
    }
    header nav > ul > li.active > a {
      color: var(--mint-900);
    }
    header .util {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      margin-right: -8px;
    }
    header .util button {
      width: 40px;
      height: 40px;
      font-size: 0;
    }
    header button.nav {
      position: relative;
      display: inline-block;
      background-image: linear-gradient(
        transparent 9px,
        #000 9px,
        #000 11px,
        transparent 11px
      );
      background-repeat: no-repeat;
      background-position: 0;
      border: 10px solid transparent;
      transition: background-position 0.4s var(--cubic-bezier-primary);
    }
    .nav-opened header button.nav {
      background-position: 30px 0;
    }
    header button.nav:before,
    header button.nav:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      transform-origin: 50%;
      transition: transform 0.6s var(--cubic-bezier-primary);
    }
    header button.nav:before {
      top: 3px;
    }
    header button.nav:after {
      bottom: 3px;
    }
    .nav-opened header button.nav:before {
      transform: translateY(6px) rotate(-45deg) scaleX(1.2);
    }
    .nav-opened header button.nav:after {
      transform: translateY(-6px) rotate(45deg) scaleX(1.2);
    }
    @media (max-height: 463px) {
      header nav {
        justify-content: center;
      }
      header nav > ul {
        margin-top: 0;
      }
      header nav > ul > li > a {
        margin-bottom: 0;
      }
    }
  }
  @media (min-width: 1024px) {
    header .logo {
      width: 160px;
      height: 100%;
      background-image: url(${logoWibleLg});
    }
    header nav {
      flex: 1;
      margin-right: -20px;
    }
    header nav > ul {
      display: flex;
      justify-content: flex-end;
    }
    header nav > ul > li {
      margin: 0 16px;
    }
    header nav > ul > li > a {
      position: relative;
      display: block;
      padding: 0 4px;
      font-size: 18px;
      line-height: var(--header-height);
      font-weight: 600;
      color: #000;
    }
    header nav > ul > li > a:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 4px;
      background-color: var(--mint-900);
      opacity: 0.4;
      transition: width 0.4s var(--cubic-bezier-primary);
    }
    header nav > ul > li.active > a:after {
      width: 100%;
      opacity: 1;
    }
    @media (hover: hover) and (pointer: fine) {
      header nav > ul > li > a:hover:after {
        width: 100%;
      }
    }
    header .util {
      display: none;
    }
  }

  /* Container ************************************************************ */
  .container {
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    overflow: hidden;
    padding: 0 var(--side-padding) var(--bottom-padding);
  }
  .container .content {
    max-width: 1240px;
    margin: 0 auto;
  }
  .container .content.reduced {
    max-width: 816px;
  }
  .quick-util {
    z-index: 99;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    pointer-events: none;
  }
  .quick-util > .inner {
    position: absolute;
    right: 32px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    --size: 56px;
    width: var(--size);
    transform: scale3d(1);
    transform-origin: 100% 100%;
  }
  .quick-util > .inner > button {
    position: relative;
    pointer-events: all;
    width: var(--size);
    height: var(--size);
    margin-top: 8px;
    font-size: 0;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 28px;
    border-radius: 50%;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    opacity: 1;
    transition-property: width, height, margin, background-position, opacity;
    transition-duration: 0.4s;
    transition-timing-function: var(--cubic-bezier-primary);
  }
  .quick-util > .inner > button:active {
    background-position: 50% 60%;
    transition: all 0s;
  }
  .quick-util > .inner > button.share {
    background-image: url(../images/ic_share.svg);
  }
  .quick-util > .inner > button.top {
    background-image: url(${icTop});
  }
  body:not(.main) .quick-util:not(.active) > .inner > button.top,
  body.main .container[data-ui-current='0'] ~ .quick-util > .inner > button.top,
  body.main
    .container:not([data-ui-current])
    ~ .quick-util
    > .inner
    > button.top {
    width: 0;
    height: 0;
    margin: 0;
    background-position: 50% 100%;
    opacity: 0;
    transition-property: width, height, margin, background-position, opacity;
    transition-duration: 0.4s;
    transition-timing-function: var(--cubic-bezier-primary);
  }
  @media (max-width: 743px) {
    .quick-util > .inner {
      right: 16px;
      bottom: 24px;
      --size: 40px;
    }
    .quick-util > .inner > button {
      background-size: 20px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .quick-util > .inner {
      right: 24px;
      bottom: 32px;
      --size: 48px;
    }
    .quick-util > .inner > button {
      background-size: 24px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .quick-util > .inner {
      right: 24px;
      bottom: 32px;
    }
  }

  /* Footer ************************************************************ */
  footer {
    position: relative;
    padding: 0 var(--side-padding);
    color: var(--gray-400);
    background-color: var(--midnight-900);
  }
  @media (max-width: 743px) {
    footer {
      --font-md: 12px;
      --font-lg: 14px;
      --line-height: 22px;
    }
  }
  @media (min-width: 744px) {
    footer {
      --font-md: 14px;
      --font-lg: 16px;
      --line-height: 24px;
    }
  }
  footer > .inner {
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width);
    height: var(--footer-height);
    margin: 0 auto;
    font-size: var(--font-md);
    line-height: var(--line-height);
  }
  footer .util {
    display: flex;
  }
  footer .util button {
    font-size: var(--font-lg);
    color: #fff;
  }
  @media (hover: hover) and (pointer: fine) {
    footer .util button:hover {
      text-decoration: underline;
    }
  }
  footer address span {
    display: inline-flex;
  }
  footer address span > em {
    margin-left: 12px;
  }
  footer address span > i,
  footer address span > a {
    margin-left: 4px;
  }
  footer address span > a {
    color: inherit;
    text-decoration: underline;
  }
  footer .copyright:before {
    content: '';
    display: block;
    background-image: url(${logoKia});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  @media (max-width: 743px) {
    footer > .inner {
      flex-direction: column;
      padding-top: 18px;
      padding-bottom: 29px;
    }
    footer .util button {
      margin-right: 16px;
      line-height: 48px;
    }
    footer address span {
      margin-right: 12px;
    }
    footer address br:nth-of-type(5) {
      display: none;
    }
    footer .copyright:before {
      height: 32px;
      margin-bottom: 1px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    footer > .inner {
      flex-direction: column;
      padding-top: 34px;
      padding-bottom: 44px;
    }
    footer .util button {
      margin-right: 24px;
      line-height: 52px;
    }
    footer address span {
      margin-right: 12px;
    }
    footer address br:nth-of-type(1),
    footer address br:nth-of-type(3),
    footer address br:nth-of-type(5) {
      display: none;
    }
    footer .copyright:before {
      height: 48px;
    }
  }
  @media (min-width: 1024px) {
    footer > .inner {
      flex-direction: row-reverse;
      align-items: center;
    }
    footer .util {
      justify-content: flex-end;
      margin-bottom: 10px;
    }
    footer .util button {
      margin-left: 24px;
      line-height: var(--line-height);
    }
    footer address {
      text-align: right;
    }
    footer address span {
      margin-left: 12px;
    }
    footer address br:nth-of-type(1),
    footer address br:nth-of-type(2),
    footer address br:nth-of-type(3),
    footer address br:nth-of-type(4),
    footer address br:nth-of-type(5) {
      display: none;
    }
    footer .copyright:before {
      height: 56px;
      margin-bottom: 2px;
    }
  }

  /* Content ************************************************************ */
  .content > h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: var(--h1-height);
    font-size: var(--h1-fsize);
    line-height: var(--line-height-sm);
  }
  .content > h1 > em {
    margin-top: 0.4em;
    text-align: center;
    font-size: var(--h1-fsize-sm);
    line-height: var(--line-height-md);
    font-weight: 400;
    word-break: keep-all;
  }

  /* Service Intro */
  .service-intro > .head {
    display: flex;
  }
  .service-intro > .head > i {
    width: 360px;
    height: 240px;
    margin: 0 24px 0 0;
  }
  .service-intro > .head > .info {
    flex: 1;
  }
  .service-intro .info-1 {
    margin-top: 16px;
  }
  .service-intro h2 {
    margin-bottom: 8px;
    font-size: 32px;
    line-height: var(--line-height-sm);
  }
  .service-intro h2 > em {
    color: var(--mint-900);
  }
  .service-intro h3 {
    display: flex;
    align-items: center;
    margin: 16px 0 8px;
    font-size: 18px;
    line-height: var(--line-height-sm);
  }
  .service-intro h3:before {
    content: '';
    width: 24px;
    height: 24px;
    margin-right: 4px;
    background: url(../images/ic_required.svg) no-repeat;
    background-size: auto 100%;
  }
  .service-intro p,
  .service-intro li {
    font-size: 16px;
    line-height: var(--line-height-md);
    color: var(--gray-700);
    word-break: keep-all;
  }
  .service-intro li {
    position: relative;
    padding-left: 14px;
    letter-spacing: -0.4px;
  }
  .service-intro li:not(:first-child) {
    margin-top: 2px;
  }
  .service-intro li:before {
    content: '';
    position: absolute;
    left: 4px;
    top: calc(1em * var(--line-height-sm) / 2 - 2px);
    width: 4px;
    height: 4px;
    background-color: var(--gray-700);
    border-radius: 50%;
  }
  @media (max-width: 1023px) {
    .service-intro > .head {
      flex-direction: column;
      align-items: center;
    }
    .service-intro > .head > .info {
      min-width: 100%;
    }
    .service-intro .info-1 {
      text-align: center;
    }
  }
  @media (max-width: 743px) {
    .service-intro > .head > i {
      width: 100%;
      height: 208px;
      margin: 0 0 8px 0;
      background-position-x: 50%;
    }
    .service-intro > .head p,
    .service-intro > .head li {
      font-size: 14px;
    }
    .service-intro .info-1 {
      margin-top: 8px;
    }
    .service-intro h2 {
      margin-bottom: 4px;
      font-size: 24px;
    }
    .service-intro h3 {
      margin: 24px 0 8px;
      font-size: 16px;
    }
    .service-intro p br {
      display: none;
    }
    .service-intro > .head li {
      padding-left: 12px;
    }
    .service-intro > .head li:before {
      width: 3px;
      height: 3px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .service-intro > .head > i {
      margin: 0 0 16px 0;
    }
    .service-intro h3 {
      margin: 32px 0 8px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
  }
  @media (min-width: 1440px) {
    .service-intro > .head > i {
      width: 480px;
      height: 320px;
      margin: 0 32px 0 0;
    }
    .service-intro .info-1 {
      margin-top: 24px;
    }
    .service-intro h2 {
      margin-bottom: 12px;
      font-size: 40px;
    }
    .service-intro h3 {
      margin: 24px 0 12px;
      font-size: 20px;
    }
    .service-intro h3:before {
      width: 28px;
      height: 28px;
    }
    .service-intro p,
    .service-intro li {
      font-size: 18px;
    }
    .service-intro li:not(:first-child) {
      margin-top: 4px;
    }
  }
  .service-intro > .summary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
    margin: var(--px-lg) 0;
  }
  .service-intro > .summary > .box {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    min-height: 200px;
    padding: 24px;
    background-color: var(--gray-10);
    border-radius: 16px;
  }
  .service-intro > .summary > .box > h4 {
    grid-column: 1 / 3;
    margin-bottom: 8px;
    font-size: var(--heading-box);
    line-height: var(--line-height-sm);
  }
  .service-intro > .summary > .box > i {
    grid-column: 2 / 3;
    align-self: end;
    width: 80px;
    height: 80px;
    margin: 0 -8px -8px 0;
  }
  @media (max-width: 743px) {
    .service-intro > .summary {
      grid-template-columns: 1fr;
      grid-gap: 16px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .service-intro > .summary {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1440px) {
    .service-intro > .summary {
      grid-gap: 32px;
    }
    .service-intro > .summary > .box {
      min-height: 228px;
      padding: 32px;
    }
    .service-intro > .summary > .box > h4 {
      margin-bottom: 12px;
    }
    .service-intro > .summary > .box > i {
      width: 96px;
      height: 96px;
    }
  }

  /* Option Info */
  .option-info {
    margin: 48px -9999px;
    padding: 96px 9999px;
    background-color: var(--gray-10);
  }
  .option-info h2 {
    display: inline-block;
    width: 100%;
    margin: 96px 0 48px;
    text-align: center;
    font-size: 40px;
    line-height: var(--line-height-sm);
    word-break: keep-all;
  }
  .option-info h2:first-child {
    margin-top: 0;
  }
  .option-info h2 > em {
    background: linear-gradient(
      to top,
      transparent 4px,
      var(--mint-900) 4px,
      var(--mint-900) 12px,
      transparent 12px
    );
  }
  .option-info h2 > span {
    display: block;
    margin-top: 12px;
    font-size: 18px;
    font-weight: 400;
    word-break: keep-all;
  }
  .option-info h2 > span > br {
    display: none;
  }
  .option-info > .summary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
  }
  .option-info > .summary > .box {
    padding: 32px;
    background-color: #fff;
    border: 2px solid var(--mint-900);
    border-radius: 16px;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }
  .option-info > .summary > .box > h4 {
    margin-bottom: 4px;
    font-size: 24px;
    line-height: var(--line-height-sm);
  }
  .option-info > .summary > .box > h4 > em {
    color: var(--mint-900);
  }
  .option-info > .summary > .box > p {
    font-size: 18px;
    line-height: var(--line-height-sm);
    color: var(--gray-700);
    word-break: keep-all;
  }
  .option-info > .summary > .box > p.strong {
    margin: 12px 0;
    font-size: 18px;
    font-weight: 600;
  }
  .option-info > .summary > .box > p.strong > em {
    background: linear-gradient(
      to top,
      transparent 2px,
      var(--mint-900) 2px,
      var(--mint-900) 6px,
      transparent 6px
    );
  }
  .option-info > .summary > .box li {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    line-height: var(--line-height-sm);
  }
  .option-info > .summary > .box li:not(:first-child) {
    margin-top: 4px;
  }
  .option-info > .summary > .box li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: url(../images/ic_check_bk.svg) no-repeat;
    background-size: auto 100%;
  }
  .option-info > .personal {
    display: flex;
    justify-content: center;
  }
  .option-info > .personal > .box {
    position: relative;
    display: flex;
    align-items: center;
    width: 320px;
  }
  .option-info > .personal > .box:not(:first-child) {
    margin-left: 65px;
  }
  .option-info > .personal > .box:not(:first-child):before {
    content: '';
    position: absolute;
    left: -33px;
    width: 1px;
    height: 64px;
    background-color: var(--gray-200);
  }
  .option-info > .personal > .box > i {
    width: 96px;
    height: 96px;
    margin-right: 24px;
  }
  .option-info > .personal > .box > i.day {
    background-image: url(../images/ic_service_1day.svg);
  }
  .option-info > .personal > .box > i.allday {
    background-image: url(../images/ic_service_allday.svg);
  }
  .option-info > .personal > .box > div {
    flex: 1;
  }
  .option-info > .personal > .box h4 {
    margin-bottom: 4px;
    font-size: 24px;
    line-height: var(--line-height-sm);
  }
  .option-info > .personal > .box p {
    font-size: 18px;
    line-height: var(--line-height-sm);
    white-space: nowrap;
  }
  .option-info > .personal > .box p > br {
    display: none;
  }
  @media (max-width: 743px) {
    .option-info {
      margin-top: 24px;
      margin-bottom: 24px;
      padding-top: 48px;
      padding-bottom: 48px;
    }
    .option-info h2 {
      margin: 48px 0 24px;
      font-size: 18px;
    }
    .option-info h2 > em {
      background: linear-gradient(
        to top,
        transparent 2px,
        var(--mint-900) 2px,
        var(--mint-900) 6px,
        transparent 6px
      );
    }
    .option-info h2 > span {
      margin-top: 8px;
      font-size: 14px;
    }
    .option-info h2 > span > br {
      display: inline;
    }
    .option-info > .summary {
      grid-template-columns: 1fr;
      grid-gap: 24px;
      justify-items: center;
    }
    .option-info > .summary > .box {
      width: 100%;
      max-width: 372px;
    }
    .option-info > .summary > .box > h4 {
      margin-bottom: 8px;
    }
    .option-info > .summary > .box > p {
      font-size: 14px;
    }
    .option-info > .summary > .box > p.strong {
      margin: 12px 0 16px;
    }
    .option-info > .summary > .box li {
      font-size: 14px;
    }
    .option-info > .personal > .box {
      flex-direction: column;
      width: 100%;
      max-width: 148px;
      text-align: center;
    }
    .option-info > .personal > .box:not(:first-child) {
      margin-left: 21px;
    }
    .option-info > .personal > .box:not(:first-child):before {
      left: -11px;
      top: 50%;
      height: 48px;
      margin-top: -24px;
    }
    .option-info > .personal > .box > i {
      width: 64px;
      height: 64px;
      margin-right: 0;
      margin-bottom: 8px;
    }
    .option-info > .personal > .box h4 {
      font-size: 16px;
    }
    .option-info > .personal > .box p {
      font-size: 14px;
    }
    .option-info > .personal > .box p > br {
      display: inline;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .option-info {
      margin-top: 32px;
      margin-bottom: 32px;
      padding-top: 64px;
      padding-bottom: 64px;
    }
    .option-info h2 {
      margin: 64px 0 32px;
      font-size: 24px;
    }
    .option-info h2 > em {
      background: linear-gradient(
        to top,
        transparent 3px,
        var(--mint-900) 3px,
        var(--mint-900) 9px,
        transparent 9px
      );
    }
    .option-info h2 > span {
      margin-top: 8px;
      font-size: 16px;
    }
    .option-info > .summary {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .option-info > .summary > .box {
      width: 100%;
      max-width: 372px;
      padding: 40px;
    }
    .option-info > .summary > .box > h4 {
      margin-bottom: 8px;
      font-size: 28px;
    }
    .option-info > .personal > .box {
      width: 280px;
    }
    .option-info > .personal > .box:not(:first-child) {
      margin-left: 49px;
    }
    .option-info > .personal > .box:not(:first-child):before {
      left: -25px;
      height: 48px;
    }
    .option-info > .personal > .box > i {
      width: 64px;
      height: 64px;
      margin-right: 16px;
    }
    .option-info > .personal > .box h4 {
      font-size: 20px;
    }
    .option-info > .personal > .box p {
      font-size: 16px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .option-info {
      margin-top: 40px;
      margin-bottom: 40px;
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .option-info h2 {
      margin: 80px 0 40px;
      font-size: 32px;
      line-height: 1.25;
    }
    .option-info h2 > span {
      margin-top: 8px;
      font-size: 16px;
    }
    .option-info > .summary {
      grid-gap: 24px;
    }
    .option-info > .summary > .box {
      padding: 24px;
    }
    .option-info > .summary > .box > p {
      font-size: 16px;
    }
    .option-info > .personal > .box {
      width: 280px;
    }
    .option-info > .personal > .box:not(:first-child) {
      margin-left: 49px;
    }
    .option-info > .personal > .box:not(:first-child):before {
      left: -25px;
      height: 56px;
    }
    .option-info > .personal > .box > i {
      width: 80px;
      height: 80px;
      margin-right: 16px;
    }
    .option-info > .personal > .box h4 {
      font-size: 20px;
    }
    .option-info > .personal > .box p {
      font-size: 16px;
    }
  }
  @media (min-width: 1440px) {
    .option-info h2 {
      line-height: 1.2;
    }
    .option-info > .summary > .box > h4 {
      margin-bottom: 8px;
      font-size: 32px;
    }
    .option-info > .summary > .box > p.strong {
      margin: 16px 0;
      font-size: 20px;
    }
    .option-info > .summary > .box > p.strong > em {
      background: linear-gradient(
        to top,
        transparent 2px,
        var(--mint-900) 2px,
        var(--mint-900) 8px,
        transparent 8px
      );
    }
    .option-info > .summary > .box li {
      padding-left: 28px;
      font-size: 18px;
    }
    .option-info > .summary > .box li:before {
      top: calc((1em * var(--line-height-sm) - 24px) / 2);
      width: 24px;
      height: 24px;
    }
  }

  /* Promotion Info */
  .promotion-info {
    display: flex;
    margin-top: 96px;
    padding: 0 96px;
    color: #fff;
    background-color: var(--mint-900);
    border-radius: 16px;
    word-break: keep-all;
  }
  .promotion-info > i {
    width: 240px;
    min-height: calc(100% + 40px);
    margin: -40px 32px 0 0;
    background: url(../images/img_promotion.svg) no-repeat;
    background-size: 100% auto;
  }
  .promotion-info > .inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 160px;
    padding: 28px 0;
  }
  .promotion-info h4 {
    margin-bottom: 8px;
    font-size: 32px;
    line-height: 1.25;
  }
  .promotion-info p {
    font-size: 20px;
    line-height: var(--line-height-sm);
    font-weight: 600;
  }
  @media (max-width: 743px) {
    .promotion-info {
      flex-direction: column;
      margin-top: 64px;
      padding: 24px;
    }
    .promotion-info > i {
      width: 120px;
      height: 100px;
      min-height: auto;
      margin: -56px 0 16px 0;
    }
    .promotion-info > .inner {
      min-height: auto;
      padding: 0;
    }
    .promotion-info h4 {
      margin-bottom: 4px;
      font-size: 20px;
    }
    .promotion-info p {
      font-size: 14px;
    }
    .promotion-info p br {
      display: none;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .promotion-info {
      margin-top: 64px;
      padding: 0 16px;
    }
    .promotion-info > i {
      width: 180px;
      min-height: calc(100% + 30px);
      margin: -30px 24px 0 0;
    }
    .promotion-info > .inner {
      min-height: 112px;
      padding: 20px 0;
    }
    .promotion-info h4 {
      font-size: 20px;
    }
    .promotion-info p {
      font-size: 14px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .promotion-info {
      margin-top: 80px;
      padding: 0 48px;
    }
    .promotion-info > i {
      width: 210px;
      min-height: calc(100% + 35px);
      margin: -35px 24px 0 0;
    }
    .promotion-info > .inner {
      min-height: 130px;
      padding: 24px 0;
    }
    .promotion-info h4 {
      font-size: 24px;
    }
    .promotion-info p {
      font-size: 16px;
    }
  }

  /* Inquiry Info */
  .inquiry-info {
    display: flex;
    margin: 0 calc(-1 * var(--space-md) / 2);
  }
  .inquiry-info > a {
    flex: 1;
    margin: 0 calc(var(--space-md) / 2);
  }
  .inquiry-info > a:not(:first-child) {
  }
  @media (max-width: 743px) {
    .inquiry-info {
      flex-direction: column;
    }
    .inquiry-info > a {
      justify-content: flex-start;
    }
    .inquiry-info > a:not(:first-child) {
      margin-top: 12px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .inquiry-info {
      flex-wrap: wrap;
    }
    .inquiry-info > a:last-child {
      min-width: calc(100% - var(--space-md));
      margin-top: var(--space-md);
    }
  }

  /* Process Info */
  .process-info {
    display: flex;
    margin: 0 calc(-1 * var(--space-md) / 2);
    counter-reset: li;
    line-height: var(--line-height-sm);
  }
  .process-info > li {
    flex: 1;
    margin: 0 calc(var(--space-md) / 2);
    padding: 0 24px;
  }
  .reduced .process-info {
    margin: 0 -12px;
  }
  .reduced .process-info > li {
    margin: 0 12px;
    padding: 0 8px;
  }
  .process-info > li > .ic {
    display: block;
    width: var(--ic-xlg);
    height: var(--ic-xlg);
    margin-bottom: 8px;
  }
  .process-info > li > span {
    position: relative;
    display: block;
  }
  .process-info > li:not(:first-child) > span:before {
    content: '';
    position: absolute;
    left: -36px;
    top: 0;
    width: 24px;
    height: 24px;
    background: url(${icStepArrow}) no-repeat;
    background-size: auto 100%;
  }
  .process-info > li > span > strong {
    display: block;
    font-size: 18px;
  }
  .process-info > li > span > strong:before {
    content: counter(li) '. ';
    counter-increment: li;
  }
  .process-info > li > span > em {
    display: block;
    margin-top: 8px;
    font-size: 16px;
    color: var(--gray-700);
  }
  @media (max-width: 1023px) {
    .process-info {
      flex-direction: column;
    }
    .process-info > li {
      display: flex;
      padding: 0 !important;
    }
    .process-info > li:not(:first-child) > span:before {
      display: none;
    }
  }
  @media (max-width: 743px) {
    .process-info > li:not(:first-child) {
      margin-top: 20px;
    }
    .process-info > li > .ic {
      margin: 0 12px 0 0;
    }
    .process-info > li > span > strong {
      font-size: 16px;
    }
    .process-info > li > span > em {
      margin-top: 4px;
      font-size: 14px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .process-info > li:not(:first-child) {
      margin-top: 24px;
    }
    .process-info > li > .ic {
      margin: 0 16px 0 0;
    }
  }

  /* App Info */
  .app-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    margin-top: 48px;
    padding: 32px;
    border-radius: 16px;
    background-color: var(--gray-10);
  }
  .app-info > h2 {
    width: 100%;
    margin-bottom: 24px;
    text-align: center;
    font-size: 24px;
    line-height: var(--line-height-sm);
  }
  .app-info > h2 > em {
    color: var(--mint-900);
  }
  .app-info > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 296px;
    height: 60px;
    margin: 0 8px;
    font-size: 16px;
    font-weight: 600;
    background: #fff;
    border-radius: 8px;
  }
  .app-info > a:before {
    content: '';
    width: 28px;
    height: 28px;
    margin-right: 4px;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  .app-info > a.gp:before {
    background-image: url(${logoGoogleplay});
  }
  .app-info > a.as:before {
    background-image: url(${logoAppstore});
  }
  @media (max-width: 743px) {
    .app-info {
      flex-direction: column;
      align-items: center;
      padding: 24px;
    }
    .app-info > h2 {
      margin-bottom: 4px;
      font-size: 16px;
    }
    .app-info > a {
      width: 100%;
      max-width: 264px;
      height: 48px;
      margin: 12px 0 0;
      font-size: 14px;
    }
    .app-info > a:before {
      width: 24px;
      height: 24px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .app-info > h2 {
      margin-bottom: 24px;
      font-size: 20px;
    }
    .app-info > a {
      width: 264px;
      height: 56px;
      font-size: 14px;
    }
    .app-info > a:before {
      width: 24px;
      height: 24px;
    }
  }
  @media (min-width: 1440px) {
    .app-info {
      margin-top: 64px;
      padding: 40px;
    }
    .app-info > h2 {
      margin-bottom: 32px;
      font-size: 32px;
    }
    .app-info > a {
      width: 392px;
      height: 64px;
      margin: 0 16px;
      font-size: 18px;
    }
    .app-info > a:before {
      width: 32px;
      height: 32px;
    }
  }

  /* Tabs */
  .tabs {
    display: flex;
    margin-bottom: var(--px-lg);
  }
  .tabs > li {
    flex: 1;
    min-height: var(--btn-xlg2);
    font-size: var(--tab-fsize);
    background-color: #fff;
    border: 1px solid var(--midnight-100);
  }
  .tabs > li:not(:first-child) {
    margin-left: -1px;
  }
  .tabs > li.active {
    position: relative;
    font-weight: 600;
    color: #fff;
    background-color: var(--midnight-900);
    border-color: var(--midnight-900);
  }
  .tabs > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 8px;
    text-align: center;
    line-height: 1.1;
    color: inherit;
  }
  @media (max-width: 743px) {
    .tabs > li > a > span > i {
      display: block;
    }
  }

  /* Search */
  .search {
    display: flex;
    justify-content: center;
    margin-bottom: var(--px-md);
    padding: var(--px-md);
    background-color: var(--gray-10);
  }
  @media (max-width: 743px) {
    .search {
      padding: 0;
    }
  }
  .search .input-wrap {
    width: var(--search-bar-width);
  }
  .search .input-wrap input {
    height: var(--btn-xlg2);
    padding-left: 16px;
    padding-right: calc(
      var(--ic-sm) + var(--clear-space) + var(--btn-xlg2) - 2px
    );
    font-size: 1rem;
    border-color: var(--midnight-900);
  }
  .search .input-wrap input + .clear {
    right: calc(1px + var(--btn-xlg2) - 2px);
  }
  .search .input-wrap .submit {
    position: absolute;
    right: 1px;
    top: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--btn-xlg2) - 2px);
    height: calc(100% - 2px);
    font-size: 0;
  }
  .search .input-wrap .submit:before {
    content: '';
    width: var(--ic-md);
    height: var(--ic-md);
    background: url(${icSearch}) no-repeat;
    background-size: auto 100%;
  }
  .search-info {
    display: flex;
    justify-content: space-between;
    margin: var(--px-md) 0;
  }
  .search-info > .heading-info {
    margin: 0;
  }
  .search-info > .init {
    display: flex;
    align-items: center;
    padding: 0 4px;
    font-size: 16px;
  }
  .search-info > .init:before {
    content: '';
    width: var(--ic-sm);
    height: var(--ic-sm);
    margin-right: 2px;
    background: url(../images/ic_init.svg) no-repeat;
    background-size: auto 100%;
  }
  @media (max-width: 743px) {
    .search-info > .init {
      padding: 0 2px;
      font-size: 14px;
    }
  }
  .no-data {
    border-top: 2px solid var(--midnight-900);
    padding: var(--space-box2) 0;
    text-align: center;
    border-bottom: 1px solid var(--gray-200);
  }
  .no-data:before {
    display: block;
    content: '';
    width: var(--ic-xlg2);
    height: var(--ic-xlg2);
    margin: 0 auto var(--space-xsm2);
    background: url(../images/ic_nodata.svg) no-repeat;
    background-size: auto 100%;
  }
  .no-data > p {
    margin-top: var(--space-xsm);
    line-height: var(--line-height-md);
    color: var(--gray-500);
    word-break: keep-all;
  }

  /* Filter */
  .filter {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: var(--px-md);
    margin-right: -2px;
  }
  .filter label {
    position: relative;
    display: flex;
    height: var(--btn-md);
    overflow: hidden;
    margin-right: 2px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  @media (max-width: 743px) {
    .filter,
    .filter label {
      margin-right: 0;
    }
  }
  .filter label > input {
    position: absolute;
    left: -100%;
  }
  .filter label > i {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: var(--btn-md);
    padding: 0 var(--space-sm);
    font-weight: 600;
    letter-spacing: -0.4px;
    border-radius: calc(var(--btn-md) / 2);
  }
  .filter label > input:checked + i {
    color: #fff;
    background-color: var(--mint-900);
  }

  /* FAQ */
  .faq-list {
    border-top: 2px solid var(--midnight-900);
  }
  .faq-list > li {
    border-bottom: 1px solid var(--gray-100);
  }
  .faq-list .a > button {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: var(--faq-list-a-padding-v) 0;
    padding-right: calc(var(--px-xlg) + 1.6em);
    font-size: var(--faq-list-a-size);
    line-height: var(--line-height-sm);
    -webkit-tap-highlight-color: transparent;
  }
  .faq-list .a > button:after {
    content: '';
    position: absolute;
    right: calc((var(--px-xlg) - var(--ic-md)) / 2);
    width: var(--ic-md);
    height: var(--ic-md);
    background: url(${icArrow}) no-repeat;
    background-size: auto 100%;
    transition: transform 0.4s var(--cubic-bezier-primary);
  }
  .faq-list > li.active .a {
    background-color: var(--gray-10);
  }
  .faq-list > li.active .a > button:after {
    transform: rotate(180deg);
  }
  .faq-list .a > button > em {
    box-sizing: content-box;
    width: 8em;
    padding: 0 var(--faq-list-a-padding-h);
    color: var(--gray-500);
  }
  .faq-list .a > button > em + em {
    width: 6em;
  }
  .faq-list .a > button > strong {
    flex: 1;
    padding-left: var(--faq-list-a-padding-h);
    text-align: left;
  }
  @media (max-width: 1023px) {
    .faq-list .a > button {
      flex-wrap: wrap;
    }
    .faq-list .a > button > em {
      display: flex;
      align-items: center;
      width: auto !important;
      margin: 0 0 4px 0;
      padding: 0;
      font-size: calc(1em - 4px);
      line-height: var(--line-height-md);
    }
    .faq-list .a > button > em + em:before {
      content: '';
      width: 16px;
      height: 16px;
      margin: 0 4px;
      background: url(${icArrow}) no-repeat;
      background-size: auto 100%;
      transform: rotate(-90deg);
      opacity: 0.3;
    }
    .faq-list .a > button > strong {
      min-width: 100%;
      margin: 0;
      padding: 0;
    }
  }
  @media (max-width: 743px) {
    .faq-list .a > button > em + em:before {
      width: 16px;
      height: 16px;
      margin: 0 2px;
    }
  }
  .faq-list .q > .inner {
    padding: var(--faq-list-q-padding);
    font-size: 1rem !important;
    line-height: var(--line-height-lg);
    border-top: 1px solid var(--gray-100);
    overflow-x: scroll;
  }

  /* Gallery List */
  .gallery-list {
    display: flex;
    flex-wrap: wrap;
    margin-right: calc(-1 * var(--gallery-list-space));
  }
  .gallery-list > li {
    width: 100%;
    max-width: calc(
      (100% - var(--gallery-list-space) * var(--gallery-list-length)) /
        var(--gallery-list-length)
    );
    margin-right: var(--gallery-list-space);
    margin-bottom: var(--px-lg);
  }
  .gallery-list > li > a {
    display: block;
  }
  .gallery-list .thumb {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    background-color: var(--gray-50);
  }
  .gallery-list .thumb:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${logoWibleLg}) no-repeat 50%;
    opacity: 0.2;
  }
  .gallery-list .thumb > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gallery-list .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: var(--gallery-list-title-space);
    font-size: var(--gallery-list-title-size);
    line-height: 1.5;
    font-weight: 600;
  }

  /* Board List */
  .board-list {
    border-top: 2px solid var(--midnight-900);
  }
  .board-list > li {
    border-bottom: 1px solid var(--gray-100);
  }
  .board-list > li > a {
    display: block;
    padding: var(--board-head-padding);
  }
  .board-list .title {
    display: flex;
    align-items: center;
  }
  .board-list .title > strong {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    line-height: var(--line-height-sm);
  }
  @media (hover: hover) and (pointer: fine) {
    .board-list > li > a:hover .title > strong {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }
  .board-list .title > strong > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--board-heading-fsize);
  }
  .board-list .pinned .title > strong:after {
    flex: 1;
    content: '고정된 게시물';
    min-width: calc(var(--board-heading-fsize) * var(--line-height-sm));
    height: calc(var(--board-heading-fsize) * var(--line-height-sm) - 4px);
    max-height: 32px;
    min-height: 22px;
    margin-top: -2px;
    margin-left: 0.25rem;
    font-size: 0;
    background: url(../images/ic_pin.svg) no-repeat;
    background-size: auto 100%;
  }
  .board-list .title > em {
    margin-left: calc(var(--board-heading-fsize) * 2);
    color: var(--gray-500);
  }
  @media (max-width: 743px) {
    .board-list .title {
      flex-wrap: wrap;
    }
    .board-list .title > strong {
      min-width: 100%;
    }
    .board-list .title > em {
      margin-left: 0;
      margin-top: 4px;
      font-size: 12px;
    }
  }
  .board-list .summary {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    max-height: calc((var(--line-height-lg) - 0.1) * 3);
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.75em;
    line-height: calc(var(--line-height-lg) - 0.1);
  }
  .board-list .summary:empty {
    display: none;
  }

  /* Board View */
  .board-view > .head {
    padding: var(--board-head-padding);
    border-top: 2px solid var(--midnight-900);
    border-bottom: 1px solid var(--gray-200);
  }
  .board-view > .head > h2 {
    font-size: var(--board-heading-fsize);
    line-height: var(--line-height-sm);
  }
  .board-view > .head > em {
    display: block;
    margin-top: 0.75em;
    font-size: calc(1rem - 2px);
    line-height: var(--line-height-md);
    color: var(--gray-500);
  }
  @media (min-width: 1440px) {
    .board-view > .head > em {
      font-size: 1rem;
    }
  }
  .board-view > .body {
    min-height: 400px;
    padding: var(--board-body-padding-v) var(--board-body-padding-h);
    line-height: var(--line-height-lg) !important;
  }
  .board-view > .body a {
    display: inline-block;
    color: var(--blue) !important;
  }
  .board-view > .body img,
  .board-view > .body video,
  .board-view > .body iframe {
    display: block;
    max-width: var(--board-media-max-width);
    margin: var(--px-lg) auto;
  }
  .board-view > .body iframe.news-view {
    width: calc(100% + var(--board-body-padding-h) * 2);
    max-width: none;
    min-height: 400px;
    margin-top: calc(-1 * var(--board-body-padding-v));
    margin-bottom: calc(-1 * var(--board-body-padding-v));
    margin-left: calc(-1 * var(--board-body-padding-h));
    margin-right: calc(-1 * var(--board-body-padding-h));
  }
  .board-view > .body *:first-child {
    margin-top: 0;
  }
  .board-view > .foot {
    display: table;
    width: 100%;
    border-top: 1px solid var(--midnight-900);
  }
  .board-view > .foot > .sibling {
    display: table-row;
  }
  .board-view > .foot > .sibling > * {
    display: table-cell;
    --height: 3.5rem;
    height: var(--height);
    padding: 0 var(--board-footer-col-indent);
    vertical-align: middle;
    border-bottom: 1px solid var(--gray-100);
  }
  .board-view > .foot > .sibling > strong,
  .board-view > .foot > .sibling > .date {
    width: 0;
    white-space: nowrap;
    text-align: center;
    font-weight: 400;
  }
  .board-view > .foot > .sibling > strong {
    padding: 0 calc(var(--board-footer-col-indent) * 1.5);
  }
  .board-view > .foot > .sibling > .title {
    width: 100%;
  }
  .board-view > .foot > .sibling > .title > em {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: var(--height);
  }
  .board-view > .foot > span.sibling > .title {
    color: var(--gray-500);
  }
  @media (max-width: 743px) {
    .board-view > .foot > .sibling > .date {
      display: none;
    }
  }
  @media (hover: hover) and (pointer: fine) {
    .board-view > .foot > a.sibling:hover > .title {
      text-decoration: underline;
    }
  }

  /* Board Write */
  .board-write {
    border-top: 2px solid var(--midnight-900);
  }
  .board-write input[type='text'],
  .board-write input[type='email'],
  .board-write input[type='tel'] {
    width: 100%;
  }
  .agreement-box {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: var(--space-md2);
    padding: 4px var(--space-sm2);
    background-color: var(--gray-10);
    border: 1px solid var(--gray-10);
  }
  .agreement-box .dropdown-wrapper {
    position: static;
  }
  .agreement-box .toggle {
    display: flex;
    align-items: center;
    height: var(--input-md);
    overflow: hidden;
    font-size: 16px;
  }
  .agreement-box .toggle:after {
    content: '';
    width: var(--ic-sm);
    height: var(--ic-sm);
    margin-left: 2px;
    background: url(${icArrow}) no-repeat;
    background-size: auto 100%;
    transition: transform 0.4s var(--cubic-bezier-primary);
  }
  .agreement-box .active .toggle:after {
    transform: rotate(180deg);
  }
  .agreement-box .full-text {
    z-index: 999;
    position: absolute;
    right: 0;
    top: 100%;
    width: 70%;
    min-width: 0;
  }
  .agreement-box .full-text > .inner {
    padding: var(--space-md3);
    background-color: #fff;
    border: 1px solid var(--midnight-900);
  }
  .agreement-box .full-text .heading-info {
    margin-top: 0;
    padding-bottom: var(--space-xsm2);
    border-bottom: 2px solid var(--midnight-900);
  }
  .agreement-box .full-text > .inner > p {
    margin-top: var(--space-xsm);
    font-size: var(--input-md-fsize);
    line-height: var(--line-height-md);
  }
  .agreement-box .full-text > .inner > p > strong {
    display: block;
  }
  @media (max-width: 743px) {
    .agreement-box {
      flex-direction: column;
      align-items: flex-end;
    }
    .agreement-box > label {
      min-width: 100%;
    }
    .agreement-box .toggle {
      font-size: 14px;
    }
    .agreement-box .full-text {
      width: 100%;
    }
  }
  .board-write .result-info {
    padding: var(--space-box) 0;
    text-align: center;
    border-bottom: 1px solid var(--gray-200);
    word-break: keep-all;
  }
  .board-write .result-info:before {
    display: block;
    content: '';
    width: var(--ic-xxlg);
    height: var(--ic-xxlg);
    margin: 0 auto var(--space-md);
    background: url(../images/ic_confirm.svg) no-repeat;
    background-size: auto 100%;
  }
  .board-write .result-info > strong {
    font-size: var(--space-md2);
    line-height: 1.3;
  }
  .board-write .result-info > p {
    margin-top: var(--space-xsm);
    line-height: var(--line-height-md);
  }

  /* Error Info */
  .error-info {
    --space: 160px;
    padding: var(--space) var(--side-padding)
      calc(var(--space) - var(--bottom-padding));
    text-align: center;
    word-break: keep-all;
  }
  .error-info:before {
    content: '';
    display: block;
    width: var(--ic-xxlg);
    height: var(--ic-xxlg);
    margin: 0 auto var(--space-md);
    background: url(../images/ic_nodata.svg) no-repeat;
    background-size: auto 100%;
  }
  .error-info > strong {
    font-size: var(--space-md2);
    line-height: 1.3;
  }
  .error-info > p {
    margin-top: var(--space-xsm);
    line-height: var(--line-height-md);
  }
  @media (max-width: 743px) {
    .error-info {
      --space: 80px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .error-info {
      --space: 80px;
    }
  }

  /* Buttons */
  .button-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--px-lg);
  }
  .button-group.submit {
    align-items: flex-end;
    height: 100px;
    margin-top: 0;
  }
  .list-more {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--btn-xlg2);
    margin-top: calc(var(--px-lg) - 8px);
    font-size: var(--list-more-size);
  }
  .gallery-list + .list-more {
    margin-top: 0;
  }
  .list-more i {
    position: relative;
    width: calc(var(--list-more-size) - 4px);
    height: calc(var(--list-more-size) - 4px);
    margin-top: -2px;
    margin-right: 4px;
    transition: transform 0.4s var(--cubic-bezier-primary);
  }
  .list-more:active i {
    transform: rotate(-90deg);
    transition: transform 0s;
  }
  .list-more i:before,
  .list-more i:after {
    content: '';
    position: absolute;
    left: 0;
    top: calc(50% - 1px);
    width: 100%;
    height: 2px;
    background-color: var(--midnight-900);
  }
  .list-more i:after {
    transform: rotate(90deg);
  }

  /* Loading Indicator */
  .loading-indicator {
    flex: 1;
    display: flex;
    min-height: 320px;
    align-items: center;
    justify-content: center;
    font-size: 0;
  }
  .loading-indicator > i {
    position: relative;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    animation: indicator 0.8s linear infinite;
  }
  .loading-indicator > i:before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 6px solid var(--gray-200);
    animation: indicator-clipping 1.6s linear infinite alternate;
  }
  @keyframes indicator {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes indicator-clipping {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
  @media (max-width: 743px) {
    .loading-indicator > i {
      width: 32px;
      height: 32px;
    }
    .loading-indicator > i:before {
      border-width: 4px;
    }
  }
  @media (min-width: 744px) and (max-width: 1439px) {
    .loading-indicator > i {
      width: 40px;
      height: 40px;
    }
    .loading-indicator > i:before {
      border-width: 5px;
    }
  }

  /* Dialog ************************************************************ */
  dialog {
    transform: translate3d(
      0,
      0,
      0
    ); /* for iOS (flicker when keyboard triggered) */
  }
  dialog {
    max-width: calc(100% - var(--side-padding) * 2);
    max-height: calc(100% - var(--side-padding) * 2);
    min-width: 320px;
    visibility: visible;
    background: #fff;
    border: none;
    border-radius: 0;
  }
  dialog {
    animation: dialog-show 0.4s cubic-bezier(0.4, 2, 0.6, 1);
  }
  @keyframes dialog-show {
    from {
      transform: translateY(-16px);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  dialog[closing] {
    animation: dialog-close 0.3s cubic-bezier(0.4, 0, 0.6, -1);
    animation-fill-mode: both;
  }
  @keyframes dialog-close {
    from {
      transform: translateY(0%);
      opacity: 1;
    }
    to {
      transform: translateY(-16px);
      opacity: 0;
    }
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
  dialog:not([closing])::backdrop {
    animation: dialog-backdrop-show 0.4s;
  }
  @keyframes dialog-backdrop-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  dialog[closing]::backdrop {
    animation: dialog-backdrop-close 0.3s;
    animation-fill-mode: both;
  }
  @keyframes dialog-backdrop-close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .dialog-wrapper {
    --padding: 32px;
    padding: 0 var(--padding);
  }
  .dialog-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 16px;
    border-bottom: 2px solid var(--midnight-900);
  }
  .dialog-header > h4 {
    flex: 1;
    font-size: 20px;
    margin: 0.4em 1em 0.4em 0;
  }
  .dialog-header > .close {
    box-sizing: content-box;
    width: 24px;
    height: 24px;
    margin-right: -16px;
    padding: 16px;
    font-size: 0;
    background: url(../images/ic_close.svg) no-repeat 50%;
    background-size: auto 24px;
    outline: none;
  }
  .dialog-body {
    --padding-top: 12px;
    padding: var(--padding-top) 0 var(--padding);
  }
  .dialog-body .btn-xlg {
    min-width: 7.5em;
    height: 52px;
    font-size: 18px;
  }
  .dialog-body .message {
    text-align: center;
    line-height: var(--line-height-md);
    word-break: keep-all;
  }
  .dialog-wrapper.dialog-error .dialog-header {
    border-bottom: none;
  }
  .dialog-wrapper.dialog-error .dialog-body {
    --padding-top: 8px;
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .dialog-wrapper.dialog-error .button-group {
    margin-top: var(--px-md);
  }
  .dialog-wrapper.dialog-policy {
    display: flex;
    flex-direction: column;
    width: 960px;
    height: 100%;
  }
  .dialog-policy .dialog-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .dialog-policy iframe {
    flex: 1;
    min-height: 0;
  }
  .dialog-policy .policy-top {
    margin-bottom: var(--padding-top);
    text-align: right;
  }
  @media (max-width: 1060px) {
    .dialog-wrapper {
      --padding: 20px;
      width: auto !important;
    }
    .dialog-header {
      padding-top: 4px;
    }
    .dialog-header > h4 {
      font-size: 16px;
    }
    .dialog-body .btn-xlg {
      height: 48px;
      font-size: 16px;
    }
    .dialog-wrapper.dialog-error .dialog-body {
      --padding-top: 0;
    }
    .dialog-policy .policy-top > select {
      width: 100%;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .dialog-header > .close {
      width: 28px;
      height: 28px;
      background-size: auto 28px;
    }
  }
  @media (min-width: 1440px) {
    .dialog-wrapper {
      --padding: 40px;
    }
    .dialog-header > h4 {
      font-size: 24px;
    }
    .dialog-header > .close {
      width: 32px;
      height: 32px;
      background-size: auto 32px;
    }
    .dialog-body {
      --padding-top: 16px;
    }
  }

  /* for editor output (without iframe) */
  .dialog-policy .policy-top + div {
    flex: 1;
    overflow-y: auto;
  }
  @media (hover: hover) and (pointer: fine) {
    .dialog-policy .policy-top + div {
      padding-right: 8px;
    }
  }
  .dialog-policy .policy-top + div * {
    font-size: 12px !important;
    line-height: var(--line-height-sm) !important;
    text-indent: 0 !important;
    word-break: break-all !important;
  }
  .dialog-policy .policy-top + div p {
    margin-bottom: 8px;
  }
  .dialog-policy .policy-top + div table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
  }
  .dialog-policy .policy-top + div table * {
    font-size: 10px !important;
  }
  .dialog-policy .policy-top + div th,
  .dialog-policy .policy-top + div td {
    padding: 4px;
    border: 1px solid var(--gray-100);
  }
  @media (min-width: 744px) and (max-width: 1439px) {
    .dialog-policy .policy-top + div *,
    .dialog-policy .policy-top + div table * {
      font-size: 14px !important;
    }
  }
  @media (min-width: 1440px) {
    .dialog-policy .policy-top + div *,
    .dialog-policy .policy-top + div table * {
      font-size: 16px !important;
    }
  }

  /* Main ************************************************************ */
  body.main {
    overflow: hidden;
  }
  .main > #root,
  .main .wrapper {
    height: 100%;
    overflow: hidden; /* for Safari (double-tap zoom) */
  }
  .main header {
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }
  .main .container {
    height: calc(100% - var(--header-height));
    min-height: auto;
    padding: 0;
    transition: transform 0.6s var(--cubic-bezier-primary);
  }
  .main .quick-util,
  .main footer {
    transition: transform 0.6s var(--cubic-bezier-primary);
  }
  .sections-wrapper {
    --current: 0;
    position: relative;
    height: 100%;
  }
  .sections {
    height: 100%;
    --sequence-space-top: 14%;
    --sequence-space-bottom: 0%;
    --sequence-motions-width: 800px;
    --sequence-motions-height: calc(var(--sequence-motions-width) * 0.75);
    --sequence-start-x: 80px;
    --sequence-duration: 1.6s;
    --sequence-duration-lg: 1.8s;
    --sequence-car-height: 400px;
    --sequence-car-space-bottom: 8%;
  }
  @media (max-width: 1439px) {
    .sections {
      --sequence-duration: 1.2s;
      --sequence-duration-lg: 1.6s;
    }
  }
  @media (max-width: 743px) {
    .sections {
      --sequence-motions-width: 320px;
      --sequence-start-x: 40px;
      --sequence-car-height: 150px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .sections {
      --sequence-motions-width: 560px;
      --sequence-start-x: 60px;
      --sequence-car-height: 300px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .sections {
      --sequence-motions-width: 600px;
      --sequence-car-height: 300px;
    }
  }
  @media (orientation: landscape) and (max-height: 600px) and (max-width: 960px) {
    .sections {
      --sequence-car-space-bottom: 0%;
      --sequence-motions-width: 400px;
      --sequence-motions-height: calc(var(--sequence-motions-width) * 0.75);
      --sequence-car-height: 150px;
    }
  }
  @media (orientation: portrait) and (max-width: 1023px) {
    .sections {
      --sequence-space-bottom: 8%;
    }
  }
  .sections > section {
    z-index: 1;
    position: relative;
    height: 100%;
    overflow: hidden;
    transform: translateY(calc(-100% * var(--current)));
    transition: transform 0.6s var(--cubic-bezier-primary);
    transition-delay: 0.1s; /* for iOS (sequence-obj-transition not smooth) */
  }
  .sections > section > .content {
    position: relative;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .sections > section > .content {
      max-width: 960px;
    }
  }

  /* Visual Section ********** */
  section.visual {
    padding: 0 var(--side-padding);
    background: url(../images/img_main_visual.png) no-repeat;
    background-position: 50%;
    background-size: cover;
  }
  @media (orientation: portrait) {
    .sections > section.visual {
      background-position: 70% 100%;
      background-size: auto 108%;
    }
  }
  section.visual .text {
    position: absolute;
    left: 0;
    top: calc(var(--sequence-space-top) + 8%);
    color: #fff;
  }
  section.visual .text > h1 {
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1.44px;
    opacity: 0;
    transform: translate(0, calc(var(--sequence-start-x) * 1));
    transition:
      opacity var(--sequence-duration-lg),
      transform var(--sequence-duration-lg);
  }
  [data-ui-current='0'] section.visual .text > h1 {
    opacity: 1;
    transform: translate(0, 0);
  }
  section.visual .text > h1 > span {
    display: block;
  }
  section.visual .text > h1 > span > em {
    color: var(--mint-900);
    white-space: nowrap;
  }
  section.visual .text .logo {
    width: 400px;
    height: 120px;
    margin-top: 8px;
    font-size: 0;
    background: url(../images/logo_wible_wt.svg) no-repeat;
    background-size: auto 100%;
  }
  section.visual .wheel {
    position: absolute;
    bottom: 48px;
    left: 50%;
    width: 56px;
    height: 56px;
    transform: translateX(-50%);
  }
  @media (max-width: 743px) {
    section.visual .text > h1 {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.72px;
    }
    section.visual .text .logo {
      width: 200px;
      height: 60px;
      margin-top: 4px;
    }
    section.visual .wheel {
      bottom: 24px;
      width: 40px;
      height: 40px;
    }
  }
  @media (orientation: portrait) and (max-width: 1023px) {
    section.visual .text {
      top: auto;
      bottom: calc(var(--sequence-space-top) + 8%);
    }
  }
  @media (min-width: 744px) and (max-width: 1439px) {
    section.visual .text > h1 {
      font-size: 36px;
      line-height: 44px;
      letter-spacing: -1.08px;
    }
    section.visual .text .logo {
      width: 280px;
      height: 84px;
      margin-top: 4px;
    }
    section.visual .wheel {
      bottom: 32px;
      width: 48px;
      height: 48px;
    }
  }

  /* Sequence Section ********** */
  section.sequence {
    z-index: 0;
    opacity: 0;
    transform: none;
    transition: opacity 0.6s var(--cubic-bezier-primary);
  }
  [data-ui-current='1'] section.sequence:nth-child(2),
  [data-ui-current='2'] section.sequence:nth-child(3),
  [data-ui-current='3'] section.sequence:nth-child(4),
  [data-ui-current='4'] section.sequence:nth-child(5) {
    opacity: 1;
  }
  section.sequence > .content {
    position: fixed;
    left: var(--side-padding);
    right: var(--side-padding);
    top: var(--header-height);
    bottom: 0;
    height: auto;
    min-width: calc(360px - var(--side-padding) * 2);
  }
  section.sequence .text {
    z-index: 1;
    position: absolute;
    left: 0;
    top: var(--sequence-space-top);
    opacity: 0;
    transform: translate(0, calc(var(--sequence-start-x) * 0.6));
    transition:
      opacity var(--sequence-duration-lg),
      transform var(--sequence-duration-lg);
  }
  section.sequence:nth-child(2) .text {
    width: 100%;
    text-align: center;
    transform: translate(calc(-1 * var(--sequence-start-x)), 0);
  }
  [data-ui-current='1'] section.sequence:nth-child(2) .text {
    opacity: 1;
    transform: translate(0, 0);
  }
  [data-ui-current='2'] section.sequence:nth-child(3) .text {
    opacity: 1;
    transform: translate(0, 0);
  }
  [data-ui-current='3'] section.sequence:nth-child(4) .text {
    opacity: 1;
    transform: translate(0, 0);
  }
  [data-ui-current='4'] section.sequence:nth-child(5) .text {
    opacity: 1;
    transform: translate(0, 0);
  }
  section.sequence .text > h2 {
    font-size: 80px;
    line-height: 88px;
    letter-spacing: -2.4px;
    word-break: keep-all;
  }
  section.sequence .text > h2 > em {
    color: var(--mint-900);
  }
  section.sequence .text > p {
    margin-top: 24px;
    font-size: 36px;
    line-height: 48px;
    letter-spacing: -1.08px;
    word-break: keep-all;
  }
  section.sequence .text br.small-only {
    display: none;
  }
  section.sequence:nth-child(2) .text > h2 {
    font-size: 56px;
    line-height: 64px;
    letter-spacing: -1.68px;
  }
  section.sequence:nth-child(2) .text > p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.72px;
  }
  section.sequence:nth-child(2) .car {
    position: absolute;
    right: 50%;
    top: calc(
      100% - var(--sequence-car-height) - var(--sequence-car-space-bottom)
    );
    width: calc(var(--sequence-car-height) * 2);
    height: var(--sequence-car-height);
    opacity: 0;
    transform: translateX(calc(50% + var(--sequence-start-x)));
    transition:
      opacity var(--sequence-duration),
      transform var(--sequence-duration);
  }
  [data-ui-current='1'] section.sequence:nth-child(2) .car {
    opacity: 1;
    transform: translateX(50%);
  }
  section.sequence:nth-child(2) .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../images/img_car_shadow.png) no-repeat;
    background-size: auto 100%;
    animation: car-shadow 0.4s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes car-shadow {
    from {
      opacity: 0.92;
    }
    to {
      opacity: 1;
    }
  }
  section.sequence:nth-child(2) .body {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../images/img_car_body.png) no-repeat;
    background-size: auto 100%;
    animation: car-body 0.4s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes car-body {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(0.6%);
    }
  }
  section.sequence:nth-child(2) .tire {
    position: absolute;
    top: 49.75%;
    width: calc(var(--sequence-car-height) * 0.255);
    height: calc(var(--sequence-car-height) * 0.255);
    background: url(../images/img_car_tire.png) no-repeat;
    background-size: 100%;
  }
  section.sequence:nth-child(2) .tire:nth-child(3) {
    left: 16.875%;
  }
  section.sequence:nth-child(2) .tire:nth-child(4) {
    right: 20.75%;
  }
  section.sequence:nth-child(2) .wheel {
    position: absolute;
    top: 53.5%;
    width: calc(var(--sequence-car-height) * 0.18);
    height: calc(var(--sequence-car-height) * 0.18);
    background: url(../images/img_car_wheel.png) no-repeat;
    background-size: 100%;
    animation: car-wheel 0.6s linear;
    animation-iteration-count: infinite;
  }
  @keyframes car-wheel {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  section.sequence:nth-child(2) .wheel:nth-child(5) {
    left: 18.75%;
  }
  section.sequence:nth-child(2) .wheel:nth-child(6) {
    right: 22.625%;
  }
  section.sequence .motions {
    position: absolute;
    right: 0;
    top: calc(
      100% - var(--sequence-motions-height) - var(--sequence-space-bottom)
    );
    width: var(--sequence-motions-width);
    height: var(--sequence-motions-height);
  }
  section.sequence .motions:before {
    content: '';
    position: absolute;
    bottom: 13%;
    right: 50%;
    width: 90%;
    height: 4px;
    background-color: #000c19;
    border-radius: 2px;
    transform: translateX(58%);
    transition: transform var(--sequence-duration);
  }
  @media (max-width: 743px) {
    section.sequence .text > h2 {
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: -0.96px !important;
    }
    section.sequence .text > p {
      margin-top: 12px !important;
      font-size: 16px !important;
      line-height: 24px !important;
      letter-spacing: -0.48px !important;
    }
    section.sequence .motions:before {
      height: 2px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    section.sequence .text > h2 {
      font-size: 48px !important;
      line-height: 56px !important;
      letter-spacing: -1.44px !important;
    }
    section.sequence .text > p {
      margin-top: 16px !important;
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: -0.72px !important;
    }
    section.sequence .motions:before {
      height: 3px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    section.sequence .text > h2 {
      font-size: 56px;
      line-height: 64px;
      letter-spacing: -1.68px;
    }
    section.sequence .text > p {
      margin-top: 20px;
      font-size: 28px;
      line-height: 36px;
      letter-spacing: -0.84px;
    }
    section.sequence:nth-child(2) .text > h2 {
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -1.44px;
    }
    section.sequence:nth-child(2) .text > p {
      margin-top: 16px;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: -0.6px;
    }
    section.sequence .motions:before {
      height: 3px;
    }
  }
  @media (orientation: portrait) and (max-width: 1023px) {
    section.sequence .text {
      width: 100%;
      text-align: center;
      transform: translate(calc(-1 * var(--sequence-start-x)), 0);
    }
    section.sequence .text br.large-only {
      display: none;
    }
    section.sequence .text br.small-only {
      display: inline;
    }
    section.sequence .motions {
      right: 50%;
      transform: translateX(50%);
    }
  }

  /* Motions Obj */
  section.sequence .obj {
    position: absolute;
    bottom: 0;
    width: calc(var(--sequence-motions-height) * 0.4);
    height: 100%;
    appearance: none;
    opacity: 0;
    transform: translateX(var(--sequence-start-x));
    transition:
      opacity var(--sequence-duration),
      transform var(--sequence-duration);
  }
  section.sequence .obj:nth-child(1) {
    transform: translateX(calc(var(--sequence-start-x) * 2.2));
  }
  section.sequence .obj:nth-child(2) {
    transform: translateX(calc(var(--sequence-start-x) * 1.6));
  }
  section.sequence .obj:nth-child(4) {
    transform: translateX(calc(var(--sequence-start-x) * 2.2));
  }
  [data-ui-current='2'] section.sequence:nth-child(3) .motions:before {
    transform: translateX(50%);
  }
  [data-ui-current='2'] section.sequence:nth-child(3) .obj {
    opacity: 1;
    transform: translateX(0);
  }
  [data-ui-current='3'] section.sequence:nth-child(4) .motions:before {
    transform: translateX(50%);
  }
  [data-ui-current='3'] section.sequence:nth-child(4) .obj {
    opacity: 1;
    transform: translateX(0);
  }
  [data-ui-current='4'] section.sequence:nth-child(5) .motions:before {
    transform: translateX(50%);
  }
  [data-ui-current='4'] section.sequence:nth-child(5) .obj {
    opacity: 1;
    transform: translateX(0);
  }
  section.sequence:nth-child(3) .obj:nth-child(1) {
    left: 8.4%;
  }
  section.sequence:nth-child(3) .obj:nth-child(2) {
    right: 26%;
  }
  section.sequence:nth-child(3) .obj:nth-child(3) {
    right: 3.6%;
  }
  section.sequence:nth-child(3) .obj:nth-child(4) {
    left: 32%;
  }
  section.sequence:nth-child(4) .obj:nth-child(1) {
    left: 14.6%;
    bottom: -1%;
    width: calc(var(--sequence-motions-height) * 0.666666);
  }
  section.sequence:nth-child(4) .obj:nth-child(2) {
    right: 13%;
    bottom: -1%;
  }
  section.sequence:nth-child(4) .obj:nth-child(3) {
    right: 34%;
    bottom: 6%;
  }
  section.sequence:nth-child(5) .obj:nth-child(1) {
    left: -2.6%;
    bottom: -0.3%;
    width: calc(var(--sequence-motions-height) * 1);
  }
  section.sequence:nth-child(5) .obj:nth-child(2) {
    right: 4%;
    bottom: -0.3%;
    width: calc(var(--sequence-motions-height) * 0.533333);
  }

  /* Sequence Pagination */
  .sequence-pagination {
    position: absolute;
    right: var(--side-padding);
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.4s;
  }
  .sequence-pagination > i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid var(--midnight-900);
    transition: background-color 0.4s var(--cubic-bezier-primary);
  }
  .sequence-pagination > i:not(:first-child) {
    margin-top: 16px;
  }
  [data-ui-current='1'] .sequence-pagination,
  [data-ui-current='2'] .sequence-pagination,
  [data-ui-current='3'] .sequence-pagination,
  [data-ui-current='4'] .sequence-pagination {
    opacity: 1;
  }
  [data-ui-current='1'] .sequence-pagination > i:nth-child(1),
  [data-ui-current='2'] .sequence-pagination > i:nth-child(2),
  [data-ui-current='3'] .sequence-pagination > i:nth-child(3),
  [data-ui-current='4'] .sequence-pagination > i:nth-child(4) {
    background-color: var(--midnight-900);
  }
  @media (max-width: 743px) {
    .sequence-pagination > i {
      width: 8px;
      height: 8px;
    }
    .sequence-pagination > i:not(:first-child) {
      margin-top: 8px;
    }
  }
  @media (min-width: 744px) and (max-width: 1439px) {
    .sequence-pagination > i {
      width: 10px;
      height: 10px;
    }
    .sequence-pagination > i:not(:first-child) {
      margin-top: 12px;
    }
  }

  /* Scroll Section ********** */
  .main .container[data-ui-current='6'] {
    transform: translateY(calc(-1 * var(--footer-height)));
  }
  .main .container[data-ui-current='6'] ~ .quick-util,
  .main .container[data-ui-current='6'] ~ footer {
    transform: translateY(calc(-1 * var(--footer-height)));
  }
  [data-ui-current='6'] > .sections > section {
    transform: translateY(calc(-100% * 5));
  }
  section.scroll {
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 var(--side-padding);
    background-color: #fff;
  }
  section.scroll > .content {
    max-width: 1240px !important;
  }
  @media (hover: hover) and (pointer: fine) {
    section.scroll::-webkit-scrollbar {
      width: 8px;
    }
    section.scroll::-webkit-scrollbar-track {
      background: var(--gray-100);
    }
    section.scroll::-webkit-scrollbar-thumb {
      background: var(--mint-700);
      border-radius: 4px;
    }
    section.scroll::-webkit-scrollbar-thumb:hover {
      background: var(--mint-900);
    }
  }
  .heading-m {
    margin: 0 0 64px;
    text-align: center;
    font-size: 48px !important;
    line-height: 56px !important;
    letter-spacing: -1.44px !important;
  }
  section.scroll > .content > .heading-m {
    margin-top: 120px;
  }
  .heading-m > em {
    color: var(--mint-900);
  }
  .heading-m > br {
    display: none;
  }
  .heading-m + p {
    margin: -48px 0 64px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.48px;
    word-break: keep-all;
  }
  @media (max-width: 743px) {
    .heading-m {
      margin: 0 0 32px;
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: -0.72px !important;
    }
    section.scroll > .content > .heading-m {
      margin-top: 48px;
    }
    .heading-m > br {
      display: inline;
    }
    .heading-m + p {
      margin: -24px 0 32px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .heading-m {
      margin: 0 0 40px;
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: -0.96px !important;
    }
    section.scroll > .content > .heading-m {
      margin-top: 64px;
    }
    .heading-m + p {
      margin: -32px 0 40px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .heading-m {
      margin: 0 0 40px;
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: -0.96px !important;
    }
    section.scroll > .content > .heading-m {
      margin-top: 80px;
    }
    .heading-m + p {
      margin: -32px 0 40px;
    }
  }
  @media (min-width: 1440px) {
    .heading-m + p {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0;
    }
  }

  /* Packages */
  .packages {
    margin: 0 -9999px;
    padding: 120px 9999px 96px;
    background-color: var(--gray-10);
  }
  .packages > .summary {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 32px;
    margin-top: 184px;
  }
  .packages > .summary > .box {
    --padding: 32px;
    --btn: 48px;
    position: relative;
    padding: 104px var(--padding) calc(var(--padding) + var(--btn))
      var(--padding);
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.08);
  }
  .packages > .summary > .box:before {
    content: '';
    position: absolute;
    left: 50%;
    top: -120px;
    width: 300px;
    height: 200px;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
  .packages > .summary > .box:nth-child(1):before {
    background-image: url(../images/img_package01.svg);
  }
  .packages > .summary > .box:nth-child(2):before {
    background-image: url(../images/img_package02.svg);
  }
  .packages > .summary > .box:nth-child(3):before {
    background-image: url(../images/img_package03.svg);
  }
  .packages > .summary > .box > h4 {
    margin-bottom: 4px;
    text-align: center;
    font-size: 24px;
    line-height: var(--line-height-sm);
  }
  .packages > .summary > .box > h4 > em {
    color: var(--mint-900);
  }
  .packages > .summary > .box > p {
    margin: 4px 0 16px;
    text-align: center;
    font-size: 16px;
    line-height: var(--line-height-sm);
    color: var(--gray-700);
    word-break: keep-all;
  }
  .packages > .summary > .box > ul {
    margin-bottom: 24px;
  }
  .packages > .summary > .box li {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    line-height: var(--line-height-sm);
  }
  .packages > .summary > .box li:not(:first-child) {
    margin-top: 4px;
  }
  .packages > .summary > .box li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background: url(../images/ic_check_bk.svg) no-repeat;
    background-size: auto 100%;
  }
  .packages > .summary > .box li.strong {
    font-weight: 600;
  }
  .packages > .summary > .box li.strong:before {
    background-image: url(../images/ic_check_gr.svg);
  }
  .packages > .summary > .box li.strong > em {
    background: linear-gradient(
      to top,
      transparent 2px,
      var(--mint-900) 2px,
      var(--mint-900) 6px,
      transparent 6px
    );
  }
  .packages > .summary > .box > a {
    position: absolute;
    left: var(--padding);
    right: var(--padding);
    bottom: var(--padding);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--btn);
    font-size: 16px;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid var(--midnight-900);
  }
  @media (hover: hover) and (pointer: fine) {
    .packages > .summary > .box > a:hover {
      background-color: var(--gray-50);
    }
  }
  @media (max-width: 743px) {
    .packages {
      padding-top: 48px;
      padding-bottom: 32px;
    }
    .packages > .summary {
      grid-template-columns: 1fr;
      grid-gap: 128px;
      justify-items: center;
      margin-top: 128px;
    }
    .packages > .summary > .box {
      --padding: 24px;
      width: 100%;
      max-width: 372px;
      padding-top: 72px;
    }
    .packages > .summary > .box:before {
      top: -104px;
      width: 240px;
      height: 160px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .packages {
      padding-top: 64px;
      padding-bottom: 64px;
    }
    .packages > .summary {
      grid-template-columns: 1fr;
      grid-gap: 152px;
      justify-items: center;
      margin-top: 152px;
    }
    .packages > .summary > .box {
      width: 100%;
      max-width: 372px;
      padding-top: 96px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .packages {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .packages > .summary {
      grid-gap: 24px;
      margin-top: 128px;
    }
    .packages > .summary > .box {
      --padding: 24px;
      padding-top: 80px;
    }
    .packages > .summary > .box:before {
      top: -96px;
      width: 240px;
      height: 160px;
    }
    .packages > .summary > .box > p {
      font-size: 16px;
    }
    .packages > .summary > .box > ul {
      margin-bottom: 16px;
    }
  }
  @media (min-width: 1440px) {
    .packages > .summary > .box {
      --btn: 52px;
    }
    .packages > .summary > .box > h4 {
      margin-bottom: 8px;
      font-size: 32px;
    }
    .packages > .summary > .box > p {
      margin: 8px 0 24px;
    }
    .packages > .summary > .box li {
      padding-left: 28px;
      font-size: 18px;
    }
    .packages > .summary > .box li:before {
      top: calc((1em * var(--line-height-sm) - 24px) / 2);
      width: 24px;
      height: 24px;
    }
    .packages > .summary > .box li.strong > em {
      background: linear-gradient(
        to top,
        transparent 1px,
        var(--mint-900) 1px,
        var(--mint-900) 6px,
        transparent 6px
      );
    }
  }

  /* Revisions */
  .main .process-info {
    margin-top: 96px;
  }
  .main .inquiry-info {
    margin-top: 64px;
  }
  @media (max-width: 743px) {
    .main .process-info {
      margin-top: 32px;
    }
    .main .inquiry-info {
      margin-top: 32px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .main .process-info {
      margin-top: 64px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .main .process-info {
      margin-top: 64px;
    }
  }

  /* Campaign */
  .campaign {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 320px;
    margin: 120px -9999px 0;
    padding: 0 9999px;
    background: url(../images/img_campaign.png) repeat-x 50%;
    background-size: auto 100%;
  }
  .campaign .heading-m,
  .campaign .heading-m + p {
    color: #fff;
  }
  .campaign .heading-m + p {
    margin-bottom: 0;
  }
  @media (max-width: 743px) {
    .campaign {
      height: 240px;
      margin-top: 48px;
    }
    .campaign .heading-m + p {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.42px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .campaign {
      height: 224px;
      margin-top: 64px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .campaign {
      height: 240px;
      margin-top: 80px;
    }
  }

  /* Members */
  .members {
    margin: 0 -9999px;
  }
  .members .wrapper {
    --item-width: 200px;
    --item-between: 24px;
    --wind-speed: 10;
    display: flex;
    max-width: calc(
      (var(--item-width) + var(--item-between)) *
        (var(--item-length) / 2) - var(--item-between)
    );
    /* overflow: hidden; */
    margin: 24px auto 0;
  }
  .members .items {
    display: flex;
    justify-content: space-around;
  }
  .members .to-left .items {
    animation: members-to-left calc(var(--item-length) * 2s) linear infinite;
  }
  .members .to-right .items {
    animation: members-to-right calc(var(--item-length) * 2s) linear infinite;
  }
  @keyframes members-to-left {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes members-to-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }
  .members .item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--item-width);
    height: calc(var(--item-width) * 0.4);
    margin-right: var(--item-between);
    will-change: transform; /* for iOS (animation flickers on loop) */
  }
  .members .item > img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 743px) {
    .members .wrapper {
      --item-width: 120px;
      --item-between: 8px;
      margin-top: 8px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .members .wrapper {
      --item-width: 120px;
      --item-between: 8px;
      margin-top: 8px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .members .wrapper {
      --item-width: 160px;
      --item-between: 16px;
      margin-top: 16px;
    }
  }

  /* Reviews */
  .reviews {
    --item-height: 256px;
    margin: 0 -9999px;
    padding: 64px 9999px 96px;
    overflow: hidden;
  }
  .reviews .wrapper {
    position: relative;
    width: 100%;
    overflow: visible;
  }
  .reviews .items {
    display: flex;
    height: var(--item-height);
    transition: transform 0.4s;
    will-change: transform; /* for iOS (transition buffering) */
  }
  .reviews .item {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12);
  }
  .reviews .item > h4 {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.54px;
  }
  .reviews .item > h4 > em {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .reviews .item > h4 > em:before {
    content: '';
    width: 48px;
    height: 48px;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-size: auto 100%;
    border-radius: 50%;
  }
  .reviews .item:nth-child(1) > h4 > em:before {
    background-image: url(../images/reviewer01.svg);
  }
  .reviews .item:nth-child(2) > h4 > em:before {
    background-image: url(../images/reviewer02.svg);
  }
  .reviews .item:nth-child(3) > h4 > em:before {
    background-image: url(../images/reviewer03.svg);
  }
  .reviews .item:nth-child(4) > h4 > em:before {
    background-image: url(../images/reviewer04.svg);
  }
  .reviews .item:nth-child(5) > h4 > em:before {
    background-image: url(../images/reviewer05.svg);
  }
  .reviews .item:nth-child(6) > h4 > em:before {
    background-image: url(../images/reviewer06.svg);
  }
  .reviews .item > p {
    margin-top: 8px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
  .reviews .pagination {
    display: flex;
    justify-content: center;
  }
  .reviews .pagination > i {
    width: 12px;
    height: 12px;
    margin: 48px 8px 0;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid var(--midnight-900);
    transition: background-color 0.4s var(--cubic-bezier-primary);
  }
  .reviews .pagination > i.active {
    background-color: var(--midnight-900);
  }
  .reviews .prev,
  .reviews .next {
    position: absolute;
    top: calc(var(--item-height) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    font-size: 0;
  }
  .reviews .prev.disabled,
  .reviews .next.disabled {
    pointer-events: none;
  }
  .reviews .prev {
    left: 0;
    transform: translate(-50%, -50%);
  }
  .reviews .next {
    right: 0;
    transform: translate(50%, -50%);
  }
  .reviews .prev:before,
  .reviews .next:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.1;
    background: var(--midnight-900);
    border-radius: 50%;
    transition: opacity 0.2s;
  }
  @media (hover: hover) and (pointer: fine) {
    .reviews .prev:hover:before,
    .reviews .next:hover:before {
      opacity: 0.2;
    }
  }
  .reviews .prev:after,
  .reviews .next:after {
    content: '';
    width: 24px;
    height: 24px;
    background: url(${icTop}) no-repeat;
    background-size: auto 100%;
    transition: opacity 0.2s;
  }
  .reviews .prev:after {
    transform: rotate(-90deg);
  }
  .reviews .next:after {
    transform: rotate(90deg);
  }
  .reviews .prev.disabled:before,
  .reviews .prev.disabled:after,
  .reviews .next.disabled:before,
  .reviews .next.disabled:after {
    opacity: 0;
  }
  @media (max-width: 743px) {
    .reviews {
      --item-height: 192px;
      padding-top: 24px;
      padding-bottom: 48px;
    }
    .reviews .wrapper {
      max-width: 372px;
      margin: 0 auto;
    }
    .reviews .item {
      padding: 20px;
    }
    .reviews .item > h4 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.42px;
    }
    .reviews .item > h4 > em {
      margin-bottom: 12px;
    }
    .reviews .item > h4 > em:before {
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
    .reviews .item > p {
      margin-top: 8px;
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.36px;
    }
    .reviews .pagination > i {
      width: 8px;
      height: 8px;
      margin: 24px 4px 0;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .reviews {
      padding-top: 32px !important;
    }
    .reviews .item {
      padding: 24px !important;
    }
  }
  @media (max-width: 1023px) {
    .reviews .prev,
    .reviews .next {
      display: none;
    }
  }
  @media (min-width: 744px) and (max-width: 1439px) {
    .reviews {
      --item-height: 234px;
      padding-top: 40px;
      padding-bottom: 80px;
    }
    .reviews .item {
      padding: 28px;
    }
    .reviews .item > h4 {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.48px;
    }
    .reviews .item > h4 > em {
      margin-bottom: 8px;
    }
    .reviews .item > h4 > em:before {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
    .reviews .item > p {
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.42px;
    }
    .reviews .pagination > i {
      width: 10px;
      height: 10px;
      margin: 32px 6px 0;
    }
    .reviews .prev,
    .reviews .next {
      width: 48px;
      height: 48px;
    }
  }

  /* Video */
  .video {
    margin: 0 -9999px;
    padding: 0 9999px;
    background-color: var(--mint-900);
  }
  .video > .inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px 0;
  }
  .video > .inner:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 560px;
    background: url(../images/bg_video.svg) no-repeat;
    background-size: auto 100%;
  }
  .video .heading-m,
  .video .heading-m + p {
    text-align: left;
    color: #fff;
  }
  .video .heading-m {
    font-size: 56px !important;
    line-height: 64px !important;
    letter-spacing: -1.68px;
  }
  .video .heading-m > br {
    display: inline;
  }
  .video .heading-m + p {
    margin: -40px 0 24px;
  }
  .video .player {
    width: 640px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12);
  }
  .video .player > .iframe {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
  }
  .video .player > .iframe > iframe {
    position: absolute;
    width: calc(100% + 2px) !important;
    height: calc(100% + 2px) !important;
    margin: -1px;
  }
  @media (max-width: 743px) {
    .video .inner {
      flex-direction: column;
      margin: 0 calc(-1 * var(--side-padding));
      padding: 48px 0;
    }
    .video > .inner:before {
      top: calc(100% - 32px);
      right: 0;
      width: 75px;
      height: 210px;
      transform-origin: 100% 0;
      transform: rotate(90deg);
    }
    .video .heading-m {
      text-align: center;
      font-size: 24px !important;
      line-height: 32px !important;
      letter-spacing: -0.72px;
    }
    .video .heading-m + p {
      margin: -24px 0 24px;
      text-align: center;
    }
    .video .player {
      width: 312px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .video .inner {
      flex-direction: column;
      margin: 0 calc(-1 * var(--side-padding));
      padding: 64px 0 96px;
    }
    .video > .inner:before {
      top: calc(100% - 62px);
      right: 0;
      width: 150px;
      height: 420px;
      transform-origin: 100% 0;
      transform: rotate(90deg);
    }
    .video .heading-m {
      text-align: center;
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: -0.96px;
    }
    .video .heading-m + p {
      margin: -32px 0 32px;
      text-align: center;
    }
    .video .player {
      width: 426px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .video .inner {
      max-width: 927px;
      margin: 0 auto;
      padding: 96px 54px 114px 56px;
    }
    .video > .inner:before {
      width: 150px;
      height: 420px;
    }
    .video .heading-m {
      font-size: 32px !important;
      line-height: 40px !important;
      letter-spacing: -0.96px;
    }
    .video .heading-m + p {
      margin: -24px 0 24px;
    }
    .video .player {
      width: 480px;
    }
  }
  @media (min-width: 1440px) {
    .video .inner {
      padding-right: 66px;
    }
  }

  /* App Info */
  .main .app-info {
    margin: 0 -9999px;
    padding: 96px 9999px;
  }
  .main .app-info .heading-m {
    margin-bottom: 48px;
  }
  @media (max-width: 743px) {
    .main .app-info {
      padding-top: 48px;
      padding-bottom: 48px;
    }
    .main .app-info .heading-m {
      margin-bottom: 12px;
    }
  }
  @media (min-width: 744px) and (max-width: 1023px) {
    .main .app-info {
      padding-top: 48px;
      padding-bottom: 48px;
    }
    .main .app-info .heading-m {
      margin-bottom: 24px;
    }
  }
  @media (min-width: 1024px) and (max-width: 1439px) {
    .main .app-info {
      padding-top: 64px;
      padding-bottom: 64px;
    }
    .main .app-info .heading-m {
      margin-bottom: 32px;
    }
  }

  .ant-carousel .slick-dots li button,
  .ant-carousel .slick-dots li.slick-active button {
    background: #000;
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    color: #9aa2a8;
    opacity: 1;
  }
`;

export default WibleBizStyles;
