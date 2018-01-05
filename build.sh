#!/usr/bin/env bash
SUB_PROJ_DIR="../dataparse/src/main/resources/assets/js/lib/gcs-composite-file-uploader/"
npm run bundle
cp bundle/gcs-composite-file-uploader.js ${SUB_PROJ_DIR}

