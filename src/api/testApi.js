import request from "@/request";

export function getText(apiURL) {
  return request({
    url: apiURL,
    method: "get"
  });
}
