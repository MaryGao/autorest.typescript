/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";


export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PetAPTrue: msRest.CompositeMapper = {
  serializedName: "PetAPTrue",
  type: {
    name: "Composite",
    className: "PetAPTrue",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const CatAPTrue: msRest.CompositeMapper = {
  serializedName: "CatAPTrue",
  type: {
    name: "Composite",
    className: "CatAPTrue",
    modelProperties: {
      ...PetAPTrue.type.modelProperties,
      friendly: {
        serializedName: "friendly",
        type: {
          name: "Boolean"
        }
      }
    },
    additionalProperties: PetAPTrue.type.additionalProperties
  }
};

export const PetAPObject: msRest.CompositeMapper = {
  serializedName: "PetAPObject",
  type: {
    name: "Composite",
    className: "PetAPObject",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const PetAPString: msRest.CompositeMapper = {
  serializedName: "PetAPString",
  type: {
    name: "Composite",
    className: "PetAPString",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "String"
      }
    }
  }
};

export const PetAPInProperties: msRest.CompositeMapper = {
  serializedName: "PetAPInProperties",
  type: {
    name: "Composite",
    className: "PetAPInProperties",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const PetAPInPropertiesWithAPString: msRest.CompositeMapper = {
  serializedName: "PetAPInPropertiesWithAPString",
  type: {
    name: "Composite",
    className: "PetAPInPropertiesWithAPString",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        readOnly: true,
        serializedName: "status",
        type: {
          name: "Boolean"
        }
      },
      odatalocation: {
        required: true,
        serializedName: "@odata\\.location",
        type: {
          name: "String"
        }
      },
      additionalProperties1: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Number"
            }
          }
        }
      }
    },
    additionalProperties: {
      type: {
        name: "String"
      }
    }
  }
};
