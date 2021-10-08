# WIP: Check Protocol

ピスタチオゲーム部で監視しているサイトの一覧を取得するAPIです。

スクリプトを実行するにはスプレッドシートの所有者の許可が必要です。

## Dev

**requirements**

- Node.js
- clasp

init:

```shell
clasp login
```

create `.clasp.json`
```json
{"scriptId":"YOUR_SCRIPT_ID"}
```

deploy:
```shell
yarn deploy
```

## Refs

- https://github.com/dyaa/ssl-checker