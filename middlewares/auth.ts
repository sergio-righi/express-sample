import { env } from '@/utils'

/**
 * it verifies the existence of the authorization header
 */

export default (req: any, res: any, next: any) => {
  try {
    const authorization = req.headers.authorization
    const secretKey = env.get('api')
    if (authorization && authorization === secretKey) next()
    else throw new Error('401')
  } catch (err) {
    err === 401 ? res.status(401) : res.end()
  }
}
