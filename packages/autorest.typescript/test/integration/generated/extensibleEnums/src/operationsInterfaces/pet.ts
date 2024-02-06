/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PetGetByPetIdOptionalParams,
  PetGetByPetIdResponse,
  PetAddPetOptionalParams,
  PetAddPetResponse,
} from "../models";

/** Interface representing a Pet. */
export interface Pet {
  /**
   * get pet by id
   * @param petId Pet id
   * @param options The options parameters.
   */
  getByPetId(
    petId: string,
    options?: PetGetByPetIdOptionalParams,
  ): Promise<PetGetByPetIdResponse>;
  /**
   * add pet
   * @param options The options parameters.
   */
  addPet(options?: PetAddPetOptionalParams): Promise<PetAddPetResponse>;
}
