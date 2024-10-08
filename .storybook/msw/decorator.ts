import type { RequestHandler } from 'msw'
import { applyRequestHandlers } from './applyRequestHandler'

export type MswParameters = {
  msw?:
    | RequestHandler[]
    | {
        handlers: RequestHandler[] | Record<string, RequestHandler>
      }
}

export type Context = {
  parameters: MswParameters
}

export const mswDecorator = <Story extends (...args: any[]) => any>(
  storyFn: Story,
  context: Context
) => {
  applyRequestHandlers(context.parameters.msw)
  return storyFn()
}