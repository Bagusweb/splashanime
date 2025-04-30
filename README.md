# Wajiknime

Wajiknime adalah UI/Front End dari [wajik-anime-api](https://github.com/wajik45/wajik-anime-api/tree/8c61097) dimana user bisa nonton, streaming, & download anime sub indo/subtitle indo secara online gratis gapake karcis cuyy...

- Teknologi : Astro, Node, TypeScript, Tailwind, Flowbite
- Api : [wajik-anime-api](https://github.com/wajik45/wajik-anime-api/tree/8c61097)

## Installasi

1. clone atau download repo

```sh
git clone https://github.com/wajik45/wajiknime.git
```

2. masuk ke repo

```sh
cd wajiknime
```

3. install dependensi

```sh
npm install
```

4. buat file .env di root directory tulis sesuai dengan isi dari file .env.example

5. menjalankan server mode pengembangan

```sh
npm run dev
```

6. build projek

```sh
npm run build
```

7. preview projek yang sudah dibuild

```sh
npm run preview
```

app ini berjalan di sisi server, secara default menggunakan node sebagai adapternya, selengkapnya liat [disini](https://docs.astro.build/en/guides/on-demand-rendering/#server-adapters), untuk menjalankanya gunakan perintah berikut :

```sh
node ./dist/server/entry.mjs
```
