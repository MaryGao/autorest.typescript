# TypeScript Plugin for AutoRest

[AutoRest](https://github.com/Azure/autorest/blob/master/docs/readme.md) is a suite of tools to automatically generate SDKs for cloud services. This project provides an AutoRest extension that generates high-quality TypeScript SDKs with modern features and best practices.

> **Note**: This project, [@autorest/typescript](https://www.npmjs.com/package/@autorest/typescript) is the latest version of the TypeScript/JavaScript SDK generator and is currently in preview. The earlier stable version of the SDK generator [@microsoft.azure/autorest.typescript](https://www.npmjs.com/package/@microsoft.azure/autorest.typescript) is available in the [v4x branch of the Azure/autorest.typescript repository](https://github.com/Azure/autorest.typescript/tree/v4x).

## 🚀 Quick Start

Get up and running with TypeScript SDK generation in minutes:

### Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager
- A valid OpenAPI/Swagger specification file

### Installation

Install AutoRest globally:

```bash
npm install -g autorest
```

### Generate Your First SDK

```bash
# Generate from a local swagger file
autorest --typescript ./swagger.json

# Generate from a URL
autorest --typescript https://petstore.swagger.io/v2/swagger.json

# Generate with custom options
autorest --typescript ./swagger.json --output-folder ./generated --package-name my-sdk
```

## 📋 Advanced Usage Examples

### Basic SDK Generation

```bash
# Generate from local specification
autorest --typescript ./api-spec.json

# Generate with custom client name
autorest --typescript ./api-spec.json --client-name "MyApiClient"

# Generate with specific output location
autorest --typescript ./api-spec.json --output-folder ./src/generated
```

### Azure Service Integration

```bash
# Generate Azure service SDK
autorest --typescript ./azure-spec.json \
  --azure-arm \
  --package-name "@azure/my-service" \
  --license-header MICROSOFT_MIT_NO_VERSION

# Generate with Azure authentication
autorest --typescript ./azure-spec.json \
  --add-credentials \
  --credential-scopes "https://management.azure.com/.default"
```

### Advanced Configuration

```bash
# Generate with custom models and operations
autorest --typescript ./spec.json \
  --generate-metadata \
  --source-code-folder-path ./lib \
  --disable-async-iterators false
```

## ⚙️ Configuration Options

In addition to the [list of Autorest flags](https://github.com/Azure/autorest/blob/master/docs/generate/flags.md), you can further control the behavior of the typescript generator with the following flags:

| Flag                            | Description                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--use-core-v2`                 | Uses azure core v2 and it is enabled by default. Please set it to false if you need to regenerate a package that uses core-http and you do not want to do the migration to core v2 in that regeneration. For differences between v1 and v2, please refer to https://github.com/Azure/azure-sdk-for-js/blob/master/sdk/core/README.md |
| `--hide-client`                 | Hides the client class from docs. This is typically useful when the you will write a convenience layer on top of the generated client                                                                                                                                                                                                |
| `--ignore-nullable-on-optional` | If an optional property is also marked as nullable, it will be treated as just optional                                                                                                                                                                                                                                              |
| `--generate-metadata`           | Generates meta files such as readme, license, package.json, etc. Typically, you need to specify this flag in your first generation only                                                                                                                                                                                              |
| `--tracing-info`                | Controls specification of meta info attached to requests for tracing purposes                                                                                                                                                                                                                                                        |
| `--disable-async-iterators`     | Does not generate async iterators needed for paging operations                                                                                                                                                                                                                                                                       |
| `--allow-insecure-connection`   | Allow generated clients to make requests to HTTP endpoints                                                                                                                                                                                                                                                                           |

### 🛠️ Common Configuration Patterns

#### Azure ARM Service Configuration
```yaml
# autorest.md
input-file: ./swagger.json
typescript: true
azure-arm: true
package-name: "@azure/arm-myservice"
package-version: "1.0.0"
generate-metadata: true
license-header: MICROSOFT_MIT_NO_VERSION
```

#### REST Client Configuration
```yaml
# autorest.md  
input-file: ./api-spec.json
typescript: true
client-name: "MyApiClient"
package-name: "my-api-sdk"
output-folder: ./generated
source-code-folder-path: ./lib
```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Generation Fails with "Cannot resolve specification"
```bash
# Ensure the specification file path is correct
autorest --typescript ./path/to/spec.json --debug

# For URL-based specs, check network connectivity
autorest --typescript https://api.example.com/swagger.json --debug
```

#### TypeScript Compilation Errors
```bash
# Ensure TypeScript version compatibility
npm install typescript@^4.0.0

# Check generated code for type issues
tsc --noEmit ./generated/**/*.ts
```

#### Missing Dependencies
```bash
# Install required peer dependencies
npm install @azure/core-http @azure/core-auth

# For Azure services
npm install @azure/identity @azure/core-client
```

### Getting Help

- 📖 [AutoRest Documentation](https://github.com/Azure/autorest/tree/master/docs)
- 🐛 [Report Issues](https://github.com/Azure/autorest.typescript/issues)
- 💬 [Discussion Forum](https://github.com/Azure/autorest/discussions)
- 📧 [Stack Overflow](https://stackoverflow.com/questions/tagged/autorest)

## 🚀 Features & Benefits

- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Modern JavaScript**: ES6+ features, async/await, and Promise-based APIs  
- **Azure Integration**: Seamless integration with Azure services and authentication
- **Tree Shaking**: Optimized bundle sizes with selective imports
- **IntelliSense**: Rich IDE support with auto-completion and documentation
- **Extensible**: Customizable generation with plugins and configuration options

## 🎯 Best Practices

### Project Structure
```
my-project/
├── src/
│   ├── generated/     # Generated SDK code
│   └── index.ts       # Main entry point
├── autorest.md        # AutoRest configuration
└── package.json       # Dependencies and scripts
```

### Code Integration
```typescript
// Import generated client
import { MyApiClient } from './generated';
import { DefaultAzureCredential } from '@azure/identity';

// Create authenticated client
const credential = new DefaultAzureCredential();
const client = new MyApiClient(credential, subscriptionId);

// Use the client
const result = await client.operations.list();
```

## 📊 Performance Considerations

- Use **selective imports** to reduce bundle size
- Enable **tree shaking** in your bundler configuration
- Consider **client-side caching** for frequently accessed data
- Implement **retry policies** for improved reliability

## 🔄 Migration Guide

### From v4.x to Latest

1. **Update package references**:
   ```bash
   npm uninstall @microsoft.azure/autorest.typescript
   npm install -g autorest
   ```

2. **Update configuration**:
   ```yaml
   # Old format
   typescript: true
   
   # New format  
   use: "@autorest/typescript@latest"
   ```

3. **Update import statements**:
   ```typescript
   // Old
   import { ServiceClient } from '@azure/ms-rest-js';
   
   // New
   import { ServiceClient } from '@azure/core-client';
   ```

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Autorest Typescript Plugin Configuration

```yaml
version: 3.6.6
use-extension:
  "@autorest/modelerfour": "4.23.5"

modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  # this will flatten modelers marked with 'x-ms-client-flatten'
  flatten-models: true
  # this will flatten parameters marked with 'x-ms-client-flatten'
  flatten-payloads: true
  # this will make the content-type parameter always specified
  always-create-content-type-parameter: true
  # enables parameter grouping via x-ms-parameter-grouping
  group-parameters: true
  # Enable older inconsistent behavior that an enum with a single value would become a constant by default.
  seal-single-value-enum-by-default: true
  legacy-request-body: true

typescript-scope/emitter:
  input-artifact: typescript-files

output-artifact: typescript-files
```

```yaml !$(generate-sample)
pipeline:
  typescript: # <- name of plugin
    input: modelerfour/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

```

```yaml $(generate-sample)
use-extension:
  "@autorest/testmodeler": "2.2.5"

try-require:
    - ./readme.test.md
    - ./readme.tests.md

testmodeler:
  split-parents-value: false

include-x-ms-examples-original-file: true
modelerfour:
  include-x-ms-examples-original-file: true

pipeline:
  test-modeler:
    input: modelerfour/identity
    # scope : output-scope
  test-modeler/identity:
    input: test-modeler
  typescript:
    input: test-modeler/identity
    output-artifact: typescript-files

  typescript/emitter:
    input: typescript
    scope: typescript-scope/emitter

```

### REST Client Generator overrides

```yaml $(rest-level-client)
modelerfour:
  # this runs a pre-namer step to clean up names
  prenamer: true
  flatten-models: false
  flatten-payloads: false
  always-create-content-type-parameter: true
  group-parameters: false
```

## Help

```yaml
help-content:
  typescript: # type: Help as defined in autorest-core/help.ts
    activationScope: typescript
    categoryFriendlyName: Typescript Generator
    settings:
      - key: azure-arm
        description: Generate management plane flavor. Setting up the required flags for arm libraries
      - key: license-header
        description: "text to include as a header comment in generated files (magic strings: MICROSOFT_MIT, MICROSOFT_APACHE, MICROSOFT_MIT_NO_VERSION, MICROSOFT_APACHE_NO_VERSION, MICROSOFT_MIT_NO_CODEGEN)"
        type: string
      - key: add-credentials
        description: include a credential property and constructor parameter supporting different authentication behaviors
      - key: credential-scopes
        type: string | string[]
        description: Specify the scopes over which the credential functions. When generating management plane we default the scope to 'https://management.azure.com/.default'
      - key: package-name
        type: string
        description: The name of your package. This is the name your package will be published under.
      - key: source-code-folder-path
        type: string
        description: Where to output the generated code inside the output-folder. Defaults to src.
      - key: generate-metadata
        description: Whether to generate extra metadata in your package. For instance, generates a README file, license file etc if set to true.
      - key: disable-async-iterators
        description: Whether to generate pageable methods as AsyncIterators. Defaults to true.
```

## Language Specific Requirements: TypeScript

For TypeScript projects, simply import [autorest-extension-base](https://github.com/olydis/autorest-extension-base) which implements the AutoRest extension protocol and offers a simple API to register plugins.
See [index.ts](./index.ts).
