import { getFileAsset } from "@sanity/asset-utils";

import { dataset, projectId } from "../env";

export const urlForVideo = (source: any) => {
  return getFileAsset(source.asset, { projectId, dataset })?.url ?? '';
};