## Description
- 背景: ts编译时会忽视ts，txs，d.ts后缀之外的文件，
- 需求: .json, .xml等unsupported extendion的配置文件在编译完之后，按照原始路径，copy到目标路径
- 方案: 递归遍历原始目录，将指定后缀文件复制到目标路径

## Usage
1. 安装
    ```
    npm i @imyoon/ts-extendion -S
    ```

2. 配置目标类型、原始路径、目标路径
    ```package.json
    {
        "name": "app",
        "version":"v1.0.0",
        "scripts":{
            "tse": "tse"
        }
        ···
        "ts-extendion":{
            includes: [ 'json', 'xml' ],
            from: 'src',
            fist: 'dist/src'
        }
        ···
    }
    ```
3. 运行命令
    ```bash
    npm run tse
    ```

## docs
[document](./docs/globals.md)
