import path from 'path'
import fs from 'fs'

function rec(src: string, files: any[], cPath: string) {
  const file = path.join(cPath, src)
  if (!fs.existsSync(file)) return
  const stat = fs.statSync(file)
  if (!stat.isDirectory()) files.push(file)
  else fs.readdirSync(file).forEach(x => rec(x, files, file))
}

function read(src: string): any[] {
  const files: any[] = []
  rec(src, files, process.cwd())
  return files
}

async function write(src: string, dest: string, files: any[]) {
  const srcPrefix = path.resolve(src)
  const destPrefix = path.resolve(dest)
  files.forEach(async (x: string) => {
    const destFile = x.replace(srcPrefix, destPrefix)
    if (!fs.existsSync(path.parse(destFile).dir))
      fs.mkdirSync(path.parse(destFile).dir, { recursive: true })
    fs.writeFileSync(destFile, fs.readFileSync(x))
  })
}

function copy(src: string, dest: string, extendions: string[]) {
  const files = read(src).filter(x => extendions.includes(x.split('.')[1]))
  write(src, dest, files)
}

export { copy }
