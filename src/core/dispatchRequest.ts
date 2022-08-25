import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { flattenHeaders } from '../helpers/headers'
import {
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from '../types/index'
import transform from './transform'

export default function dispatchRequest(
  config: AxiosRequestConfig
): AxiosPromise {
  thorwIfCancelLationRequested(config)
  processConfig(config)
  return xhr(config).then((res: any) => transformResponseData(res))
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transform(config.data, config.headers, config.transformRequest)

  config.headers = flattenHeaders(config.headers, config.method as Method)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url as string, params)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}

function thorwIfCancelLationRequested(config?: AxiosRequestConfig): void {
  if (config?.cancelToken) {
    config.cancelToken.throwIfRequested()
  }
}
