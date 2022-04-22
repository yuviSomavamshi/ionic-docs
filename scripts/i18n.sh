#!/bin/bash
set -o errexit
set -o nounset

if [ "${VERCEL_ENV:-preview}" == "production" ]; then
    mkdir -p i18n/ja/docusaurus-plugin-content-docs/current/
    curl -fsSL http://localhost:8080/git/archive/refs/heads/translation/jp.tar.gz |
      tar -zxf - -C i18n/ja/docusaurus-plugin-content-docs/current/ --strip-components 2 ionic-docs-translation-jp/docs
    node scripts/api-ja.js
fi
