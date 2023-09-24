-   ローカル起動

```
docker-compose up
```

-   module追加時

```
//nodejsのバージョン合わせるためコンテナ内でインストール
docker-compose exec app sh
/app # npm install <modules>
```
