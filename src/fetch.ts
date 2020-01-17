import path from 'path'

interface IExtendionOptions {
  extendions: string[]
  src: string
  dest: string
}

function config(): IExtendionOptions {
  const p = path.join(process.cwd(), 'tsconfig.json')
  const tsconfig: { [x: string]: any } = require(p)
  return tsconfig.extendionOptions
}

export { config }
