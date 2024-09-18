import type { ApiContext, User } from '@/src/types'
import { fetcher } from '@/src/utils'

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getAllUsers