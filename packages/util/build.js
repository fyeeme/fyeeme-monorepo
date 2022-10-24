import fg from "fast-glob";
import fs from "fs";

const exec = async () => {
  const entries = await fg(["src/*.ts"]);

  // 如果入口文件已经存在，则删除它，
  const arr = await fg(["./index.ts"]);
  if (arr.length) {
    fs.unlinkSync("./index.ts");
  }

  // 入口文件里的代码用文件追加方式一句句生成
  entries.sort().forEach((entry) => {
    console.log(entry, entry.slice(0, -3));
    fs.writeFileSync(
      "./index.ts",
      `export * from "./${entry.slice(0, -3)}";\n`,
      { flag: "a" },
      (err) => {}
    );
  });
};

exec();
