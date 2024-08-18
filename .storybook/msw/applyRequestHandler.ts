import { handlers as defaultHandlers } from '../../src/mocks/handlers'; // Ajusta la ruta si es necesario
import type { RequestHandler } from 'msw';
import { api } from './initialize.browser';
import type { Context } from './decorator';

export function applyRequestHandlers(
  handlersListOrObject: Context['parameters']['msw']
): void {
  api?.resetHandlers();

  if (handlersListOrObject == null) {
    // Usa los handlers por defecto si no se especifican otros
    api.use(...defaultHandlers);
    return;
  }

  if (Array.isArray(handlersListOrObject) && handlersListOrObject.length > 0) {
    // Usa los handlers proporcionados en los parámetros
    api.use(...handlersListOrObject);
    return;
  }

  if ('handlers' in handlersListOrObject && handlersListOrObject.handlers) {
    // Compatibilidad para un objeto con arrays de handlers nombrados
    const handlers = Object.values(handlersListOrObject.handlers)
      .filter(Boolean)
      .reduce<RequestHandler[]>(
        (handlers, handlersList) => handlers.concat(handlersList),
        []
      );

    if (handlers.length > 0) {
      api.use(...handlers);
    }

    return;
  }
}
