import { css } from '@emotion/react';
// Icons
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
    background-image: url(/icons/ic_download.svg);
  }
  i.ic.write {
    background-image: url(/icons/ic_write.svg);
  }
  i.ic.talk {
    background-image: url(/icons/ic_talk.svg);
  }
  i.ic.process-1 {
    background-image: url(/icons/ic_process01.svg);
  }
  i.ic.process-2 {
    background-image: url(/icons/ic_process02.svg);
  }
  i.ic.process-3 {
    background-image: url(/icons/ic_process03.svg);
  }
  i.ic.process-4 {
    background-image: url(/icons/ic_process04.svg);
  }
  i.ic.process-5 {
    background-image: url(/icons/ic_process05.svg);
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
    background: url(/icons/ic_arrow.svg) no-repeat right
      calc(var(--space-sm2) * 0.6) top 50%;
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
      background-image: url(/logos/logo_wible_sm.svg);
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
      background-image: url(/logos/logo_wible_lg.svg);
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
  }
  .quick-util > .inner > button.top {
    background-image: url(/icons/ic_top.svg);
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
    background-image: url(/logos/logo_kia.svg);
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
    background: url(/icons/ic_step_arrow.svg) no-repeat;
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
    background: url(/icons/ic_search.svg) no-repeat;
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
    background: url(/icons/ic_arrow.svg) no-repeat;
    background-size: auto 100%;
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
      background: url(/icons/ic_arrow.svg) no-repeat;
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

  /* Scroll Section ********** */
  .main .container[data-ui-current='6'] {
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
