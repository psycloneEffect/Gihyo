import type { ApiContext, Product } from '@/src/types'
import { fetcher } from '@/src/utils'

export type GetProductParams = {
  /**
   * 取得する商品
   */
  id: number
}

/**
 * プロダクトAPI（個別取得）
 * @param context APIコンテキスト
 * @param params 商品ID
 * @returns 商品
 */
const getProduct = async (
  context: ApiContext,
  { id }: GetProductParams,
): Promise<Product> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/products/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getProduct