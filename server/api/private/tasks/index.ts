import type { MaybeId } from 'api/@types/brandedId';
import type { TaskCreateVal, TaskEntity, TaskUpdateVal } from 'api/@types/task';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    query?: {
      limit?: number;
    };
    resBody: TaskEntity[];
  };

  post: {
    reqFormat: FormData;
    reqBody: TaskCreateVal;
    resBody: TaskEntity;
  };

  patch: {
    reqBody: TaskUpdateVal;
    status: 204;
    resBody: TaskEntity;
  };

  delete: {
    reqBody: {
      taskId: MaybeId['task'];
    };
    status: 204;
    resBody: TaskEntity;
  };
}>;
