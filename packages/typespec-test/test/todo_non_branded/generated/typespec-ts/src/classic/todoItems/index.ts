// Licensed under the MIT license.

import { TodoContext } from "../../api/todoContext.js";
import {
  TodoPage,
  TodoItem,
  TodoItemPatch,
  TodoLabels,
} from "../../models/models.js";
import {
  list,
  create,
  get,
  update,
  $delete,
} from "../../api/todoItems/index.js";
import {
  TodoItemsListOptionalParams,
  TodoItemsCreateOptionalParams,
  TodoItemsGetOptionalParams,
  TodoItemsUpdateOptionalParams,
  TodoItemsDeleteOptionalParams,
} from "../../models/options.js";
import {
  TodoItemsAttachmentsOperations,
  getTodoItemsAttachmentsOperations,
} from "./attachments/index.js";

export interface TodoItemsOperations {
  list: (options?: TodoItemsListOptionalParams) => Promise<TodoPage>;
  create: (
    item: TodoItem,
    options?: TodoItemsCreateOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  get: (
    id: number,
    options?: TodoItemsGetOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  update: (
    id: number,
    patch: TodoItemPatch,
    options?: TodoItemsUpdateOptionalParams,
  ) => Promise<{
    id: number;
    title: string;
    createdBy: number;
    assignedTo?: number;
    description?: string;
    status: "NotStarted" | "InProgress" | "Completed";
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    labels?: TodoLabels;
  }>;
  delete: (
    id: number,
    options?: TodoItemsDeleteOptionalParams,
  ) => Promise<void>;
  attachments: TodoItemsAttachmentsOperations;
}

export function getTodoItems(context: TodoContext) {
  return {
    list: (options?: TodoItemsListOptionalParams) => list(context, options),
    create: (item: TodoItem, options?: TodoItemsCreateOptionalParams) =>
      create(context, item, options),
    get: (id: number, options?: TodoItemsGetOptionalParams) =>
      get(context, id, options),
    update: (
      id: number,
      patch: TodoItemPatch,
      options?: TodoItemsUpdateOptionalParams,
    ) => update(context, id, patch, options),
    delete: (id: number, options?: TodoItemsDeleteOptionalParams) =>
      $delete(context, id, options),
  };
}

export function getTodoItemsOperations(
  context: TodoContext,
): TodoItemsOperations {
  return {
    ...getTodoItems(context),
    attachments: getTodoItemsAttachmentsOperations(context),
  };
}
