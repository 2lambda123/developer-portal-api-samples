/**
 * Copyright 2022 Volvo Car Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

const authorizeButton = document.querySelector("button#authorize");

const onAuthorizeButtonClick = async () => {
  const loginUrl = await getLoginUrl();

  window.location.href = loginUrl;
};

const getLoginUrl = async () => {
  const response = await fetch(`${window.location.origin}/auth/login`);

  const data = await response.json();

  return data.loginUrl;
};

authorizeButton.addEventListener("click", onAuthorizeButtonClick);
