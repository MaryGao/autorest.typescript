/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  DatabaseAccountsImpl,
  OperationsImpl,
  DatabaseImpl,
  CollectionImpl,
  CollectionRegionImpl,
  DatabaseAccountRegionImpl,
  PercentileSourceTargetImpl,
  PercentileTargetImpl,
  PercentileImpl,
  CollectionPartitionRegionImpl,
  CollectionPartitionImpl,
  PartitionKeyRangeIdImpl,
  PartitionKeyRangeIdRegionImpl,
  SqlResourcesImpl,
  MongoDBResourcesImpl,
  TableResourcesImpl,
  CassandraResourcesImpl,
  GremlinResourcesImpl,
  LocationsImpl,
  NotebookWorkspacesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  RestorableDatabaseAccountsImpl,
  RestorableSqlDatabasesImpl,
  RestorableSqlContainersImpl,
  RestorableSqlResourcesImpl,
  RestorableMongodbDatabasesImpl,
  RestorableMongodbCollectionsImpl,
  RestorableMongodbResourcesImpl,
  CassandraClustersImpl,
  CassandraDataCentersImpl
} from "./operations";
import {
  DatabaseAccounts,
  Operations,
  Database,
  Collection,
  CollectionRegion,
  DatabaseAccountRegion,
  PercentileSourceTarget,
  PercentileTarget,
  Percentile,
  CollectionPartitionRegion,
  CollectionPartition,
  PartitionKeyRangeId,
  PartitionKeyRangeIdRegion,
  SqlResources,
  MongoDBResources,
  TableResources,
  CassandraResources,
  GremlinResources,
  Locations,
  NotebookWorkspaces,
  PrivateEndpointConnections,
  PrivateLinkResources,
  RestorableDatabaseAccounts,
  RestorableSqlDatabases,
  RestorableSqlContainers,
  RestorableSqlResources,
  RestorableMongodbDatabases,
  RestorableMongodbCollections,
  RestorableMongodbResources,
  CassandraClusters,
  CassandraDataCenters
} from "./operationsInterfaces";
import { CosmosDBManagementClientOptionalParams } from "./models";

export class CosmosDBManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the CosmosDBManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: CosmosDBManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: CosmosDBManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-cosmos-db-resource-manager/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-10-15";
    this.databaseAccounts = new DatabaseAccountsImpl(this);
    this.operations = new OperationsImpl(this);
    this.database = new DatabaseImpl(this);
    this.collection = new CollectionImpl(this);
    this.collectionRegion = new CollectionRegionImpl(this);
    this.databaseAccountRegion = new DatabaseAccountRegionImpl(this);
    this.percentileSourceTarget = new PercentileSourceTargetImpl(this);
    this.percentileTarget = new PercentileTargetImpl(this);
    this.percentile = new PercentileImpl(this);
    this.collectionPartitionRegion = new CollectionPartitionRegionImpl(this);
    this.collectionPartition = new CollectionPartitionImpl(this);
    this.partitionKeyRangeId = new PartitionKeyRangeIdImpl(this);
    this.partitionKeyRangeIdRegion = new PartitionKeyRangeIdRegionImpl(this);
    this.sqlResources = new SqlResourcesImpl(this);
    this.mongoDBResources = new MongoDBResourcesImpl(this);
    this.tableResources = new TableResourcesImpl(this);
    this.cassandraResources = new CassandraResourcesImpl(this);
    this.gremlinResources = new GremlinResourcesImpl(this);
    this.locations = new LocationsImpl(this);
    this.notebookWorkspaces = new NotebookWorkspacesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.restorableDatabaseAccounts = new RestorableDatabaseAccountsImpl(this);
    this.restorableSqlDatabases = new RestorableSqlDatabasesImpl(this);
    this.restorableSqlContainers = new RestorableSqlContainersImpl(this);
    this.restorableSqlResources = new RestorableSqlResourcesImpl(this);
    this.restorableMongodbDatabases = new RestorableMongodbDatabasesImpl(this);
    this.restorableMongodbCollections = new RestorableMongodbCollectionsImpl(
      this
    );
    this.restorableMongodbResources = new RestorableMongodbResourcesImpl(this);
    this.cassandraClusters = new CassandraClustersImpl(this);
    this.cassandraDataCenters = new CassandraDataCentersImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  databaseAccounts: DatabaseAccounts;
  operations: Operations;
  database: Database;
  collection: Collection;
  collectionRegion: CollectionRegion;
  databaseAccountRegion: DatabaseAccountRegion;
  percentileSourceTarget: PercentileSourceTarget;
  percentileTarget: PercentileTarget;
  percentile: Percentile;
  collectionPartitionRegion: CollectionPartitionRegion;
  collectionPartition: CollectionPartition;
  partitionKeyRangeId: PartitionKeyRangeId;
  partitionKeyRangeIdRegion: PartitionKeyRangeIdRegion;
  sqlResources: SqlResources;
  mongoDBResources: MongoDBResources;
  tableResources: TableResources;
  cassandraResources: CassandraResources;
  gremlinResources: GremlinResources;
  locations: Locations;
  notebookWorkspaces: NotebookWorkspaces;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  restorableDatabaseAccounts: RestorableDatabaseAccounts;
  restorableSqlDatabases: RestorableSqlDatabases;
  restorableSqlContainers: RestorableSqlContainers;
  restorableSqlResources: RestorableSqlResources;
  restorableMongodbDatabases: RestorableMongodbDatabases;
  restorableMongodbCollections: RestorableMongodbCollections;
  restorableMongodbResources: RestorableMongodbResources;
  cassandraClusters: CassandraClusters;
  cassandraDataCenters: CassandraDataCenters;
}
