import type { MultipartFile } from '@fastify/multipart';
import type { TaskEntity } from 'api/@types/task';
import type { S3PutParams } from 'service/s3Client';

export type TaskCreateServerVal = { label: string; image?: MultipartFile };

export type TaskSaveVal = { task: TaskEntity; s3Params?: S3PutParams };

export type TaskDeleteVal = { deletable: boolean; task: TaskEntity };
