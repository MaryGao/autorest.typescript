import * as coreClient from "@azure/core-client";

export const OperationEntityListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplayInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CloudErrorBody"
        }
      }
    }
  }
};

export const CloudErrorBody: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorBody",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorBody"
            }
          }
        }
      }
    }
  }
};

export const DomainServiceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainServiceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DomainService"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReplicaSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReplicaSet",
    modelProperties: {
      replicaSetId: {
        serializedName: "replicaSetId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      vnetSiteId: {
        serializedName: "vnetSiteId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      subnetId: {
        serializedName: "subnetId",
        type: {
          name: "String"
        }
      },
      domainControllerIpAddress: {
        serializedName: "domainControllerIpAddress",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      externalAccessIpAddress: {
        serializedName: "externalAccessIpAddress",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      serviceStatus: {
        serializedName: "serviceStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      healthLastEvaluated: {
        serializedName: "healthLastEvaluated",
        readOnly: true,
        type: {
          name: "DateTimeRfc1123"
        }
      },
      healthMonitors: {
        serializedName: "healthMonitors",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HealthMonitor"
            }
          }
        }
      },
      healthAlerts: {
        serializedName: "healthAlerts",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "HealthAlert"
            }
          }
        }
      }
    }
  }
};

export const HealthMonitor: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HealthMonitor",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HealthAlert: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HealthAlert",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      issue: {
        serializedName: "issue",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      severity: {
        serializedName: "severity",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      raised: {
        serializedName: "raised",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      lastDetected: {
        serializedName: "lastDetected",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      resolutionUri: {
        serializedName: "resolutionUri",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LdapsSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LdapsSettings",
    modelProperties: {
      ldaps: {
        defaultValue: "Disabled",
        serializedName: "ldaps",
        type: {
          name: "String"
        }
      },
      pfxCertificate: {
        serializedName: "pfxCertificate",
        type: {
          name: "String"
        }
      },
      pfxCertificatePassword: {
        serializedName: "pfxCertificatePassword",
        type: {
          name: "String"
        }
      },
      publicCertificate: {
        serializedName: "publicCertificate",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      certificateThumbprint: {
        serializedName: "certificateThumbprint",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      certificateNotAfter: {
        serializedName: "certificateNotAfter",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      externalAccess: {
        defaultValue: "Disabled",
        serializedName: "externalAccess",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceForestSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceForestSettings",
    modelProperties: {
      settings: {
        serializedName: "settings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ForestTrust"
            }
          }
        }
      },
      resourceForest: {
        serializedName: "resourceForest",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ForestTrust: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ForestTrust",
    modelProperties: {
      trustedDomainFqdn: {
        serializedName: "trustedDomainFqdn",
        type: {
          name: "String"
        }
      },
      trustDirection: {
        serializedName: "trustDirection",
        type: {
          name: "String"
        }
      },
      friendlyName: {
        serializedName: "friendlyName",
        type: {
          name: "String"
        }
      },
      remoteDnsIps: {
        serializedName: "remoteDnsIps",
        type: {
          name: "String"
        }
      },
      trustPassword: {
        serializedName: "trustPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainSecuritySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainSecuritySettings",
    modelProperties: {
      ntlmV1: {
        defaultValue: "Enabled",
        serializedName: "ntlmV1",
        type: {
          name: "String"
        }
      },
      tlsV1: {
        defaultValue: "Enabled",
        serializedName: "tlsV1",
        type: {
          name: "String"
        }
      },
      syncNtlmPasswords: {
        defaultValue: "Enabled",
        serializedName: "syncNtlmPasswords",
        type: {
          name: "String"
        }
      },
      syncKerberosPasswords: {
        defaultValue: "Enabled",
        serializedName: "syncKerberosPasswords",
        type: {
          name: "String"
        }
      },
      syncOnPremPasswords: {
        defaultValue: "Enabled",
        serializedName: "syncOnPremPasswords",
        type: {
          name: "String"
        }
      },
      kerberosRc4Encryption: {
        defaultValue: "Enabled",
        serializedName: "kerberosRc4Encryption",
        type: {
          name: "String"
        }
      },
      kerberosArmoring: {
        defaultValue: "Disabled",
        serializedName: "kerberosArmoring",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotificationSettings",
    modelProperties: {
      notifyGlobalAdmins: {
        serializedName: "notifyGlobalAdmins",
        type: {
          name: "String"
        }
      },
      notifyDcAdmins: {
        serializedName: "notifyDcAdmins",
        type: {
          name: "String"
        }
      },
      additionalRecipients: {
        serializedName: "additionalRecipients",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MigrationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MigrationProperties",
    modelProperties: {
      oldSubnetId: {
        serializedName: "oldSubnetId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      oldVnetSiteId: {
        serializedName: "oldVnetSiteId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      migrationProgress: {
        serializedName: "migrationProgress",
        type: {
          name: "Composite",
          className: "MigrationProgress"
        }
      }
    }
  }
};

export const MigrationProgress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MigrationProgress",
    modelProperties: {
      completionPercentage: {
        serializedName: "completionPercentage",
        type: {
          name: "Number"
        }
      },
      progressMessage: {
        serializedName: "progressMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConfigDiagnostics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigDiagnostics",
    modelProperties: {
      lastExecuted: {
        serializedName: "lastExecuted",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      validatorResults: {
        serializedName: "validatorResults",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigDiagnosticsValidatorResult"
            }
          }
        }
      }
    }
  }
};

export const ConfigDiagnosticsValidatorResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigDiagnosticsValidatorResult",
    modelProperties: {
      validatorId: {
        serializedName: "validatorId",
        type: {
          name: "String"
        }
      },
      replicaSetSubnetDisplayName: {
        serializedName: "replicaSetSubnetDisplayName",
        type: {
          name: "String"
        }
      },
      status: {
        defaultValue: "None",
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      issues: {
        serializedName: "issues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConfigDiagnosticsValidatorResultIssue"
            }
          }
        }
      }
    }
  }
};

export const ConfigDiagnosticsValidatorResultIssue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConfigDiagnosticsValidatorResultIssue",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      descriptionParams: {
        serializedName: "descriptionParams",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const OuContainerListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OuContainerListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OuContainer"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ContainerAccount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ContainerAccount",
    modelProperties: {
      accountName: {
        serializedName: "accountName",
        type: {
          name: "String"
        }
      },
      spn: {
        serializedName: "spn",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainService: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DomainService",
    modelProperties: {
      ...Resource.type.modelProperties,
      version: {
        serializedName: "properties.version",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      tenantId: {
        serializedName: "properties.tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      domainName: {
        serializedName: "properties.domainName",
        type: {
          name: "String"
        }
      },
      deploymentId: {
        serializedName: "properties.deploymentId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      syncOwner: {
        serializedName: "properties.syncOwner",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      replicaSets: {
        serializedName: "properties.replicaSets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ReplicaSet"
            }
          }
        }
      },
      ldapsSettings: {
        serializedName: "properties.ldapsSettings",
        type: {
          name: "Composite",
          className: "LdapsSettings"
        }
      },
      resourceForestSettings: {
        serializedName: "properties.resourceForestSettings",
        type: {
          name: "Composite",
          className: "ResourceForestSettings"
        }
      },
      domainSecuritySettings: {
        serializedName: "properties.domainSecuritySettings",
        type: {
          name: "Composite",
          className: "DomainSecuritySettings"
        }
      },
      domainConfigurationType: {
        serializedName: "properties.domainConfigurationType",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "String"
        }
      },
      filteredSync: {
        serializedName: "properties.filteredSync",
        type: {
          name: "String"
        }
      },
      notificationSettings: {
        serializedName: "properties.notificationSettings",
        type: {
          name: "Composite",
          className: "NotificationSettings"
        }
      },
      migrationProperties: {
        serializedName: "properties.migrationProperties",
        type: {
          name: "Composite",
          className: "MigrationProperties"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      configDiagnostics: {
        serializedName: "properties.configDiagnostics",
        type: {
          name: "Composite",
          className: "ConfigDiagnostics"
        }
      }
    }
  }
};

export const OuContainer: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OuContainer",
    modelProperties: {
      ...Resource.type.modelProperties,
      tenantId: {
        serializedName: "properties.tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      domainName: {
        serializedName: "properties.domainName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      deploymentId: {
        serializedName: "properties.deploymentId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      containerId: {
        serializedName: "properties.containerId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      accounts: {
        serializedName: "properties.accounts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ContainerAccount"
            }
          }
        }
      },
      serviceStatus: {
        serializedName: "properties.serviceStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      distinguishedName: {
        serializedName: "properties.distinguishedName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
