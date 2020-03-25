### Usage

Clone and enter the repository.

```
git clone git@github.com:shaunluttin/typescript-publishing-type-definitions.git;
cd typescript-publishing-type-definitions;
```

Build `my-package`, on which `my-app` depends.

```
cd my-package;
npm run install;
npm run build;
```

Build `my-app`, which depends on the types in `my-package`.

```
cd .../my-app
npm run install;
npm run build;
```

Open `my-app/index.ts` to see the types working.
