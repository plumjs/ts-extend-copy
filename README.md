## Description

- 背景: ts 编译时会忽视 ts，txs，d.ts 后缀之外的文件，
- 需求: .json, .xml 等 unsupported extendion 的配置文件在编译完之后，按照原始路径，copy 到目标路径
- 方案: 递归遍历原始目录，将指定后缀文件复制到目标路径

## Usage

1. 安装

   ```
   npm i @imyoon/tse -S
   ```

2. 在 tsconfig.json 配置目标类型、原始路径、目标路径

   ```ts
   // tsconfig.json
   {
       ···
       "extendionOptions":{
           extnedions: [ 'json', 'xml' ],
           src: 'src',
           dest: 'dist/src'
       }
       ···
   }
   ```

3. 运行命令
   ```bash
   tse -c
   ```

## docs

[document](./docs/globals.md)
