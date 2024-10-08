import type { RequestHandler } from 'msw'
import { setupWorker } from 'msw/browser'
import { augmentInitializeOptions } from './augmentInitializeoptions'

type SetupWorker = ReturnType<typeof setupWorker>

export let api: SetupWorker

export type InitializeOptions = Parameters<SetupWorker['start']>[0]

export function initialize(
  options?: InitializeOptions,
  initialHandlers: RequestHandler[] = []
): SetupWorker {
  const worker = setupWorker(...initialHandlers)
  worker.start(augmentInitializeOptions(options))
  api = worker
  return worker
}

export function getWorker(): SetupWorker {
  
  if (api === undefined) {
    throw new Error(
      `[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?`
    )
  }

  return api
}