[@imyoon/tse](README.md) › [Globals](globals.md)

# @imyoon/tse

## Index

### Interfaces

* [IExtendionOptions](interfaces/iextendionoptions.md)

### Variables

* [pg](globals.md#const-pg)
* [program](globals.md#const-program)

### Functions

* [config](globals.md#config)
* [copy](globals.md#copy)
* [read](globals.md#read)
* [rec](globals.md#rec)
* [write](globals.md#write)

## Variables

### `Const` pg

• **pg**: *any* =  require(`../../package.json`)

*Defined in [bin/tse.ts:5](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/bin/tse.ts#L5)*

___

### `Const` program

• **program**: *Command‹›* =  new commander.Command()

*Defined in [bin/tse.ts:7](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/bin/tse.ts#L7)*

## Functions

###  config

▸ **config**(): *[IExtendionOptions](interfaces/iextendionoptions.md)*

*Defined in [src/fetch.ts:9](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/src/fetch.ts#L9)*

**Returns:** *[IExtendionOptions](interfaces/iextendionoptions.md)*

___

###  copy

▸ **copy**(`src`: string, `dest`: string, `extendions`: string[]): *void*

*Defined in [src/copy.ts:29](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/src/copy.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | string |
`dest` | string |
`extendions` | string[] |

**Returns:** *void*

___

###  read

▸ **read**(`src`: string): *any[]*

*Defined in [src/copy.ts:12](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/src/copy.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | string |

**Returns:** *any[]*

___

###  rec

▸ **rec**(`src`: string, `files`: any[], `cPath`: string): *void*

*Defined in [src/copy.ts:4](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/src/copy.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | string |
`files` | any[] |
`cPath` | string |

**Returns:** *void*

___

###  write

▸ **write**(`src`: string, `dest`: string, `files`: any[]): *Promise‹void›*

*Defined in [src/copy.ts:18](https://github.com/sfltmya/ts-extendion-copy/blob/570e356/src/copy.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`src` | string |
`dest` | string |
`files` | any[] |

**Returns:** *Promise‹void›*
